import { getArticleBySlug } from "@/features/news/services/newsService";
import { ArticleDetail } from "@/features/news/ui/ArticleDetail";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const result = await getArticleBySlug(slug);

  if (!result.success) {
    notFound();
  }

  return <ArticleDetail article={result.data} />;
}
