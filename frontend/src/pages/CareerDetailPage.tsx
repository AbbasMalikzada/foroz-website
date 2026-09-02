import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, MapPin, DollarSign, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ApplyForm } from "@/components/ApplyForm"
import { currentOpenings } from "@/data/getInvolvedData"

export function CareerDetailPage() {
  const { id } = useParams()
  const job = currentOpenings.find((j) => j.id === id)

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Role Not Found</h1>
          <p className="text-muted-foreground mb-6">This position may have closed or the link is incorrect.</p>
          <Button asChild variant="default">
            <Link to="/get-involved/careers">
              View All Openings <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <Button asChild variant="ghost" className="gap-2 mb-6">
            <Link to="/get-involved/careers">
              <ArrowLeft className="h-4 w-4" />
              Back to Open Roles
            </Link>
          </Button>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">{job.department}</Badge>
              <Badge variant="outline">{job.type}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
              <span className="flex items-center gap-1"><DollarSign className="h-4 w-4" /> {job.salary}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Posted {new Date(job.posted).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Role</h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Apply for This Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplyForm type="career" refId={job.id} title={job.title} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
