import Link from "next/link";
import type { Article } from "@/lib/articles/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card resource-article-card">
      <p className="eyebrow">{article.category}</p>
      <h3>
        <Link href={`/resources/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="article-card-description">{article.description}</p>
      <div className="resource-card-meta">
        <span>{article.readingTimeMinutes} min read</span>
        <span aria-hidden="true">·</span>
        <span>{article.tags[0]}</span>
      </div>
      <Link className="text-link" href={`/resources/${article.slug}`}>
        Read article <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
