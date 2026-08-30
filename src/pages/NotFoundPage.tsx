import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Home,
  Search,
  BookOpen,
  Briefcase,
  Award,
  Heart,
  Users,
  MessageSquare,
  Mail,
  Sparkles,
} from "lucide-react"

const popularLinks = [
  { href: "/", label: "Home", icon: Home, description: "Back to homepage" },
  { href: "/programs", label: "Programs", icon: BookOpen, description: "Free courses & education" },
  { href: "/opportunities", label: "Opportunities", icon: Briefcase, description: "Scholarships & internships" },
  { href: "/impact", label: "Our Impact", icon: Award, description: "Results & transparency" },
  { href: "/get-involved", label: "Get Involved", icon: Heart, description: "Volunteer, donate, partner" },
  { href: "/about", label: "About Us", icon: Users, description: "Mission, team, governance" },
  { href: "/blog", label: "Blog", icon: Sparkles, description: "Stories & insights" },
  { href: "/contact", label: "Contact", icon: MessageSquare, description: "Get in touch" },
]

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 px-4">
      <div className="text-center max-w-md mx-auto py-16">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-foroz-500/20 to-foroz-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative flex items-center justify-center">
            <span className="text-9xl md:text-12xl font-bold bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
              404
            </span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-sm mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg" variant="default">
            <Link to="/">
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg">
            <Link to="/blog">
              <Search className="h-5 w-5" />
              Search Articles
            </Link>
          </Button>
        </div>

        <div className="w-full border-t my-12" />
      </div>

      {/* Helpful Links */}
      <div className="w-full max-w-4xl px-4 pb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="p-4 rounded-xl bg-background border hover:border-foroz-300 dark:hover:border-foroz-700 transition-colors group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-3 group-hover:scale-110 transition-transform">
                <link.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{link.label}</h3>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-foroz-50 dark:bg-foroz-900/30 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">Still Can't Find What You Need?</h3>
          <p className="text-muted-foreground mb-4">
            Our team is here to help. Reach out and we'll point you in the right direction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
              <Link to="/contact">
                <Mail className="h-4 w-4" />
                Email Support
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full sm:w-auto gap-2">
              <Link to="/faq">
                <Search className="h-4 w-4" />
                Browse FAQ
              </Link>
            </Button>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <div className="mt-16 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Did you know?
          </p>
          <div className="max-w-md mx-auto text-sm text-muted-foreground leading-relaxed">
            FOROZ operates in <strong className="text-foreground">47 countries</strong> with <strong className="text-foreground">12,500+ learners</strong> across <strong className="text-foreground">84 free courses</strong>. Every page you visit helps us reach more youth!
          </div>
        </div>
      </div>
    </div>
  )
}