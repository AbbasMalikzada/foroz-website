import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  GraduationCap,
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  Globe,
  Laptop,
  Smartphone,
  Award,
  Star,
  Filter,
  ChevronDown,
  Search,
  Tag,
} from "lucide-react"
import { useState, useMemo } from "react"

const categories = [
  { id: "all", label: "All Courses", icon: BookOpen },
  { id: "english", label: "English Language", icon: Globe },
  { id: "math", label: "Mathematics", icon: BookOpen },
  { id: "digital", label: "Digital Skills", icon: Laptop },
  { id: "leadership", label: "Leadership", icon: Users },
  { id: "entrepreneurship", label: "Entrepreneurship", icon: Star },
]

const courses = [
  {
    id: 1,
    title: "English for Academic Purposes",
    category: "english",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Self-paced",
    enrolled: 2847,
    rating: 4.8,
    description: "Master academic English for university studies. Covers essay writing, research skills, presentation techniques, and academic vocabulary.",
    skills: ["Academic Writing", "Research Methods", "Critical Reading", "Presentations"],
    instructor: "Dr. Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Business English Communication",
    category: "english",
    level: "Upper Intermediate",
    duration: "6 weeks",
    format: "Live + Self-paced",
    enrolled: 1923,
    rating: 4.9,
    description: "Professional English for workplace success. Email writing, meetings, negotiations, networking, and cross-cultural communication.",
    skills: ["Business Writing", "Negotiation", "Meetings", "Cross-cultural"],
    instructor: "James Chen",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "IELTS/TOEFL Preparation",
    category: "english",
    level: "Advanced",
    duration: "12 weeks",
    format: "Self-paced",
    enrolled: 3456,
    rating: 4.7,
    description: "Comprehensive test preparation with practice exams, strategies, and personalized feedback. Target band 7.5+ / 100+.",
    skills: ["Test Strategies", "Time Management", "Speaking Practice", "Writing Tasks"],
    instructor: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f9?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Mathematics for Data Science",
    category: "math",
    level: "Beginner to Intermediate",
    duration: "10 weeks",
    format: "Self-paced",
    enrolled: 1567,
    rating: 4.8,
    description: "Essential mathematics for data science and ML. Linear algebra, calculus, probability, statistics, and optimization.",
    skills: ["Linear Algebra", "Calculus", "Statistics", "Optimization"],
    instructor: "Prof. Alan Kumar",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Calculus I: Foundations",
    category: "math",
    level: "Beginner",
    duration: "8 weeks",
    format: "Live + Self-paced",
    enrolled: 2134,
    rating: 4.6,
    description: "Master limits, derivatives, and integrals. Real-world applications in physics, engineering, and economics.",
    skills: ["Limits", "Derivatives", "Integrals", "Applications"],
    instructor: "Dr. Priya Sharma",
    image: "https://images.unsplash.com/photo-1635372341421-8e70b7b3e1f4?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "Statistics & Probability",
    category: "math",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Self-paced",
    enrolled: 1876,
    rating: 4.7,
    description: "Descriptive and inferential statistics, probability distributions, hypothesis testing, and regression analysis.",
    skills: ["Descriptive Stats", "Probability", "Hypothesis Testing", "Regression"],
    instructor: "Prof. Michael Chen",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    id: 7,
    title: "Python Programming Fundamentals",
    category: "digital",
    level: "Beginner",
    duration: "8 weeks",
    format: "Self-paced",
    enrolled: 4521,
    rating: 4.9,
    description: "Learn Python from zero to hero. Variables, control flow, functions, OOP, file handling, and basic algorithms.",
    skills: ["Python Syntax", "Data Structures", "OOP", "Problem Solving"],
    instructor: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
  },
  {
    id: 8,
    title: "Web Development Bootcamp",
    category: "digital",
    level: "Beginner to Intermediate",
    duration: "16 weeks",
    format: "Live + Self-paced",
    enrolled: 2987,
    rating: 4.8,
    description: "Full-stack web development: HTML/CSS, JavaScript, React, Node.js, databases, and deployment. Build real projects.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases"],
    instructor: "Sarah Kim",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
  },
  {
    id: 9,
    title: "Data Analysis with Python",
    category: "digital",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Self-paced",
    enrolled: 2341,
    rating: 4.7,
    description: "Pandas, NumPy, Matplotlib, Seaborn for data manipulation and visualization. Real datasets and case studies.",
    skills: ["Pandas", "NumPy", "Visualization", "EDA"],
    instructor: "Dr. Lisa Wang",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    id: 10,
    title: "Leadership Essentials",
    category: "leadership",
    level: "All Levels",
    duration: "6 weeks",
    format: "Self-paced",
    enrolled: 1876,
    rating: 4.6,
    description: "Core leadership skills: communication, decision-making, team building, emotional intelligence, and leading change.",
    skills: ["Communication", "Decision Making", "Team Building", "EQ"],
    instructor: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
  },
  {
    id: 11,
    title: "Social Entrepreneurship",
    category: "entrepreneurship",
    level: "Beginner",
    duration: "8 weeks",
    format: "Self-paced",
    enrolled: 1234,
    rating: 4.8,
    description: "Build ventures that solve social problems. Business modeling, impact measurement, funding, and scaling strategies.",
    skills: ["Business Model", "Impact Measurement", "Funding", "Scaling"],
    instructor: "Aisha Patel",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop",
  },
  {
    id: 12,
    title: "Digital Marketing Fundamentals",
    category: "digital",
    level: "Beginner",
    duration: "6 weeks",
    format: "Self-paced",
    enrolled: 2156,
    rating: 4.7,
    description: "SEO, content marketing, social media, email marketing, analytics, and paid advertising. Hands-on campaigns.",
    skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
    instructor: "David Park",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
]

export function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "Intermediate": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "Upper Intermediate": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
      case "Advanced": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foroz-100 text-foroz-700 dark:bg-foroz-900/30 dark:text-foroz-300 text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              Education Academy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Free, High-Quality
              <br />
              <span className="bg-gradient-to-r from-foroz-600 via-foroz-500 to-foroz-green-600 bg-clip-text text-transparent">
                Online Courses
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Access world-class education in English, Mathematics, Digital Skills, Leadership, and Entrepreneurship. No prerequisites. No fees. Learn at your own pace.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Completely Free</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Self-Paced Learning</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Verified Certificates</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-foroz-green-600" /> Mobile Accessible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-background border-y">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search courses, skills, instructors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg bg-background focus:ring-2 focus:ring-foroz-500 focus:border-transparent"
                  aria-label="Search courses"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2" role="group" aria-label="Category filter">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
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
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 bg-background" aria-labelledby="courses-heading">
        <div className="container px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div>
              <h2 id="courses-heading" className="text-3xl font-bold text-foreground">
                {selectedCategory === "all" ? "All Courses" : categories.find(c => c.id === selectedCategory)?.label}
              </h2>
              <p className="text-muted-foreground mt-1">
                {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/programs/enroll">Enroll Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className={cn(
              "gap-6",
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col space-y-4"
            )}>
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} viewMode={viewMode} getLevelColor={getLevelColor} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="how-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to start learning today.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Browse Courses", description: "Explore our catalog of free courses across multiple subjects and levels.", icon: BookOpen },
              { step: "02", title: "Enroll Free", description: "Click enroll on any course. No application, no fees, no prerequisites.", icon: Users },
              { step: "03", title: "Learn at Your Pace", description: "Access materials anytime, anywhere. Self-paced or join live sessions.", icon: Clock },
              { step: "04", title: "Earn Certificates", description: "Complete assessments to earn verified certificates for your portfolio.", icon: Award },
            ].map((item, index) => (
              <Card key={item.step} className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow bg-background text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-4 mx-auto">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-foroz-50 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 mb-3 mx-auto">
                  <item.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
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
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-foroz-100 mb-8">
              Join 12,500+ learners worldwide. All courses are completely free with no hidden costs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg bg-white text-foroz-700 hover:bg-foroz-50" variant="default">
                <Link to="/programs/enroll" className="text-white">Browse All Courses</Link>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg border-white text-white hover:bg-white/10">
                <Link to="/contact">Need Help?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CourseCard({ course, viewMode, getLevelColor }: { course: typeof courses[0]; viewMode: "grid" | "list"; getLevelColor: (level: string) => string }) {
  if (viewMode === "list") {
    return (
      <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="relative w-24 h-16 sm:w-32 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="secondary" className={getLevelColor(course.level)}>{course.level}</Badge>
                <Badge variant="outline">{course.duration}</Badge>
                <Badge variant="outline">{course.format}</Badge>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {course.enrolled.toLocaleString()} enrolled</span>
                <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-500 fill-current" /> {course.rating}</span>
                <span className="flex items-center gap-1"><Laptop className="h-3.5 w-3.5" /> {course.format}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {course.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                ))}
                {course.skills.length > 3 && <Badge variant="secondary" className="text-xs">+{course.skills.length - 3} more</Badge>}
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link to={`/programs/${course.id}`}>View Details</Link>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-background flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="secondary" className={getLevelColor(course.level)}>{course.level}</Badge>
        </div>
      </div>
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">{course.duration}</Badge>
          <Badge variant="outline" className="text-xs">{course.format}</Badge>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{course.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
          ))}
          {course.skills.length > 3 && <Badge variant="secondary" className="text-xs">+{course.skills.length - 3} more</Badge>}
        </div>
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {course.enrolled.toLocaleString()}</span>
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-500 fill-current" /> {course.rating}</span>
          </div>
        </div>
        <Button asChild className="w-full mt-4 gap-2" variant="outline">
          <Link to={`/programs/${course.id}`}>View Course</Link>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

// Missing icons
function Grid({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
}
function List({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
}