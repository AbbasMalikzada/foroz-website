import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, MapPin, DollarSign, Calendar, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { currentOpenings } from "@/data/getInvolvedData"

export function CareersPage() {
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
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                Open Roles
              </h1>
              <p className="text-lg text-muted-foreground">
                {currentOpenings.length} open positions. Remote-first, mission-driven, competitive benefits.
              </p>
            </div>
            <Button asChild variant="outline" className="gap-2 shrink-0">
              <Link to="/get-involved/careers/faq">
                <HelpCircle className="h-4 w-4" />
                Hiring FAQ
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {currentOpenings.map((job) => (
              <Card key={job.id} className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge variant="outline" className="bg-foroz-50 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300">{job.location}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                        <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> {job.salary}</span>
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Posted: {new Date(job.posted).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button asChild variant="outline" size="sm" className="gap-1">
                        <Link to={`/get-involved/careers/${job.id}`}>View Details</Link>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
