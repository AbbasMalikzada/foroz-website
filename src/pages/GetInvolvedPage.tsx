import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  CheckCircle,
  ArrowRight,
  Mail,
  MapPin,
  DollarSign as DollarSignIcon,
  Calendar as CalendarIcon,
  Users,
  Award,
} from "lucide-react"
import { volunteerRoles, currentOpenings, cultureValues, involvementOptions } from "@/data/getInvolvedData"

export function GetInvolvedPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              Get Involved
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Join the Movement
              <br />
              <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                Empower Youth Worldwide
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you have an hour a month or want to build a career in impact, there's a place for you at FOROZ. Join 500+ volunteers, 1,200+ donors, and a global community of changemakers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> 500+ Active Volunteers</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> 47 Countries</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> 8 Departments</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> 1,200+ Donors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="ways-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="ways-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Six Ways to Make an Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the path that matches your skills, time, and passion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {involvementOptions.map((option, index) => (
              <Card key={option.title} className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-background overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${option.color}`} />
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} mb-4`}>
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {option.stats.map((stat, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{stat}</Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <Link to={option.href}>{option.cta}</Link>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section id="volunteer" className="py-16 md:py-24 bg-muted/30" aria-labelledby="volunteer-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="volunteer-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Volunteer Roles
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible, remote-first roles across 6 departments. 5-10 hours/week. Skill-based matching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <Card key={role.id} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} mb-4`}>
                    <role.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-1">{role.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                    <Badge variant="secondary" className="h-5 px-2">{role.department}</Badge>
                    <Badge variant="outline" className="h-5 px-2">{role.commitment}</Badge>
                    <Badge variant="outline" className="h-5 px-2">{role.location}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {role.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full gap-2">
                    <Link to={`/get-involved/volunteer/apply?role=${role.id}`}>Apply for This Role</Link>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <Link to="/get-involved/volunteer">View All Volunteer Roles <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="careers-heading">
        <div className="container px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div>
              <h2 id="careers-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Career Opportunities
              </h2>
              <p className="text-muted-foreground">
                Join our core team. Remote-first, mission-driven, competitive benefits.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/get-involved/careers">View All Openings <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="space-y-4">
            {currentOpenings.slice(0, 4).map((job, index) => (
              <Card key={job.id} className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-background overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
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
                        <span className="flex items-center gap-1"><DollarSignIcon className="h-3.5 w-3.5" /> {job.salary}</span>
                        <span className="flex items-center gap-1"><CalendarIcon className="h-3.5 w-3.5" /> Posted: {new Date(job.posted).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{job.description}</p>
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

          <div className="mt-8 text-center">
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <Link to="/get-involved/careers">View All {currentOpenings.length} Openings <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="culture-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="culture-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Culture & Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              We're building an organization where talented people do their best work while changing the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cultureValues.map((value, index) => (
              <Card key={value.title} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4 mx-auto">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-center">{value.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="apply-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="apply-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Apply?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our hiring process is transparent, fair, and designed to find the right fit.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-foroz-200 dark:bg-foroz-800 transform -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {[
                { step: "01", title: "Submit Application", description: "Resume + cover letter (or video intro). Tell us why FOROZ and why this role. No degree requirements unless essential.", icon: FileText },
                { step: "02", title: "Screening Call", description: "30-min chat with hiring manager. Mutual fit check. Culture, values, role expectations. Questions welcome.", icon: MessageSquare },
                { step: "03", title: "Skills Assessment", description: "Practical task relevant to the role. 2-4 hours max. Paid at $25/hr for candidates not selected. Feedback provided.", icon: CheckCircle },
                { step: "04", title: "Team Interview", description: "Meet 2-3 future colleagues. Collaborative exercise. Culture add assessment. Values alignment.", icon: Users },
                { step: "05", title: "Final Decision", description: "Decision within 1 week. Detailed feedback for all finalists. Offer includes salary transparency, benefits, start date.", icon: Award },
              ].map((item, index) => (
                <div key={item.step} className="relative flex md:flex-row gap-6 items-start md:items-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute w-12 h-12 rounded-xl bg-gradient-to-br from-foroz-500 to-foroz-green-500 flex items-center justify-center text-white font-bold text-xl left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-1/2 md:top-0 md:translate-y-0 z-10">
                    {item.step}
                  </div>
                  <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-foroz-200 dark:bg-foroz-800 transform -translate-x-1/2 hidden md:block" style={{ zIndex: 0 }} />
                  <div className="md:w-1/2 md:pl-12 md:pr-6 md:absolute md:top-0 md:left-1/2 md:right-auto md:-translate-x-1/2">
                    <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-3">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <Card className="border-0 shadow-sm bg-background">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Questions About the Process?</CardTitle>
                <p className="text-muted-foreground">We're happy to chat before you apply.</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link to="mailto:careers@foroz.org?subject=Career%20Inquiry">
                      <Mail className="h-5 w-5" /> Email Us
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/get-involved/careers/faq">
                      View FAQ <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-foroz-600 via-foroz-700 to-foroz-green-700">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Skills Can Change Lives
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              Whether you volunteer, donate, partner, or join our team — every contribution builds a future where every young person has the chance to thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
                <Link to="/get-involved/volunteer" className="text-white">Start Volunteering</Link>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                <Link to="/donate">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FileText({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
}
function MessageSquare({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
}