import { Link } from "react-router-dom"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { api } from "@/lib/api"
import { cn } from "@/lib/utils"
import { blogPosts } from "@/data/blogData"
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Briefcase,
  Award,
  Heart,
  Globe,
  Sparkles,
  Lightbulb,
  Leaf,
  Star,
  Share2,
  Bookmark,
  ChevronDown,
  GraduationCap,
} from "lucide-react"
import { useState, useMemo } from "react"

const categories = [
  { id: "all", label: "All Posts", icon: BookOpen },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "opportunities", label: "Opportunities", icon: Briefcase },
  { id: "impact", label: "Impact Stories", icon: Award },
  { id: "youth", label: "Youth Voices", icon: Heart },
  { id: "innovation", label: "Innovation", icon: Lightbulb },
  { id: "sdgs", label: "SDGs", icon: Globe },
]

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [subscribing, setSubscribing] = useState(false)
  const postsPerPage = 6

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribing(true)
    try {
      await api.post("/newsletter", { email: newsletterEmail })
      toast.success("Subscribed! Check your inbox for a welcome email.")
      setNewsletterEmail("")
    } catch {
      toast.error("Something went wrong — please try again.")
    } finally {
      setSubscribing(false)
    }
  }

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * 6
    return filteredPosts.slice(start, start + 6)
  }, [filteredPosts, currentPage])

  const totalPages = Math.ceil(filteredPosts.length / 6)

  function EmptyState() {
    return (
      <div className="text-center py-16">
        <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
      </div>
    )
  }

  function PostCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
    return (
      <article
        key={post.slug}
        className={cn(
          "bg-card border overflow-hidden hover:shadow-lg transition-shadow animate-slide-up",
          viewMode === "grid" ? "" : "flex flex-col md:flex-row"
        )}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <Link to={`/blog/${post.slug}`}>
          <div className={cn("relative h-48 overflow-hidden", viewMode === "list" ? "md:w-64 md:flex-shrink-0" : "")}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <Badge variant="secondary" className="absolute top-3 left-3 capitalize">{post.category}</Badge>
          </div>
        </Link>
        <div className={cn("p-5 flex flex-col", viewMode === "list" ? "flex-1" : "flex-1 flex flex-col")}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
            {post.tags.length > 2 && <Badge variant="outline" className="text-xs">+{post.tags.length - 2} more</Badge>}
          </div>
          <div className="flex items-center gap-2 mt-auto pt-4 border-t">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} alt={post.author} className="w-8 h-8 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{post.author}</p>
              <p className="text-xs text-muted-foreground">{post.authorRole}</p>
            </div>
            <Button asChild variant="outline" size="sm" className="gap-1 flex-shrink-0">
              <Link to={`/blog/${post.slug}`}>Read More</Link>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>
    )
  }

  function FeaturedPost({ post }: { post: typeof blogPosts[0] }) {
    return (
      <article className="grid lg:grid-cols-3 gap-6 bg-card border overflow-hidden hover:shadow-xl transition-shadow">
        <Link to={`/blog/${post.slug}`}>
          <div className="lg:col-span-2 relative h-full min-h-[300px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 to-transparent">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">{post.title}</h2>
              <p className="text-muted-foreground text-sm">{post.excerpt}</p>
            </div>
          </div>
        </Link>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} alt={post.author} className="w-8 h-8 rounded-full" />
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.authorRole}</p>
              </div>
            </div>
          </div>
          <Button asChild variant="outline" className="w-full gap-2">
            <Link to={`/blog/${post.slug}`}>Read Full Article</Link>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </article>
    )
  }

  function PostsList() {
    if (filteredPosts.length === 0) {
      return <EmptyState />
    }

    return (
      <div>
        <div className={cn(
          "gap-6",
          viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col space-y-4"
        )}>
          {paginatedPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum
              if (totalPages <= 5) pageNum = i + 1
              else if (currentPage <= 3) pageNum = i + 1
              else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i
              else pageNum = currentPage - 2 + i
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={cn(
                    "w-10 h-10 rounded-lg font-medium transition-colors",
                    currentPage === pageNum
                      ? "bg-foroz-600 text-white"
                      : "text-muted-foreground hover:bg-accent"
                  )}
                  aria-label={`Page ${pageNum}`}
                  aria-current={currentPage === pageNum ? "page" : undefined}
                >
                  {pageNum}
                </button>
              )
            })}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </nav>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              FOROZ Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Stories, Research &
              <br />
              <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                Global Perspectives
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Deep dives into education equity, youth empowerment, opportunity access, and the Sustainable Development Goals. Written by our team, partners, and the youth we serve.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {blogPosts.length}+ Articles</span>
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> Expert Authors</span>
              <span className="flex items-center gap-1"><Globe className="h-4 w-4" /> Global Perspectives</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-background" aria-labelledby="featured-heading">
        <div className="container px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
            <h2 id="featured-heading" className="text-3xl font-bold text-foreground">Featured Stories</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.featured).slice(0, 2).map((post, index) => (
              <FeaturedPost key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="all-posts-heading">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
            <h2 id="all-posts-heading" className="text-3xl font-bold text-foreground">All Articles</h2>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg bg-background focus:ring-2 focus:ring-foroz-500 focus:border-transparent"
                  aria-label="Search articles"
                />
              </div>
              <div className="flex items-center gap-2" role="group" aria-label="Category filter">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setCurrentPage(1); }}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5",
                      selectedCategory === cat.id
                        ? "bg-foroz-600 text-white shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                    aria-pressed={selectedCategory === cat.id}
                  >
                    <cat.icon className="h-4 w-4" />
                    {cat.label}
                  </button>
                ))}
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

          <PostsList />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-foroz-600 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-foroz-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles, research, and opportunities delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={handleNewsletterSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-foroz-200 focus:border-white focus:ring-foroz-400"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              disabled={subscribing}
              className="w-full sm:w-auto gap-2 px-6 py-2 bg-white text-foroz-600 hover:bg-foroz-50"
              variant="default"
            >
              {subscribing ? "Subscribing..." : "Subscribe"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
          <p className="mt-4 text-sm text-foroz-200">
            By subscribing, you agree to our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </div>
  )
}

function Grid({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
}
function List({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
}