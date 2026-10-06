import Link from "next/link";
import { Badge, SectionHeading } from "@/components/ui";
import {
  neighborhoods,
  neighborhoodPlaceholderContent,
} from "@/lib/neighborhoods";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: neighborhoodPlaceholderContent.index.metadataTitle,
  description: neighborhoodPlaceholderContent.index.metadataDescription,
  path: "/neighborhoods",
});

export default function NeighborhoodIndexPage() {
  const { index, notice, statusLabel } = neighborhoodPlaceholderContent;

  return (
    <main className="section-page" id="main-content">
      <section className="section-page-hero" aria-labelledby="neighborhoods-title">
        <div className="container section-page-hero-inner">
          <p className="eyebrow">{index.eyebrow}</p>
          <h1 id="neighborhoods-title">{index.title}</h1>
          <p className="section-page-intro">{index.description}</p>
          <p className="section-page-note" role="note">
            {notice}
          </p>
        </div>
      </section>

      <section className="section-topics" aria-labelledby="neighborhood-list-title">
        <div className="container">
          <div className="section-topics-heading">
            <SectionHeading
              eyebrow={index.listEyebrow}
              title={index.listTitle}
              id="neighborhood-list-title"
            />
          </div>
          <ul className="topic-grid neighborhood-guide-grid">
            {neighborhoods.map((neighborhood, index) => (
              <li key={neighborhood.slug}>
                <Link
                  className="topic-card neighborhood-guide-card"
                  href={`/neighborhoods/${neighborhood.slug}`}
                >
                  <span className="topic-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="neighborhood-guide-name">
                    {neighborhood.name}
                  </span>
                  <Badge>{statusLabel}</Badge>
                  <span className="home-topic-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
