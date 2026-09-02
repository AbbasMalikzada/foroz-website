import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  GraduationCap,
  Briefcase,
  Heart,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  BookOpen,
  Shield,
  Globe2,
  Users2,
  Lightbulb,
  Leaf,
  Award as AwardIcon,
} from "lucide-react"

const stats = [
  { label: "Learners Served", value: "12,500+", icon: Users, color: "from-foroz-500 to-foroz-600" },
  { label: "Courses Delivered", value: "85+", icon: BookOpen, color: "from-foroz-green-500 to-foroz-green-600" },
  { label: "Opportunities Connected", value: "3,200+", icon: Briefcase, color: "from-blue-500 to-blue-600" },
  { label: "Countries Reached", value: "47", icon: Globe, color: "from-purple-500 to-purple-600" },
]

const activeLearnerInitials = ["JD", "AM", "SK", "RL"]

const coreValues = [
  {
    title: "Equity & Inclusion",
    description: "We believe every individual deserves fair access to education and opportunities, regardless of background, location, or circumstances.",
    icon: Users2,
  },
  {
    title: "Quality & Excellence",
    description: "We are committed to delivering high-quality education, programs, and services that meet professional standards and real needs.",
    icon: AwardIcon,
  },
  {
    title: "Youth Empowerment",
    description: "We place youth at the center of our work, fostering leadership, confidence, and agency so they can shape their own futures.",
    icon: Lightbulb,
  },
  {
    title: "Sustainability & Impact",
    description: "We are committed to long-term, measurable impact and advancing sustainable development aligned with the UN SDGs.",
    icon: Leaf,
  },
]

const programHighlights = [
  {
    title: "Education Academy",
    description: "Free, high-quality online courses in English, Mathematics, Digital Skills, and more. Designed for accessibility and real-world relevance.",
    icon: GraduationCap,
    href: "/programs",
    cta: "Explore Courses",
    stats: ["Self-paced & Live", "Mobile-friendly", "Certificates available"],
  },
  {
    title: "Opportunities Hub",
    description: "Curated scholarships, internships, mentorships, fellowships, and global programs. Verified opportunities for your growth journey.",
    icon: Briefcase,
    href: "/opportunities",
    cta: "Find Opportunities",
    stats: ["Weekly updates", "Verified listings", "Application guides"],
  },
  {
    title: "SDG Advocacy & Action",
    description: "Youth-led community initiatives advancing the UN Sustainable Development Goals. Training, funding, and platforms for local impact.",
    icon: Target,
    href: "/impact",
    cta: "Join the Movement",
    stats: ["SDG 4, 8, 10, 17", "Micro-grants available", "Global network"],
  },
]

const trustSignals = [
  { label: "501(c)(3) Nonprofit", icon: Shield },
  { label: "Transparent Finances", icon: Shield },
  { label: "Youth-Led Governance", icon: Users2 },
  { label: "Global Partnerships", icon: Globe2 },
  { label: "Data-Driven Impact", icon: TrendingUp },
  { label: "Community Centered", icon: Heart },
]

export function HomePage() {
  const heroStat = stats[0]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950" aria-labelledby="hero-heading">
        <div className="container px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Copy column */}
            <div className="relative text-center lg:text-left">
              <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-[5rem] md:text-[7rem] font-extrabold text-gradient opacity-[0.08] leading-none whitespace-nowrap -z-10"
              >
                FOROZ
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foroz-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-foroz-500"></span>
                </span>
                New: 2025 Course Catalog Now Live — Explore 20+ New Programs
              </div>

              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-slide-up">
                Empowering Youth Through
                <br />
                <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                  Equitable Education & Opportunity
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
                FOROZ is a youth-led nonprofit expanding access to quality education, practical skills, and life-changing opportunities for underserved students worldwide. Join us in building a generation of changemakers.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg rounded-full" variant="default">
                  <Link to="/programs/enroll">Start Learning Free</Link>
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg rounded-full">
                  <Link to="/donate">Support Our Mission</Link>
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '300ms' }}>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Completely Free</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> No Prerequisites</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Mobile Accessible</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Verified Certificates</span>
              </div>
            </div>

            {/* Visual column */}
            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-foroz-200/40 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-foroz-green-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative rounded-3xl border border-foroz-100 dark:border-foroz-900/40 bg-gradient-to-br from-foroz-100 via-white to-foroz-green-100 dark:from-foroz-900/30 dark:via-gray-900 dark:to-foroz-green-900/20 aspect-[4/3] shadow-xl" />

              <Card
                className="glass absolute top-6 -left-6 w-56 shadow-lg animate-slide-down"
                style={{ animationDelay: '250ms' }}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${heroStat.color} flex-shrink-0`}>
                    <heroStat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground leading-tight">{heroStat.value}</div>
                    <div className="text-xs text-muted-foreground">{heroStat.label}</div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="glass absolute bottom-6 -right-6 w-60 shadow-lg animate-slide-up"
                style={{ animationDelay: '400ms' }}
              >
                <CardContent className="p-4">
                  <div className="flex -space-x-3 mb-2">
                    {activeLearnerInitials.map((initials) => (
                      <Avatar key={initials} className="h-8 w-8 border-2 border-background">
                        <AvatarFallback className="text-xs font-medium bg-foroz-100 text-foroz-700 dark:bg-foroz-900/40 dark:text-foroz-300">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-foreground">+323 active</div>
                  <div className="text-xs text-muted-foreground">learners this week</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="stats-heading">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 mx-auto`}>
                  <stat.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="values-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These seven principles guide every decision we make and every program we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={value.title} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="programs-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="programs-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Three Pillars of Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Our integrated approach addresses education, opportunity access, and sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programHighlights.map((program, index) => (
              <Card key={program.title} className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-background animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4">
                    <program.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <p className="text-muted-foreground mb-6">{program.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.stats.map((stat, i) => (
                      <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-foroz-50 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300">
                        {stat}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <Link to={program.href}>{program.cta}</Link>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <Link to="/programs">View All Programs</Link>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted/30" aria-labelledby="trust-heading">
        <div className="container px-4">
          <h2 id="trust-heading" className="sr-only">Why Trust FOROZ</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={signal.label} className="text-center p-4 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-3 mx-auto">
                  <signal.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-foreground">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-foroz-600 via-foroz-700 to-foroz-green-700" aria-labelledby="cta-heading">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              Join thousands of learners worldwide. Access free courses, discover opportunities, and become part of a global community of changemakers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
                <Link to="/programs/enroll" className="text-white">Enroll in Free Courses</Link>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                <Link to="/opportunities">Explore Opportunities</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-foroz-200">
              Questions? <Link to="/contact" className="underline hover:text-white">Contact our support team</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}