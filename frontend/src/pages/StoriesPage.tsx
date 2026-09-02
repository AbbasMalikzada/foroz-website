import { Link } from "react-router-dom"
import { ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/impactData"

export function StoriesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <Button asChild variant="ghost" className="gap-2 mb-6">
            <Link to="/impact">
              <ArrowLeft className="h-4 w-4" />
              Back to Impact
            </Link>
          </Button>
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Stories of Change
            </h1>
            <p className="text-lg text-muted-foreground">
              Real people. Real transformation. These are the voices behind our numbers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full border-0 shadow-sm bg-muted/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
