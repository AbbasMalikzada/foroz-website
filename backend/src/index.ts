import cors from "cors"
import express from "express"
import { applicationsRouter } from "./routes/applications.js"
import { contactRouter } from "./routes/contact.js"
import { donationsRouter, donationsWebhookHandler } from "./routes/donations.js"
import { newsletterRouter } from "./routes/newsletter.js"

const app = express()

app.use(cors({ origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173" }))

// Mounted before express.json(): Stripe signature verification needs the raw body.
app.post("/api/donations/webhook", express.raw({ type: "application/json" }), donationsWebhookHandler)

app.use(express.json())

app.get("/api/health", (_req, res) => res.json({ ok: true }))
app.use("/api/contact", contactRouter)
app.use("/api/newsletter", newsletterRouter)
app.use("/api/donations", donationsRouter)
app.use("/api/applications", applicationsRouter)

const port = process.env.PORT ? Number(process.env.PORT) : 4000
app.listen(port, () => console.log(`foroz-backend listening on :${port}`))
