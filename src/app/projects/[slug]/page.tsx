import { getProjectBySlug } from "@/features/projects/services/projectService";
import { ProjectDetail } from "@/features/projects/ui/ProjectDetail";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);

  if (!result.success) {
    notFound();
  }

  return <ProjectDetail project={result.data} />;
}
