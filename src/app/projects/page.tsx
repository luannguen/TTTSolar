import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { slug: "sunshine-farm", name: "Sunshine Farm", category: "Industrial", location: "Arizona, USA", output: "50MW" },
    { slug: "eco-residential", name: "Eco Residential", category: "Residential", location: "Berlin, Germany", output: "12kW" },
    { slug: "blue-tech-park", name: "Blue Tech Park", category: "Commercial", location: "Tokyo, Japan", output: "2.5MW" },
    { slug: "desert-power", name: "Desert Power", category: "Utility", location: "Dubai, UAE", output: "100MW" },
    { slug: "green-roof-project", name: "Green Roof Project", category: "Residential", location: "London, UK", output: "8kW" },
    { slug: "manufacturing-hub", name: "Manufacturing Hub", category: "Commercial", location: "Vietnam", output: "1.2MW" }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-400">
              Showcasing our global impact through successful renewable energy installations.
            </p>
          </div>
          <div className="flex gap-4">
             {["All", "Industrial", "Residential", "Commercial"].map(cat => (
               <button key={cat} className="px-5 py-2.5 rounded-full border border-white/10 text-sm hover:bg-yellow-500 hover:text-black transition-all">
                 {cat}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 bg-white/5">
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <div className="w-full h-full bg-[#111] flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-4xl">{p.name}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-yellow-500 text-black text-[10px] font-bold rounded-full tracking-wider uppercase">
                    {p.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{p.location}</p>
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">{p.output} Capacity</span>
                  <Link href={`/projects/${p.slug}`}>
                    <button className="text-xs font-bold text-white group-hover:text-yellow-500 transition-colors">
                      VIEW CASE STUDY
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
