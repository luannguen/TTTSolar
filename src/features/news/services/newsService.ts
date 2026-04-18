import { success, failure, type Result } from "@/lib/utils";

export interface ArticleDetailItem {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readingTime: string;
}

const newsMock: ArticleDetailItem[] = [
  {
    slug: "future-solar-turbine-efficiency",
    title: "The Future of Solar Turbine Efficiency",
    category: "Innovation",
    excerpt: "Recent breakthroughs in turbine blade design have increased energy capture by 15%.",
    content: "The renewable energy landscape is shifting rapidly as engineers discover new ways to harness solar power with moving parts. Traditionally, solar energy is associated with static photovoltaic panels, but solar turbine technology is carving out a niche in utility-scale installations. By combining concentrated solar power with advanced aerodynamic turbine blades, TTT Solar is pushing the boundaries of what's possible in energy conversion...",
    date: "Oct 12, 2023",
    author: "Dr. Solar",
    readingTime: "5 min read"
  },
  {
    slug: "global-supply-chain-renewables",
    title: "Global Supply Chain and Renewables",
    category: "Market",
    excerpt: "Navigating the complexities of raw material sourcing for solar panels in 2024.",
    content: "The volatility of the global supply chain has presented unique challenges for the renewable energy sector. From silicon shortages to logistics bottlenecks, manufacturers are being forced to rethink their sourcing strategies. TTT Solar has implemented a more resilient, regionalized supply model that prioritizes long-term stability over short-term cost gains. This article explores how we are securing the materials needed for the next generation of solar infrastructure...",
    date: "Sep 28, 2023",
    author: "Admin",
    readingTime: "8 min read"
  }
];

export async function getArticleBySlug(slug: string): Promise<Result<ArticleDetailItem>> {
  const article = newsMock.find(a => a.slug === slug);
  if (!article) {
    return failure(`Article with slug "${slug}" not found.`);
  }
  return success(article);
}
