export type PartnerCategory = {
  slug: string;
  name: string;
  description: string;
};

export const partnerCategories = [
  {
    slug: "moving",
    name: "Moving",
    description: "Directory listings related to moving.",
  },
  {
    slug: "peb-energy",
    name: "PEB / Energy",
    description: "Directory listings related to PEB and energy.",
  },
  {
    slug: "renovation",
    name: "Renovation",
    description: "Directory listings related to renovation.",
  },
  {
    slug: "insurance",
    name: "Insurance",
    description: "Directory listings related to insurance.",
  },
  {
    slug: "telecom",
    name: "Telecom",
    description: "Directory listings related to telecom.",
  },
  {
    slug: "legal-notary",
    name: "Legal / Notary",
    description: "Directory listings related to legal and notarial topics.",
  },
  {
    slug: "mortgage-finance",
    name: "Mortgage / Finance",
    description: "Directory listings related to mortgage and finance.",
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    description: "Directory listings related to cleaning.",
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    description: "Directory listings related to interior design.",
  },
  {
    slug: "storage",
    name: "Storage",
    description: "Directory listings related to storage.",
  },
] as const satisfies readonly PartnerCategory[];

export type PartnerCategorySlug = (typeof partnerCategories)[number]["slug"];

export type PartnerListing = {
  id: string;
  companyName: string;
  category: PartnerCategorySlug;
  description: string;
  location: string | null;
  website: string | null;
  contact: string | null;
  featured: boolean;
  sponsorshipStatus: "none" | "sponsored";
  recommendationStatus: "not-recommended" | "editorial-recommendation";
  logo: { src: string; alt: string } | null;
  isIllustrativePlaceholder: boolean;
};

const placeholderNotice =
  "Illustrative placeholder only. This entry does not represent an actual business, recommendation, or confirmed affiliation.";

export const partnerListings = partnerCategories.map((category) => ({
  id: `illustrative-${category.slug}`,
  companyName: `Illustrative placeholder — ${category.name} provider`,
  category: category.slug,
  description: placeholderNotice,
  location: null,
  website: null,
  contact: null,
  featured: false,
  sponsorshipStatus: "none",
  recommendationStatus: "not-recommended",
  logo: null,
  isIllustrativePlaceholder: true,
})) satisfies readonly PartnerListing[];

export const partnerDirectoryDisclosure =
  "Illustrative directory structure only: every entry currently shown is a mock placeholder, not a real business, vetted provider, recommendation, or confirmed affiliation. Verify each listing and obtain approval before publication. A directory listing is neutral information. Sponsored listings appear only when sponsorship is explicitly configured. Featured status is not a recommendation. Any explicitly configured recommendation is editorial and is not an official endorsement.";

export const partnerListingsByCategory: Record<
  PartnerCategorySlug,
  readonly PartnerListing[]
> = partnerCategories.reduce(
  (listingsByCategory, category) => {
    listingsByCategory[category.slug] = partnerListings.filter(
      (listing) => listing.category === category.slug,
    );
    return listingsByCategory;
  },
  {} as Record<PartnerCategorySlug, readonly PartnerListing[]>,
);

export function getPartnerCategory(slug: string) {
  return partnerCategories.find((category) => category.slug === slug);
}
