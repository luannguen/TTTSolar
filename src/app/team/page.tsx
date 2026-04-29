"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Zap, Award, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Elena Solar",
    role: "Chief Technology Officer",
    image: "/team/elena.png",
    bio: "Pioneer in turbine aerodynamics with 15+ years at NASA.",
  },
  {
    name: "Marcus Thorne",
    role: "Head of Engineering",
    image: "/team/marcus.png",
    bio: "Specialist in sustainable material science and energy storage.",
  },
  {
    name: "Sarah Chen",
    role: "Lead Product Designer",
    image: "/team/sarah.png",
    bio: "Focuses on human-centric sustainable technology interfaces.",
  },
  {
    name: "Alex Rivera",
    role: "Sustainability Director",
    image: "/team/alex.png",
    bio: "Advocating for global clean energy accessibility for over a decade.",
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium tracking-widest uppercase">
              The Solar Minds
            </div>
            <h1 className="text-5xl lg:text-8xl font-black tracking-tight leading-[1.1]">
              The Power Behind <br />
              <span className="text-yellow-500">The Turbine</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Our team consists of world-class engineers, designers, and visionaries dedicated to redefining the future of sustainable energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 group-hover:border-yellow-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60" />
                  {/* Placeholder for real images */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-6xl uppercase tracking-tighter select-none">
                    {member.name.split(' ')[0]}
                  </div>
                  {/* Real Image (commented out until assets exist) */}
                  {/* <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" /> */}
                </div>
                
                <div className="space-y-2 px-2">
                  <h3 className="text-xl font-bold tracking-tight uppercase">{member.name}</h3>
                  <div className="text-yellow-500 font-medium text-sm tracking-wide">{member.role}</div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 pt-2">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Zap, title: "Pure Energy", desc: "We focus on maximum conversion efficiency with zero compromise." },
              { icon: Award, title: "Precision", desc: "Every turbine component is engineered to micron-level tolerance." },
              { icon: Globe, title: "Impact", desc: "Our mission is to bring sustainable power to every corner of the earth." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                  <item.icon size={24} />
                </div>
                <h4 className="text-2xl font-bold tracking-tight uppercase">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Join Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-50" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 space-y-10">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[1.1]">
            Ready to Build <br />
            <span className="text-yellow-500">The Future?</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We are always looking for passionate engineers, designers, and innovators to join our team in the heart of the solar revolution.
          </p>
          <div className="pt-6">
            <button className="px-10 py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-2xl transition-all hover:scale-105 shadow-lg shadow-yellow-500/20 uppercase tracking-wider">
              Join Our Mission
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
