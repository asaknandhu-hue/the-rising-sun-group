import type { MetadataRoute } from "next";
import { listArticles } from "@/lib/articles/repository";
import { neighborhoods } from "@/lib/neighborhoods";
import { partnerCategories } from "@/lib/partners";
import { sectionPages } from "@/lib/sections";
import { siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await listArticles();
  const sectionPaths = Object.keys(sectionPages)
    .filter((section) => section !== "resources")
    .map((section) => `/${section}`);
  const paths = [
    "/",
    ...sectionPaths,
    "/resources",
    "/neighborhoods",
    "/relocation/moving-to-brussels",
    ...articles.map(({ slug }) => `/resources/${slug}`),
    ...neighborhoods.map(({ slug }) => `/neighborhoods/${slug}`),
    ...partnerCategories.map(({ slug }) => `/partners/${slug}`),
  ];

  return paths.map((path) => ({
    url: path === "/" ? siteUrl : new URL(path, siteUrl).toString(),
  }));
}
