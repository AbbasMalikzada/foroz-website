import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Mail,
  User,
  Tag,
  BookOpen,
  Globe,
  TrendingUp,
  Target,
  Leaf,
  Users,
  Lightbulb,
  Award,
  Search,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
} from "lucide-react"
import { useParams } from "react-router-dom"
import { blogPosts } from "@/data/blogData"

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/blog">← Back to Blog</Link>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <article className="flex flex-col">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container px-4 py-8 md:py-12">
          <Button asChild variant="ghost" size="sm" className="mb-6 gap-1">
            <Link to="/blog">
              <ChevronLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <Badge variant="secondary" className="capitalize">{post.category}</Badge>
              {post.featured && <Badge variant="secondary" className="bg-amber-500 text-amber-900">Featured</Badge>}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">{post.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{post.excerpt}</p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} alt={post.author} className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-xs">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
              <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</div>
              <div className="flex items-center gap-1"><Eye className="h-4 w-4" /> {post.views?.toLocaleString() || "1.2K"} views</div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {post.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
              {post.tags.length > 4 && <Badge variant="secondary" className="text-xs">+{post.tags.length - 4} more</Badge>}
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" /> Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Bookmark className="h-4 w-4" /> Save
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-4 w-4" /> Support
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="flex-1 bg-muted/30 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-6">
                {/* Author Card */}
                <Card className="sticky top-24 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`}
                        alt={post.author}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.authorBio || "Passionate about education equity and youth empowerment. Writing about impact, innovation, and the future of learning."}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1 flex-1">
                        <Mail className="h-4 w-4" /> Connect
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 flex-1">
                        <User className="h-4 w-4" /> Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Tag className="h-4 w-4" /> Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Share */}
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Share2 className="h-4 w-4" /> Share This Article
                    </h4>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1 flex-1">
                        <Facebook className="h-4 w-4" /> Facebook
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1 flex-1">
                        <Twitter className="h-4 w-4" /> Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1 flex-1">
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-0 shadow-sm bg-foroz-50 dark:bg-foroz-900/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground mb-4">Get our latest stories delivered to your inbox.</p>
                    <form className="space-y-2">
                      <Input type="email" placeholder="Enter your email" className="text-sm" />
                      <Button className="w-full gap-2" size="sm">
                        Subscribe
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </aside>

              {/* Article Body */}
              <div className="lg:col-span-3 space-y-8">
                <div className="prose prose-lg prose-foroz max-w-none">
                  <div className="aspect-video rounded-xl overflow-hidden mb-8">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Article content would go here - using placeholder */}
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg font-medium">
                      This is the full article content for "{post.title}". In a production implementation, this would contain the complete article text with proper formatting, images, quotes, and multimedia elements.
                    </p>
                    <p>
                      The article would cover topics related to {post.category} and explore themes around {post.tags.slice(0, 3).join(", ")}. Our authors include FOROZ team members, partner organizations, and the youth we serve — providing diverse perspectives on education, opportunity, and sustainable development.
                    </p>
                    <blockquote className="border-l-4 border-foroz-500 pl-6 my-8 italic text-foreground/80">
                      "Education is the most powerful weapon which you can use to change the world. When we invest in youth education, we invest in the future of our communities and our planet."
                      <footer className="mt-2 text-sm text-muted-foreground not-italic">— Nelson Mandela</footer>
                    </blockquote>
                    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Key Takeaways</h2>
                    <ul className="space-y-3 list-disc list-inside">
                      <li>Quality education is a fundamental right, not a privilege</li>
                      <li>Technology can democratize access to learning</li>
                      <li>Youth leadership drives sustainable community change</li>
                      <li>Partnerships amplify individual impact</li>
                      <li>Measurement and transparency build trust</li>
                    </ul>
                    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What's Next</h2>
                    <p>
                      FOROZ continues to expand its reach through new partnerships, innovative programs, and youth-led initiatives. In 2025, we're launching new programs in climate education, digital entrepreneurship, and mental health support for learners worldwide.
                    </p>
                    <p className="font-medium">
                      Want to get involved? <Link to="/get-involved" className="text-foroz-600 hover:text-foroz-700 underline">Explore volunteer opportunities</Link>, <Link to="/donate" className="text-foroz-600 hover:text-foroz-700 underline">make a donation</Link>, or <Link to="/contact" className="text-foroz-600 hover:text-foroz-700 underline">contact us</Link> to learn more.
                    </p>
                  </div>
                </div>

                {/* Tags & Share */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="h-5 w-5 text-muted-foreground" />
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Share2 className="h-4 w-4" /> Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Bookmark className="h-4 w-4" /> Save
                    </Button>
                  </div>
                </div>

                {/* Author Bio */}
                <Card className="border-0 shadow-sm mt-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`}
                        alt={post.author}
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">{post.author}</h4>
                          <Badge variant="secondary" className="text-xs">{post.authorRole}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {post.authorBio || "Passionate about education equity and youth empowerment. Writing about impact, innovation, and the future of learning."}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="mt-12 lg:col-span-4" aria-labelledby="related-heading">
                  <h2 id="related-heading" className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <article key={relatedPost.slug} className="bg-card border overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                          <Badge variant="secondary" className="absolute top-3 left-3 capitalize">{relatedPost.category}</Badge>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(relatedPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {relatedPost.readTime}</span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{relatedPost.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                          <Button asChild variant="outline" size="sm" className="w-full gap-2">
                            <Link to={`/blog/${relatedPost.slug}`}>Read More</Link>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </article>
  )
}

function Calendar({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
}
function Facebook({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}
function Twitter({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
}
function Linkedin({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
}