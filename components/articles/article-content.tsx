import Image from "next/image";
import Link from "next/link";
import type {
  Article,
  ArticleBlock,
  ArticleInlineSegment,
} from "@/lib/articles/types";
import { getArticleHeadings } from "./article-table-of-contents";

function InlineContent({
  content,
  articleSlugs,
}: {
  content: string | ArticleInlineSegment[];
  articleSlugs: readonly string[];
}) {
  if (typeof content === "string") {
    return <>{content}</>;
  }

  return (
    <>
      {content.map((segment, index) => {
        if (typeof segment === "string") {
          return <span key={index}>{segment}</span>;
        }

        const href =
          segment.href?.startsWith("/") && !segment.href.startsWith("//")
            ? segment.href
            : articleSlugs.includes(segment.slug)
              ? `/resources/${segment.slug}`
              : undefined;

        return href ? (
          <Link key={index} href={href}>
            {segment.label}
          </Link>
        ) : (
          <span key={index}>{segment.label}</span>
        );
      })}
    </>
  );
}

type ArticleContentBlock =
  | Exclude<ArticleBlock, { type: "heading" }>
  | {
      type: "heading";
      level: 3;
      text: string;
      id: string;
    };

function renderBlock(
  block: ArticleContentBlock,
  articleSlugs: readonly string[],
) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="article-subheading" id={block.id}>
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p>
          <InlineContent content={block.content} articleSlugs={articleSlugs} />
        </p>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List
          className={`guide-bullet-list${block.ordered ? " article-numbered-list" : ""}`}
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside
          className={`guide-info-box${block.tone === "caution" ? " guide-info-box-caution" : ""}`}
          role="note"
        >
          <p className="guide-info-title">{block.title}</p>
          <p>{block.content}</p>
        </aside>
      );
    case "image":
      return (
        <figure className="article-content-image">
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
  }
}

export function ArticleContent({
  article,
  articleSlugs,
}: {
  article: Article;
  articleSlugs: readonly string[];
}) {
  const headings = getArticleHeadings(article.content);
  const headingIds = new Map(
    headings.map(({ heading, id }) => [heading, id]),
  );
  type ContentSection = {
    heading?: { text: string };
    id?: string;
    blocks: ArticleContentBlock[];
  };
  const sections: ContentSection[] = [];
  let currentSection: ContentSection = { blocks: [] };

  article.content.forEach((block) => {
    if (block.type === "heading") {
      if (block.level === 2) {
        if (currentSection.blocks.length > 0 || currentSection.heading) {
          sections.push(currentSection);
        }
        currentSection = {
          heading: { text: block.text },
          id: headingIds.get(block) ?? "",
          blocks: [],
        };
      } else {
        currentSection.blocks.push({
          type: "heading",
          level: 3,
          text: block.text,
          id: headingIds.get(block) ?? "",
        });
      }
    } else {
      currentSection.blocks.push(block);
    }
  });

  if (currentSection.blocks.length > 0 || currentSection.heading) {
    sections.push(currentSection);
  }

  return (
    <article className="guide-article article-content">
      <p className="guide-disclaimer" role="note">
        Article outline content is editorial placeholder material. Verify details
        with current, attributable sources before relying on them.
      </p>
      <div className="article-content-sections">
        {sections.map((section, index) => {
          const id = section.id;
          const content = section.blocks.map((block, blockIndex) => (
            <div className="article-content-block" key={`${index}-${blockIndex}`}>
              {renderBlock(block, articleSlugs)}
            </div>
          ));

          return section.heading ? (
            <section
              className="guide-section article-content-section"
              id={id}
              aria-labelledby={`${id}-title`}
              key={`${id}-${index}`}
            >
              <div className="guide-section-heading">
                <h2 id={`${id}-title`}>{section.heading.text}</h2>
              </div>
              <div className="guide-section-content">{content}</div>
            </section>
          ) : (
            <div className="article-intro-content" key={`intro-${index}`}>
              {content}
            </div>
          );
        })}
      </div>
    </article>
  );
}
