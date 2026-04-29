"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";

const events = [
  {
    title: "Global Solar Summit 2026",
    slug: "global-solar-summit-2026",
    date: "June 15, 2026",
    location: "Berlin, Germany",
    type: "Conference",
    description: "Join our CTO, Dr. Elena Solar, for a keynote on the future of high-altitude turbine energy.",
  },
  {
    title: "Turbine Tech Expo",
    slug: "turbine-tech-expo",
    date: "August 04, 2026",
    location: "Tokyo, Japan",
    type: "Exhibition",
    description: "Live demonstration of our newest Generation-X solar turbine models.",
  },
  {
    title: "Sustainable Energy Workshop",
    slug: "sustainable-energy-workshop",
    date: "September 22, 2026",
    location: "San Francisco, USA",
    type: "Workshop",
    description: "An interactive session for engineers and city planners on integrating solar turbines into urban grids.",
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium tracking-widest uppercase">
              Stay Connected
            </div>
            <h1 className="text-5xl lg:text-8xl font-black tracking-tight leading-[1.1] uppercase">
              Upcoming <br />
              <span className="text-yellow-500">Events</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Experience the future of energy firsthand. Join us at these global summits, exhibitions, and workshops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-yellow-500/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-4 text-yellow-500 font-semibold text-sm uppercase tracking-wider">
                    <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      {event.type}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {event.date}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight uppercase group-hover:text-yellow-500 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-xl">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-yellow-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-yellow-500" />
                      Full Day
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Link 
                    href={`/events/${event.slug}`}
                    className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300"
                  >
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold uppercase tracking-tight">Never miss an update</h2>
          <p className="text-gray-400">Subscribe to our newsletter to receive invitations to exclusive events and early access to tech reveals.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <button className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition-colors uppercase tracking-wider">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
