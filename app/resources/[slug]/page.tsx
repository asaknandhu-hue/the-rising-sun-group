import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/articles/article-content";
import { ArticleCTA } from "@/components/articles/article-cta";
import { ArticleFAQ } from "@/components/articles/article-faq";
import { ArticleHeader } from "@/components/articles/article-header";
import { ArticleTableOfContents } from "@/components/articles/article-table-of-contents";
import { RelatedArticles } from "@/components/articles/related-articles";
import {
  Breadcrumbs,
  FaqStructuredData,
} from "@/components/structured-data";
import {
  getArticleBySlug,
  listArticles,
} from "@/lib/articles/repository";
import { createPageMetadata } from "@/lib/seo";

type ResourceRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return (await listArticles()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const path = `/resources/${article.slug}`;
  return createPageMetadata({
    title: article.title,
    description: article.description,
    path,
    type: "article",
    image: article.heroImage,
    publishedTime: article.publicationDate
      ? `${article.publicationDate}T00:00:00.000Z`
      : undefined,
    modifiedTime: article.updatedDate
      ? `${article.updatedDate}T00:00:00.000Z`
      : undefined,
  });
}

export default async function ResourceArticlePage({
  params,
}: ResourceRouteProps) {
  const { slug } = await params;
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug),
    listArticles(),
  ]);

  if (!article) {
    notFound();
  }

  return (
    <main className="resource-article-page" id="main-content">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: article.title, path: `/resources/${article.slug}` },
        ]}
      />
      <FaqStructuredData items={article.faq} />
      <ArticleHeader
        article={article}
        eyebrow={`${article.category} · Brussels`}
        title={article.title}
        description={article.description}
      />
      <div className="container guide-layout article-layout">
        <ArticleTableOfContents content={article.content} />
        <div>
          <ArticleContent
            article={article}
            articleSlugs={allArticles.map(({ slug: articleSlug }) => articleSlug)}
          />
          <ArticleFAQ items={article.faq} />
          <ArticleCTA />
        </div>
      </div>
      <RelatedArticles article={article} />
    </main>
  );
}
