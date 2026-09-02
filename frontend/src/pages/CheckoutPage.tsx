import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Heart,
  Shield,
  Loader2,
} from "lucide-react"
import { useState, useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { api } from "@/lib/api"

const tiers = [
  {
    id: "student",
    title: "Student Supporter",
    amount: 10,
    period: "monthly",
    description: "Provides one student with free course access for a month.",
    impact: "1 learner/month",
    features: ["Course access", "Digital materials", "Community access"],
  },
  {
    id: "course",
    title: "Course Sponsor",
    amount: 50,
    period: "monthly",
    description: "Funds development and delivery of one complete course.",
    impact: "50+ learners/course",
    features: ["Course development", "Instructor support", "Certificates", "Platform hosting"],
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
  },
  {
    id: "custom",
    title: "Custom Amount",
    amount: 0,
    period: "one-time",
    description: "Every dollar counts. Choose your own impact level.",
    impact: "Flexible",
    features: ["You decide", "Any amount", "One-time or recurring"],
  },
]

const donationSchema = z.object({
  tier: z.string().min(1, "Please select a giving level"),
  customAmount: z.number().min(1, "Minimum donation is $1").optional(),
  frequency: z.enum(["monthly", "one-time"]),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  zipCode: z.string().min(1, "ZIP/Postal code is required"),
  dedicate: z.boolean().optional(),
  dedicateName: z.string().optional(),
  dedicateEmail: z.string().email().optional().or(z.literal("")),
  newsletter: z.boolean().optional(),
  terms: z.boolean().refine((value) => value === true, "You must accept the terms"),
})

type DonationForm = z.infer<typeof donationSchema>

const steps = ["amount", "details", "payment", "confirmation"] as const
type CheckoutStep = (typeof steps)[number]

export function CheckoutPage() {
  const [step, setStep] = useState<CheckoutStep>("amount")
  const [selectedTier, setSelectedTier] = useState<string>("course")
  const [customAmount, setCustomAmount] = useState("")
  const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly")
  const [processing, setProcessing] = useState(false)
  const [paymentConfigured, setPaymentConfigured] = useState(true)
  const [submitError, setSubmitError] = useState(false)

  const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm<DonationForm>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      frequency: "monthly",
      tier: "course",
      newsletter: true,
    },
  })

  const watchedTier = watch("tier")
  const watchedFrequency = watch("frequency")
  const watchedCustomAmount = watch("customAmount")

  useEffect(() => {
    if (watchedTier === "custom") {
      setValue("customAmount", watchedCustomAmount, { shouldValidate: true })
    } else {
      setValue("customAmount", undefined)
    }
  }, [watchedTier, watchedCustomAmount, setValue])

  useEffect(() => {
    if (watchedFrequency === "one-time" && watchedTier !== "custom") {
      setValue("frequency", "one-time")
    }
  }, [watchedFrequency, watchedTier, setValue])

  const selectedTierData = useMemo(() => tiers.find(t => t.id === selectedTier), [selectedTier])

  const getAmount = () => {
    if (selectedTier === "custom") {
      return parseFloat(customAmount) || 0
    }
    return selectedTierData?.amount || 0
  }

  const amount = getAmount()
  const isMonthly = frequency === "monthly"
  const displayAmount = isMonthly ? amount : amount

  const nextStep = () => {
    if (step === "amount" && !selectedTier) return
    if (step === "details") {
      void trigger(["firstName", "lastName", "email", "phone", "country", "address", "city", "state", "zipCode"])
    }
    if (step === "payment") {
      void trigger(["terms"])
    }
    const currentIndex = steps.indexOf(step)
    if (currentIndex < steps.length - 1) setStep(steps[currentIndex + 1])
  }

  const prevStep = () => {
    const currentIndex = steps.indexOf(step)
    if (currentIndex > 0) setStep(steps[currentIndex - 1])
  }

  const onSubmit = async (data: DonationForm) => {
    setProcessing(true)
    setSubmitError(false)
    try {
      const result = await api.post<{ configured: boolean; url?: string }>(
        "/donations/checkout-session",
        {
          tier: selectedTier,
          amount,
          frequency,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        }
      )
      if (result.configured && result.url) {
        window.location.href = result.url
        return
      }
      setPaymentConfigured(false)
      setStep("confirmation")
    } catch {
      setSubmitError(true)
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8 px-4">
      {/* Progress Indicator */}
      <div className="container px-4 mb-8">
        <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto">
              {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                    step === s || (steps.indexOf(step) > i)
                  ? "bg-foroz-600 text-white"
                  : "bg-muted text-muted-foreground"
              )}>
                {steps.indexOf(step) > i ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  String(i + 1)
)}
                      </div>
              {i < 3 && (
                <div className={cn(
                  "w-20 h-0.5 mx-2 rounded",
                  ["amount", "details", "payment"].indexOf(step) > i
                    ? "bg-foroz-600"
                    : "bg-muted"
                )} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-4 text-sm text-muted-foreground">
          <span className={cn(step === "amount" && "text-foroz-600 font-medium")}>1. Amount</span>
          <span className={cn(step === "details" && "text-foroz-600 font-medium")}>2. Details</span>
          <span className={cn(step === "payment" && "text-foroz-600 font-medium")}>3. Payment</span>
          <span className={cn(step === "confirmation" && "text-foroz-600 font-medium")}>4. Confirmation</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container px-4 max-w-3xl mx-auto">
        {/* Step 1: Amount */}
        {step === "amount" && (
          <div className="animate-slide-up">
            <div className="text-center mb-8">
              <Button asChild variant="ghost" className="gap-2 mb-6">
                <Link to="/donate">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Donate Page
                </Link>
              </Button>
              <h1 className="text-3xl font-bold text-foreground mb-4">Choose Your Impact</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">Select a giving level or enter a custom amount. All tiers can be monthly or one-time.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {tiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={cn(
                    "h-full border-2 transition-all duration-300 relative cursor-pointer",
                    selectedTier === tier.id
                      ? "border-foroz-500 shadow-lg shadow-foroz-500/10 ring-2 ring-foroz-500/20"
                      : "border-transparent hover:border-foroz-200 dark:hover:border-foroz-800"
                  )}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {tier.id === "course" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="secondary" className="bg-foroz-500 text-white px-3 py-1 text-xs">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-foroz-500 to-foroz-green-500 mb-4 mx-auto">
                      <Heart className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{tier.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        ${tier.amount === 0 ? "Custom" : tier.amount}
                      </div>
                      <div className="text-sm text-muted-foreground">{tier.period}</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-foroz-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg text-sm">
                      <span className="font-medium text-foreground">Impact: </span>
                      <span className="text-muted-foreground">{tier.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedTier === "custom" && (
              <div className="animate-slide-up max-w-md mx-auto">
                <Label htmlFor="customAmount" className="block text-sm font-medium mb-2">
                  Custom Amount (USD)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="customAmount"
                    type="number"
                    min="1"
                    max="100000"
                    step="1"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-8 text-center text-2xl font-bold"
                    onBlur={(e) => setCustomAmount(e.target.value.replace(/[^0-9]/g, ""))}
                  />
                </div>
              </div>
            )}

            <div className="mt-6">
              <Label className="block text-sm font-medium mb-3">Frequency</Label>
              <div className="flex gap-4">
                <Label className={cn(
                  "flex flex-col items-center gap-2 p-6 border-2 rounded-xl cursor-pointer transition-all",
                  frequency === "monthly" ? "border-foroz-500 bg-foroz-50 dark:bg-foroz-900/20" : "border-transparent hover:border-foroz-200 dark:hover:border-foroz-800"
                )}>
                  <input
                    type="radio"
                    value="monthly"
                    checked={frequency === "monthly"}
                    onChange={() => setFrequency("monthly")}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foroz-600">${displayAmount}</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                  </div>
                  <span className="text-xs text-foroz-600 font-medium">Save 10%</span>
                </Label>
                <Label className={cn(
                  "flex flex-col items-center gap-2 p-6 border-2 rounded-xl cursor-pointer transition-all",
                  frequency === "one-time" ? "border-foroz-500 bg-foroz-50 dark:bg-foroz-900/20" : "border-transparent hover:border-foroz-200 dark:hover:border-foroz-800"
                )}>
                  <input
                    type="radio"
                    value="one-time"
                    checked={frequency === "one-time"}
                    onChange={() => setFrequency("one-time")}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foroz-600">${displayAmount}</div>
                    <div className="text-sm text-muted-foreground">one-time</div>
                  </div>
                </Label>
              </div>
            </div>

            <Button
              onClick={nextStep}
              className="w-full mt-8 gap-2 py-3 text-lg"
              size="lg"
              disabled={!selectedTier || (selectedTier === "custom" && (!customAmount || parseFloat(customAmount) < 1))}
            >
              Continue
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Step 2: Details */}
        {step === "details" && (
          <div className="animate-slide-up">
            <div className="mb-8">
              <Button asChild variant="ghost" className="gap-2 mb-6">
                <Link to="/donate" onClick={prevStep}>
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Link>
              </Button>
              <h1 className="text-3xl font-bold text-foreground mb-2">Your Information</h1>
              <p className="text-muted-foreground">We'll send your receipt to this email address.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="John"
                  error={errors.firstName?.message}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Doe"
                  error={errors.lastName?.message}
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="john@example.com"
                error={errors.email?.message}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select
                  value={watch("country")}
                  onValueChange={(v) => setValue("country", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">United States</SelectItem>
                    <SelectItem value="CA">Canada</SelectItem>
                    <SelectItem value="UK">United Kingdom</SelectItem>
                    <SelectItem value="AU">Australia</SelectItem>
                    <SelectItem value="DE">Germany</SelectItem>
                    <SelectItem value="FR">France</SelectItem>
                    <SelectItem value="IN">India</SelectItem>
                    <SelectItem value="BR">Brazil</SelectItem>
                    <SelectItem value="MX">Mexico</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                {...register("address")}
                placeholder="123 Main Street"
                      error={errors.address?.message}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input id="city" {...register("city")} placeholder="New York" error={errors.city?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province *</Label>
                <Input id="state" {...register("state")} placeholder="NY" error={errors.state?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                <Input id="zipCode" {...register("zipCode")} placeholder="10001" error={errors.zipCode?.message} />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <input
                type="checkbox"
                id="newsletter"
                {...register("newsletter")}
                className="h-4 w-4 rounded border-gray-300 text-foroz-600 focus:ring-foroz-500"
              />
              <Label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
                Keep me updated on FOROZ's impact and opportunities
              </Label>
            </div>

            <Button onClick={nextStep} className="w-full gap-2 py-3 text-lg" size="lg">
              Continue
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === "payment" && (
          <div className="animate-slide-up">
            <div className="mb-8">
              <Button asChild variant="ghost" className="gap-2 mb-6" onClick={prevStep}>
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <h1 className="text-3xl font-bold text-foreground mb-2">Review &amp; Pay</h1>
              <p className="text-muted-foreground">You'll be redirected to Stripe's secure checkout to enter payment details.
            </p>
            </div>

            <Card className="mb-8 border-foroz-200 dark:border-foroz-800">
              <CardContent className="p-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-medium">${displayAmount}{isMonthly ? "/mo" : ""}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequency</span>
                  <span className="font-medium capitalize">{frequency}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Shield className="h-4 w-4 text-foroz-500" /> Secured by Stripe
                  </span>
                </div>
              </CardContent>
            </Card>

            {submitError && (
              <p className="text-sm text-destructive mb-6 text-center">
                Something went wrong starting your donation. Please try again.
              </p>
            )}

            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                id="terms"
                {...register("terms", { required: true })}
                className="h-4 w-4 rounded border-gray-300 text-foroz-600 focus:ring-foroz-500"
                required
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                I agree to the <a href="/terms" className="underline hover:text-foroz-600">Terms of Service</a> and <a href="/privacy" className="underline hover:text-foroz-600">Privacy Policy</a>
              </Label>
            </div>

            <Button
              type="submit"
              disabled={processing}
              className="w-full gap-2 py-3 text-lg"
              size="lg"
            >
              {processing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Continue to Secure Payment
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === "confirmation" && (
          <div className="animate-slide-up text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-foroz-100 dark:bg-foroz-900/30 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-foroz-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              {paymentConfigured ? "Thank You for Your Donation!" : "We've Got Your Donation Details!"}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {paymentConfigured
                ? <>Your generous gift of <strong className="text-foreground">${displayAmount}{isMonthly ? "/mo" : ""}</strong> will help provide education and opportunities to youth worldwide.</>
                : <>We've recorded your intended gift of <strong className="text-foreground">${displayAmount}{isMonthly ? "/mo" : ""}</strong>. Online payment isn't live yet — our team will reach out to complete it with you.</>}
            </p>

            <Card className="max-w-md mx-auto mb-8 border-foroz-200 dark:border-foroz-800">
              <CardHeader className="text-center">
                <CardTitle className="text-foroz-600">Donation Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-medium">${displayAmount}{isMonthly ? "/mo" : ""}</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="font-medium">Frequency</span>
                  <span className="font-bold text-lg text-foroz-600 capitalize">{frequency}</span>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 space-y-4">
              {paymentConfigured ? (
                <p className="text-muted-foreground">A receipt has been sent to <strong className="text-foreground">{watch("email")}</strong>.</p>
              ) : (
                <p className="text-muted-foreground">We'll follow up at <strong className="text-foreground">{watch("email")}</strong> to complete your donation.</p>
              )}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
                <Link to="/impact">View Our Impact</Link>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild className="w-full sm:w-auto gap-2">
                <Link to="/donate">Donate Again</Link>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t">
              <h3 className="font-semibold text-foreground mb-4">Want to Do More?</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link to="/get-involved/volunteer">Volunteer</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link to="/get-involved/careers">Join Our Team</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link to="/blog">Read Stories</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}