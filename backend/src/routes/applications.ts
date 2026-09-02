import { Router } from "express"
import { db } from "../lib/db.js"
import { notify } from "../lib/email.js"
import { validate } from "../lib/validate.js"
import { applicationSchema } from "../schemas/application.js"

export const applicationsRouter = Router()

applicationsRouter.post("/", validate(applicationSchema), async (req, res) => {
  const data = req.body as ReturnType<typeof applicationSchema.parse>
  const application = await db.application.create({ data })
  await notify(
    `New ${data.type} application: ${data.refId}`,
    `${data.firstName} ${data.lastName} <${data.email}>\n\n${data.message ?? ""}`
  )
  res.status(201).json({ id: application.id })
})
