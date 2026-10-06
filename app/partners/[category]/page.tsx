import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PartnerCard } from "@/components/partners/partner-card";
import {
  getPartnerCategory,
  partnerCategories,
  partnerDirectoryDisclosure,
  partnerListingsByCategory,
} from "@/lib/partners";
import { createPageMetadata } from "@/lib/seo";

type PartnerCategoryRouteProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return partnerCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({
  params,
}: PartnerCategoryRouteProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getPartnerCategory(slug);

  if (!category) {
    notFound();
  }

  return createPageMetadata({
    title: `${category.name} Directory Listings`,
    description: `${category.description} Current entries are illustrative placeholders, not verified providers.`,
    path: `/partners/${category.slug}`,
  });
}

export default async function PartnerCategoryPage({
  params,
}: PartnerCategoryRouteProps) {
  const { category: slug } = await params;
  const category = getPartnerCategory(slug);

  if (!category) {
    notFound();
  }

  const listings = partnerListingsByCategory[category.slug];

  return (
    <main className="partners-page" id="main-content">
      <section className="partners-hero partners-category-hero" aria-labelledby="partner-category-title">
        <div className="container partners-hero-inner">
          <nav className="partner-breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/partners">Partner directory</Link>
              </li>
              <li aria-current="page">{category.name}</li>
            </ol>
          </nav>
          <p className="eyebrow">Partner directory</p>
          <h1 id="partner-category-title">{category.name}</h1>
          <p className="partners-intro">{category.description}</p>
          <p className="partners-disclosure" role="note">
            {partnerDirectoryDisclosure}
          </p>
        </div>
      </section>

      <section
        className="partners-directory-section"
        aria-labelledby="partner-listings-title"
      >
        <div className="container">
          <div className="partners-section-heading">
            <p className="eyebrow">Directory listings</p>
            <h2 id="partner-listings-title">
              {listings.length > 0 ? `Browse ${category.name}` : "No listings yet"}
            </h2>
          </div>
          {listings.length > 0 ? (
            <ul className="partner-listing-grid">
              {listings.map((partner) => (
                <li key={partner.id}>
                  <PartnerCard partner={partner} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="partner-empty-state" role="status">
              No directory listings are available in this category yet. Please
              check back later.
            </p>
          )}
          <Link className="text-link partner-back-link" href="/partners">
            <span aria-hidden="true">←</span> Browse all categories
          </Link>
        </div>
      </section>
    </main>
  );
}
