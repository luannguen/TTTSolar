import { ProjectDetailItem } from "../services/projectService";
import { MapPin, Zap, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ProjectDetail({ project }: { project: ProjectDetailItem }) {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow-500 mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 font-medium flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {project.location}
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-none">{project.name}</h1>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center space-y-8 backdrop-blur-sm">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center border border-yellow-500/20">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Capacity</p>
                <p className="text-2xl font-bold">{project.output}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Year Completed</p>
                <p className="text-2xl font-bold">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="aspect-[21/9] w-full rounded-[3rem] bg-gradient-to-br from-white/5 to-white/10 border border-white/10 mb-20 flex items-center justify-center overflow-hidden relative">
          <span className="text-white/10 font-black text-9xl absolute pointer-events-none select-none uppercase">CASE STUDY</span>
          <div className="relative z-10 text-center">
             <div className="w-24 h-24 bg-yellow-500 rounded-full blur-[80px] animate-pulse mx-auto" />
             <p className="text-gray-400 font-medium mt-4">Cinematic Project Footage / Gallery UI</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="space-y-12 lg:col-span-1">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">The Challenge</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{project.challenge}</p>
            </div>
          </div>
          
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">{project.solution}</p>
              
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h4 className="text-xl font-bold mb-4 text-white">Impact & Results</h4>
                <p className="text-gray-400 leading-relaxed">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
