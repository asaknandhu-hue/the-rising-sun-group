export type EditorialSource = {
  title: string;
  publisher: string;
  url: string;
  context: string;
};

export type EditorialReview = {
  lastReviewed: string;
  sources: readonly EditorialSource[];
};

export const movingGuideReview: EditorialReview = {
  lastReviewed: "2026-10-06",
  sources: [
    {
      title: "Moving to Belgium",
      publisher: "Belgium.be",
      url: "https://www.belgium.be/en/housing/moving_to_belgium",
      context:
        "Federal information and signposting about moving and residence formalities.",
    },
    {
      title: "Registration in your commune",
      publisher: "Commissioner Brussels Europe & International Organisations",
      url: "https://www.commissioner.brussels/registration-in-your-commune/",
      context:
        "Information about commune registration; procedures depend on individual circumstances and the relevant commune.",
    },
    {
      title: "Lease contracts",
      publisher: "Brussels-Capital Region",
      url: "https://be.brussels/en/housing/rental/lease-contracts",
      context: "Regional information about residential lease contracts.",
    },
    {
      title: "Security deposit",
      publisher: "Brussels-Capital Region",
      url: "https://be.brussels/en/housing/rental/lease-contracts/security-deposit",
      context: "Regional information about rental security deposits.",
    },
    {
      title: "Rental price indexation",
      publisher: "Brussels-Capital Region",
      url: "https://be.brussels/en/housing/rental/lease-contracts/rental-price-indexation",
      context:
        "Regional information about rent indexation; check current applicability before relying on it.",
    },
  ],
};

export const rentalDepositReview: EditorialReview = {
  lastReviewed: "2026-10-06",
  sources: movingGuideReview.sources.filter((source) =>
    ["Security deposit", "Lease contracts"].includes(source.title),
  ),
};

export const rentalContractReview: EditorialReview = {
  lastReviewed: "2026-10-06",
  sources: movingGuideReview.sources.filter((source) =>
    ["Lease contracts", "Rental price indexation"].includes(source.title),
  ),
};

export function formatReviewedDate(date: string) {
  return new Intl.DateTimeFormat("en-BE", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
