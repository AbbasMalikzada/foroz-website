import { Link } from "react-router-dom"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Is FOROZ fully remote?",
    answer: "Yes. All roles are remote-first with async-friendly core hours (12-4pm UTC) so team members across time zones can collaborate.",
  },
  {
    question: "What does the hiring process look like?",
    answer: "Application review, a short intro call, a role-specific task or portfolio review, and a final team interview. Most processes take 2-3 weeks end to end.",
  },
  {
    question: "Do you sponsor visas or require a specific location?",
    answer: "We hire globally as contractors or via an employer-of-record depending on your country. There's no location requirement, but reliable internet is essential.",
  },
  {
    question: "Can I apply to more than one role?",
    answer: "Yes — apply to whichever roles fit your skills. If a role you applied to is filled, we'll keep your application on file for future openings that match.",
  },
  {
    question: "Do you offer internships or volunteer-to-hire paths?",
    answer: "Some volunteer roles do lead to paid positions as we grow. Check the Volunteer page for current opportunities, or apply directly to an open role.",
  },
]

export function CareersFaqPage() {
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
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Hiring FAQ
            </h1>
            <p className="text-lg text-muted-foreground">
              Common questions about working at FOROZ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-muted/50 border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-medium text-foreground pr-8">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
