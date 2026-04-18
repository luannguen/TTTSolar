import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Pioneering the <span className="text-yellow-500">Solar Revolution</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            TTT Solar is dedicated to providing high-efficiency renewable energy solutions. Our mission is to make solar power accessible and affordable for everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
            <Image 
              src="/hero.png" 
              alt="Our Story" 
              fill 
              className="object-cover opacity-80"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-400 leading-relaxed">
              Founded in 2020, TTT Solar began with a simple vision: to harness the infinite power of the sun through advanced turbine technology. Today, we are a leader in distributed energy solutions, serving thousands of customers worldwide.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Founded", value: "2020" },
                { label: "Projects", value: "500+" },
                { label: "Team", value: "150+" },
                { label: "Recognition", value: "12 Awards" }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl font-bold text-yellow-500">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", desc: "Always pushing the boundaries of what's possible in solar technology." },
            { title: "Sustainability", desc: "Our core mission is to protect our planet for future generations." },
            { title: "Integrity", desc: "Transparent operations and honest commitments to our partners." }
          ].map((value) => (
            <div key={value.title} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
