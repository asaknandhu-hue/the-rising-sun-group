import { getRelatedArticles } from "@/lib/articles/repository";
import type { Article } from "@/lib/articles/types";
import { ArticleCard } from "./article-card";

export async function RelatedArticles({ article }: { article: Article }) {
  const related = (await getRelatedArticles(article.relatedArticles)).filter(
    (relatedArticle) => relatedArticle.slug !== article.slug,
  );

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="section-topics related-articles" aria-labelledby="related-articles-title">
      <div className="container">
        <div className="section-topics-heading">
          <div className="section-heading-block">
            <p className="eyebrow">Keep reading</p>
            <h2 className="section-heading" id="related-articles-title">
              Related resources
            </h2>
          </div>
        </div>
        <div className="resource-article-grid">
          {related.map((relatedArticle) => (
            <ArticleCard article={relatedArticle} key={relatedArticle.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
