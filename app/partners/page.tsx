import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import {
  partnerCategories,
  partnerDirectoryDisclosure,
  partnerListingsByCategory,
} from "@/lib/partners";

export const metadata = createPageMetadata({
  title: "Local Partner Directory",
  description:
    "Browse the planned local directory categories. All current entries are illustrative placeholders and must be verified before publication.",
  path: "/partners",
});

export default function PartnersIndexPage() {
  return (
    <main className="partners-page" id="main-content">
      <section className="partners-hero" aria-labelledby="partners-page-title">
        <div className="container partners-hero-inner">
          <p className="eyebrow">Local directory</p>
          <h1 id="partners-page-title">Explore partner categories.</h1>
          <p className="partners-intro">
            Browse categories for local services and resources relevant to
            relocation, renting and property information.
          </p>
          <p className="partners-disclosure" role="note">
            {partnerDirectoryDisclosure}
          </p>
        </div>
      </section>

      <section
        className="partners-directory-section"
        aria-labelledby="partner-categories-title"
      >
        <div className="container">
          <div className="partners-section-heading">
            <p className="eyebrow">Browse the directory</p>
            <h2 id="partner-categories-title">Categories</h2>
            <p>
              Each category currently contains illustrative sample content
              rather than actual provider listings.
            </p>
          </div>
          <ul className="partner-category-grid">
            {partnerCategories.map((category, index) => (
              <li key={category.slug}>
                <Link
                  className="partner-category-card"
                  href={`/partners/${category.slug}`}
                >
                  <span className="partner-category-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="partner-category-title">{category.name}</span>
                  <span className="partner-category-count">
                    {partnerListingsByCategory[category.slug].length}{" "}
                    illustrative placeholder
                    {partnerListingsByCategory[category.slug].length === 1
                      ? ""
                      : "s"}
                  </span>
                  <span className="partner-category-arrow" aria-hidden="true">
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
