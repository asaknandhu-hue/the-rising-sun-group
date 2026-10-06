import Link from "next/link";
import { siteName, siteUrl } from "@/lib/seo";
import type { ArticleFAQItem } from "@/lib/articles/types";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function StructuredData({ data }: { data: unknown }) {
  const serialized = (JSON.stringify(data) ?? "null")
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}

export function GlobalStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: siteName,
            url: `${siteUrl}/`,
            description:
              "An independent information platform about Brussels relocation, renting, neighborhoods and property.",
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: siteName,
            url: `${siteUrl}/`,
            inLanguage: "en",
            publisher: { "@id": `${siteUrl}/#organization` },
          },
        ],
      }}
    />
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };

  return (
    <>
      <nav className="breadcrumb-nav container" aria-label="Breadcrumb">
        <ol className="breadcrumbs">
          {items.map((item, index) => {
            const current = index === items.length - 1;

            return (
              <li key={item.path}>
                {current ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
                {!current && (
                  <span className="breadcrumb-separator" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <StructuredData data={structuredData} />
    </>
  );
}

export function FaqStructuredData({
  items,
}: {
  items: readonly ArticleFAQItem[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function ArticleStructuredData({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: new URL(path, siteUrl).toString(),
        url: new URL(path, siteUrl).toString(),
        inLanguage: "en",
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: `${siteUrl}/`,
        },
      }}
    />
  );
}
