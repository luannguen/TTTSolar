"use client";

import { motion } from "framer-motion";

const partners = [
  "GOOGLE", "TESLA", "AMAZON", "SIEMENS", "SHELL", "TOTAL", "ENEL", "VESTAS"
];

export function Partners() {
  return (
    <section className="py-20 bg-black/50 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...partners, ...partners].map((name, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-6xl font-black text-white/10 hover:text-yellow-500/50 transition-colors cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
