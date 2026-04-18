import { getServiceBySlug } from "@/features/services/services/serviceOperations";
import { ServiceDetail } from "@/features/services/ui/ServiceDetail";
import { notFound } from "next/navigation";

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const result = await getServiceBySlug(slug);

  if (!result.success) {
    notFound();
  }

  return <ServiceDetail service={result.data} />;
}
