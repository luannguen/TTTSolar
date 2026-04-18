"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Anderson",
    role: "Proprietor, Blue Sky Farms",
    content: "Switching to TTT Solar was the best decision for our agribusiness. The ROI was clear within the first 18 months, and the turbine technology is remarkably quiet.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    name: "Sarah Miller",
    role: "Sustainability Director, TechCorp",
    content: "Reliability is key for our data centers. TTT Solar's smart grid integration and storage solutions provide us with the consistent green power we require.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Marcus Chen",
    role: "Residential Client",
    content: "The installation was seamless, and the mobile monitoring app is incredibly intuitive. I've cut my energy bills by nearly 85%. Truly futuristic service.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Real Results from <br />Real Partners</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">See how TTT Solar is empowering homes and businesses worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 relative group hover:border-yellow-500/50 transition-all backdrop-blur-sm"
            >
              <Quote className="text-yellow-500/20 w-16 h-16 absolute -top-4 -left-4" />
              <div className="relative z-10 space-y-8">
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "{item.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/10 ring-1 ring-white/20">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-widest">{item.name}</h4>
                    <p className="text-gray-500 text-xs mt-1">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
