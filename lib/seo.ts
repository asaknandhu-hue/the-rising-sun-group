import type { Metadata } from "next";

export const siteUrl = "https://therisingsungroup.com";
export const siteName = "The Rising Sun Group";
export const siteDescription =
  "Independent information for people exploring Brussels relocation, expat housing, renting, neighborhoods and property.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: {
    src: string;
    alt: string;
  } | null;
  publishedTime?: string;
  modifiedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  image,
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const images = image ? [{ url: image.src, alt: image.alt }] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: new URL(path, siteUrl).toString(),
    },
    openGraph: {
      title,
      description,
      siteName,
      type,
      locale: "en_BE",
      url: path,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(images ? { images: images.map(({ url }) => url) } : {}),
    },
  };
}
