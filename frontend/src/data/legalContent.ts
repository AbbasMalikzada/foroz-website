export type LegalDoc = {
  title: string
  updated: string
  sections: { heading: string; body: string[] }[]
}

export const legalContent: Record<string, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    updated: "January 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: [
          "When you apply for a program, opportunity, volunteer role, or job, or when you donate, subscribe to our newsletter, or contact us, we collect the information you provide directly: name, email address, and any message or application details you submit.",
          "We do not collect payment card details directly — donations are processed by our payment provider, which handles that data under its own security and privacy standards.",
        ],
      },
      {
        heading: "How We Use Information",
        body: [
          "We use the information you provide to respond to inquiries, process applications and donations, send newsletter and opportunity-alert emails you've opted into, and improve our programs.",
          "We do not sell your personal information to third parties.",
        ],
      },
      {
        heading: "Your Choices",
        body: [
          "You can unsubscribe from any email list at any time using the link in that email, or by contacting hello@foroz.org.",
          "To request a copy of, correction to, or deletion of your data, email hello@foroz.org and we will respond within a reasonable time.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions about this policy can be sent to hello@foroz.org."],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "January 2026",
    sections: [
      {
        heading: "Using This Site",
        body: [
          "FOROZ provides this website and its courses, opportunities listings, and program information free of charge for educational and informational purposes.",
          "You agree not to misuse the site — including attempting unauthorized access, submitting false information on applications, or using content here for unlawful purposes.",
        ],
      },
      {
        heading: "Course Content & Certificates",
        body: [
          "Course materials are provided for personal, non-commercial learning. Certificates of completion verify participation in a course; they are not accredited academic degrees unless explicitly stated.",
        ],
      },
      {
        heading: "Third-Party Opportunities",
        body: [
          "Scholarships, internships, and other opportunities listed on this site are offered by third-party organizations. FOROZ verifies listings before publishing but is not responsible for the terms, outcomes, or conduct of third-party programs.",
        ],
      },
      {
        heading: "Donations",
        body: [
          "FOROZ is a registered 501(c)(3) nonprofit organization. Donations are generally tax-deductible to the extent allowed by law; consult a tax advisor for guidance specific to your situation.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions about these terms can be sent to hello@foroz.org."],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    updated: "January 2026",
    sections: [
      {
        heading: "Our Commitment",
        body: [
          "FOROZ is committed to ensuring digital accessibility for people of all abilities. We aim to meet WCAG 2.1 Level AA standards across this site and continuously work to improve the experience for everyone.",
        ],
      },
      {
        heading: "What We Do",
        body: [
          "We use semantic HTML, keyboard-navigable menus and forms, descriptive labels for interactive elements, and sufficient color contrast in both light and dark themes.",
        ],
      },
      {
        heading: "Feedback",
        body: [
          "If you encounter an accessibility barrier anywhere on this site, please let us know at hello@foroz.org with the page and a description of the issue, and we'll work to address it.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updated: "January 2026",
    sections: [
      {
        heading: "What We Use",
        body: [
          "This site uses essential local storage to remember your theme preference (light/dark mode). We do not use third-party advertising or tracking cookies.",
        ],
      },
      {
        heading: "Analytics",
        body: [
          "We may use privacy-respecting analytics to understand aggregate site usage (e.g. which pages are visited) so we can improve the site. This data is not used to identify individual visitors.",
        ],
      },
      {
        heading: "Managing Cookies",
        body: [
          "You can clear cookies and local storage at any time through your browser settings. Doing so will reset your saved theme preference.",
        ],
      },
    ],
  },
}
