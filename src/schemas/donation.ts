import { z } from "zod"

export const donationSchema = z.object({
  tier: z.string().min(1),
  amount: z.number().min(1),
  frequency: z.enum(["monthly", "one-time"]),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
})
