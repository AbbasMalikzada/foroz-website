# FOROZ Nonprofit — Unified Comprehensive Project Plan

**Version 1.0 — July 13, 2026**
**Scope:** Main organizational website at `foroz.org`. The FOROZ Academy learning platform lives on `academy.foroz.org` and is referenced — never duplicated — by this site.

---

## 1. Executive Summary

FOROZ is a nonprofit (est. September 6, 2025) empowering youth through equitable access to education and opportunity. This plan merges:

- **Competitive analysis** of [gotglobal.org](https://www.gotglobal.org/) (GOT Global) and [abaadafghanistan.org](https://abaadafghanistan.org/) (ABAAD Afghanistan) — two comparable Afghan-focused nonprofits
- **Two internal architecture plans** covering sitemap, page specs, tech stack, phasing, and governance

The result is a **single, actionable blueprint** that adopts proven patterns from both analyzed sites while exceeding them in design quality, data visualization, and storytelling depth.

---

## 2. Competitive Insights — Features to Adopt & Surpass

### From ABAAD Afghanistan ✅ (Higher quality benchmark)

| Feature | What They Did Well | How FOROZ Will Adopt/Exceed |
|---|---|---|
| **Video Hero** | Full-bleed autoplay background video — cinematic first impression | ✅ Adopt: Hero with video background + animated text overlay + dual CTA |
| **Interactive SVG Map** | Province-level Afghanistan map with hover overlays, CMS-driven data per province | ✅ Adopt + Enhance: Interactive map with program-specific data layers, animated counters per province, mobile-optimized version |
| **Success Stories** | 10+ detailed stories with real photos, full narratives, author cards | ✅ Adopt: CMS-driven success stories collection with image, quote highlight, full narrative, and program tag |
| **Testimonial Marquee** | Auto-scrolling horizontal marquee with student photos, names, programs, and quotes | ✅ Adopt: Infinite marquee with pause-on-hover, student avatars, and program badges |
| **Program-Specific Donations** | Separate donation page per program (Humanitarian / EAGT / Cycle of Development) | ✅ Adopt: Program-specific giving with visual "where your money goes" breakdown |
| **Schema.org** | Full Organization structured data with services, area served, aggregate rating | ✅ Adopt + Extend: Add `JobPosting`, `Article`, `Event`, `Course` schemas |
| **Province Data Cards** | Hover overlay cards showing EAGT students, humanitarian data, cycle data per province | ✅ Adopt: Overlay cards with animated counters and program-specific metrics |
| **Micro-animations** | Scale transforms on map provinces, opacity transitions, slide animations | ✅ Adopt: Framer Motion for scroll-triggered animations, hover states, page transitions |

### From GOT Global ✅ (Structural patterns)

| Feature | What They Did Well | How FOROZ Will Adopt/Exceed |
|---|---|---|
| **Mega-menu Navigation** | Comprehensive dropdowns with sub-page groupings for About, Programs, Get Involved | ✅ Adopt: Icon-rich mega-menu with descriptions (ABAAD style) + GOT's grouping logic |
| **Core Values Grid** | 7 values displayed as icon card grid with descriptions | ✅ Adopt: Animated value cards with icons, hover effects, and SDG alignment badges |
| **Impact Stats Band** | Counter section with key metrics (students, volunteers, graduates, countries) | ✅ Adopt + Enhance: Animated counter band with scroll-triggered counting animation (not placeholder "being finalized") |
| **Program Cards** | Clean card grid linking to program detail pages | ✅ Adopt: Glassmorphism-style cards with hover micro-animations and gradient borders |
| **Multiple CTAs** | Prominent Donate button in header + contextual CTAs throughout | ✅ Adopt: Sticky header with accent CTA + contextual banners per section |
| **SDG Alignment** | Implicit via programs | ✅ Exceed: Explicit SDG badge strip with official SDG icons, linking programs to goals |

### Weaknesses to Avoid

| Site | Weakness | FOROZ Mitigation |
|---|---|---|
| GOT Global | Impact numbers "being finalized" | Never show placeholder metrics — hide section until MEL provides verified data |
| GOT Global | No testimonials or success stories | Launch with minimum 4–6 stories before go-live |
| GOT Global | No blog/news section | News & Stories section in Phase 2 with SEO-optimized content |
| ABAAD | Spelling errors in CMS ("Bangaladish", "Indonisia") | Content QA checklist before publish |
| ABAAD | Empty alt text on images | Mandatory alt text field in CMS schema (required, not optional) |
| ABAAD | OG description placeholder ("Fetched live") | Automated SEO validation in CI/CD pipeline |
| ABAAD | AI-generated favicon with revealing filename | Professional favicon from brand assets |
| Both | Single language (English only) | RTL-ready architecture from day one; Dari/Pashto in Phase 3 |

---

## 3. Target Audiences & User Journeys

| Audience | Primary Need | Entry Point | Key Journey | Conversion |
|---|---|---|---|---|
| **Youth/Students** | Free courses, scholarships, skills | Search / Social | Home → Programs → Academy CTA or Opportunities Hub | Enroll / Apply |
| **Donors/Funders** | Impact evidence, transparency | Direct / Referral | Home → Impact → Donate | Give (one-time or recurring) |
| **Partners/NGOs** | Collaboration models, reach | Direct / Conference | Home → About → Partner With Us | Partnership inquiry |
| **Volunteers/Staff** | Roles, culture, application | Social / Word of mouth | Home → Get Involved → Volunteer/Careers | Application form |
| **Media/Public** | Credibility, story angles | Search / PR | Home → About → News & Stories | Share / Cover |

---

## 4. Technology Stack

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | Next.js 15+ (App Router, TypeScript) | SSG for performance, API routes for future needs, massive ecosystem |
| **Hosting** | Vercel free tier | $0, global CDN, automatic HTTPS, preview deployments, analytics |
| **Styling** | Tailwind CSS 4 + shadcn/ui | Polished design system, accessible components, rapid development |
| **Animations** | Framer Motion | Scroll-triggered counters, page transitions, micro-interactions (inspired by ABAAD) |
| **Content** | MDX content collections (`/content/`) | News, opportunities, team, vacancies, success stories — editable via GitHub PRs; upgrade path to Sanity/Decap CMS |
| **Forms** | React Hook Form + Zod + Formspree (free tier) | Contact, volunteer apps, partnership inquiries — zero backend |
| **Analytics** | Vercel Analytics + Plausible CE | Privacy-friendly for student audience; traffic KPIs for Communications dept |
| **i18n** | `next-intl`, locale-prefixed routes | English now; add `/fa/`, `/ps/` later without restructuring |
| **Maps** | Custom SVG + Framer Motion | Interactive Afghanistan map (ABAAD-inspired) with CMS-driven province data |
| **Media** | `next/image` + compressed assets | Performance on low-bandwidth mobile connections |
| **Icons** | Lucide React | Clean, accessible, tree-shakeable |
| **Charts** | Recharts (lightweight) | Impact dashboard visualizations |
| **Domain** | `foroz.org` | Subdomains: `academy.foroz.org`, `mail.foroz.org` |

### Cost Profile

| Item | Monthly | Annual |
|---|---|---|
| Domain | — | ~$12 |
| Vercel Hosting | $0 | $0 |
| Formspree (free tier) | $0 | $0 |
| Analytics (Plausible CE) | $0 | $0 |
| **Total** | **~$0** | **~$12** |

### Multilingual/RTL Build-Time Discipline

- All UI copy in translation dictionaries from day one — **zero hard-coded strings**
- CSS logical properties throughout (`margin-inline-start`, not `margin-left`)
- Fonts selected with Arabic-script companions: **Inter + Noto Naskh Arabic**
- `dir="rtl"` attribute toggles via locale config — not a redesign

---

## 5. Full Sitemap

```
foroz.org/
├── / .................................... Home
├── /about
│   ├── /about .......................... Who We Are (org story + timeline)
│   ├── /about/mission-vision-values .... Vision, Mission & 7 Core Values
│   ├── /about/strategic-objectives ..... 5 Strategic Objectives
│   ├── /about/team ..................... Leadership & Team
│   └── /about/governance ............... Governance & Departments (org chart)
├── /programs ........................... What We Do (overview)
│   ├── /programs/education ............. Education & Academy → CTA to academy subdomain
│   ├── /programs/skills ................ Skills & Employability
│   └── /programs/sdg-advocacy .......... SDG Awareness & Youth Engagement
├── /opportunities ...................... Opportunities Hub (filterable listing)
│   └── /opportunities/[slug] ........... Individual opportunity detail
├── /get-involved ....................... Get Involved (overview)
│   ├── /get-involved/volunteer ......... Volunteer With Us
│   ├── /get-involved/careers ........... Careers / Open Positions
│   │   └── /get-involved/careers/[slug]  Vacancy detail
│   ├── /get-involved/partner ........... Partner With Us
│   └── /get-involved/donate ............ Support Us
├── /impact ............................. Impact & Transparency (map + dashboard)
├── /news ............................... News & Stories (blog index)
│   └── /news/[slug] .................... Article detail
├── /contact ............................ Contact
├── /privacy ............................ Privacy Policy
├── /terms .............................. Terms of Use
└── /404 ................................ Custom not-found page
```

**Total pages (templates):** 22 unique templates + dynamic `[slug]` routes

---

## 6. Page-by-Page Specification

### 6.1 Home (`/`) — Priority: CRITICAL

The homepage is the single most important page. It must establish credibility in < 5 seconds and route every audience to their next step.

| # | Section | Content | Design Inspiration |
|---|---|---|---|
| 1 | **Hero** | Full-bleed video background (ABAAD-style) with headline: *"Empowering youth through equitable access to education and opportunity"* — sub-line from org docs. Dual CTA: **Explore Programs** \| **Visit FOROZ Academy ↗**. Subtle scroll indicator arrow. | ABAAD's cinematic video hero |
| 2 | **Impact Stats Band** | 4 animated counters (scroll-triggered): Learners Enrolled \| Courses Delivered \| Opportunities Shared \| Volunteers Active. Numbers from MEL; section hidden until data exists. | ABAAD's snapshot cards + GOT's stats band |
| 3 | **What We Do** | 3 glassmorphism cards with gradient borders + icons: Education & Academy \| Skills & Employability \| Opportunities & Pathways → link to program pages | GOT's program cards, elevated with glassmorphism |
| 4 | **SDG Alignment Strip** | Official SDG badges FOROZ advances: SDG 4 (Quality Education) \| SDG 8 (Decent Work) \| SDG 10 (Reduced Inequalities) \| SDG 17 (Partnerships). Horizontal scroll on mobile. | Unique — neither site has this |
| 5 | **Interactive Afghanistan Map** | SVG map with province-level hover overlays showing program data per region. CMS-driven. Mobile: slider version. "& Around the World" section for international reach. | ABAAD's interactive map (adopted + enhanced) |
| 6 | **Featured Opportunities** | Latest 3 cards from Opportunities Hub with deadline badges, type tags, and "Apply" CTA | GOT's program card pattern + ABAAD's card design |
| 7 | **Success Stories Carousel** | 3–4 featured student stories with image, pull quote, name, and program tag. Auto-advancing slider with manual controls. | ABAAD's success stories section |
| 8 | **Testimonial Marquee** | Infinite horizontal auto-scroll of student testimonials with photos, names, programs. Pauses on hover. | ABAAD's marquee testimonials |
| 9 | **Get Involved Banner** | Triple CTA section: Volunteer \| Partner \| Donate — each with icon, one-liner, and action button | GOT's Get Involved section |
| 10 | **Latest News** | 3 most recent posts from News & Stories with cover image, title, date, excerpt | Standard blog preview pattern |
| 11 | **Newsletter Signup** | Email capture form with "Stay Updated" messaging. Integrated with MailerLite/Buttondown. | ABAAD's MailerLite integration |
| 12 | **Partners/Trust Strip** | Logo marquee of partner organizations (when available) | GOT's partners section (but with actual logos) |

---

### 6.2 About — Who We Are (`/about`) — Priority: HIGH

| Element | Content |
|---|---|
| **Hero** | Page hero with headline "Who We Are" + breadcrumb |
| **Narrative** | Full story from organizational docs: founding (Sept 6, 2025), the gap FOROZ addresses, fields of operation, inclusivity emphasis |
| **Timeline** | Animated vertical timeline component: Founding → First Programs → Key Milestones → Future Vision. Scroll-triggered reveal animations |
| **Stats** | Compact impact band relevant to the org's journey |
| **Cross-links** | Card grid linking to Mission/Values, Objectives, Team, Governance |

---

### 6.3 Mission, Vision & Values (`/about/mission-vision-values`) — Priority: HIGH

| Element | Content |
|---|---|
| **Vision** | Verbatim from organizational docs, displayed as a large pull quote with decorative accent |
| **Mission** | Verbatim, displayed prominently below vision |
| **7 Core Values Grid** | Icon card grid (GOT-inspired, elevated): Equity & Inclusion · Quality & Excellence · Integrity & Accountability · Youth Empowerment · Learning & Innovation · Collaboration & Partnership · Sustainability & Impact — each with icon, title, and one-paragraph description. Hover: card lifts with subtle shadow |

---

### 6.4 Strategic Objectives (`/about/strategic-objectives`) — Priority: HIGH

5 objectives, each as a numbered section with animated reveal:

| # | Objective | Links To |
|---|---|---|
| 1 | Expand Equitable Access to Quality Education | → Programs/Education |
| 2 | Promote Youth Skills Development and Employability | → Programs/Skills |
| 3 | Facilitate Access to Opportunities and Pathways | → Opportunities Hub |
| 4 | Advance Awareness and Advocacy for the SDGs | → Programs/SDG Advocacy |
| 5 | Strengthen Organizational Capacity and Sustainability | → Partner With Us |

Each objective card shows: title, description, linked SDG icons, and a CTA to the relevant page.

---

### 6.5 Leadership & Team (`/about/team`) — Priority: HIGH

| Element | Content |
|---|---|
| **Leadership** | Founder & CEO + Co-Founder with photos, public bios (distilled from ToRs — full ToRs stay internal), and role summaries |
| **Department Heads** | Grid of team members populated as roles are filled. Cards: photo, name, title, department badge |
| **Data-driven** | Content collection (`/content/team/`) so additions need no code changes |
| **Design** | Clean card grid with hover effects showing brief bio overlay |

---

### 6.6 Governance & Departments (`/about/governance`) — Priority: MEDIUM

| Element | Content |
|---|---|
| **Governance Summary** | Founder-led Governing Body → Founder & CEO → Co-Founder → 7 operational departments |
| **Org Chart** | Accessible HTML/SVG diagram (not an image of text) with animated connection lines |
| **7 Department Cards** | Communications & Outreach · Education & Academy · Research, Opportunities & Knowledge Management · MEL · Resource Mobilization & Fundraising · HR & Volunteer Management · IT & Web Development. Each: icon, title, 2–3 line description |
| **Accountability Statement** | One-line commitment to annual review, MEL-coordinated KPIs — signals donor-grade maturity |

---

### 6.7 What We Do Overview (`/programs`) — Priority: CRITICAL

| Element | Content |
|---|---|
| **Intro** | Fields of operation paragraph from org docs |
| **3 Program Pillars** | Large interactive cards: Education & Academy \| Skills & Employability \| SDG Advocacy. Each with illustration/icon, description, CTA |
| **"How We Work" Strip** | Visual pipeline: Needs Identified (Research dept) → Programs Delivered (Academy) → Impact Measured (MEL). Animated flow diagram |
| **Cross-CTA** | "Explore our Opportunities Hub" banner |

---

### 6.8 Education & Academy (`/programs/education`) — Priority: CRITICAL

| Element | Content |
|---|---|
| **Program Description** | Online courses in English, mathematics, computer/digital skills, and other disciplines |
| **Quality Commitments** | Curriculum design, instructor coordination, learning QA — phrased as beneficiary benefits |
| **Course Preview Cards** | Filterable by subject, level, format (self-paced/live). Each: title, description, duration, enrollment count, "Free" badge |
| **Primary CTA** | **"Enter FOROZ Academy ↗"** → `academy.foroz.org`. This is the marketing front door |
| **FAQ Accordion** | Who can join, cost, requirements, certificates, accessibility |
| **Instructor Profiles** | Credentials, photo, bio (when available) |

---

### 6.9 Skills & Employability (`/programs/skills`) — Priority: HIGH

| Element | Content |
|---|---|
| **Description** | Practical, digital, and leadership skills; entrepreneurship; lifelong learning |
| **Pathways** | Mentorship, internships, leadership development, volunteering as growth tracks |
| **Success Stories** | 2–3 featured stories of skills program graduates |
| **Cross-CTA** | Link to Opportunities Hub |

---

### 6.10 SDG Awareness & Youth Engagement (`/programs/sdg-advocacy`) — Priority: MEDIUM

| Element | Content |
|---|---|
| **Description** | SDG integration into education, research, and outreach; youth-led community initiatives |
| **SDG Explainer** | Interactive SDG grid for young audiences — click each goal to see FOROZ's alignment |
| **Campaign Highlights** | Fed from News collection with `sdg` tag |
| **Impact Metrics** | Awareness reach, campaign participation numbers |

---

### 6.11 Opportunities Hub (`/opportunities`) — Priority: CRITICAL

The public product of the Research, Opportunities & Knowledge Management department. **This is the organic traffic engine** — youth constantly search for scholarships.

| Element | Content |
|---|---|
| **Filter Bar** | Type (Scholarship / Internship / Mentorship / Fellowship / Training / Competition / Volunteer) · Level · Location (country/online) · Deadline · Field of study |
| **Card Grid** | Each card: title, provider logo, deadline badge (color-coded: green = 30+ days, yellow = < 14 days, red = < 3 days), type tag, location, brief description, "View Details" CTA |
| **Sorting** | By deadline (default), newest, alphabetical |
| **Auto-archiving** | Expired items auto-hidden from listing |
| **Email Alerts** | "Get opportunities matching your interests" signup (Phase 2) |

**Detail Page (`/opportunities/[slug]`):**

| Element | Content |
|---|---|
| **Header** | Title, provider, deadline, type badge, "Verified by FOROZ Research Team" badge |
| **Body** | Summary, eligibility, benefits, application process |
| **CTA** | "Apply on Official Website ↗" — always outbound link |
| **Related** | 3 similar opportunities |
| **Share** | Social sharing buttons |

**Content model (front-matter):**
```yaml
title: string
type: scholarship | internship | mentorship | fellowship | training | competition | volunteer
organization: string
location: string
deadline: date
eligibility: string
link: url
tags: string[]
verified_date: date
featured: boolean
```

---

### 6.12 Get Involved Overview (`/get-involved`) — Priority: HIGH

4 pathway cards with icons and one-line value propositions:
- **Volunteer** — Lend your skills to a global education movement
- **Careers** — Join our team and drive systemic change
- **Partner** — Co-create impact with FOROZ
- **Donate** — Fund a student's future for as little as $1/month

---

### 6.13 Volunteer (`/get-involved/volunteer`) — Priority: HIGH

| Element | Content |
|---|---|
| **Why Volunteer** | Value proposition + recognition promise (certificates, references, development opportunities) |
| **Role Areas** | Communications (content, social, design, video) · Education (trainers, student support) · Research & Opportunities · MEL support · IT & web support |
| **Application Form** | Name, email, location, area of interest, availability, CV link, motivation. Via Formspree |
| **Recruitment Principles** | Equity, merit-based, transparency statement |
| **Testimonials** | 2–3 volunteer experience quotes (ABAAD-style) |

---

### 6.14 Careers (`/get-involved/careers`) — Priority: MEDIUM

| Element | Content |
|---|---|
| **Listing** | CMS-driven vacancy cards from `/content/vacancies/`. Empty state: "No open positions — join our volunteer network" |
| **Vacancy Detail** | Title, department, type (core/volunteer/part-time), responsibilities, qualifications, how to apply, deadline |
| **Recruitment Process** | Public 6-step overview for transparency |
| **Culture Section** | Core values in action, team photos, benefits |
| **Schema.org** | `JobPosting` structured data on each vacancy |

---

### 6.15 Partner With Us (`/get-involved/partner`) — Priority: MEDIUM

| Element | Content |
|---|---|
| **Audiences** | Donors, NGOs/INGOs, educational institutions, companies (CSR), individual experts |
| **What FOROZ Offers** | Youth reach, MEL-backed reporting, SDG alignment, brand co-visibility |
| **Partnership Models** | Program sponsorship, co-development, expertise sharing, event collaboration |
| **Inquiry Form** | Organization, contact, type of partnership, message |
| **Current Partners** | Logo grid (when available) |

---

### 6.16 Donate (`/get-involved/donate`) — Priority: HIGH (phased)

| Phase | Content |
|---|---|
| **Phase 1 (Launch)** | The case for support + in-kind/expertise giving + contact for major gifts. Visual "where your money goes" breakdown. **No payment processing yet.** |
| **Phase 3 (Growth)** | Stripe/PayPal integration with giving tiers: $5/mo (1 student) \| $15/mo (course access) \| $50/mo (mentorship) \| Custom. Campaign pages (Ramadan, Back-to-School, Year-End). Donor acknowledgment wall. |
| **Stewardship** | Integrity & Accountability value statement. Transparency: programs 80%, ops 15%, fundraising 5% |

---

### 6.17 Impact & Transparency (`/impact`) — Priority: HIGH (Phase 2+)

> [!IMPORTANT]
> This page launches only when MEL produces verified data. An empty impact page harms credibility.

| Element | Content |
|---|---|
| **Interactive Map** | ABAAD-inspired Afghanistan SVG map showing FOROZ's reach by province. Hover overlays with program-specific data. Mobile: slider version |
| **KPI Dashboard** | Visual metrics: enrollment, completion rates, satisfaction, opportunities shared. Recharts-powered |
| **Theory of Change** | Visual flow: Inputs → Activities → Outputs → Outcomes → Impact |
| **Global Reach** | Country cards showing international student data (ABAAD-style) |
| **Annual Reports** | Downloadable PDFs |
| **SDG Mapping** | Which SDGs each program addresses with progress indicators |
| **Success Stories** | CMS-driven collection: image, pull quote, full narrative, program tag, date (ABAAD-inspired) |
| **Testimonial Marquee** | Auto-scrolling student testimonials (ABAAD-inspired) |

---

### 6.18 News & Stories (`/news`) — Priority: MEDIUM (Phase 2)

| Element | Content |
|---|---|
| **Categories** | Announcements · Impact Stories · SDG Campaigns · Opportunities Roundups · Events |
| **Listing** | Card grid with cover image, title, date, category tag, excerpt |
| **Article Detail** | Cover image, author, date, tags, body (MDX), share links, related posts |
| **Schema.org** | `Article` structured data |

---

### 6.19 Contact (`/contact`) — Priority: HIGH

| Element | Content |
|---|---|
| **Form** | Department routing dropdown (General / Programs / Partnerships / Media / Volunteering), name, email, subject, message |
| **Direct Contacts** | Official email addresses per department |
| **Social Links** | All social media profiles |
| **Response Promise** | "We respond within 48 hours" |
| **Map** | Organization location (if applicable) |

---

### 6.20 Legal (`/privacy`, `/terms`) — Priority: HIGH

| Page | Content |
|---|---|
| **Privacy Policy** | Form data handling, analytics disclosure, children/minors considerations, data removal contact |
| **Terms of Use** | Disclaimer that external opportunity listings belong to their providers, content usage terms |

---

### 6.21 Custom 404 (`/404`) — Priority: LOW

Friendly not-found page with illustration, search bar, and links to key pages.

---

## 7. Global Elements

### Header (Sticky)
```
[Logo] · Home · About ▾ · What We Do ▾ · Opportunities · Get Involved ▾ · News · Impact · Contact · [FOROZ Academy ↗ accent button] · (🌐 language switcher - hidden until multilingual)
```

- Sticky on scroll with backdrop blur (glassmorphism)
- Mega-menu dropdowns with icons and descriptions (ABAAD-style)
- Collapses to accessible mobile drawer with animated hamburger
- "Donate Now" accent button in header (GOT-style)

### Footer
```
[Logo + mission one-liner]
Quick Links: About | Programs | Opportunities | Volunteer | Careers | Contact
Social Icons: LinkedIn | Instagram | YouTube | Facebook | Twitter/X
Newsletter Signup (Phase 2)
Legal: Privacy Policy | Terms of Use
"© 2025–2026 FOROZ — nonprofit organization founded September 2025"
```

### Reusable Component Library

| Component | Description | Inspired By |
|---|---|---|
| `PageHero` | Full-width hero with optional video background, heading, subtext, CTAs | ABAAD hero |
| `SectionHeading` | Label + H2 + optional description, animated reveal | Both sites |
| `StatCounter` | Animated counting number with label, scroll-triggered | ABAAD snapshot cards |
| `ProgramCard` | Glassmorphism card with icon, title, description, CTA | GOT cards + elevated |
| `OpportunityCard` | Title, provider, deadline badge, type tag, location | Custom |
| `NewsCard` | Cover image, title, date, excerpt, category tag | Standard |
| `TeamCard` | Photo, name, title, department badge, hover bio | ABAAD team style |
| `TestimonialCard` | Avatar, name, program, quote | ABAAD marquee |
| `ValueCard` | Icon, title, description, hover lift | GOT values grid |
| `CTABanner` | Full-width section with heading, description, action buttons | GOT Get Involved |
| `Timeline` | Vertical animated timeline with milestones | Custom |
| `OrgChart` | HTML/SVG accessible org chart | Custom |
| `FilterBar` | Multi-select filters with tag display | Custom |
| `InteractiveMap` | SVG Afghanistan map with hover overlays | ABAAD map |
| `Marquee` | Infinite horizontal auto-scroll with pause | ABAAD testimonials |
| `Accordion` | FAQ-style collapsible sections | Standard |
| `Breadcrumb` | Navigation breadcrumbs | Standard |
| `Badge` | SDG badges, type tags, deadline indicators | Custom |
| `FormControls` | Input, textarea, select, file upload, submit | shadcn/ui |
| `MDXRenderer` | Prose content renderer for blog/news | Standard |

---

## 8. Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--primary` | Brand color (from logo, TBD) | CTAs, active states, links |
| `--primary-light` | Lighter tint | Hover states, backgrounds |
| `--primary-dark` | Darker shade | Text on light backgrounds |
| `--accent` | SDG-inspired warm accent | Secondary CTAs, highlights |
| `--background` | `#FAFBFC` | Page background |
| `--surface` | `#FFFFFF` | Card backgrounds |
| `--surface-glass` | `rgba(255,255,255,0.7)` | Glassmorphism panels |
| `--text-primary` | `#0F172A` (Slate 900) | Headings, body text |
| `--text-secondary` | `#475569` (Slate 600) | Descriptions, metadata |
| `--text-muted` | `#94A3B8` (Slate 400) | Captions, placeholders |
| `--success` | `#10B981` | Positive indicators, deadlines > 30 days |
| `--warning` | `#F59E0B` | Attention, deadlines < 14 days |
| `--danger` | `#EF4444` | Urgent, deadlines < 3 days |
| `--border` | `#E2E8F0` (Slate 200) | Card borders, dividers |

All colors must pass **WCAG AA contrast** minimum (4.5:1 for text, 3:1 for large text).

### Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Display (Hero H1) | Inter | 800 | 4rem (clamp) |
| H1 | Inter | 700 | 2.5rem |
| H2 | Inter | 600 | 2rem |
| H3 | Inter | 600 | 1.5rem |
| Body | Inter | 400 | 1rem (16px) |
| Small | Inter | 400 | 0.875rem |
| Caption | Inter | 500 | 0.75rem |
| RTL companion | Noto Naskh Arabic | — | Matching sizes |

Google Fonts import: `Inter:wght@400;500;600;700;800` + `Noto+Naskh+Arabic:wght@400;500;600;700`

### Spacing & Layout

- 8px base grid (0.5rem increments)
- Max content width: 1280px (`max-w-7xl`)
- Section padding: `py-20` (5rem) desktop, `py-12` (3rem) mobile
- Card border-radius: `rounded-2xl` (1rem)
- Card shadow: `shadow-lg` default, `shadow-xl` hover

### Animation Tokens

| Animation | Duration | Easing | Trigger |
|---|---|---|---|
| Fade in up | 600ms | `ease-out` | Scroll into view |
| Counter count-up | 2000ms | `ease-in-out` | Scroll into view |
| Card hover lift | 200ms | `ease` | Hover |
| Page transition | 300ms | `ease-in-out` | Route change |
| Marquee scroll | 90s | `linear` | Infinite loop |
| Map province scale | 250ms | `ease` | Hover |

### Accessibility Requirements (WCAG 2.1 AA)

- Semantic HTML5 elements throughout
- Keyboard navigation with visible focus states
- Alt text on all images (CMS field: **required**)
- Reduced-motion media query respect (`prefers-reduced-motion`)
- Skip-to-content link
- Form labels and ARIA attributes
- Color not the sole indicator of information

---

## 9. SEO & Metadata Strategy

### Per-Page

- Unique `<title>` tag (format: `Page Name — FOROZ`)
- Unique `<meta description>` (150–160 chars)
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`)
- Twitter card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- Canonical URL

### Site-Wide

- Auto-generated `sitemap.xml` (Next.js built-in)
- `robots.txt` with sitemap reference
- Schema.org structured data:

| Type | Where |
|---|---|
| `Organization` / `NGO` | Site-wide (JSON-LD in layout) |
| `JobPosting` | Each vacancy page |
| `Article` | Each news/blog post |
| `Course` | Each course listing (when available) |
| `Event` | Event pages (future) |

### SEO Content Strategy

Opportunity pages are the **organic traffic engine** — youth constantly search for "Afghanistan scholarships 2026", "free online courses for Afghan students", etc. Consistent slugs, fresh deadlines, and regular updates drive the "website traffic growth" KPI.

---

## 10. Content Requirements for Launch

| Content Type | Quantity | Owner (Department) | Status |
|---|---|---|---|
| Static pages (About, Mission, etc.) | 12–15 | Communications & Outreach | Needs writing |
| Team profiles | 2–4 (leadership) | HR & Volunteer Mgmt | Needs photos + bios |
| Program descriptions | 3 | Education & Academy | Needs writing |
| Opportunity listings | 10–20 (for Phase 2) | Research & Opportunities | Needs curation |
| Success stories | 4–6 | MEL + Communications | Needs collection |
| Testimonials | 6–10 | MEL | Needs collection |
| Blog posts | 3–5 (for Phase 2) | Communications | Needs writing |
| FAQ items | 15–20 | All departments | Needs compilation |
| Logo + brand colors | 1 set | Communications & Outreach | **Blocking — needed before design** |
| Hero video | 1 (30–60s) | Communications | Needs production |
| Team photos | 2–4 | HR | Needs collection |

---

## 11. Content Governance & Maintenance

| Owner | Content Areas | KPIs |
|---|---|---|
| Communications & Outreach | News, brand, copy, social media | Content targets, campaign counts, traffic growth |
| Research & Opportunities | Opportunities Hub | Frequency of updates, opportunities shared |
| HR & Volunteer Mgmt | Careers, Volunteer pages | Applications received, time-to-fill |
| MEL | Impact figures, success stories | Data accuracy, reporting timeliness |
| IT & Web Development | Uptime, security, deployments | Uptime %, zero security incidents |

**Workflow:** Content edits via Markdown PRs on GitHub → IT lead reviews and merges → Vercel auto-deploys with preview URLs.

**Cadence:** Opportunities weekly · News 2–4×/month · Impact stats quarterly (MEL) · Full content review annually.

---

## 12. Phased Roadmap

### Phase 1 — Foundation & Launch (Weeks 1–3)

| Week | Tasks |
|---|---|
| **Week 1** | Project setup (Next.js 15, TypeScript, Tailwind, ESLint, Prettier) · Design system components (buttons, cards, forms, layout) · Content schema design · CI/CD pipeline (GitHub → Vercel) · Analytics setup |
| **Week 2** | Homepage (hero, stats, programs, SDG strip, CTAs) · Header & Footer (mega-menu, mobile drawer) · About section (all 5 pages: Who We Are, Mission/Values, Objectives, Team, Governance) |
| **Week 3** | Programs section (overview + 3 sub-pages) · Contact page · Privacy/Terms · 404 page · SEO baseline (meta, sitemap, schema) · Lighthouse audit · Forms integration · **Launch** |

**Exit criteria:** Site live on domain · Lighthouse ≥ 90 all categories · Forms working · All static pages complete

---

### Phase 2 — Engagement (Weeks 4–6)

| Week | Tasks |
|---|---|
| **Week 4** | Opportunities Hub (listing page, filters, detail template) · Populate 10–20 verified opportunities |
| **Week 5** | Get Involved section (Volunteer form, Careers listing, Partner inquiry, Donate placeholder) · Newsletter signup integration |
| **Week 6** | News & Stories section (listing + article template) · Success stories collection · Testimonial marquee · 3–5 launch blog posts |

**Exit criteria:** ≥ 10 verified opportunities live · Volunteer applications flowing · News section active

---

### Phase 3 — Growth (Weeks 7–10)

| Week | Tasks |
|---|---|
| **Week 7–8** | Impact & Transparency page (interactive Afghanistan map, KPI dashboard, success stories, global reach) · Recharts visualizations |
| **Week 9** | Donate activation (Stripe/PayPal integration, giving tiers, campaign pages) · Donor acknowledgment |
| **Week 10** | Dari/Pashto localization setup (translation dictionaries, RTL layout, font loading) · First multilingual release |

**Exit criteria:** First public impact figures · Payment processing live · First multilingual release

---

### Phase 4 — Integration (Weeks 11–14)

| Week | Tasks |
|---|---|
| **Week 11–12** | Academy subdomain cross-integration (shared header pattern, course highlights fed to main site, SSO consideration) |
| **Week 13** | Email alerts for opportunities (matching by interest) · Advanced search (Algolia if qualifying for free nonprofit tier) |
| **Week 14** | Performance optimization · Accessibility audit (WCAG 2.1 AA) · Cross-browser/device testing · Launch review |

**Exit criteria:** Seamless main-site ↔ academy journey · All accessibility targets met

---

## 13. Budget

| Category | Tool/Service | Monthly | Annual |
|---|---|---|---|
| Domain | Namecheap / Cloudflare | — | ~$12 |
| Hosting | Vercel (free tier) | $0 | $0 |
| Forms | Formspree (free tier, 50 subs/mo) | $0 | $0 |
| Analytics | Vercel Analytics (free) | $0 | $0 |
| Email Marketing | MailerLite (free up to 1K subs) | $0 | $0 |
| Fonts | Google Fonts | $0 | $0 |
| **Phase 1–2 Total** | | **$0/mo** | **~$12/yr** |
| Donations (Phase 3) | Stripe (2.9% + $0.30 per txn) | Transaction-based | — |
| Search (Phase 4) | Algolia (free nonprofit tier) | $0 | $0 |
| **Phase 3–4 Total** | | **~$0–50/mo** | **~$12–600/yr** |

---

## 14. Success Metrics (Launch + 90 Days)

| Metric | Target | Measurement |
|---|---|---|
| Monthly Unique Visitors | 2,000+ | Vercel Analytics |
| Lighthouse Score | ≥ 90 (all categories) | Automated CI check |
| Opportunity Page Views | 500+/month | Analytics |
| Volunteer Applications | 15+ | Formspree |
| Newsletter Subscribers | 200+ | MailerLite |
| Avg. Session Duration | > 2 min | Analytics |
| Bounce Rate | < 55% | Analytics |
| Accessibility Score | 100/100 | Lighthouse |
| SEO: Indexed Pages | 100% of published pages | Google Search Console |
| Uptime | 99.9% | Vercel status |

---

## 15. Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Content delays from departments | **High** | Medium | Content freeze date 1 week before launch; placeholder content with clear "Coming Soon" states |
| Logo/brand not finalized | **High** | High | Design system uses CSS custom properties — brand colors swappable in one file |
| Empty impact page harming credibility | Medium | **High** | Impact page deferred to Phase 3 until MEL produces verified data |
| Multilingual RTL complexity | Medium | High | All styles use CSS logical properties from day one; RTL is a config toggle |
| Performance on low-bandwidth devices | Medium | Medium | Mobile-first design; page weight budget ~1MB; `next/image` optimization |
| Donation compliance | Low | **High** | Use Stripe/PayPal (handles compliance); legal review per target country |
| Volunteer data privacy | Low | High | GDPR-compliant forms; minimal data collection; privacy policy |
| Spelling/content QA issues (ABAAD lesson) | Medium | Medium | Content QA checklist; required CMS fields for alt text, descriptions |

---

## 16. Pre-Build Checklist (Decisions Needed Before Phase 1)

| # | Decision | Owner | Blocking? |
|---|---|---|---|
| 1 | Confirm and purchase `foroz.org` domain; reserve `academy.` subdomain | IT & Web | **Yes** |
| 2 | Finalize logo + brand colors | Communications & Outreach | **Yes** |
| 3 | Provide founder/co-founder bios + photos approved for publication | HR / Leadership | **Yes** |
| 4 | Create official contact email(s) on Google Workspace | IT | Yes |
| 5 | Confirm analytics tool preference (Vercel Analytics recommended) | IT | No |
| 6 | Draft privacy policy reviewed against legal requirements | Leadership | Yes |
| 7 | Confirm hero video availability or approve illustration placeholder | Communications | No |
| 8 | Confirm Tailwind CSS (already in plan) | IT | No |

---

## 17. Internal Documents NOT Published

The following remain internal governance material:
- Full Terms of Reference by role
- KPI targets and Staffing Classification tables
- Departmental Responsibility Matrix
- Operations Manual internals
- Recruitment Handbook internals
- Google Workspace consent document

The website uses only **distilled, public-appropriate summaries** as noted in page specs above.

---

## 18. Post-MVP Roadmap (Beyond Phase 4)

| Feature | Description |
|---|---|
| Student/Volunteer/Donor Portals | Authenticated dashboards |
| LMS Integration | Academy subdomain with course progress synced to main site |
| AI-Powered Opportunity Matching | Personalized recommendations based on student profile |
| Alumni Network | Community forum and directory |
| Mobile App | React Native or PWA |
| Grant Management Dashboard | For Resource Mobilization department |
| Advanced MEL Dashboard | Real-time data with drill-down analytics |
| Partnership Portal | Self-service for NGOs/institutions |

---

> [!IMPORTANT]
> **Before proceeding to build, please confirm:**
> 1. Are the blocking items in the Pre-Build Checklist (Section 16) resolved?
> 2. Do you want to proceed with **Phase 1** immediately, or do any page specs need adjustment?
> 3. Any preferences on brand colors / visual direction to start the design system?
