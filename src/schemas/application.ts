import { z } from "zod"

export const applicationSchema = z.object({
  type: z.enum(["volunteer", "opportunity", "program", "career", "partner"]),
  refId: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  message: z.string().optional(),
})
