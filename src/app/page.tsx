"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SolarCalcForm } from "@/features/solar-calc";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

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

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium tracking-wide">
              FUTURE OF ENERGY
            </div>
            <h1 className="text-5xl lg:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 leading-[1.1]">
              Power Your Home <br />
              <span className="text-yellow-500">Pure Solar</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Advanced solar turbine technology designed for maximum efficiency and sustainability. Join the movement towards a cleaner, greener future.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-2xl transition-all hover:scale-105 shadow-lg shadow-yellow-500/20">
                Explore Solutions
              </button>
              <button className="px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all font-bold">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 w-full max-w-lg"
          >
            <div className="relative p-1 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-[2.5rem]">
               <div className="bg-[#0f0f0f] rounded-[2.4rem] overflow-hidden">
                  <SolarCalcForm />
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Partners />

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "High Efficiency", desc: "Up to 30% more power generation than standard panels." },
              { title: "Smart Storage", desc: "Intelligent battery systems to keep you powered 24/7." },
              { title: "Eco-Friendly", desc: "Zero emissions, 100% sustainable materials used." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all" />
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-8 border border-white/5 relative z-10">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      
      <FAQ />

    </main>
  );
}
