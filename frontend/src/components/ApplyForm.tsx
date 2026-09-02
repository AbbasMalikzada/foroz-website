import { useState } from "react"
import { CheckCircle, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/lib/api"

type ApplyFormProps = {
  type: "volunteer" | "opportunity" | "program" | "career" | "partner"
  refId: string
  title: string
  messageLabel?: string
}

export function ApplyForm({ type, refId, title, messageLabel = "Why are you a good fit? (optional)" }: ApplyFormProps) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      await api.post("/applications", { type, refId, ...formData })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-12 w-12 text-foroz-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">Application Received!</h2>
        <p className="text-muted-foreground">Thanks for applying to {title}. We'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            disabled={status === "submitting"}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={status === "submitting"}
        />
      </div>
      <div>
        <Label htmlFor="message">{messageLabel}</Label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={status === "submitting"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">Something went wrong — please try again.</p>
      )}

      <Button type="submit" className="w-full gap-2" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            Submit Application <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
