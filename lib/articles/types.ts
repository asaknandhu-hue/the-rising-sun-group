export type ArticleInlineSegment =
  | string
  | {
      type: "article-link";
      slug: string;
      label: string;
      href?: string;
    };

export type ArticleBlock =
  | {
      type: "heading";
      level: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      content: string | ArticleInlineSegment[];
    }
  | {
      type: "list";
      ordered?: boolean;
      items: string[];
    }
  | {
      type: "callout";
      title: string;
      content: string;
      tone?: "note" | "caution";
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export type ArticleFAQItem = {
  question: string;
  answer: string;
};

export type Article = {
  title: string;
  slug: string;
  description: string;
  category: string;
  author: string;
  /** A verified publication date in YYYY-MM-DD format, or null while pending. */
  publicationDate: string | null;
  /** A verified update date in YYYY-MM-DD format, or null when not applicable. */
  updatedDate: string | null;
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null;
  readingTimeMinutes: number;
  tags: string[];
  content: ArticleBlock[];
  faq: ArticleFAQItem[];
  relatedArticles: string[];
};

export type ArticleRepository = {
  list(): Promise<readonly Article[]>;
  getBySlug(slug: string): Promise<Article | undefined>;
};
