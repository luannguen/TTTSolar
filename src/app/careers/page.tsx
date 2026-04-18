"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Solar Systems Engineer",
    dept: "Engineering",
    location: "Vietnam / Remote",
    type: "Full-time",
    salary: "$2,500 - $4,500"
  },
  {
    title: "Sustainability Consultant",
    dept: "Sales & Strategy",
    location: "Berlin, Germany",
    type: "Full-time",
    salary: "€60k - €85k"
  },
  {
    title: "Frontend Developer (Next.js)",
    dept: "Digital Experience",
    location: "Remote",
    type: "Contract",
    salary: "$40 - $70 / hr"
  },
  {
    title: "Field Technician",
    dept: "Operations",
    location: "Tokyo, Japan",
    type: "Full-time",
    salary: "¥5M - ¥8M"
  }
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-bold tracking-widest mb-6"
          >
            WE ARE HIRING
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">Join the Mission to Power the Planet.</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            At TTT Solar, we don't just build solar turbines; we build the future of renewable energy. Join a global team of visionaries and problem solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[60px] group-hover:bg-yellow-500/10 transition-all" />
              
              <div className="space-y-4 relative z-10">
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">{job.dept}</span>
                <h3 className="text-2xl md:text-3xl font-bold">{job.title}</h3>
                <div className="flex flex-wrap gap-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Briefcase className="w-4 h-4" /> {job.salary}
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <Button className="h-14 px-10 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 rounded-2xl transition-all flex gap-3 font-bold">
                  Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Teaser */}
        <div className="mt-32 p-12 lg:p-20 rounded-[3rem] bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/20 text-center">
           <h2 className="text-4xl font-bold mb-6">Why TTT Solar?</h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
             Work with the most advanced hardware in the sector, enjoy global remote flexibility, and be part of a company that actually walks the walk on sustainability.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { t: "Global Impact", d: "Your work powers thousands of homes directly." },
                { t: "Innovation First", d: "We invest 20% of revenue back into R&D." },
                { t: "Full Benefits", d: "Health, equity, and yearly wellness stipends." }
              ].map((b, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-bold text-white uppercase tracking-widest text-sm">{b.t}</h4>
                  <p className="text-sm text-gray-500">{b.d}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
