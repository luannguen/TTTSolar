"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowLeft, CheckCircle2, Users, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data for detail - in a real app, this would come from an API or CMS
const eventData = {
  "global-solar-summit-2026": {
    title: "Global Solar Summit 2026",
    date: "June 15, 2026",
    time: "09:00 AM - 05:00 PM",
    location: "Berlin Congress Center, Germany",
    type: "Conference",
    description: "The Global Solar Summit is the premier event for solar energy professionals. In 2026, we focus on the radical shift towards high-altitude turbine energy and the next generation of solar storage solutions.",
    longDescription: "Join thousands of industry leaders, researchers, and policymakers as we navigate the complexities of the global energy transition. This year, TTT Solar will unveil our breakthrough 'Strato-Turbine' technology, capable of capturing solar energy at 30,000 feet with 90% higher efficiency than ground-based panels.\n\nThe summit features three main tracks: Technical Innovation, Policy & Regulation, and Global Investment. Attendees will have exclusive access to live demonstrations, networking lounges, and 1-on-1 sessions with our engineering team.",
    agenda: [
      { time: "09:00 AM", session: "Opening Keynote: The Strato-Turbine Revolution" },
      { time: "11:00 AM", session: "Panel: Global Policy for High-Altitude Energy" },
      { time: "01:00 PM", session: "Networking Lunch & Demo Zone" },
      { time: "03:00 PM", session: "Workshop: Decentralizing the Urban Grid" },
    ],
    speakers: [
      { name: "Dr. Elena Solar", role: "CTO, TTT Solar", image: "/team/elena.png" },
      { name: "Marcus Thorne", role: "Head of Engineering", image: "/team/marcus.png" },
    ]
  }
};

export default function EventDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const event = eventData[slug as keyof typeof eventData] || eventData["global-solar-summit-2026"]; // Fallback to mock

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation Back */}
      <div className="fixed top-24 left-6 z-40">
        <Link 
          href="/events"
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-yellow-500 transition-colors bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
        >
          <ArrowLeft size={16} />
          Back to Events
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 border-b border-white/10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-4 items-center">
              <span className="px-4 py-1 bg-yellow-500 text-black text-xs font-black uppercase tracking-widest rounded-lg">
                {event.type}
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                <Calendar size={16} className="text-yellow-500" />
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                <Clock size={16} className="text-yellow-500" />
                {event.time}
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] uppercase">
              {event.title}
            </h1>

            <div className="flex items-center gap-3 text-xl text-gray-300">
              <MapPin className="text-yellow-500" />
              {event.location}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-yellow-500">Overview</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                {event.description}
              </p>
              <div className="h-px bg-white/10 w-24" />
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {event.longDescription}
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-yellow-500">Agenda</h2>
              <div className="space-y-4">
                {event.agenda.map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-yellow-500 font-bold tabular-nums whitespace-nowrap">
                      {item.time}
                    </div>
                    <div className="text-gray-200 font-semibold">{item.session}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-yellow-500">Featured Speakers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {event.speakers.map((speaker, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl group hover:border-yellow-500/30 transition-all">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center text-white/10 font-bold overflow-hidden relative">
                      {/* Placeholder for image */}
                      {speaker.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold uppercase tracking-tight">{speaker.name}</div>
                      <div className="text-sm text-yellow-500/70">{speaker.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Registration */}
          <div className="space-y-8">
            <div className="sticky top-32 p-8 bg-yellow-500 text-black rounded-[2.5rem] shadow-2xl shadow-yellow-500/10 space-y-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-black uppercase leading-tight">Secure Your Spot</h3>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Limited seats remaining</p>
              </div>

              <div className="space-y-4">
                {[
                  "Full Access to Keynotes",
                  "Hands-on Tech Demos",
                  "Lunch & Networking",
                  "Digital Certification"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-sm">
                    <CheckCircle2 size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <button className="w-full py-5 bg-black text-white font-black rounded-2xl hover:scale-[1.02] transition-transform uppercase tracking-widest">
                Register Now
              </button>

              <div className="flex items-center justify-between pt-4 border-t border-black/10">
                <div className="flex items-center gap-2 text-xs font-black uppercase opacity-60">
                  <Users size={14} />
                  842 Registered
                </div>
                <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-gray-500">Need Help?</h4>
              <p className="text-sm text-gray-400">Contact our event support team for accommodation and travel assistance.</p>
              <Link href="/contact" className="block text-sm font-bold text-yellow-500 hover:underline">
                events@tttsolar.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
