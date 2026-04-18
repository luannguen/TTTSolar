import Link from "next/link";

export default function NewsPage() {
  const articles = [
    {
      slug: "future-solar-turbine-efficiency",
      title: "The Future of Solar Turbine Efficiency",
      excerpt: "Recent breakthroughs in turbine blade design have increased energy capture by 15%.",
      date: "Oct 12, 2023",
      author: "Dr. Solar"
    },
    {
      slug: "global-supply-chain-renewables",
      title: "Global Supply Chain and Renewables",
      excerpt: "Navigating the complexities of raw material sourcing for solar panels in 2024.",
      date: "Sep 28, 2023",
      author: "Admin"
    },
    {
      slug: "off-grid-living-practical-guide",
      title: "Off-grid Living: A Practical Guide",
      excerpt: "Everything you need to know about setting up a self-sustaining home power system.",
      date: "Sep 15, 2023",
      author: "Tech Team"
    }
  ];

  const featuredSlug = "100mw-solar-farm-west-africa";

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-16">Latest News</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Featured Post */}
          <Link href={`/news/${featuredSlug}`} className="lg:col-span-2 group">
            <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 mb-8">
              <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                <span className="text-gray-700 font-black text-6xl">FEATURED ARTICLE</span>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-yellow-500 font-bold tracking-widest text-sm uppercase">Innovation</span>
              <h2 className="text-4xl font-bold group-hover:text-yellow-500 transition-colors leading-tight">
                Breaking: 100MW Solar Farm Operational in West Africa
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl">
                A massive milestone for sustainable development as the largest solar installation in the region begins providing power to over 500,000 homes.
              </p>
            </div>
          </Link>

          {/* List Posts */}
          {articles.map((item, i) => (
            <Link key={i} href={`/news/${item.slug}`} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
                  <span>{item.date}</span>
                  <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                  <span>By {item.author}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-yellow-500 transition-colors">{item.title}</h3>
                <p className="text-gray-400 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 font-bold text-sm">
                READ MORE →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
