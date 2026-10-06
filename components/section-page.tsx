import Link from "next/link";
import { Badge, SectionHeading } from "@/components/ui";
import { LeadCapture } from "@/components/lead-capture";
import {
  BusinessPartnerLeadCta,
  ExpatLeadCta,
  PropertyOwnerLeadCta,
  RenterLeadCta,
} from "@/components/lead-ctas";
import type { sectionPages } from "@/lib/sections";

type SectionPageProps = {
  page: (typeof sectionPages)[keyof typeof sectionPages];
};

export function SectionPage({ page }: SectionPageProps) {
  if (page.title === "Contact") {
    return (
      <main className="section-page" id="main-content">
        <section className="section-page-hero" aria-labelledby="section-title">
          <div className="container section-page-hero-inner">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 id="section-title">{page.title}</h1>
            <p className="section-page-intro">
              Share an enquiry using the form below. This prototype validates
              submissions and discards them; it cannot provide follow-up yet.
            </p>
          </div>
        </section>
        <LeadCapture />
      </main>
    );
  }

  const leadCta =
    page.title === "Relocation" ? (
      <ExpatLeadCta />
    ) : page.title === "Renting in Brussels" ? (
      <RenterLeadCta />
    ) : page.title === "Property Owners" ? (
      <PropertyOwnerLeadCta />
    ) : page.title === "Partners" ? (
      <BusinessPartnerLeadCta />
    ) : null;

  return (
    <main className="section-page" id="main-content">
      <section className="section-page-hero" aria-labelledby="section-title">
        <div className="container section-page-hero-inner">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 id="section-title">{page.title}</h1>
          <p className="section-page-intro">{page.description}</p>
          <p className="section-page-note">
            {page.title === "Relocation"
              ? "This section is taking shape. The existing Moving to Brussels guide is linked below; other topics remain planned."
              : "This section is taking shape. The topics below show its planned scope; detailed pages will be added as information is ready."}
          </p>
        </div>
      </section>
      <section className="section-topics" aria-labelledby="topics-title">
        <div className="container">
          <div className="section-topics-heading">
            <SectionHeading
              eyebrow="A place to begin"
              title="What this section will cover"
              id="topics-title"
            />
            <p className="section-intro">
              {page.title === "Relocation"
                ? "Open the available guide or browse the planned topics, which are not separate pages yet."
                : "Browse the planned topics for this section. These are not separate pages yet."}
            </p>
          </div>
          <ul className="topic-grid">
            {page.topics.map((topic, index) => (
              <li className="topic-card" key={topic.slug}>
                <span className="topic-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>
                  {page.title === "Relocation" &&
                  topic.slug === "moving-to-brussels" ? (
                    <Link href="/relocation/moving-to-brussels">
                      {topic.label}
                    </Link>
                  ) : (
                    topic.label
                  )}
                </h3>
                <Badge>
                  {page.title === "Relocation" &&
                  topic.slug === "moving-to-brussels"
                    ? "Guide available"
                    : "Planned topic"}
                </Badge>
              </li>
            ))}
          </ul>
          {leadCta}
          <Link className="text-link" href="/">
            <span aria-hidden="true">←</span> Back to the homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
