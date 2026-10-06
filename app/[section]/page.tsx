import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPage } from "@/components/section-page";
import { sectionPages, type SectionSlug } from "@/lib/sections";
import { createPageMetadata } from "@/lib/seo";

type SectionRouteProps = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  return Object.keys(sectionPages).map((section) => ({ section }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: SectionRouteProps): Promise<Metadata> {
  const { section } = await params;

  if (!Object.hasOwn(sectionPages, section)) {
    notFound();
  }

  const page = sectionPages[section as SectionSlug];
  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/${section}`,
  });
}

export default async function SectionRoute({ params }: SectionRouteProps) {
  const { section } = await params;

  if (!Object.hasOwn(sectionPages, section)) {
    notFound();
  }

  return <SectionPage page={sectionPages[section as SectionSlug]} />;
}
