import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import {
  Briefcase,
  Award,
  GraduationCap,
  Users,
  Globe,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle,
  Filter,
  Search,
  Bookmark,
  Share2,
  Heart,
} from "lucide-react"
import { useState, useMemo } from "react"

const opportunityTypes = [
  { id: "all", label: "All Types", icon: Briefcase },
  { id: "scholarship", label: "Scholarships", icon: Award },
  { id: "internship", label: "Internships", icon: Briefcase },
  { id: "mentorship", label: "Mentorship", icon: Users },
  { id: "fellowship", label: "Fellowships", icon: GraduationCap },
  { id: "volunteering", label: "Volunteering", icon: Heart },
  { id: "global", label: "Global Programs", icon: Globe },
]

const regions = ["All Regions", "North America", "Europe", "Asia Pacific", "Latin America", "Africa", "Middle East", "Remote/Global"]

const opportunities = [
  {
    id: 1,
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
    title: "Erasmus+ Traineeships",
    type: "internship",
    provider: "European Commission",
    deadline: "Varies by institution",
    region: "Europe",
    eligibility: "Enrolled in higher education, Erasmus+ partner institution",
    description: "Funded traineeships in European organizations. €500-800/month grant, EU recognition. 3-Duration 2-12 months.",
    tags: ["Funded", "Europe", "Work Experience", "EU Recognition"],
    verified: true,
    saved: false,
  },
  {
    id: 11,
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

export function OpportunitiesPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedRegion, setSelectedRegion] = useState("All Regions")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("deadline")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      const matchesType = selectedType === "all" || opp.type === selectedType
      const matchesRegion = selectedRegion === "All Regions" || opp.region === selectedRegion
      const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesType && matchesRegion && matchesSearch
    }).sort((a, b) => {
      if (sortBy === "deadline") {
        const dateA = a.deadline === "Rolling" ? "9999-12-31" : a.deadline
        const dateB = b.deadline === "Rolling" ? "9999-12-31" : b.deadline
        return new Date(dateA).getTime() - new Date(dateB).getTime()
      }
      if (sortBy === "newest") return b.id - a.id
      return 0
    })
  }, [selectedType, selectedRegion, searchQuery, sortBy])

  const getTypeColor = (type: string) => {
    switch (type) {
      case "scholarship": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "internship": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "mentorship": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
      case "fellowship": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
      case "volunteering": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

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

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              Opportunities Hub
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Discover Life-Changing
              <br />
              <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Curated scholarships, internships, mentorships, fellowships, and global programs. Verified weekly. Filter by type, region, and deadline.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Verified Listings</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Weekly Updates</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Application Guides</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Deadline Alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-y">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search opportunities, providers, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg bg-background focus:ring-2 focus:ring-foroz-500 focus:border-transparent"
                  aria-label="Search opportunities"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2" role="group" aria-label="Type filter">
                {opportunityTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5",
                      selectedType === type.id
                        ? "bg-foroz-600 text-white shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                    aria-pressed={selectedType === type.id}
                  >
                    <type.icon className="h-4 w-4" />
                    {type.label}
                  </button>
                ))}
              </div>

              <div className="w-48">
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="w-40">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deadline">Deadline Soonest</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">View:</span>
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn("p-2 rounded-lg transition-colors", viewMode === "grid" ? "bg-foroz-600 text-white" : "bg-muted text-muted-foreground hover:bg-accent")}
                  aria-label="Grid view"
                  aria-pressed={viewMode === "grid"}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn("p-2 rounded-lg transition-colors", viewMode === "list" ? "bg-foroz-600 text-white" : "bg-muted text-muted-foreground hover:bg-accent")}
                  aria-label="List view"
                  aria-pressed={viewMode === "list"}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-16 bg-background" aria-labelledby="opportunities-heading">
        <div className="container px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div>
              <h2 id="opportunities-heading" className="text-3xl font-bold text-foreground">
                {selectedType === "all" ? "All Opportunities" : opportunityTypes.find(t => t.id === selectedType)?.label}
              </h2>
              <p className="text-muted-foreground mt-1">
                {filteredOpportunities.length} opportunity{filteredOpportunities.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/get-involved/partner">Post an Opportunity <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          {filteredOpportunities.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No opportunities found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className={cn(
              "gap-6",
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col space-y-4"
            )}>
              {filteredOpportunities.map((opp) => (
                <OpportunityCard
                  key={opp.id}
                  opp={opp}
                  viewMode={viewMode}
                  getTypeColor={getTypeColor}
                  formatDeadline={formatDeadline}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-foroz-600 via-foroz-700 to-foroz-green-700">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Opportunity?
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              Sign up for personalized alerts. We'll notify you when new opportunities matching your profile are posted.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
                <Link to="/opportunities/alerts" className="text-white">Set Up Alerts</Link>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function OpportunityCard({ opp, viewMode, getTypeColor, formatDeadline }: { opp: typeof opportunities[0]; viewMode: "grid" | "list"; getTypeColor: (type: string) => string; formatDeadline: (deadline: string) => string }) {
  if (viewMode === "list") {
    return (
      <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <Badge variant="secondary" className={cn(getTypeColor(opp.type), "capitalize")}>{opp.type}</Badge>
              {opp.verified && <Badge variant="outline" className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-foroz-green-600" /> Verified</Badge>}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground mb-1">{opp.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{opp.provider}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{opp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {opp.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {formatDeadline(opp.deadline)}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {opp.region}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" aria-label="Save opportunity"><Bookmark className="h-5 w-5" /></Button>
                <Button variant="ghost" size="icon" aria-label="Share opportunity"><Share2 className="h-5 w-5" /></Button>
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link to={`/opportunities/${opp.id}`}>View Details</Link>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-background flex flex-col">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between gap-2 mb-3">
          <Badge variant="secondary" className={cn(getTypeColor(opp.type), "capitalize")}>{opp.type}</Badge>
          {opp.verified && <Badge variant="outline" className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-foroz-green-600" /> Verified</Badge>}
        </div>
      </CardHeader>
      <CardContent className="p-4 pb-0 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{opp.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{opp.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {opp.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
          {opp.tags.length > 3 && <Badge variant="secondary" className="text-xs">+{opp.tags.length - 3} more</Badge>}
        </div>
        <div className="flex items-center justify-between pt-4 border-t mt-auto">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {formatDeadline(opp.deadline)}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {opp.region}</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Save opportunity"><Bookmark className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" aria-label="Share opportunity"><Share2 className="h-4 w-4" /></Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full gap-2" variant="outline">
          <Link to={`/opportunities/${opp.id}`}>View Details</Link>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

function Grid({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
}
function List({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
}
function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex items-center p-4 pt-0", className)}>{children}</div>
}