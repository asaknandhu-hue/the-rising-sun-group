export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Relocation", href: "/relocation" },
  { label: "Renting in Brussels", href: "/renting-in-brussels" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Property Owners", href: "/property-owners" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

function defineTopics(...labels: string[]) {
  return labels.map((label) => ({
    label,
    slug: label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
  }));
}

// Topic slugs reserve a consistent path for future nested pages. Only the
// major section routes are rendered until the corresponding content is ready.
export const sectionPages = {
  relocation: {
    title: "Relocation",
    eyebrow: "Find your footing in Brussels",
    description:
      "Independent information for people preparing for a move and finding their way through the first steps of life in Brussels.",
    topics: defineTopics(
      "Moving to Brussels",
      "First 30 days",
      "Finding accommodation",
      "Domiciliation",
      "Utilities",
      "Internet",
      "Insurance",
      "Banking",
      "Transport",
    ),
  },
  "renting-in-brussels": {
    title: "Renting in Brussels",
    eyebrow: "Tenant resources",
    description:
      "A future home for clear, independent information about renting in Brussels, from getting oriented to understanding common rental topics.",
    topics: defineTopics(
      "Brussels rental guide",
      "Rental contracts",
      "Rental deposits",
      "Rent indexation",
      "Tenant rights",
      "Viewing checklist",
      "Rental scams",
    ),
  },
  "property-owners": {
    title: "Property Owners",
    eyebrow: "Independent property information",
    description:
      "A developing information section for property owners. The Rising Sun Group is an independent information platform, not a broker or estate agency.",
    topics: defineTopics(
      "Preparing to sell",
      "PEB information",
      "Property improvement",
      "Renovation resources",
      "Property valuation",
      "Future lead enquiry information",
    ),
  },
  resources: {
    title: "Resources",
    eyebrow: "Practical information",
    description:
      "A growing library structure for useful guides and reference material to help make sense of life and property in Brussels.",
    topics: defineTopics("Guides", "Checklists", "Calculators", "Useful links", "FAQ"),
  },
  partners: {
    title: "Partners",
    eyebrow: "Local services and trusted partners",
    description:
      "A place for future partner information across services that can be relevant when moving, renting or looking after a property.",
    topics: defineTopics(
      "Moving companies",
      "Insurance",
      "Telecom",
      "Mortgage and financial services",
      "Renovation",
      "PEB professionals",
      "Legal and notarial services",
    ),
  },
  about: {
    title: "About The Rising Sun Group",
    eyebrow: "An independent Brussels platform",
    description:
      "The Rising Sun Group brings independent information together for people making decisions about life, relocation and property in Brussels.",
    topics: defineTopics(
      "Independent information",
      "Relocation and settling in",
      "Renting and neighborhood resources",
      "Property information for owners",
    ),
  },
  contact: {
    title: "Contact",
    eyebrow: "Get in touch",
    description:
      "This page is planned as the starting point for general contact, partnership enquiries and future lead enquiries.",
    topics: defineTopics(
      "General contact",
      "Partnership enquiries",
      "Lead enquiry",
    ),
  },
} as const;

export type SectionSlug = keyof typeof sectionPages;
