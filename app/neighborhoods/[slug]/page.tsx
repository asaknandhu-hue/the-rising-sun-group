import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeighborhoodPage } from "@/components/neighborhoods/neighborhood-page";
import { createPageMetadata } from "@/lib/seo";
import {
  getNeighborhood,
  neighborhoods,
  neighborhoodPlaceholderContent,
} from "@/lib/neighborhoods";

type NeighborhoodRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return neighborhoods.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NeighborhoodRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhood(slug);

  if (!neighborhood) {
    notFound();
  }

  const title = neighborhood.name === "Brussels City"
    ? "Brussels City Neighborhood Guide"
    : neighborhoodPlaceholderContent.detailMetadataTitle.replace(
      "{neighborhood}",
      neighborhood.name,
    );
  const description = neighborhoodPlaceholderContent.detailMetadataDescription.replace(
      "{neighborhood}",
      neighborhood.name,
    );
  return createPageMetadata({
    title,
    description,
    path: `/neighborhoods/${neighborhood.slug}`,
  });
}

export default async function NeighborhoodRoute({
  params,
}: NeighborhoodRouteProps) {
  const { slug } = await params;
  const neighborhood = getNeighborhood(slug);

  if (!neighborhood) {
    notFound();
  }

  return <NeighborhoodPage neighborhood={neighborhood} />;
}
