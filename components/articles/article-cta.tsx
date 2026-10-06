import Link from "next/link";

type ArticleCTAProps = {
  title?: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

export function ArticleCTA({
  title = "Continue exploring",
  description = "Browse the Resources library for more placeholder guides and checklists.",
  href = "/resources",
  linkLabel = "Browse all resources",
}: ArticleCTAProps) {
  return (
    <section className="guide-cta article-cta" aria-labelledby="article-cta-title">
      <div className="guide-cta-copy">
        <p className="eyebrow">The Rising Sun Group</p>
        <h2 id="article-cta-title">{title}</h2>
        <p>{description}</p>
        <p className="guide-cta-note">
          Article outlines are placeholders and should be verified before use.
        </p>
      </div>
      <Link className="button-light guide-cta-link" href={href}>
        {linkLabel} <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
