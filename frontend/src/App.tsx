import { Routes, Route, Navigate } from "react-router-dom"
import { PartnerPage } from "@/pages/PartnerPage"
import { CareersPage } from "@/pages/CareersPage"
import { CareerDetailPage } from "@/pages/CareerDetailPage"
import { CareersFaqPage } from "@/pages/CareersFaqPage"
import { LegalPage } from "@/pages/LegalPage"
import { StoriesPage } from "@/pages/StoriesPage"
import { OpportunityAlertsPage } from "@/pages/OpportunityAlertsPage"
import { Layout } from "@/components/layout/Layout"
import { HomePage } from "@/pages/HomePage"
import { AboutPage } from "@/pages/AboutPage"
import { ProgramsPage } from "@/pages/ProgramsPage"
import { EnrollPage } from "@/pages/EnrollPage"
import { OpportunitiesPage } from "@/pages/OpportunitiesPage"
import { ImpactPage } from "@/pages/ImpactPage"
import { GetInvolvedPage } from "@/pages/GetInvolvedPage"
import { GetInvolvedApplyPage } from "@/pages/GetInvolvedApplyPage"
import { ContactPage } from "@/pages/ContactPage"
import { DonatePage } from "@/pages/DonatePage"
import { CheckoutPage } from "@/pages/CheckoutPage"
import { ProgramDetailPage } from "@/pages/ProgramDetailPage"
import { OpportunityDetailPage } from "@/pages/OpportunityDetailPage"
import { OpportunityApplyPage } from "@/pages/OpportunityApplyPage"
import { BlogPage } from "@/pages/BlogPage"
import { BlogPostPage } from "@/pages/BlogPostPage"
import { NotFoundPage } from "@/pages/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/enroll" element={<EnrollPage />} />
        <Route path="/programs/:slug" element={<ProgramDetailPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/opportunities/alerts" element={<OpportunityAlertsPage />} />
        <Route path="/opportunities/:slug" element={<OpportunityDetailPage />} />
        <Route path="/opportunities/:slug/apply" element={<OpportunityApplyPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/impact/stories" element={<StoriesPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/get-involved/volunteer" element={<Navigate to="/get-involved#volunteer" replace />} />
        <Route path="/get-involved/volunteer/apply" element={<GetInvolvedApplyPage />} />
        <Route path="/get-involved/partner" element={<PartnerPage />} />
        <Route path="/get-involved/careers/faq" element={<CareersFaqPage />} />
        <Route path="/get-involved/careers/:id" element={<CareerDetailPage />} />
        <Route path="/get-involved/careers" element={<CareersPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/donate/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/accessibility" element={<LegalPage />} />
        <Route path="/cookies" element={<LegalPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App