import { Router } from "express"
import { db } from "../lib/db.js"
import { notify } from "../lib/email.js"
import { validate } from "../lib/validate.js"
import { contactSchema } from "../schemas/contact.js"

export const contactRouter = Router()

contactRouter.post("/", validate(contactSchema), async (req, res) => {
  const data = req.body as ReturnType<typeof contactSchema.parse>
  const message = await db.contactMessage.create({ data })
  await notify(`New contact message: ${data.subject}`, `${data.firstName} ${data.lastName} <${data.email}>\n\n${data.message}`)
  res.status(201).json({ id: message.id })
})
