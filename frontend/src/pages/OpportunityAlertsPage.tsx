import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Bell, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/lib/api"

export function OpportunityAlertsPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      await api.post("/newsletter", { email })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24 flex-1">
        <div className="container px-4">
          <Button asChild variant="ghost" className="gap-2 mb-6">
            <Link to="/opportunities">
              <ArrowLeft className="h-4 w-4" />
              Back to Opportunities
            </Link>
          </Button>

          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-6 mx-auto">
              <Bell className="h-7 w-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Set Up Opportunity Alerts
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get notified by email when new scholarships, internships, fellowships, and volunteering
              opportunities matching your interests are added.
            </p>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-2 text-center py-4">
                <CheckCircle className="h-10 w-10 text-foroz-green-600" />
                <p className="font-medium text-foreground">You're subscribed!</p>
                <p className="text-sm text-muted-foreground">We'll email you when new opportunities go live.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting"}
                  className="flex-1"
                />
                <Button type="submit" disabled={status === "submitting"} className="gap-2">
                  {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  Subscribe
                </Button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-destructive">Something went wrong — please try again.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
