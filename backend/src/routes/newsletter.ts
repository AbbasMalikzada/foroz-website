import { Router } from "express"
import { db } from "../lib/db.js"
import { validate } from "../lib/validate.js"
import { newsletterSchema } from "../schemas/newsletter.js"

export const newsletterRouter = Router()

newsletterRouter.post("/", validate(newsletterSchema), async (req, res) => {
  const { email } = req.body as ReturnType<typeof newsletterSchema.parse>
  await db.newsletterSubscriber.upsert({
    where: { email },
    create: { email },
    update: {},
  })
  res.status(201).json({ ok: true })
})
