import Stripe from "stripe"

const key = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
const stripe = key ? new Stripe(key) : null

if (!stripe) {
  console.warn("[stripe] STRIPE_SECRET_KEY not set — donations run in not-configured mode")
}

type CheckoutSessionInput = {
  amount: number
  frequency: "monthly" | "one-time"
  tier: string
  email: string
  successUrl: string
  cancelUrl: string
}

export async function createCheckoutSession(
  input: CheckoutSessionInput
): Promise<{ configured: false } | { configured: true; url: string; sessionId: string }> {
  if (!stripe) return { configured: false }

  const session = await stripe.checkout.sessions.create({
    mode: input.frequency === "monthly" ? "subscription" : "payment",
    customer_email: input.email,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: `FOROZ donation — ${input.tier}` },
          unit_amount: input.amount * 100,
          ...(input.frequency === "monthly" ? { recurring: { interval: "month" as const } } : {}),
        },
        quantity: 1,
      },
    ],
    success_url: input.successUrl,
    cancel_url: input.cancelUrl,
  })

  return { configured: true, url: session.url!, sessionId: session.id }
}

export function constructWebhookEvent(payload: Buffer, signature: string): Stripe.Event | null {
  if (!stripe || !webhookSecret) return null
  return stripe.webhooks.constructEvent(payload, signature, webhookSecret)
}
