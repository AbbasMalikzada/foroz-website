import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Calendar,
  Clock,
  User,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen,
  GraduationCap,
  PlayCircle,
  Download,
  Share2,
  Bookmark,
  MapPin,
  Laptop,
  Smartphone,
  Award,
  Link as LinkIcon,
} from "lucide-react"
import { Facebook, Twitter, Linkedin } from "@/components/icons/social"
import { useParams } from "react-router-dom"
import { useMemo } from "react"

const courses = [
  {
    id: 1,
    slug: "english-academic-purposes",
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
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Academic Vocabulary & Register",
      "Module 2: Essay Structure & Argumentation",
      "Module 3: Research Methods & Citations",
      "Module 4: Critical Reading & Analysis",
      "Module 5: Presentation Skills",
      "Module 6: Capstone Project",
    ],
    outcomes: [
      "Write university-level essays with confidence",
      "Conduct academic research effectively",
      "Deliver professional presentations",
      "Understand academic integrity standards",
    ],
  },
  {
    id: 2,
    slug: "business-english-communication",
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
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Professional Email Etiquette",
      "Module 2: Running Effective Meetings",
      "Module 3: Negotiation Language",
      "Module 4: Networking & Small Talk",
      "Module 4: Cross-Cultural Communication",
      "Module 6: Final Project: Business Pitch",
    ],
    outcomes: [
      "Write clear, professional emails",
      "Lead and participate in meetings",
      "Negotiate with confidence",
      "Build international professional networks",
    ],
  },
  {
    id: 3,
    slug: "ielts-toefl-preparation",
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
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f9?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Test Overview & Diagnostic",
      "Module 2: Reading Strategies",
      "Module 3: Listening Skills",
      "Module 4: Speaking Fluency",
      "Module 4: Writing Task 1 & 2",
      "Module 6: Full Mock Tests & Review",
    ],
    outcomes: [
      "Achieve target IELTS/TOEFL scores",
      "Master test-taking strategies",
      "Improve all four language skills",
      "Reduce test anxiety",
    ],
  },
  {
    id: 4,
    slug: "mathematics-data-science",
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
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Linear Algebra Foundations",
      "Module 2: Calculus for Optimization",
      "Module 3: Probability Theory",
      "Module 4: Statistical Inference",
      "Module 5: Optimization Techniques",
      "Module 6: Applied Projects",
    ],
    outcomes: [
      "Understand mathematical foundations of ML",
      "Implement algorithms from scratch",
      "Read and understand research papers",
      "Prepare for advanced data science courses",
    ],
  },
  {
    id: 5,
    slug: "calculus-foundations",
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
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Functions & Limits",
      "Module 2: Differentiation Rules",
      "Module 3: Applications of Derivatives",
      "Module 4: Integration Techniques",
      "Module 5: Applications of Integrals",
      "Module 6: Final Review & Exam Prep",
    ],
    outcomes: [
      "Solve calculus problems confidently",
      "Apply calculus to real-world problems",
      "Prepare for advanced math courses",
      "Build strong STEM foundation",
    ],
  },
  {
    id: 6,
    slug: "statistics-probability",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Data Visualization",
      "Module 2: Probability Distributions",
      "Module 3: Sampling & Estimation",
      "Module 4: Hypothesis Testing",
      "Module 5: Regression Analysis",
      "Module 6: Capstone Project",
    ],
    outcomes: [
      "Analyze data with statistical methods",
      "Design and interpret experiments",
      "Build predictive models",
      "Make data-driven decisions",
    ],
  },
  {
    id: 7,
    slug: "python-fundamentals",
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
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Python Basics & Setup",
      "Module 2: Control Flow & Functions",
      "Module 3: Data Structures",
      "Module 4: Object-Oriented Programming",
      "Module 5: File I/O & Error Handling",
      "Module 6: Final Project: CLI App",
    ],
    outcomes: [
      "Write clean, efficient Python code",
      "Solve algorithmic problems",
      "Build command-line applications",
      "Prepare for advanced Python courses",
    ],
  },
  {
    id: 8,
    slug: "web-development-bootcamp",
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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    modules: [
      "Module 1: HTML5 & CSS3 Fundamentals",
      "Module 2: JavaScript ES6+",
      "Module 3: React.js Fundamentals",
      "Module 4: Node.js & Express",
      "Module 5: Databases (SQL & MongoDB)",
      "Module 6: Deployment & DevOps",
      "Module 7: Capstone Project",
      "Module 8: Career Preparation",
    ],
    outcomes: [
      "Build full-stack web applications",
      "Deploy to cloud platforms",
      "Collaborate with Git/GitHub",
      "Ready for junior developer roles",
    ],
  },
  {
    id: 9,
    slug: "data-analysis-python",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Python for Data Science",
      "Module 2: NumPy & Pandas Mastery",
      "Module 3: Data Cleaning & Preprocessing",
      "Module 4: Exploratory Data Analysis",
      "Module 5: Statistical Visualization",
      "Module 6: Capstone Project",
    ],
    outcomes: [
      "Clean and analyze real-world datasets",
      "Create publication-quality visualizations",
      "Communicate insights effectively",
      "Build a data portfolio",
    ],
  },
  {
    id: 10,
    slug: "leadership-essentials",
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
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Leadership Styles & Self-Awareness",
      "Module 2: Communication & Influence",
      "Module 3: Team Dynamics & Motivation",
      "Module 4: Decision Making & Problem Solving",
      "Module 5: Emotional Intelligence",
      "Module 6: Leading Change & Innovation",
    ],
    outcomes: [
      "Develop your leadership style",
      "Build high-performing teams",
      "Make better decisions under pressure",
      "Lead with emotional intelligence",
    ],
  },
  {
    id: 11,
    slug: "social-entrepreneurship",
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
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Social Innovation & Design Thinking",
      "Module 2: Business Models for Impact",
      "Module 3: Measuring Social Impact",
      "Module 4: Funding & Sustainability",
      "Module 5: Scaling Strategies",
      "Module 6: Pitch & Launch",
    ],
    outcomes: [
      "Design a social venture",
      "Measure and communicate impact",
      "Secure funding for your venture",
      "Build sustainable organizations",
    ],
  },
  {
    id: 12,
    slug: "digital-marketing-fundamentals",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    modules: [
      "Module 1: Digital Marketing Landscape",
      "Module 2: SEO & Content Strategy",
      "Module 3: Social Media Marketing",
      "Module 4: Email & Automation",
      "Module 5: Paid Advertising (Google/Facebook)",
      "Module 6: Analytics & Optimization",
    ],
    outcomes: [
      "Run multi-channel marketing campaigns",
      "Analyze and optimize performance",
      "Build brand awareness",
      "Drive conversions and growth",
    ],
  },
]

export function ProgramDetailPage() {
  const { slug } = useParams()
  const course = useMemo(() => courses.find(c => c.slug === slug), [slug])

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Button asChild variant="default">
            <Link to="/programs">Browse All Courses</Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "Intermediate": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "Upper Intermediate": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
      case "Advanced": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      case "All Levels": return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-foroz-50 via-white to-foroz-green-50 dark:from-foroz-950 dark:via-gray-900 dark:to-foroz-green-950 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" className="capitalize">{course.category}</Badge>
              <Badge variant="outline">{course.level}</Badge>
              <Badge variant="outline">{course.duration}</Badge>
              <Badge variant="outline">{course.format}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> {course.instructor}</span>
              <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.enrolled.toLocaleString()} enrolled</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-500 fill-current" /> {course.rating}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
              <span className="flex items-center gap-1"><Badge variant="secondary" className={cn("capitalize", getLevelColor(course.level))}>{course.level}</Badge></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background" aria-labelledby="course-details-heading">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Enrollment CTA */}
              <Card className="border-0 shadow-sm bg-foroz-50 dark:bg-foroz-900/30 border-foroz-200 dark:border-foroz-800">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Ready to Start Learning?</h3>
                      <p className="text-sm text-muted-foreground">Join {course.enrolled.toLocaleString()}+ learners. Free forever. No credit card required.</p>
                    </div>
                    <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg" variant="default">
                      <Link to={`/programs/enroll?course=${course.slug}`}>Enroll for Free</Link>
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* About the Course */}
              <section aria-labelledby="about-heading">
                <h2 id="about-heading" className="text-2xl font-bold text-foreground mb-4">About This Course</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">What You'll Learn</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    {course.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-foroz-green-600 flex-shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Course Modules */}
              <section aria-labelledby="modules-heading">
                <h2 id="modules-heading" className="text-2xl font-bold text-foreground mb-4">Course Modules</h2>
                <div className="space-y-3">
                  {course.modules.map((module, index) => (
                    <Card key={index} className="border-0 shadow-sm bg-muted/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{module}</p>
                            <p className="text-xs text-muted-foreground">Video lessons, readings, quizzes, assignments</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-foroz-600 hover:text-foroz-700">Preview</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Learning Outcomes */}
              <section aria-labelledby="outcomes-heading">
                <h2 id="outcomes-heading" className="text-2xl font-bold text-foreground mb-4">What You'll Achieve</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.outcomes.map((outcome, index) => (
                    <Card key={index} className="border-0 shadow-sm bg-muted/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-5 flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-foroz-100 text-foroz-600 dark:bg-foroz-900/30 dark:text-foroz-400 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-foreground">{outcome}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Instructor Bio */}
              <section aria-labelledby="instructor-heading">
                <h2 id="instructor-heading" className="text-2xl font-bold text-foreground mb-4">Your Instructor</h2>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
                        alt={course.instructor}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">{course.instructor}</h3>
                        <p className="text-sm text-muted-foreground mb-3">Expert instructor with years of industry and teaching experience. Committed to making quality education accessible to all.</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Expert Instructor</Badge>
                          <Badge variant="outline">{course.enrolled.toLocaleString()}+ Students</Badge>
                          <Badge variant="outline">{course.rating}★ Rating</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Enrollment CTA */}
              <Card className="border-0 shadow-sm bg-foroz-50 dark:bg-foroz-900/30 border-foroz-200 dark:border-foroz-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Start Learning Today — Completely Free</h3>
                  <p className="text-muted-foreground mb-6">No credit card required. No hidden fees. Lifetime access to course materials.</p>
                  <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8 py-3 text-lg" variant="default">
                    <Link to={`/programs/enroll?course=${course.slug}`}>Enroll Now</Link>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    By enrolling, you agree to our <a href="/terms" className="underline hover:text-foroz-600">Terms of Service</a> and <a href="/privacy" className="underline hover:text-foroz-600">Privacy Policy</a>.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-0 shadow-sm hover:shadow-md transition-shadow bg-background animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-lg">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground text-sm">Level</span>
                      <Badge variant="secondary" className={getLevelColor(course.level)}>{course.level}</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground text-sm">Duration</span>
                      <span className="font-medium text-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground text-sm">Format</span>
                      <span className="font-medium text-foreground">{course.format}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground text-sm">Language</span>
                      <span className="font-medium text-foreground">English (Subtitles: 12 languages)</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground text-sm">Certificate</span>
                      <Badge variant="secondary" className="bg-foroz-green-100 text-foroz-green-700 dark:bg-foroz-green-900/30 dark:text-foroz-green-400">Verified</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground text-sm">Access</span>
                      <span className="font-medium text-foreground">Lifetime</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-muted-foreground text-sm">Price</span>
                      <span className="text-2xl font-bold text-foroz-600 dark:text-foroz-400">Free</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-foroz-50 dark:bg-foroz-900/30">
                      <CheckCircle className="h-5 w-5 text-foroz-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">Full access to all modules</p>
                        <p className="text-xs text-muted-foreground">Including future updates</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-foroz-50 dark:bg-foroz-900/30">
                      <CheckCircle className="h-5 w-5 text-foroz-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">Downloadable resources</p>
                        <p className="text-xs text-muted-foreground">Worksheets, templates, code files</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-foroz-50 dark:bg-foroz-900/30">
                      <CheckCircle className="h-5 w-5 text-foroz-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">Community access</p>
                        <p className="text-xs text-muted-foreground">Discussion forums, study groups</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-foroz-50 dark:bg-foroz-900/30">
                      <CheckCircle className="h-5 w-5 text-foroz-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">Verified certificate</p>
                        <p className="text-xs text-muted-foreground">Share on LinkedIn & resume</p>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="w-full gap-2 py-3 text-lg" variant="default" size="lg">
                    <Link to="/programs/enroll">Enroll for Free</Link>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              {/* Share & Save */}
              <Card className="mt-4 border-0 shadow-sm bg-background">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Share this course</span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" aria-label="Share on Facebook"><Facebook className="h-4 w-4" /></Button>
                      <Button variant="outline" size="icon" aria-label="Share on Twitter"><Twitter className="h-4 w-4" /></Button>
                      <Button variant="outline" size="icon" aria-label="Share on LinkedIn"><Linkedin className="h-4 w-4" /></Button>
                      <Button variant="outline" size="icon" aria-label="Copy link"><LinkIcon className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="related-heading">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="related-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              You Might Also Like
            </h2>
            <p className="text-lg text-muted-foreground">
              Continue your learning journey with these related courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.filter(c => c.id !== course.id).slice(0, 3).map((related) => (
              <Card key={related.id} className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-background">
                <Link to={`/programs/${related.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <Badge variant="secondary" className="absolute top-3 left-3 capitalize">{related.category}</Badge>
                  </div>
                </Link>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="capitalize">{related.level}</Badge>
                    <Badge variant="outline">{related.duration}</Badge>
                    <Badge variant="outline">{related.format}</Badge>
                  </div>
                  <Link to={`/programs/${related.slug}`}>
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">{related.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{related.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-500 fill-current" /> {related.rating}</span>
                      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {related.enrolled.toLocaleString()}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="gap-1">
                      <Link to={`/programs/${related.slug}`}>View Course</Link>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/programs">View All Courses</Link>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}