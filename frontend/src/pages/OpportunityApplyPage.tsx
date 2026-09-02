import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ApplyForm } from "@/components/ApplyForm"

function humanize(slug: string) {
  return slug.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ")
}

export function OpportunityApplyPage() {
  const { slug = "" } = useParams()
  const title = humanize(slug)

  return (
    <div className="min-h-screen bg-muted/30 py-16 px-4">
      <div className="container px-4 max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="gap-2 mb-6">
          <Link to={`/opportunities/${slug}`}>
            <ArrowLeft className="h-4 w-4" />
            Back to Opportunity
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Apply: {title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ApplyForm type="opportunity" refId={slug} title={title} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
