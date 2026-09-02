import { ArrowLeft, Building2, GraduationCap, HandCoins, Megaphone } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ApplyForm } from "@/components/ApplyForm"

const partnerTypes = [
  {
    title: "Corporate Partners",
    description: "Sponsor courses, fund scholarships, or offer employee volunteering and internship placements.",
    icon: Building2,
  },
  {
    title: "Universities & Schools",
    description: "Co-develop curriculum, host exchange programs, or provide pathways for our learners into further study.",
    icon: GraduationCap,
  },
  {
    title: "NGOs & Foundations",
    description: "Co-fund programs, share networks, or collaborate on grant proposals and joint initiatives.",
    icon: HandCoins,
  },
  {
    title: "Media & Advocacy",
    description: "Help amplify youth voices and SDG-aligned work through storytelling, campaigns, and events.",
    icon: Megaphone,
  },
]

export function PartnerPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <Button asChild variant="ghost" className="gap-2 mb-6">
            <Link to="/get-involved">
              <ArrowLeft className="h-4 w-4" />
              Back to Get Involved
            </Link>
          </Button>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Partner With FOROZ
            </h1>
            <p className="text-lg text-muted-foreground">
              We work with companies, universities, NGOs, and foundations to expand access to education
              and opportunity for youth worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {partnerTypes.map((type) => (
                <Card key={type.title} className="h-full border-0 shadow-sm bg-muted/30">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-2">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Tell Us About Your Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplyForm
                    type="partner"
                    refId="general"
                    title="FOROZ"
                    messageLabel="What kind of partnership are you interested in?"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
