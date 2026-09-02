import { Link, useSearchParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ApplyForm } from "@/components/ApplyForm"
import { volunteerRoles } from "@/data/getInvolvedData"

export function GetInvolvedApplyPage() {
  const [searchParams] = useSearchParams()
  const roleId = searchParams.get("role") ?? ""
  const role = volunteerRoles.find((r) => r.id === roleId)
  const title = role?.title ?? "Volunteer"

  return (
    <div className="min-h-screen bg-muted/30 py-16 px-4">
      <div className="container px-4 max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="gap-2 mb-6">
          <Link to="/get-involved">
            <ArrowLeft className="h-4 w-4" />
            Back to Get Involved
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Apply: {title}</CardTitle>
            {role && <p className="text-sm text-muted-foreground">{role.commitment} &middot; {role.location}</p>}
          </CardHeader>
          <CardContent>
            <ApplyForm type="volunteer" refId={roleId || "volunteer"} title={title} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
