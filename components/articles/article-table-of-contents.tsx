import type { ArticleBlock } from "@/lib/articles/types";

export function headingId(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getArticleHeadings(content: ArticleBlock[]) {
  const counts = new Map<string, number>();

  return content.flatMap((block) => {
    if (block.type !== "heading") {
      return [];
    }

    const baseId = headingId(block.text);
    const count = counts.get(baseId) ?? 0;
    counts.set(baseId, count + 1);

    return [{ heading: block, id: count === 0 ? baseId : `${baseId}-${count + 1}` }];
  });
}

export function ArticleTableOfContents({
  content,
}: {
  content: ArticleBlock[];
}) {
  const headings = getArticleHeadings(content);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="guide-toc article-toc" aria-labelledby="article-toc-title">
      <p className="eyebrow" id="article-toc-title">
        In this article
      </p>
      <nav aria-label="Article contents">
        <ol>
          {headings.map(({ heading, id }, index) => (
            <li key={`${id}-${index}`}>
              <a
                href={`#${id}`}
                className={heading.level === 3 ? "article-toc-subheading" : undefined}
              >
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {heading.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
