import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Target,
  TrendingUp,
  BookOpen,
  Globe,
  Heart,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Briefcase,
  Leaf,
  Lightbulb,
  Handshake,
  Shield,
  DollarSign,
  Building2,
  Star,
} from "lucide-react"
import { testimonials } from "@/data/impactData"

const impactStats = [
  { label: "Learners Enrolled", value: "12,847", change: "+23%", trend: "up", icon: Users, color: "from-foroz-500 to-foroz-600" },
  { label: "Courses Completed", value: "8,932", change: "+18%", trend: "up", icon: CheckCircle, color: "from-foroz-green-500 to-foroz-green-600" },
  { label: "Opportunities Connected", value: "3,421", change: "+31%", trend: "up", icon: Briefcase, color: "from-purple-500 to-purple-600" },
  { label: "Countries Reached", value: "47", change: "+5", trend: "up", icon: Globe, color: "from-orange-500 to-orange-600" },
  { label: "Volunteer Hours", value: "15,600+", change: "+42%", trend: "up", icon: Heart, color: "from-red-500 to-red-600" },
  { label: "Funds Distributed", value: "$487K", change: "+67%", trend: "up", icon: DollarSign, color: "from-emerald-500 to-emerald-600" },
]

const sdgMapping = [
  { goal: 4, title: "Quality Education", description: "Free online courses, digital skills, language learning for underserved youth", progress: 78, icon: BookOpen, color: "bg-red-500" },
  { goal: 8, title: "Decent Work & Economic Growth", description: "Skills training, internships, entrepreneurship support, employability programs", progress: 65, icon: Briefcase, color: "bg-orange-500" },
  { goal: 10, title: "Reduced Inequalities", description: "Equitable access for disadvantaged communities, gender parity, disability inclusion", progress: 72, icon: Users, color: "bg-yellow-500" },
  { goal: 13, title: "Climate Action", description: "Youth climate fellowships, environmental education, green entrepreneurship", progress: 45, icon: Leaf, color: "bg-green-500" },
  { goal: 17, title: "Partnerships for the Goals", description: "Global NGO network, university partnerships, government collaborations", progress: 82, icon: Handshake, color: "bg-blue-500" },
]

const theoryOfChange = [
  { stage: "Inputs", items: ["Funding & Grants", "Volunteer Expertise", "Technology Platform", "Partnerships", "Curriculum Resources"], icon: Building2 },
  { stage: "Activities", items: ["Course Development", "Opportunity Curation", "Mentorship Matching", "SDG Advocacy", "Community Building"], icon: Lightbulb },
  { stage: "Outputs", items: ["84 Courses Delivered", "3,421 Opportunities Shared", "1,200 Mentor Matches", "47 Countries Reached", "15,600 Volunteer Hours"], icon: BarChart3 },
  { stage: "Outcomes", items: ["Improved Skills", "Increased Employability", "Higher Education Access", "Leadership Development", "Civic Engagement"], icon: Target },
  { stage: "Impact", items: ["Empowered Youth", "Reduced Inequality", "Economic Mobility", "Sustainable Communities", "Global Citizenship"], icon: Star },
]

const financials = [
  { label: "Program Services", value: "82%", amount: "$400K", color: "bg-foroz-500" },
  { label: "Operations", value: "12%", amount: "$58K", color: "bg-foroz-green-500" },
  { label: "Fundraising", value: "6%", amount: "$29K", color: "bg-amber-500" },
]

export function ImpactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Impact & Transparency
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Measuring What Matters
              <br />
              <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                Real Impact, Real Lives Changed
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in radical transparency. Every program is tracked, every dollar accounted for, every story documented. Our MEL (Monitoring, Evaluation & Learning) framework ensures we deliver on our promises.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="metrics-heading">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={stat.label} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background text-center p-6 animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-0">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 mx-auto`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                  <div className={`flex items-center justify-center gap-1 text-sm font-medium ${stat.trend === "up" ? "text-foroz-green-600" : "text-red-600"}`}>
                    <span className={stat.trend === "up" ? "text-foroz-green-600" : "text-red-600"}>{stat.change}</span>
                    <span className="text-muted-foreground">vs last year</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="toc-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="toc-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Theory of Change
            </h2>
            <p className="text-lg text-muted-foreground">
              How our resources translate into lasting impact for youth worldwide.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-foroz-200 dark:bg-foroz-800 transform -translate-x-1/2 hidden md:block" />
            <div className="grid md:grid-cols-5 gap-6 relative z-10">
              {theoryOfChange.map((stage, index) => (
                <div key={stage.stage} className="relative">
                  <div className="absolute w-12 h-12 rounded-xl bg-gradient-to-br from-foroz-500 to-foroz-green-500 flex items-center justify-center text-white font-bold text-xl left-1/2 -translate-x-1/2 top-0 z-10 shadow-lg">
                    {index + 1}
                  </div>
                  <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-foroz-200 dark:bg-foroz-800 transform -translate-x-1/2 hidden md:block" style={{ zIndex: 0 }} />
                  <div className="pt-16 text-center">
                    <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                      <CardHeader>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4 mx-auto">
                          <stage.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">{stage.stage}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {stage.items.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-foroz-green-600 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section id="sdgs" className="py-16 md:py-24 bg-background" aria-labelledby="sdg-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="sdg-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advancing the Sustainable Development Goals
            </h2>
            <p className="text-lg text-muted-foreground">
              Our programs directly contribute to 5 priority SDGs. Each goal has measurable targets and progress tracking.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {sdgMapping.map((sdg) => (
              <Card key={sdg.goal} className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-background overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${sdg.color} flex items-center justify-center`}>
                      <sdg.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-foreground">SDG {sdg.goal}</span>
                        <span className="text-lg font-semibold text-foreground">{sdg.title}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{sdg.description}</p>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-foroz-500 to-foroz-green-500 rounded-full transition-all duration-1000"
                          style={{ width: `${sdg.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>Progress</span>
                        <span className="font-semibold text-foreground">{sdg.progress}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section id="transparency" className="py-16 md:py-24 bg-muted/30" aria-labelledby="financial-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="financial-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Financial Transparency
            </h2>
            <p className="text-lg text-muted-foreground">
              Every dollar is accounted for. We believe donors deserve to know exactly how their contributions create impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {financials.map((item) => (
              <Card key={item.label} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${item.color} mb-4 mx-auto`}>
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{item.value}</div>
                  <div className="text-lg text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground">{item.amount}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="border-0 shadow-sm bg-background">
              <CardHeader>
                <CardTitle className="text-xl">Annual Financial Highlights (2025)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Total Revenue: $487,000 (Grants: 45%, Individual Donations: 30%, Corporate: 15%, Earned Income: 10%)",
                  "Program Expense Ratio: 82% (exceeds 65% nonprofit benchmark)",
                  "Fundraising Efficiency: $0.12 spent per $1 raised (benchmark: $0.20)",
                  "Administrative Cost Ratio: 12% (benchmark: <15%)",
                  "Independent Audit: Clean opinion from Smith & Associates CPAs",
                  "Form 990: Filed on time, publicly available via GuideStar",
                  "Reserves: 6 months operating expenses maintained",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-foroz-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="py-16 md:py-24 bg-background" aria-labelledby="stories-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="stories-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stories of Change
            </h2>
            <p className="text-lg text-muted-foreground">
              Real people. Real transformation. These are the voices behind our numbers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <Link to="/impact/stories">Read More Stories</Link>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section id="reports" className="py-16 md:py-24 bg-muted/30" aria-labelledby="reports-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="reports-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Annual Reports & Publications
            </h2>
            <p className="text-lg text-muted-foreground">
              Download our comprehensive reports for detailed impact data, financials, and strategic insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "2025 Annual Report", description: "Full year impact, financials, governance, and strategic priorities. 48 pages.", size: "2.4 MB", icon: FileText },
              { title: "2025 Financial Statements", description: "Audited financial statements with notes. 12 pages.", size: "847 KB", icon: Calculator },
              { title: "MEL Framework Report", description: "Monitoring, Evaluation & Learning methodology and results. 24 pages.", size: "1.2 MB", icon: BarChart3 },
              { title: "SDG Alignment Report", description: "Detailed mapping of programs to SDG targets and indicators. 16 pages.", size: "983 KB", icon: Target },
              { title: "Beneficiary Survey Results", description: "Annual survey of 2,000+ learners. Satisfaction, outcomes, suggestions. 18 pages.", size: "1.6 MB", icon: Users },
              { title: "Governance & Policies", description: "Board structure, conflict of interest, whistleblower, data protection policies. 14 pages.", size: "612 KB", icon: Shield },
            ].map((report) => (
              <Card key={report.title} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center">
                      <report.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1">{report.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{report.size}</span>
                        <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foroz-600" aria-label={`Download ${report.title}`}>
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-foroz-600 via-foroz-700 to-foroz-green-700">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner With Us to Scale Impact
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              We're looking for funders, partners, and advocates to help us reach 100,000 learners by 2030.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
                <Link to="/get-involved/partner" className="text-white">Become a Partner</Link>
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
function Calculator({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="6" y1="8" x2="18" y2="8" /><line x1="16" y1="12" x2="16" y2="16" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="8" y1="16" x2="8" y2="12" /></svg>
}
function Download({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
}