import Image from "next/image";
import type { Article } from "@/lib/articles/types";
import { InformationReviewed } from "@/components/guides/information-sources";

type ArticleHeaderProps = {
  title: string;
  description: string;
  eyebrow: string;
  article?: Article;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-BE", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function ArticleHeader({
  title,
  description,
  eyebrow,
  article,
}: ArticleHeaderProps) {
  return (
    <header className="guide-hero article-hero">
      <div className="container guide-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="guide-hero-intro">{description}</p>
        {article && (
          <div className="guide-hero-meta" aria-label="Article details">
            <span>{article.author}</span>
            <span aria-hidden="true">·</span>
            <span>
              {article.publicationDate
                ? `Published ${formatDate(article.publicationDate)}`
                : "Publication date pending"}
            </span>
            {article.updatedDate && (
              <>
                <span aria-hidden="true">·</span>
                <span>Updated {formatDate(article.updatedDate)}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{article.readingTimeMinutes} min read</span>
            {article.editorialReview && (
              <>
                <span aria-hidden="true">·</span>
                <InformationReviewed date={article.editorialReview.lastReviewed} />
              </>
            )}
          </div>
        )}
      </div>
      {article?.heroImage && (
        <div className="container article-hero-image">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            width={article.heroImage.width}
            height={article.heroImage.height}
            priority
          />
        </div>
      )}
    </header>
  );
}
