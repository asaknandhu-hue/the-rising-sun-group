import Link from "next/link";
import { Badge } from "@/components/ui";
import { Breadcrumbs } from "@/components/structured-data";
import {
  GuideCta,
  GuideSection,
} from "@/components/guides/guide-primitives";
import {
  neighborhoodPlaceholderContent,
  type NeighborhoodEntry,
} from "@/lib/neighborhoods";

type NeighborhoodPageProps = {
  neighborhood: NeighborhoodEntry;
};

export function NeighborhoodPage({
  neighborhood,
}: NeighborhoodPageProps) {
  const {
    sections,
    sectionPlaceholder,
    statusLabel,
    cta,
    heroEyebrow,
    heroDescription,
  } = neighborhoodPlaceholderContent;

  return (
    <main id="main-content">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Neighborhoods", path: "/neighborhoods" },
          {
            name: `${neighborhood.name} Neighborhood Guide`,
            path: `/neighborhoods/${neighborhood.slug}`,
          },
        ]}
      />
      <section className="guide-hero" aria-labelledby="neighborhood-title">
        <div className="container guide-hero-inner">
          <p className="eyebrow">{heroEyebrow}</p>
          <h1 id="neighborhood-title">
            {neighborhood.name} Neighborhood Guide
          </h1>
          <p className="guide-hero-intro">
            {heroDescription.replace("{neighborhood}", neighborhood.name)}
          </p>
          <div className="guide-hero-meta">
            <span>{statusLabel}</span>
          </div>
        </div>
      </section>

      <div className="container guide-layout">
        <nav className="guide-toc" aria-label={`${neighborhood.name} guide sections`}>
          <p className="eyebrow">On this page</p>
          <ol>
            {sections.map((section, index) => (
              <li key={section.id}>
                <Link href={`#${section.id}`}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#cta">
                <span aria-hidden="true">
                  {String(sections.length + 1).padStart(2, "0")}
                </span>
                CTA
              </Link>
            </li>
          </ol>
        </nav>

        <article className="guide-article">
          <p className="guide-disclaimer" role="note">
            {neighborhoodPlaceholderContent.notice}
          </p>
          {sections.map((section, index) => (
            <GuideSection
              id={section.id}
              key={section.id}
              number={String(index + 1).padStart(2, "0")}
              title={section.title}
            >
              <p>
                {sectionPlaceholder
                  .replace("{topic}", section.title)
                  .replace("{neighborhood}", neighborhood.name)}
              </p>
              <Badge>{statusLabel}</Badge>
            </GuideSection>
          ))}
          <GuideCta
            id="cta"
            title={cta.title}
            description={cta.description}
            note={cta.note}
          />
        </article>
      </div>
    </main>
  );
}
