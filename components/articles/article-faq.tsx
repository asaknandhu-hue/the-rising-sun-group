import type { ArticleFAQItem } from "@/lib/articles/types";

export function ArticleFAQ({ items }: { items: ArticleFAQItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="article-faq-section" aria-labelledby="article-faq-title">
      <p className="eyebrow">Questions and answers</p>
      <h2 id="article-faq-title">Frequently asked questions</h2>
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
    </section>
  );
}
