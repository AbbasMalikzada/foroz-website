import { useSearchParams } from "react-router-dom"
import { GraduationCap } from "lucide-react"
import { ApplyForm } from "@/components/ApplyForm"

function titleFromSlug(slug: string) {
  return slug.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ")
}

export function EnrollPage() {
  const [searchParams] = useSearchParams()
  const courseSlug = searchParams.get("course")
  const courseTitle = courseSlug ? titleFromSlug(courseSlug) : null

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-6 mx-auto">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {courseTitle ? `Enroll in ${courseTitle}` : "Enroll for Free"}
            </h1>
            <p className="text-lg text-muted-foreground">
              No credit card required. Tell us a bit about yourself and we'll get you set up with course access.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-xl mx-auto">
            <ApplyForm
              type="program"
              refId={courseSlug ?? "general"}
              title={courseTitle ?? "FOROZ courses"}
              messageLabel="Which subjects or courses are you interested in? (optional)"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
