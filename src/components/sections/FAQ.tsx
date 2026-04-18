"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How does solar turbine technology differ from traditional panels?",
    a: "Unlike traditional flat panels, our turbines use concentrated solar collectors and modular blades to capture energy from multiple angles throughout the day, significantly increasing efficiency in variable weather conditions."
  },
  {
    q: "What is the expected lifespan and maintenance of the system?",
    a: "Our systems are engineered for a 25-30 year lifespan. We offer quarterly automated health checks and professional annual maintenance visits to ensure your hardware remains at peak performance."
  },
  {
    q: "Can I sell excess energy back to the grid?",
    a: "Yes, our smart grid integration supports net metering in most jurisdictions, allowing you to earn credits or payments for the surplus clean energy your system contributes back to the public utility."
  },
  {
    q: "Will the system work during a power outage?",
    a: "Only if you include our Smart Energy Storage (battery) solution. Our hybrid inverters can automatically disconnect from the grid during an outage and power your home directly from your storage reserves."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Expert Answers</h2>
          <p className="text-gray-400">Everything you need to know about the transition to solar turbine energy.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="rounded-3xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-xl font-bold pr-8">{faq.q}</span>
                <div className="bg-yellow-500/10 p-2 rounded-xl border border-yellow-500/20">
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
