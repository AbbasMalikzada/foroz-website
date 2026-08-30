import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Mail, MapPin, Phone, Globe, Award, Users, Heart, BookOpen } from "lucide-react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "@/components/icons/social"

const footerNavigation = {
  Programs: [
    { name: "All Courses", href: "/programs" },
    { name: "English Language", href: "/programs?category=english" },
    { name: "Mathematics", href: "/programs?category=math" },
    { name: "Digital Skills", href: "/programs?category=digital" },
    { name: "Leadership", href: "/programs?category=leadership" },
    { name: "How to Enroll", href: "/programs#enroll" },
  ],
  Opportunities: [
    { name: "Scholarships", href: "/opportunities?type=scholarship" },
    { name: "Internships", href: "/opportunities?type=internship" },
    { name: "Mentorship", href: "/opportunities?type=mentorship" },
    { name: "Fellowships", href: "/opportunities?type=fellowship" },
    { name: "Volunteering", href: "/opportunities?type=volunteering" },
    { name: "Global Programs", href: "/opportunities?type=global" },
  ],
  Impact: [
    { name: "Our Results", href: "/impact" },
    { name: "Annual Reports", href: "/impact#reports" },
    { name: "Student Stories", href: "/impact#stories" },
    { name: "SDG Alignment", href: "/impact#sdgs" },
    { name: "Transparency", href: "/impact#transparency" },
  ],
  GetInvolved: [
    { name: "Donate", href: "/donate" },
    { name: "Volunteer", href: "/get-involved#volunteer" },
    { name: "Careers", href: "/get-involved#careers" },
    { name: "Partner With Us", href: "/get-involved#partner" },
    { name: "Fundraise", href: "/get-involved#fundraise" },
  ],
  About: [
    { name: "Our Story", href: "/about" },
    { name: "Mission & Values", href: "/about#values" },
    { name: "Leadership", href: "/about#leadership" },
    { name: "Governance", href: "/about#governance" },
    { name: "Careers", href: "/get-involved#careers" },
    { name: "Contact", href: "/contact" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/foroz", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/foroz", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/foroz", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/foroz", icon: Linkedin },
  { name: "YouTube", href: "https://youtube.com/@foroz", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground" aria-label="FOROZ Home">
              <span className="text-2xl font-bold bg-gradient-to-r from-foroz-600 to-foroz-green-600 bg-clip-text text-transparent">FOROZ</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Empowering youth and students through equitable access to quality education and meaningful opportunities. Building a generation of motivated, skilled, and socially responsible changemakers.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                Nonprofit 501(c)(3)
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Youth-Led
              </span>
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                SDG Aligned
              </span>
              <span className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                Global Reach
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Programs</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.Programs.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Opportunities</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.Opportunities.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Impact</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.Impact.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Get Involved</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.GetInvolved.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">About</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.About.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FOROZ. All rights reserved. Empowering youth worldwide.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-foreground transition-colors">Accessibility</Link>
              <Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}