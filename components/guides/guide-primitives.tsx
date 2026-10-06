import type { ReactNode } from "react";
import Link from "next/link";

type GuideSectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

export function GuideSection({
  id,
  number,
  title,
  children,
}: GuideSectionProps) {
  return (
    <section className="guide-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="guide-section-heading">
        <span className="guide-section-number" aria-hidden="true">
          {number}
        </span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="guide-section-content">{children}</div>
    </section>
  );
}

type GuideInfoBoxProps = {
  title: string;
  children: ReactNode;
  variant?: "note" | "caution";
};

export function GuideInfoBox({
  title,
  children,
  variant = "note",
}: GuideInfoBoxProps) {
  return (
    <aside className={`guide-info-box guide-info-box-${variant}`}>
      <p className="guide-info-title">{title}</p>
      <div>{children}</div>
    </aside>
  );
}

export type GuideChecklistItem = {
  label: string;
  detail?: string;
};

type GuideChecklistProps = {
  title: string;
  items: GuideChecklistItem[];
};

export function GuideChecklist({ title, items }: GuideChecklistProps) {
  return (
    <div className="guide-checklist">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <span className="guide-checkmark" aria-hidden="true" />
            <span>
              <strong>{item.label}</strong>
              {item.detail && <span className="guide-check-detail">{item.detail}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export type GuideFaqItem = {
  question: string;
  answer: string;
};

type GuideFaqProps = {
  items: GuideFaqItem[];
};

export function GuideFaq({ items }: GuideFaqProps) {
  return (
    <div className="guide-faq">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <div className="guide-faq-answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

type GuideCtaProps = {
  id?: string;
  title: string;
  description: string;
  note: string;
};

export function GuideCta({ id, title, description, note }: GuideCtaProps) {
  return (
    <section
      className="guide-cta"
      id={id}
      aria-labelledby="guide-cta-title"
    >
      <div className="guide-cta-copy">
        <p className="eyebrow">The Rising Sun Group</p>
        <h2 id="guide-cta-title">{title}</h2>
        <p>{description}</p>
        <p className="guide-cta-note">{note}</p>
      </div>
      <Link className="button-light guide-cta-link" href="/contact">
        Visit our Contact page <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
