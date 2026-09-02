import type { RequestHandler } from "express"
import type { ZodType } from "zod"

export function validate<T>(schema: ZodType<T>): RequestHandler {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      res.status(400).json({ error: "invalid_request", issues: result.error.issues })
      return
    }
    req.body = result.data
    next()
  }
}
