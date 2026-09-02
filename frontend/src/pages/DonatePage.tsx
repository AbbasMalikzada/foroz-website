import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  CreditCard,
  Banknote as BanknoteIcon,
  Repeat2 as RecurringIcon,
  Shield,
  Users,
  Award,
  BookOpen,
  Globe,
  CheckCircle,
  ArrowRight,
  Info,
  AlertCircle,
  Calendar,
} from "lucide-react"
import { useState } from "react"

const givingTiers = [
  {
    id: "student",
    title: "Student Supporter",
    amount: 10,
    period: "monthly",
    description: "Provides one student with free course access for a month.",
    impact: "1 learner/month",
    features: ["Course access", "Digital materials", "Community access"],
    color: "from-foroz-500 to-foroz-600",
    popular: false,
  },
  {
    id: "course",
    title: "Course Sponsor",
    amount: 50,
    period: "monthly",
    description: "Funds development and delivery of one complete course.",
    impact: "50+ learners/course",
    features: ["Course development", "Instructor support", "Certificates", "Platform hosting"],
    color: "from-foroz-green-500 to-foroz-green-600",
    popular: true,
  },
  {
    id: "mentor",
    title: "Mentor Champion",
    amount: 100,
    period: "monthly",
    description: "Supports one-on-one mentorship matching for a student.",
    impact: "1 mentor-mentee pair",
    features: ["Mentor matching", "Monthly sessions", "Career guidance", "Network access"],
    color: "from-purple-500 to-purple-600",
    popular: false,
  },
  {
    id: "custom",
    title: "Custom Amount",
    amount: 0,
    period: "one-time",
    description: "Every dollar counts. Choose your own impact level.",
    impact: "Flexible",
    features: ["You decide", "Any amount", "One-time or recurring"],
    color: "from-gray-500 to-gray-600",
    popular: false,
  },
]

const campaigns = [
  {
    id: "back-to-school",
    title: "Back-to-School Campaign",
    description: "Help 5,000 students start the academic year with free courses, devices, and internet access.",
    goal: 250000,
    raised: 142000,
    deadline: "2025-09-01",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    tag: "Active",
  },
  {
    id: "girls-education",
    title: "Girls' Education Fund",
    description: "Dedicated scholarships and mentorship for girls in STEM across 20 underserved regions.",
    goal: 500000,
    raised: 287000,
    deadline: "2025-12-31",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=400&fit=crop",
    tag: "Active",
  },
  {
    id: "climate-fellows",
    title: "Youth Climate Fellows",
    description: "Seed funding and mentorship for 50 youth-led climate projects worldwide.",
    goal: 150000,
    raised: 89000,
    deadline: "2025-11-15",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=400&fit=crop",
    tag: "Active",
  },
]

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes! FOROZ is a registered 501(c)(3) nonprofit organization (EIN: 92-1234567). All donations are tax-deductible to the fullest extent allowed by law. You'll receive an automatic receipt for every donation.",
  },
  {
    question: "How much of my donation goes to programs?",
    answer: "82% of every dollar goes directly to program services. 12% covers essential operations, and 6% funds our fundraising efforts. We exceed the nonprofit benchmark of 65% program ratio.",
  },
  {
    question: "Can I set up a recurring monthly donation?",
    answer: "Absolutely! Monthly giving provides sustainable funding that allows us to plan long-term programs. You can modify or cancel anytime from your donor portal.",
  },
  {
    question: "Can I donate in honor/memory of someone?",
    answer: "Yes! During checkout, you can select 'Dedicate this donation' and provide the honoree's details. We'll send a beautiful e-card or physical card to notify them.",
  },
  {
    question: "Do you accept cryptocurrency or stock donations?",
    answer: "Yes, we accept Bitcoin, Ethereum, USDC, and publicly traded securities. Contact donations@foroz.org for wire instructions and tax benefits of appreciated asset donations.",
  },
  {
    question: "How do I get a receipt for tax purposes?",
    answer: "Automatic receipts are emailed for every donation. For donations over $250, we provide IRS-compliant acknowledgment letters. Annual giving summaries available in your donor portal each January.",
  },
]

export function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>("course")
  const [isRecurring, setIsRecurring] = useState(true)
  const [customAmount, setCustomAmount] = useState("")

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              Support Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Your Gift Creates
              <br />
              <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                Lasting Change
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              82¢ of every dollar goes directly to programs. Join 1,200+ donors empowering youth through education and opportunity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> 501(c)(3) Tax-Deductible</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Secure SSL Encryption</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Tiers */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="tiers-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="tiers-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Select a giving level or enter a custom amount. All tiers can be monthly or one-time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {givingTiers.map((tier) => (
              <Card
                key={tier.id}
                className={cn(
                  "flex-1 h-full border-2 transition-all duration-300 relative",
                  selectedTier === tier.id
                    ? "border-foroz-500 shadow-lg shadow-foroz-500/10"
                    : "border-transparent hover:border-foroz-200 dark:hover:border-foroz-800"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="secondary" className="bg-foroz-500 text-white px-3 py-1 text-xs">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${tier.color} mb-4 mx-auto`}>
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg">{tier.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold text-foreground">
                        ${tier.amount === 0 ? "" : tier.amount}
                      </span>
                      {tier.amount > 0 && (
                        <span className="text-muted-foreground">/{tier.period}</span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-foroz-green-50 text-foroz-green-700 dark:bg-foroz-green-900/30 dark:text-foroz-green-400 text-xs font-medium">
                      <CheckCircle className="h-3 w-3" />
                      {tier.impact}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foroz-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={cn(
                      "w-full gap-2",
                      selectedTier === tier.id ? "bg-foroz-600 hover:bg-foroz-700 text-white" : "bg-muted hover:bg-accent"
                    )}
                    onClick={() => {
                      setSelectedTier(tier.id)
                      if (tier.id === "custom") setCustomAmount("")
                    }}
                  >
                    {selectedTier === tier.id ? (
                      <>
                        <CheckCircle className="h-4 w-4" /> Selected
                      </>
                    ) : (
                      "Select"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Amount Input */}
          {selectedTier === "custom" && (
            <div className="max-w-md mx-auto mt-8 animate-slide-down">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  type="number"
                  className="pl-8 text-center text-2xl font-bold py-4"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  min="1"
                  max="100000"
                  aria-label="Custom donation amount"
                />
              </div>
              <div className="flex gap-2 mt-4 justify-center">
                {[25, 50, 75, 100, 250, 500].map((amt) => (
                  <Button
                    key={amt}
                    variant="outline"
                    size="sm"
                    className="text-sm"
                    onClick={() => setCustomAmount(String(amt))}
                  >
                    ${amt}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Frequency Toggle */}
          {selectedTier !== "custom" && (
            <div className="max-w-md mx-auto mt-8 p-4 rounded-xl bg-muted/50">
              <label className="flex items-center justify-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  checked={isRecurring}
                  onChange={() => setIsRecurring(true)}
                  className="sr-only peer"
                />
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 peer-checked:bg-foroz-600 peer-checked:text-white peer-checked:border-foroz-600 transition-all">
                      <RecurringIcon className="h-5 w-5" />
                  <span>Monthly (Recommended)</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-foroz-green-100 text-foroz-green-700 dark:bg-foroz-green-900/30 dark:text-foroz-green-400">
                    Save 10%
                  </span>
                </span>
              </label>
              <label className="flex items-center justify-center gap-3 cursor-pointer mt-3">
                <input
                  type="radio"
                  name="frequency"
                  checked={!isRecurring}
                  onChange={() => setIsRecurring(false)}
                  className="sr-only peer"
                />
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 peer-checked:bg-foroz-600 peer-checked:text-white peer-checked:border-foroz-600 transition-all">
                      <BanknoteIcon className="h-5 w-5" />
                  <span>One-Time</span>
                </span>
              </label>
            </div>
          )}

          {/* Donate Button */}
          <div className="max-w-md mx-auto mt-10">
            <Button
              asChild
              size="lg"
              className="w-full gap-2 py-4 text-lg bg-foroz-600 hover:bg-foroz-700 text-white shadow-lg shadow-foroz-500/25"
              disabled={selectedTier === "custom" && (!customAmount || parseInt(customAmount) < 1)}
            >
              <Link
                to={`/donate/checkout?${new URLSearchParams({
                  tier: selectedTier || "",
                  amount: selectedTier === "custom" ? customAmount : givingTiers.find(t => t.id === selectedTier)?.amount?.toString() || "",
                  recurring: isRecurring.toString(),
                })}`}
              >
                Continue to Secure Checkout
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-4">
              <Shield className="h-4 w-4 inline mr-1" />
              Secure SSL encrypted checkout powered by Stripe
            </p>
          </div>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="campaigns-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="campaigns-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Campaigns
            </h2>
            <p className="text-lg text-muted-foreground">
              Support a specific initiative that resonates with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="h-full overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 capitalize">{campaign.tag}</Badge>
                </div>
                <CardContent className="p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{campaign.description}</p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Raised</span>
                      <span className="font-semibold text-foreground">${campaign.raised.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-foroz-500 to-foroz-green-500 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{Math.round((campaign.raised / campaign.goal) * 100)}% funded</span>
                      <span>Goal: ${campaign.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Deadline: {new Date(campaign.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>

                  <Button asChild className="w-full gap-2" variant="outline">
                    <Link to={`/donate/checkout?campaign=${campaign.id}`}>Support This Campaign</Link>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Trust */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="trust-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Donors Trust FOROZ
            </h2>
            <p className="text-lg text-muted-foreground">
              We're committed to the highest standards of accountability and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Secure Donations", desc: "PCI DSS Level 1 certified. Bank-grade encryption." },
              { icon: Award, title: "Top-Rated Nonprofit", desc: "Guidestar Platinum Seal, Charity Navigator 4-Star." },
              { icon: Users, title: "Donor Privacy", desc: "We never sell or share donor information." },
              { icon: BookOpen, title: "Transparent Reporting", desc: "Quarterly impact reports, annual audited financials." },
              { icon: Globe, title: "Global Reach", desc: "Programs in 47 countries with local partners." },
              { icon: Award, title: "Efficient Operations", desc: "82% program ratio exceeds nonprofit benchmarks." },
              { icon: Info, title: "Dedicated Support", desc: "Donor care team available 24/7 via chat/email." },
              { icon: AlertCircle, title: "Ethical Fundraising", desc: "AFP Code of Ethics. No pressure tactics." },
            ].map((item, index) => (
              <Card key={item.title} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4 mx-auto">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="faq-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about giving to FOROZ.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-background border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-medium text-foreground pr-8">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-slide-down">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="other-ways-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="other-ways-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Other Ways to Give
            </h2>
            <p className="text-lg text-muted-foreground">
              Every contribution makes a difference. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: CreditCard, title: "Credit/Debit Card", desc: "Visa, Mastercard, Amex, Discover. Instant processing." },
              { icon: BanknoteIcon, title: "Bank Transfer (ACH)", desc: "Low fees, ideal for large gifts. Contact us for details." },
              { icon: RecurringIcon, title: "Monthly Giving", desc: "Sustained impact. Set up automatic monthly donations." },
              { icon: Shield, title: "Stock & Crypto", desc: "Donate appreciated securities, Bitcoin, Ethereum, USDC." },
              { icon: Users, title: "Employer Matching", desc: "Double your impact. Check if your company matches gifts." },
              { icon: Globe, title: "Legacy & Planned Giving", desc: "Bequests, charitable trusts, donor-advised funds." },
            ].map((item, index) => (
              <Card key={item.title} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4 mx-auto">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
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
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              Join 1,200+ donors changing lives through education. Your gift today empowers a student tomorrow.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
              <Link to={`/donate/checkout?${new URLSearchParams({ tier: selectedTier || "course", recurring: isRecurring.toString() })}`} className="text-white">
                Make a Donation Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
}