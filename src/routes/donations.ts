import { Router, type Request, type Response } from "express"
import { db } from "../lib/db.js"
import { constructWebhookEvent, createCheckoutSession } from "../lib/stripe.js"
import { validate } from "../lib/validate.js"
import { donationSchema } from "../schemas/donation.js"

export const donationsRouter = Router()

donationsRouter.post("/checkout-session", validate(donationSchema), async (req, res) => {
  const data = req.body as ReturnType<typeof donationSchema.parse>
  const donation = await db.donation.create({ data })

  const origin = req.headers.origin ?? process.env.FRONTEND_ORIGIN ?? ""
  const result = await createCheckoutSession({
    amount: data.amount,
    frequency: data.frequency,
    tier: data.tier,
    email: data.email,
    successUrl: `${origin}/donate/checkout?status=success`,
    cancelUrl: `${origin}/donate/checkout?status=cancelled`,
  })

  if (!result.configured) {
    res.status(200).json({ configured: false, donationId: donation.id })
    return
  }

  await db.donation.update({ where: { id: donation.id }, data: { stripeSessionId: result.sessionId } })
  res.status(200).json({ configured: true, url: result.url })
})

// Mounted directly on the app (before express.json()) since Stripe signature
// verification needs the raw request body — see src/index.ts.
export async function donationsWebhookHandler(req: Request, res: Response) {
  const signature = req.headers["stripe-signature"]
  if (typeof signature !== "string") {
    res.status(400).json({ error: "missing_signature" })
    return
  }

  const event = constructWebhookEvent(req.body as Buffer, signature)
  if (!event) {
    res.status(200).json({ configured: false })
    return
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as { id: string }
    await db.donation.updateMany({
      where: { stripeSessionId: session.id },
      data: { status: "paid" },
    })
  }

  res.status(200).json({ received: true })
}
