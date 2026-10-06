import type { ReactNode } from "react";
import Link from "next/link";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="section-heading-block">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-heading" id={id}>
        {title}
      </h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}

type ArticleCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export function ArticleCard({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: ArticleCardProps) {
  return (
    <article className="article-card">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="article-card-description">{description}</p>
      <Link className="text-link" href={href}>
        {linkLabel} <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

type CtaBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function CtaBlock({
  eyebrow,
  title,
  description,
  children,
}: CtaBlockProps) {
  return (
    <section className="cta-block" aria-label={title}>
      <div className="container cta-block-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-heading">{title}</h2>
          <p className="section-intro">{description}</p>
        </div>
        <div className="cta-block-action">{children}</div>
      </div>
    </section>
  );
}
