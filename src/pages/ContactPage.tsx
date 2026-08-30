import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Mail as MailIcon,
  MapPin,
  Phone as PhoneIcon,
  Clock as ClockIcon,
  Globe,
  Send,
  MessageSquare,
  Building2,
  User,
  Shield,
  CheckCircle,
  Loader2,
  AlertCircle,
  Info,
  Calendar as CalendarIcon,
} from "lucide-react"
import { useState } from "react"
import { api } from "@/lib/api"

const contactInfo = [
  {
    title: "General Inquiries",
    email: "hello@foroz.org",
    description: "General questions, media requests, speaking invitations",
    icon: MessageSquare,
    responseTime: "Within 24 hours",
  },
  {
    title: "Programs & Education",
    email: "education@foroz.org",
    description: "Course questions, enrollment help, certificate verification",
    icon: Globe,
    responseTime: "Within 48 hours",
  },
  {
    title: "Opportunities & Partnerships",
    email: "partnerships@foroz.org",
    description: "Scholarship providers, internship hosts, NGO collaborations",
    icon: Building2,
    responseTime: "Within 2 business days",
  },
  {
    title: "Donations & Fundraising",
    email: "donate@foroz.org",
    description: "Donation questions, recurring gifts, matching gifts, tax receipts",
    icon: Shield,
    responseTime: "Within 24 hours",
  },
  {
    title: "Volunteer & Careers",
    email: "people@foroz.org",
    description: "Volunteer applications, job inquiries, HR questions",
    icon: User,
    responseTime: "Within 48 hours",
  },
  {
    title: "Media & Press",
    email: "press@foroz.org",
    description: "Press releases, interviews, brand assets, media kit",
    icon: Globe,
    responseTime: "Within 24 hours",
  },
]

const faqs = [
  {
    question: "How can I verify my donation was received?",
    answer: "You'll receive an automatic email receipt immediately after donating. For donations over $250, we also mail an IRS-compliant acknowledgment letter. Check your spam folder if you don't see it.",
  },
  {
    question: "Can I volunteer if I don't have professional experience?",
    answer: "Absolutely! We have roles for all skill levels. Many volunteers start with content creation, research, or community outreach. We provide training and mentorship.",
  },
  {
    question: "How do I get my organization's opportunities listed?",
    answer: "Email partnerships@foroz.org with details. We verify all opportunities before publishing. The process takes 3-5 business days. There's no fee to list.",
  },
  {
    question: "Do you offer certificates for completed courses?",
    answer: "Yes! All courses offer verified digital certificates upon completion. Certificates include your name, course details, completion date, and a unique verification code.",
  },
  {
    question: "Can I apply for multiple opportunities at once?",
    answer: "Yes! You can apply to as many as you qualify for. Each application is separate. We recommend tailoring each application to the specific opportunity.",
  },
  {
    question: "Is FOROZ a registered nonprofit?",
    answer: "Yes, FOROZ is a registered 501(c)(3) nonprofit organization (EIN: 92-1234567). All donations are tax-deductible to the fullest extent allowed by law.",
  },
]

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      await api.post("/contact", formData)
      setStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Get in Touch
              <br />
              <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you have a question about our programs, want to partner with us, or just want to say hello — we'd love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Average response: {"<"} 24 hrs</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> 7 languages supported</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> 98% satisfaction rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="contact-methods-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="contact-methods-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose How to Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Pick the method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <Card key={item.title} className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-background animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foroz-600 hover:text-foroz-700 dark:text-foroz-400 dark:hover:text-foroz-300"
                  >
                    {item.email}
                    <MailIcon className="h-4 w-4" />
                  </a>
                  <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs text-muted-foreground">
                    <ClockIcon className="h-3.5 w-3.5" />
                    <span>{item.responseTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Address */}
          <Card className="max-w-2xl mx-auto mt-12 border-0 shadow-lg bg-background">
            <CardHeader className="text-center pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4 mx-auto">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Visit Our Headquarters</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <address className="not-italic space-y-2 text-muted-foreground">
                <p>FOROZ Global Headquarters</p>
                <p>123 Education Avenue, Suite 400</p>
                <p>New York, NY 10001, USA</p>
                <div className="pt-4 border-t flex justify-center gap-4">
                  <a href="tel:+12125550100" className="flex items-center gap-1 text-sm hover:text-foroz-600 transition-colors">
                    <PhoneIcon className="h-4 w-4" /> +1 (212) 555-0100
                  </a>
                  <a href="mailto:hello@foroz.org" className="flex items-center gap-1 text-sm hover:text-foroz-600 transition-colors">
                    <MailIcon className="h-4 w-4" /> hello@foroz.org
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Office hours: Mon-Fri 9am-6pm EST | Virtual meetings available worldwide
                </p>
              </address>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="form-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="border-0 shadow-lg bg-background">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">Contact Form</CardTitle>
                <p className="text-muted-foreground">All fields are required unless marked optional.</p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })} required disabled={status === "submitting"}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="programs">Programs & Education</SelectItem>
                        <SelectItem value="opportunities">Opportunities & Partnerships</SelectItem>
                        <SelectItem value="donations">Donations & Fundraising</SelectItem>
                        <SelectItem value="volunteer">Volunteer & Careers</SelectItem>
                        <SelectItem value="press">Media & Press</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  {status === "success" && (
                    <div className="p-4 rounded-lg bg-foroz-green-50 text-foroz-green-700 dark:bg-foroz-green-900/30 dark:text-foroz-green-400 flex items-start gap-3 animate-slide-down">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Message sent successfully!</p>
                        <p className="text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 rounded-lg bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 flex items-start gap-3 animate-slide-down">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Something went wrong</p>
                        <p className="text-sm">Please try again or email us directly at hello@foroz.org</p>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full gap-2 py-3 text-lg"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="underline hover:text-foroz-600">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="/terms" className="underline hover:text-foroz-600">Terms of Service</a>.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
              {[
                { title: "FAQ", desc: "Quick answers to common questions", href: "/faq", icon: Info },
                { title: "Live Chat", desc: "Chat with our team (Mon-Fri 9-5 EST)", href: "/chat", icon: MessageSquare },
                { title: "Schedule a Call", desc: "Book a 15-min discovery call", href: "/schedule", icon: CalendarIcon },
              ].map((item, index) => (
                <a key={item.title} href={item.href} className="p-6 rounded-xl bg-background border hover:border-foroz-300 dark:hover:border-foroz-700 transition-colors animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-3 mx-auto">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="faq-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-muted/50 border rounded-xl overflow-hidden">
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-foroz-600 via-foroz-700 to-foroz-green-700">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              Our team is ready to help. Reach out any way you prefer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
                <a href="mailto:hello@foroz.org" className="text-white">Email Us</a>
                <MailIcon className="h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                <a href="tel:+12125550100">Call Us: +1 (212) 555-0100</a>
                <PhoneIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
}