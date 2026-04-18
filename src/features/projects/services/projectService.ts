import { success, failure, type Result } from "@/lib/utils";

export interface ProjectDetailItem {
  slug: string;
  name: string;
  category: string;
  location: string;
  output: string;
  year: string;
  challenge: string;
  solution: string;
  impact: string;
}

const projectsMock: ProjectDetailItem[] = [
  {
    slug: "sunshine-farm",
    name: "Sunshine Farm",
    category: "Industrial",
    location: "Arizona, USA",
    output: "50MW",
    year: "2023",
    challenge: "Developing a massive solar array in harsh desert conditions with extreme temperature fluctuations.",
    solution: "Implemented specialized tracking systems and robust cooling infrastructure for the inverters.",
    impact: "Providing clean energy to over 25,000 homes and reducing CO2 emissions by 40,000 tons annually."
  },
  {
    slug: "eco-residential",
    name: "Eco Residential",
    category: "Residential",
    location: "Berlin, Germany",
    output: "12kW",
    year: "2022",
    challenge: "Optimizing energy capture on a limited roof area with significant shading from nearby trees.",
    solution: "Used high-density shingled cells and micro-inverters to maximize performance on each panel independently.",
    impact: "90% energy independence for the household and $3,500 annual savings on utility bills."
  }
];

export async function getProjectBySlug(slug: string): Promise<Result<ProjectDetailItem>> {
  const project = projectsMock.find(p => p.slug === slug);
  if (!project) {
    return failure(`Project with slug "${slug}" not found.`);
  }
  return success(project);
}
