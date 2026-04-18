import Image from "next/image";
import { SolarCalcForm } from "@/features/solar-calc";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Solar Energy Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium tracking-wide">
              FUTURE OF ENERGY
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
              Power Your Home with <br />
              <span className="text-yellow-500">Pure Solar Energy</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Advanced solar turbine technology designed for maximum efficiency and sustainability. Join the movement towards a cleaner, greener future.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all hover:scale-105">
                Explore Solutions
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-md">
            <SolarCalcForm />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "High Efficiency", desc: "Up to 30% more power generation than standard panels." },
            { title: "Smart Storage", desc: "Intelligent battery systems to keep you powered 24/7." },
            { title: "Eco-Friendly", desc: "Zero emissions, 100% sustainable materials used." }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
