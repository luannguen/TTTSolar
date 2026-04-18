import { success, failure, type Result } from "@/lib/utils";

export interface ServiceDetailItem {
  slug: string;
  title: string;
  desc: string;
  fullContent: string;
  iconName: string;
  features: string[];
  specs: { label: string; value: string }[];
}

const servicesMock: ServiceDetailItem[] = [
  {
    slug: "residential-solar",
    title: "Residential Solar",
    desc: "Custom solar solutions for your home. Save money and reduce your carbon footprint with high-efficiency panels.",
    fullContent: "Transform your home into a clean energy powerhouse. Our residential solar solutions are designed to fit your unique energy needs and architectural style. We handle everything from the initial site assessment and custom design to professional installation and ongoing monitoring. Our systems use premium, high-efficiency solar panels and smart inverters that maximize energy production even in low-light conditions.",
    iconName: "Zap",
    features: ["Custom Design", "Full Installation", "Smart Monitoring"],
    specs: [
      { label: "Efficiency", value: "Up to 22.8%" },
      { label: "Warranty", value: "25 Years" },
      { label: "Install Time", value: "2-3 Days" }
    ]
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    desc: "Scaleable energy solutions for businesses. Optimize your operational costs and meet sustainability goals.",
    fullContent: "Empower your business with sustainable energy. TTT Solar provides large-scale commercial solar installations for warehouses, office buildings, and manufacturing facilities. Our engineering team specializes in optimizing performance for commercial roof space, reducing peaks in demand, and providing predictable energy costs for decades. We also assist with green building certifications and tax incentive documentation.",
    iconName: "Shield",
    features: ["Grid-tie systems", "Power Purchase Agreements", "Tax Benefit Consulting"],
    specs: [
      { label: "Scalability", value: "Up to 10MW+" },
      { label: "Payback Period", value: "4-6 Years" },
      { label: "Maintenance", value: "Included" }
    ]
  }
];

export async function getServiceBySlug(slug: string): Promise<Result<ServiceDetailItem>> {
  const service = servicesMock.find(s => s.slug === slug);
  if (!service) {
    return failure(`Service with slug "${slug}" not found.`);
  }
  return success(service);
}

export async function getAllServices(): Promise<Result<ServiceDetailItem[]>> {
  return success(servicesMock);
}
