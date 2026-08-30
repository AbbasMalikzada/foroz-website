const key = process.env.RESEND_API_KEY

if (!key) {
  console.warn("[email] RESEND_API_KEY not set — notifications are DB-only for now")
}

export async function notify(subject: string, body: string): Promise<void> {
  if (!key) return

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "FOROZ Website <notifications@foroz.org>",
      to: "hello@foroz.org",
      subject,
      text: body,
    }),
  })
}
