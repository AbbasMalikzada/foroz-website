import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Calendar,
  MapPin,
  Briefcase,
  Award,
  Users,
  Globe,
  Heart,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Share2,
  Bookmark,
  Building2,
  GraduationCap,
  User,
  AlertCircle,
  Lock as LockIcon,
  Shield,
  RotateCcw,
  Link as LinkIcon,
} from "lucide-react"
import { Facebook, Twitter, Linkedin } from "@/components/icons/social"
import { useParams } from "react-router-dom"
import { useMemo } from "react"

const opportunities = [
  {
    id: 1,
    slug: "fulbright-foreign-student",
    title: "Fulbright Foreign Student Program",
    type: "scholarship",
    provider: "U.S. Department of State",
    deadline: "2025-10-15",
    region: "North America",
    eligibility: "Bachelor's degree, English proficiency, leadership potential",
    description: "Fully funded graduate study in the USA. Covers tuition, airfare, living stipend, and health insurance. 4,000+ awards annually across 160 countries.",
    tags: ["Fully Funded", "Graduate", "USA", "All Fields"],
    verified: true,
    saved: false,
  },
  {
    id: 2,
    slug: "google-summer-of-code",
    title: "Google Summer of Code 2025",
    type: "internship",
    provider: "Google",
    deadline: "2025-04-02",
    region: "Remote/Global",
    eligibility: "University students 18+, programming experience",
    description: "Global program focused on bringing student developers into open source software development. $6,000 stipend for 12+ week coding project.",
    tags: ["Paid", "Remote", "Open Source", "Tech"],
    verified: true,
    saved: false,
  },
  {
    id: 3,
    slug: "chevening-scholarships",
    title: "Chevening Scholarships UK",
    type: "scholarship",
    provider: "UK Government",
    deadline: "2025-11-05",
    region: "Europe",
    eligibility: "2+ years work experience, leadership potential, UK university admission",
    description: "Fully funded one-year master's degree in the UK. Covers tuition, flights, accommodation, and monthly stipend. 1,500+ scholarships globally.",
    tags: ["Fully Funded", "Master's", "UK", "All Fields"],
    verified: true,
    saved: false,
  },
  {
    id: 4,
    slug: "un-volunteers",
    title: "UN Volunteers Programme",
    type: "volunteering",
    provider: "United Nations",
    deadline: "Rolling",
    region: "Global",
    eligibility: "25+ years, university degree, 2+ years experience",
    description: "Volunteer assignments with UN agencies worldwide. Living allowance, insurance, travel. 8,000+ volunteers annually in 130+ countries.",
    tags: ["Stipend", "Global", "Development", "UN"],
    verified: true,
    saved: false,
  },
  {
    id: 5,
    slug: "mastercard-foundation-scholars",
    title: "Mastercard Foundation Scholars Program",
    type: "scholarship",
    provider: "Mastercard Foundation",
    deadline: "2025-06-30",
    region: "Africa",
    eligibility: "African citizens, academic talent, financial need, commitment to give back",
    description: "Comprehensive scholarships for undergraduate and graduate studies at partner universities in Africa, Canada, and USA. Leadership development included.",
    tags: ["Fully Funded", "Undergraduate", "Graduate", "Africa Focus"],
    verified: true,
    saved: false,
  },
  {
    id: 6,
    slug: "youth-climate-fellowship",
    title: "Youth Climate Leadership Fellowship",
    type: "fellowship",
    provider: "Global Youth Climate Network",
    deadline: "2025-08-31",
    region: "Remote/Global",
    eligibility: "18-30 years, climate project idea, commitment to 6-month program",
    description: "6-month fellowship for youth climate leaders. $5,000 seed funding, mentorship, training, and global network. Focus on SDG 13.",
    tags: ["Seed Funding", "Mentorship", "Climate Action", "SDG 13"],
    verified: true,
    saved: false,
  },
  {
    id: 7,
    slug: "microsoft-mentorship",
    title: "Microsoft Mentorship Program",
    type: "mentorship",
    provider: "Microsoft",
    deadline: "2025-03-01",
    region: "Remote/Global",
    eligibility: "Students/early career in tech, 6-month commitment",
    description: "One-on-one mentorship with Microsoft employees. Career guidance, technical skill development, networking. Monthly virtual sessions.",
    tags: ["Tech Mentorship", "Remote", "Career Growth", "Monthly Sessions"],
    verified: true,
    saved: false,
  },
  {
    id: 8,
    slug: "daad-scholarships",
    title: "DAAD Scholarships Germany",
    type: "scholarship",
    provider: "DAAD",
    deadline: "2025-10-15",
    region: "Europe",
    eligibility: "Bachelor's degree, German/English proficiency, academic excellence",
    description: "Fully funded master's and PhD programs in Germany. Monthly stipend €934/€1,200, travel allowance, health insurance. 100,000+ alumni.",
    tags: ["Fully Funded", "Master's/PhD", "Germany", "Research"],
    verified: true,
    saved: false,
  },
  {
    id: 9,
    slug: "global-youth-entrepreneurship",
    title: "Global Youth Entrepreneurship Challenge",
    type: "fellowship",
    provider: "World Bank Youth Summit",
    deadline: "2025-07-31",
    region: "Remote/Global",
    eligibility: "18-35 years, innovative business idea addressing development challenge",
    description: "Pitch competition with $50,000+ in prizes. Business training, investor access, media exposure. Focus on SDGs 8, 9, 11.",
    tags: ["Prize Money", "Training", "Investor Access", "SDGs"],
    verified: true,
    saved: false,
  },
  {
    id: 10,
    slug: "erasmus-traineeships",
    title: "Erasmus+ Traineeships",
    type: "internship",
    provider: "European Commission",
    deadline: "Varies by institution",
    region: "Europe",
    eligibility: "Enrolled in higher education, Erasmus+ partner institution",
    description: "Funded traineeships in European organizations. €500-800/month grant, EU recognition. Duration 2-12 months.",
    tags: ["Funded", "Europe", "Work Experience", "EU Recognition"],
    verified: true,
    saved: false,
  },
  {
    id: 11,
    slug: "au-youth-volunteer-corps",
    title: "African Union Youth Volunteer Corps",
    type: "volunteering",
    provider: "African Union",
    deadline: "2025-05-31",
    region: "Africa",
    eligibility: "African citizens 18-35, university degree, willingness to serve",
    description: "12-month volunteer deployment across African Union member states. Monthly stipend, insurance, travel. Focus on Agenda 2063.",
    tags: ["Stipend", "Africa", "12 Months", "Agenda 2063"],
    verified: true,
    saved: false,
  },
  {
    id: 12,
    slug: "rhodes-scholarship",
    title: "Rhodes Scholarship Oxford",
    type: "scholarship",
    provider: "Rhodes Trust",
    deadline: "2025-10-01",
    region: "Europe",
    eligibility: "Academic excellence, leadership, character, 18-24 years (varies by constituency)",
    description: "World's oldest international graduate scholarship. Fully funded study at Oxford University. 100 scholars annually from 20+ constituencies.",
    tags: ["Fully Funded", "Graduate", "Oxford", "Prestigious"],
    verified: true,
    saved: false,
  },
]

const typeColors = {
  scholarship: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  internship: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  mentorship: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  fellowship: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  volunteering: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  global: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400",
}

const getTypeColor = (type: string) => typeColors[type as keyof typeof typeColors] || typeColors.global

const formatDeadline = (deadline: string) => {
  if (deadline === "Rolling") return "Rolling Deadline"
  const date = new Date(deadline)
  const now = new Date()
  const diff = date.getTime() - now.getTime()
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  if (days < 0) return "Expired"
  if (days === 0) return "Due Today"
  if (days <= 7) return `${days} day${days !== 1 ? "s" : ""} left`
  if (days <= 30) return `${Math.ceil(days / 7)} week${Math.ceil(days / 7) !== 1 ? "s" : ""} left`
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export function OpportunityDetailPage() {
  const { slug } = useParams()
  const opportunity = useMemo(() => opportunities.find(o => o.slug === slug), [slug])

  if (!opportunity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Opportunity Not Found</h1>
          <p className="text-muted-foreground mb-6">The opportunity you're looking for doesn't exist or has been removed.</p>
          <Button asChild variant="default">
            <Link to="/opportunities">Browse All Opportunities</Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  const relatedOpportunities = useMemo(() => opportunities.filter(o => o.id !== opportunity.id).slice(0, 3), [opportunity.id])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" className={cn("capitalize", getTypeColor(opportunity.type))}>{opportunity.type}</Badge>
              {opportunity.verified && <Badge variant="outline" className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-foroz-green-600" /> Verified</Badge>}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {opportunity.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{opportunity.provider}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {formatDeadline(opportunity.deadline)}</span>
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {opportunity.region}</span>
              <span className="flex items-center gap-1"><Building2 className="h-4 w-4" /> {opportunity.provider}</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button asChild variant="outline" className="gap-2">
                <Link to={`/opportunities/${opportunity.slug}/apply`}>Apply Now</Link>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" /> Share
              </Button>
              <Button variant="outline" className="gap-2" aria-label="Save opportunity">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Copy link"><ExternalLink className="h-5 w-5" /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background" aria-labelledby="details-heading">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section aria-labelledby="description-heading">
                <h2 id="description-heading" className="text-2xl font-bold text-foreground mb-4">About This Opportunity</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Eligibility Requirements</h3>
                  <p className="text-muted-foreground">{opportunity.eligibility}</p>
                </div>
              </section>

              {/* Key Details */}
              <section aria-labelledby="details-heading">
                <h2 id="details-heading" className="text-2xl font-bold text-foreground mb-4">Key Details</h2>
                <div className="space-y-3">
                  {[
                    { label: "Opportunity Type", value: opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1), icon: opportunity.type === "scholarship" ? Award : opportunity.type === "internship" ? Briefcase : opportunity.type === "mentorship" ? Users : opportunity.type === "fellowship" ? GraduationCap : Heart },
                    { label: "Provider", value: opportunity.provider, icon: Building2 },
                    { label: "Region", value: opportunity.region, icon: Globe },
                    { label: "Deadline", value: formatDeadline(opportunity.deadline), icon: Calendar },
                    { label: "Eligibility", value: opportunity.eligibility, icon: User },
                    { label: "Status", value: opportunity.verified ? "Verified by FOROZ" : "Not Verified", icon: opportunity.verified ? CheckCircle : AlertCircle },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
))}
                </div>
              </section>

              {/* Eligibility & Application */}
              <section aria-labelledby="apply-heading">
                <h2 id="apply-heading" className="text-2xl font-bold text-foreground mb-4">How to Apply</h2>
                <Card className="border-0 shadow-sm bg-foroz-50 dark:bg-foroz-900/30 border-foroz-200 dark:border-foroz-800">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center font-bold">1</div>
                        <div>
                          <p className="font-medium text-foreground">Review Eligibility</p>
                          <p className="text-sm text-muted-foreground">Carefully review all eligibility criteria before applying.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center font-bold">2</div>
                        <div>
                          <p className="font-medium text-foreground">Prepare Documents</p>
                          <p className="text-sm text-muted-foreground">Gather required documents: transcripts, letters of recommendation, personal statement, CV.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center font-bold">3</div>
                        <div>
                          <p className="font-medium text-foreground">Submit Application</p>
                          <p className="text-sm text-muted-foreground">Complete the application form and submit before the deadline.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center font-bold">4</div>
                        <div>
                          <p className="font-medium text-foreground">Follow Up</p>
                          <p className="text-sm text-muted-foreground">Track your application status and respond to any requests for additional information.</p>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="w-full gap-2 mt-4" variant="default" size="lg">
                      <Link to={`/opportunities/${opportunity.slug}/apply`}>Start Your Application</Link>
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </section>

              {/* Provider Info */}
              <section aria-labelledby="provider-heading">
                <h2 id="provider-heading" className="text-2xl font-bold text-foreground mb-4">About the Provider</h2>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center">
                        <Building2 className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">{opportunity.provider}</h3>
                        <p className="text-muted-foreground mt-1">Leading organization providing global opportunities for youth development and education.</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline">Global Reach</Badge>
                          <Badge variant="outline">Verified Partner</Badge>
                          <Badge variant="outline">10,000+ Beneficiaries</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Action Card */}
              <Card className="sticky top-24 border-0 shadow-lg animate-slide-up">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Apply Now</CardTitle>
                    <Badge variant="secondary" className={cn("capitalize", getTypeColor(opportunity.type))}>{opportunity.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-medium capitalize">{opportunity.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Provider</span>
                      <span className="font-medium">{opportunity.provider}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Region</span>
                      <span className="font-medium">{opportunity.region}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Deadline</span>
                      <span className={cn("font-medium", opportunity.deadline === "Rolling" ? "text-foroz-green-600" : new Date(opportunity.deadline) < new Date() ? "text-red-500" : "text-foreground")}>{formatDeadline(opportunity.deadline)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Status</span>
                      <Badge variant={opportunity.verified ? "default" : "outline"} className={opportunity.verified ? "bg-foroz-green-100 text-foroz-green-700 dark:bg-foroz-green-900/30 dark:text-foroz-green-400" : ""}>
                        {opportunity.verified ? "Verified" : "Pending Verification"}
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Opportunity</span>
                      <span className="font-medium">{opportunity.title}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{opportunity.type === "scholarship" ? "Funding" : "Stipend"}</span>
                      <span className="font-medium">{opportunity.tags.some(t => t.toLowerCase().includes("funded") || t.toLowerCase().includes("stipend")) ? "Fully Funded" : "Varies"}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Duration</span>
                      <span className="font-medium">{opportunity.tags.find(t => t.toLowerCase().includes("month") || t.toLowerCase().includes("year")) || "Varies"}</span>
                    </div>
                    <div className="pt-4 border-t flex justify-between text-lg font-bold">
                      <span>Your Cost</span>
                      <span className="text-2xl font-bold text-foroz-600 dark:text-foroz-400">Free to Apply</span>
                    </div>
                  </div>

                  <Button asChild className="w-full gap-2 py-3 text-lg bg-foroz-600 hover:bg-foroz-700 text-white shadow-lg shadow-foroz-500/25" size="lg">
                    <Link to={`/opportunities/${opportunity.slug}/apply`}>Start Application</Link>
                    <ArrowRight className="h-5 w-5" />
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><LockIcon className="h-3.5 w-3.5" /> SSL Secured</div>
                    <div className="flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> PCI Compliant</div>
                    <div className="flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" /> No Storage</div>
                  </div>
                </CardContent>
              </Card>

              {/* Save & Share */}
              <Card className="mt-4 border-0 shadow-sm bg-background">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Share this opportunity</span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" aria-label="Share on Facebook"><Facebook className="h-4 w-4" /></Button>
                      <Button variant="outline" size="icon" aria-label="Share on Twitter"><Twitter className="h-4 w-4" /></Button>
                      <Button variant="outline" size="icon" aria-label="Share on LinkedIn"><Linkedin className="h-4 w-4" /></Button>
                      <Button variant="outline" size="icon" aria-label="Copy link"><LinkIcon className="h-4 w-4" /></Button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <Button variant="outline" size="icon" className="gap-1" aria-label="Save opportunity">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="gap-1" aria-label="Report issue">
                      <AlertCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Opportunities */}
              <section className="mt-6" aria-labelledby="related-heading">
                <h2 id="related-heading" className="text-lg font-semibold text-foreground mb-4">Similar Opportunities</h2>
                <div className="space-y-3">
                  {relatedOpportunities.map((related) => {
                    const IconComponent = related.type === "scholarship" ? Award : related.type === "internship" ? Briefcase : related.type === "mentorship" ? Users : related.type === "fellowship" ? GraduationCap : Heart;
                    return (
                    <Card key={related.slug} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow bg-background">
                      <CardContent className="p-4">
                        <Link to={`/opportunities/${related.slug}`} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground group-hover:text-foroz-600 transition-colors line-clamp-1">{related.title}</h4>
                            <p className="text-xs text-muted-foreground">{related.provider}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatDeadline(related.deadline)}</span>
                              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {related.region}</span>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foroz-600 transition-colors flex-shrink-0" />
                        </Link>
                      </CardContent>
                    </Card>
                    );
                  })}
                </div>
                <div className="mt-4 text-center">
                  <Button asChild variant="ghost" size="sm" className="gap-1">
                    <Link to="/opportunities">View All Opportunities</Link>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-foroz-600 via-foroz-700 to-foroz-green-700">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              Join thousands of young people accessing life-changing opportunities through FOROZ.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
                <Link to={`/opportunities/${opportunity.slug}/apply`} className="text-white">Apply Now</Link>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                <Link to="/opportunities">Explore More Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}