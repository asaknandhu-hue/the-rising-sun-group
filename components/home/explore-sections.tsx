import Link from "next/link";
import { ArticleCard, SectionHeading } from "@/components/ui";
import { PropertyOwnerLeadCta, RenterLeadCta, BusinessPartnerLeadCta } from "@/components/lead-ctas";
import {
  neighborhoods,
  neighborhoodPlaceholderContent,
} from "@/lib/neighborhoods";

const rentalTopics = [
  "Rental contracts",
  "Deposits",
  "Tenant rights",
  "Finding accommodation",
  "Avoiding scams",
] as const;

const featuredGuides = [
  {
    eyebrow: "Relocation",
    title: "A first look at moving to Brussels",
    description:
      "An introduction to the questions and practical steps to consider when planning a move. Guide coming as the resource library develops.",
    href: "/relocation",
    linkLabel: "Explore relocation",
  },
  {
    eyebrow: "Renting",
    title: "Getting oriented to renting",
    description:
      "A starting point for common rental topics, from accommodation searches to understanding a tenancy. Guide coming soon.",
    href: "/renting-in-brussels",
    linkLabel: "Explore renting",
  },
  {
    eyebrow: "Neighborhoods",
    title: "Explore Brussels neighborhoods",
    description:
      "An overview of the Brussels neighborhoods planned for future independent information and local context.",
    href: "/neighborhoods",
    linkLabel: "Explore neighborhoods",
  },
] as const;

export function ExploreSections() {
  return (
    <>
      <section
        className="home-topic-section renting-section"
        id="renting"
        aria-labelledby="renting-title"
      >
        <div className="container">
          <div className="home-section-heading">
            <SectionHeading
              eyebrow="Renting in Brussels"
              title="Know what to look out for."
              description="Independent information on the rental topics people often want to understand before finding a home."
              id="renting-title"
            />
          </div>
          <ul className="home-topic-grid rental-topic-grid">
            {rentalTopics.map((topic, index) => (
              <li key={topic}>
                <Link className="home-topic-card" href="/renting-in-brussels">
                  <span className="topic-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="home-topic-card-title">{topic}</span>
                  <span className="home-topic-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="text-link home-section-link" href="/renting-in-brussels">
            Explore renting in Brussels <span aria-hidden="true">→</span>
          </Link>
          <RenterLeadCta />
        </div>
      </section>

      <section
        className="home-topic-section neighborhood-section"
        id="neighborhoods"
        aria-labelledby="neighborhoods-title"
      >
        <div className="container">
          <div className="home-section-heading home-section-heading-row">
            <SectionHeading
              eyebrow="Brussels neighborhoods"
              title="Get to know the city."
              description={neighborhoodPlaceholderContent.index.description}
              id="neighborhoods-title"
            />
            <Link className="text-link" href="/neighborhoods">
              Explore all neighborhoods <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="home-topic-grid neighborhood-grid">
            {neighborhoods.map((neighborhood, index) => (
              <li key={neighborhood.slug}>
                <Link
                  className="neighborhood-card"
                  href={`/neighborhoods/${neighborhood.slug}`}
                >
                  <span className="neighborhood-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{neighborhood.name}</span>
                  <span className="home-topic-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="property-owners-section"
        id="property-insights"
        aria-labelledby="property-owners-title"
      >
        <div className="container property-owners-inner">
          <div className="property-owners-mark" aria-hidden="true">
            <span>RS</span>
            <span>Properties</span>
          </div>
          <div className="property-owners-copy">
            <p className="eyebrow">For property owners</p>
            <h2 className="section-heading" id="property-owners-title">
              A new perspective on property information.
            </h2>
            <p>
              Rising Sun Properties is a future section of The Rising Sun
              Group. It will bring independent property information together
              for owners exploring their next steps. The Rising Sun Group is
              an information platform, not a broker or estate agency.
            </p>
            <Link className="text-link" href="/property-owners">
              Explore property owner resources{" "}
              <span aria-hidden="true">→</span>
            </Link>
            <PropertyOwnerLeadCta />
          </div>
          <span className="property-owners-orbit" aria-hidden="true" />
        </div>
      </section>

      <section
        className="home-guides-section"
        id="featured-guides"
        aria-labelledby="featured-guides-title"
      >
        <div className="container">
          <div className="home-section-heading home-section-heading-row">
            <SectionHeading
              eyebrow="Featured guides"
              title="Useful knowledge, thoughtfully gathered."
              description="The resource library is taking shape. Start with the sections planned for practical Brussels information."
              id="featured-guides-title"
            />
            <Link className="text-link" href="/resources">
              View resources <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="home-guides-grid">
            {featuredGuides.map((guide) => (
              <ArticleCard {...guide} key={guide.title} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="partners-section"
        id="local-partners"
        aria-labelledby="partners-title"
      >
        <div className="container partners-inner">
          <div>
            <p className="eyebrow">Local partner directory</p>
            <h2 className="section-heading" id="partners-title">
              Explore local service categories.
            </h2>
          </div>
          <div className="partners-copy">
            <p>
              Browse the directory structure, with illustrative placeholder
              entries only. These are not real providers or recommendations;
              listings must be verified and approved before publication.
            </p>
            <Link className="text-link" href="/partners">
              Browse partner categories{" "}
              <span aria-hidden="true">→</span>
            </Link>
            <BusinessPartnerLeadCta />
          </div>
        </div>
      </section>
    </>
  );
}
