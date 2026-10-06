export type NeighborhoodEntry = {
  slug: string;
  name: string;
};

export const neighborhoods = [
  { slug: "etterbeek", name: "Etterbeek" },
  { slug: "ixelles", name: "Ixelles" },
  { slug: "brussels-city", name: "Brussels City" },
  { slug: "schaerbeek", name: "Schaerbeek" },
  { slug: "saint-gilles", name: "Saint-Gilles" },
  { slug: "auderghem", name: "Auderghem" },
  { slug: "woluwe-saint-pierre", name: "Woluwe-Saint-Pierre" },
  { slug: "woluwe-saint-lambert", name: "Woluwe-Saint-Lambert" },
] as const satisfies readonly NeighborhoodEntry[];

export type NeighborhoodSlug = (typeof neighborhoods)[number]["slug"];

export const neighborhoodPlaceholderContent = {
  statusLabel: "Placeholder — local verification needed",
  notice:
    "These neighborhood guides are structured placeholders. Place-specific details have not yet been verified; check current, attributable local sources before relying on or publishing information.",
  sectionPlaceholder:
    "Place-specific information about {topic} in {neighborhood} has not yet been verified. Replace this placeholder with current, attributable local sources before publication.",
  heroEyebrow: "Neighborhood guide",
  heroDescription:
    "A structured guide outline for {neighborhood}. Place-specific details are not verified yet.",
  index: {
    eyebrow: "Brussels neighborhoods",
    title: "Neighborhood guides",
    description:
      "Explore the planned guides for eight Brussels neighborhoods. Each topic is currently placeholder content awaiting place-specific verification.",
    metadataTitle: "Brussels Neighborhood Guides",
    metadataDescription:
      "Eight planned Brussels neighborhood guides, including Etterbeek, Ixelles and Woluwe-Saint-Pierre. Place-specific housing and local details remain unverified.",
    listEyebrow: "Browse the guides",
    listTitle: "Choose a neighborhood",
  },
  detailMetadataTitle: "{neighborhood} Neighborhood Guide in Brussels",
  detailMetadataDescription:
    "Planned Brussels neighborhood guide to {neighborhood}, covering housing, transport and local context. Details remain unverified placeholders.",
  sections: [
    { id: "overview", title: "Overview" },
    {
      id: "suitability",
      title: "Who the neighborhood is suitable for",
    },
    { id: "rental-market", title: "Rental market" },
    { id: "property-types", title: "Typical property types" },
    { id: "transport", title: "Transport" },
    {
      id: "eu-institutions",
      title: "EU institutions proximity",
    },
    { id: "shops", title: "Shops and supermarkets" },
    { id: "restaurants", title: "Restaurants and lifestyle" },
    { id: "parks", title: "Parks" },
    { id: "pros", title: "Pros" },
    { id: "cons", title: "Cons" },
    {
      id: "newcomers",
      title: "Things newcomers should know",
    },
    { id: "resources", title: "Useful resources" },
  ],
  cta: {
    title: "Have a question?",
    description:
      "For general enquiries, visit The Rising Sun Group Contact page.",
    note:
      "This link leads to the existing Contact page; it does not represent a neighborhood advisory or other service.",
  },
} as const;

export function getNeighborhood(slug: string) {
  return neighborhoods.find((neighborhood) => neighborhood.slug === slug);
}
