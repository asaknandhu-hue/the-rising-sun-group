import { ArticleCard } from "@/components/articles/article-card";
import { ArticleCTA } from "@/components/articles/article-cta";
import { ArticleHeader } from "@/components/articles/article-header";
import { listArticles } from "@/lib/articles/repository";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Brussels Relocation, Renting & Neighborhood Resources",
  description:
    "Browse editorial placeholder resources on Brussels relocation, expat housing, renting and neighborhoods. These outlines are not verified advice.",
  path: "/resources",
});

export default async function ResourcesPage() {
  const articles = await listArticles();

  return (
    <main className="resource-index-page" id="main-content">
      <ArticleHeader
        eyebrow="Practical information · Brussels"
        title="Resources"
        description="A growing library of practical article outlines. The examples below are editorial placeholders, not verified advice."
      />
      <section className="section-topics resource-index-list" aria-labelledby="resource-list-title">
        <div className="container">
          <div className="section-topics-heading">
            <div className="section-heading-block">
              <p className="eyebrow">Browse the library</p>
              <h2 className="section-heading" id="resource-list-title">
                Guides and checklists
              </h2>
            </div>
            <p className="section-intro">
              Details—especially legal or place-specific information—must be
              checked against current, attributable sources before publication.
            </p>
          </div>
          <div className="resource-article-grid">
            {articles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
      <ArticleCTA
        title="A fuller relocation guide"
        description="The existing Moving to Brussels guide remains available in the Relocation section."
        href="/relocation/moving-to-brussels"
        linkLabel="Open the relocation guide"
      />
    </main>
  );
}
