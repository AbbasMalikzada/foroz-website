"use client"

import * as React from "react"
import { Menubar, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Menu, X, Sun, Moon, Globe, GraduationCap, Briefcase, Heart, Users, Award, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Programs", href: "/programs", icon: GraduationCap },
  { name: "Opportunities", href: "/opportunities", icon: Briefcase },
  { name: "Impact", href: "/impact", icon: Award },
  { name: "Get Involved", href: "/get-involved", icon: Heart },
  { name: "About", href: "/about", icon: Users },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2" aria-label="FOROZ Home">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-foroz-600 to-foroz-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-semibold text-xl text-foreground">FOROZ</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild size="sm">
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild size="sm" variant="default">
              <Link to="/programs/enroll">Start Learning</Link>
            </Button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2" aria-label="FOROZ Home">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-foroz-600 to-foroz-green-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="font-semibold text-xl text-foreground">FOROZ</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link to="/donate">Donate</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/programs/enroll">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 animate-slide-down">
          <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            <div className="pt-4 border-t flex flex-col space-y-2">
              <Button asChild className="w-full justify-start" variant={theme === "dark" ? "secondary" : "outline"}>
                <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>Donate</Link>
              </Button>
              <Button asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/programs/enroll">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}