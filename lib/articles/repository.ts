import { localArticles } from "./local-articles";
import type { ArticleRepository } from "./types";

/** Local data adapter; a CMS or database adapter can implement this interface later. */
export const articleRepository: ArticleRepository = {
  list: async () => localArticles,
  getBySlug: async (slug) =>
    localArticles.find((article) => article.slug === slug),
};

export function listArticles() {
  return articleRepository.list();
}

export function getArticleBySlug(slug: string) {
  return articleRepository.getBySlug(slug);
}

export async function getRelatedArticles(relatedSlugs: readonly string[]) {
  const articles = await Promise.all(
    relatedSlugs.map((slug) => getArticleBySlug(slug)),
  );
  return articles.filter((article) => article !== undefined);
}
