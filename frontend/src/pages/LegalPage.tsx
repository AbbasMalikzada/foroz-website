import { Link, useLocation } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { legalContent } from "@/data/legalContent"

export function LegalPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, "")
  const doc = legalContent[slug]

  if (!doc) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
          <Button asChild variant="default">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container px-4">
          <Button asChild variant="ghost" className="gap-2 mb-6">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{doc.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {doc.updated}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto space-y-10">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
                <div className="space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
