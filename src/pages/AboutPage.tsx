import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Users,
  Award,
  Target,
  Heart,
  BookOpen,
  Briefcase,
  Globe,
  Sparkles,
  Leaf,
  Lightbulb,
  Handshake,
  Shield,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Building2,
  GraduationCap,
} from "lucide-react"
import { useState } from "react"

const leadership = [
  {
    name: "Founder & CEO",
    role: "Strategic vision, governance, external representation",
    bio: "Visionary leader with 10+ years in international development and youth empowerment. Holds Masters in Education Policy from Harvard.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=founder",
  },
  {
    name: "Co-Founder / Deputy CEO",
    role: "Program execution, department coordination, operations",
    bio: "Experienced program director with background in ed-tech and nonprofit management. Previously led digital learning initiatives at UNESCO.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=cofounder",
  },
]

const governance = [
  { title: "Founder-Led Governance", description: "Currently governed by Founder and Co-Founder with appointed advisors. Transitioning to independent board as organization scales." },
  { title: "Annual General Meeting", description: "Yearly meeting for strategy review, financial approval, and stakeholder engagement. Open to all registered members." },
  { title: "Financial Transparency", description: "Quarterly financial reports published. Annual audited statements available. 85%+ of funds directed to programs." },
  { title: "Conflict of Interest Policy", description: "Strict policy for all leadership, staff, and volunteers. Annual declarations required. Public registry maintained." },
  { title: "Whistleblower Protection", description: "Anonymous reporting channel for ethical concerns. Independent review process. Protection against retaliation." },
  { title: "Data Protection & Privacy", description: "GDPR and CCPA compliant. Minimal data collection. Regular security audits. Clear consent mechanisms." },
]

const milestones = [
  { year: "2025", title: "Organization Founded", description: "FOROZ officially established on September 6, 2025, with mission to empower youth through equitable education access." },
  { year: "2025", title: "First Programs Launched", description: "Initial course offerings in English Language and Digital Skills deployed on learning platform." },
  { year: "2025", title: "Opportunities Hub Beta", description: "Scholarship and internship database launched with 500+ verified opportunities." },
  { year: "2026", title: "Global Expansion", description: "Programs extended to 20+ countries. Partnerships with 15+ educational institutions established." },
]

export function AboutPage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleItem = (key: string) => {
    const newSet = new Set(expandedItems)
    if (newSet.has(key)) {
      newSet.delete(key)
    } else {
      newSet.add(key)
    }
    setExpandedItems(newSet)
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              About FOROZ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Empowering Youth Through
              <br />
              <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                Education & Opportunity
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Founded in 2025, FOROZ is a youth-led nonprofit dedicated to expanding equitable access to quality education and meaningful opportunities for underserved students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To expand equitable access to quality education and learning opportunities for youth and students, while actively advocating for and contributing to the achievement of the Sustainable Development Goals through capacity building, opportunity facilitation, and youth-led community engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-green-100 text-foroz-green-600 dark:bg-foroz-green-900/30 dark:text-foroz-green-400 mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To build an inclusive global community where all youth and students have equitable access to quality education, opportunities, and support systems that enable them to develop their potential, pursue ambitious goals, and contribute meaningfully to sustainable social and community development.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Equity & Inclusion",
                    "Quality & Excellence",
                    "Integrity & Accountability",
                    "Youth Empowerment",
                    "Learning & Innovation",
                    "Collaboration & Partnership",
                    "Sustainability & Impact",
                  ].map((value) => (
                    <li key={value} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-foroz-green-600 flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Objectives (2025–2030)
            </h2>
            <p className="text-lg text-muted-foreground">
              Our five strategic pillars guide every program, partnership, and decision.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Expand Equitable Access to Quality Education",
                description: "Design and deliver inclusive, high-quality educational programs that remove financial, geographic, and systemic barriers for youth and students, with a focus on underserved and disadvantaged communities.",
                icon: GraduationCap,
                color: "from-foroz-500 to-foroz-600",
              },
              {
                number: "02",
                title: "Promote Youth Skills Development and Employability",
                description: "Equip youth with practical, digital, and leadership skills that enhance employability, entrepreneurship, and lifelong learning, enabling them to compete and contribute in local and global contexts.",
                icon: Briefcase,
                color: "from-foroz-green-500 to-foroz-green-600",
              },
              {
                number: "03",
                title: "Facilitate Access to Opportunities and Pathways",
                description: "Identify, curate, and connect youth to educational, professional, and development opportunities—including scholarships, internships, mentorships, and global programs—that support personal and career growth.",
                icon: Award,
                color: "from-purple-500 to-purple-600",
              },
              {
                number: "04",
                title: "Advance Awareness and Advocacy for the SDGs",
                description: "Integrate SDG principles into education, research, and outreach activities, while empowering youth to actively engage in community initiatives that contribute to sustainable and positive social change.",
                icon: Target,
                color: "from-orange-500 to-orange-600",
              },
              {
                number: "05",
                title: "Strengthen Organizational Capacity and Sustainability",
                description: "Build strong internal systems, partnerships, and resource mobilization mechanisms to ensure effective governance, accountability, and long-term organizational sustainability.",
                icon: Building2,
                color: "from-blue-500 to-blue-600",
              },
            ].map((obj, index) => (
              <Card key={obj.title} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                <div className="flex gap-6 p-6">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${obj.color} flex items-center justify-center`}>
                      <obj.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-foroz-600 dark:text-foroz-400 mb-2">{obj.number}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{obj.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{obj.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Dedicated founders and advisors guiding FOROZ's mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={leader.role} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-foroz-500 to-foroz-green-500 rounded-full" />
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="relative w-full h-full rounded-full object-cover border-4 bg-white dark:bg-gray-800"
                    />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Governance & Transparency
            </h2>
            <p className="text-lg text-muted-foreground">
              We uphold the highest standards of accountability and ethical conduct.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governance.map((item, index) => (
              <Card key={item.title} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Accordion for Financial Transparency */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Financial Transparency</h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                { title: "Fund Allocation (2025)", content: "Programs: 82% | Operations: 12% | Fundraising: 6%", icon: "PieChart" },
                { title: "Annual Revenue (2025)", content: "$487,000 from grants, individual donations, and corporate partnerships", icon: "DollarSign" },
                { title: "Audit Status", content: "Independent audit completed by Smith & Associates CPAs. Clean opinion issued.", icon: "FileCheck" },
                { title: "Form 990 Filing", content: "Publicly available. Filed annually with IRS. Latest filing accessible via GuideStar.", icon: "FileText" },
                { title: "Donor Privacy", content: "We never sell donor information. Anonymous giving options available. Compliance with donor bill of rights.", icon: "Shield" },
              ].map((item, index) => (
                <AccordionItem key={item.title} index={index} title={item.title} content={item.content} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones since our founding in 2025.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-foroz-200 dark:bg-foroz-800 transform -translate-x-1/2" />
            {milestones.map((milestone, index) => (
              <div key={milestone.title} className="relative mb-12 flex">
                <div className={`w-1/2 pr-8 ${index % 2 === 0 ? 'text-right' : 'pl-8 ml-auto'}`}>
                  <div className={`relative p-6 rounded-xl bg-card border shadow-sm hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="absolute w-4 h-4 bg-foroz-500 rounded-full border-4 border-background top-8 {-translate-x-2} {index % 2 === 0 ? 'right-0' : 'left-0'} {index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}" />
                    <div className="text-sm font-semibold text-foroz-600 dark:text-foroz-400 mb-2">{milestone.year}</div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-foroz-600 via-foroz-700 to-foroz-green-700">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Building the Future
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              Whether as a learner, volunteer, donor, or partner — your involvement helps us reach more youth worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
                <Link to="/get-involved" className="text-white">Get Involved</Link>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Accordion Component
function AccordionItem({ index, title, content }: { index: number; title: string; content: string }) {
  const [open, setOpen] = useState(false)
  return (
    <Card className="border-0 shadow-sm bg-background">
      <CardHeader className="py-4">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full px-0 text-left font-medium text-foreground hover:text-primary transition-colors focus-visible-ring"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2">
            <span className="text-sm font-bold text-foroz-600 dark:text-foroz-400">{index + 1}.</span>
            {title}
          </span>
          {open ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
        </button>
      </CardHeader>
      {open && (
        <CardContent className="pb-4 pt-0 animate-slide-down">
          <p className="text-muted-foreground text-sm">{content}</p>
        </CardContent>
      )}
    </Card>
  )
}