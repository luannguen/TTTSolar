import { Zap, Shield, Battery, PenTool, CheckCircle2 } from "lucide-react";
import { ServiceDetailItem } from "../services/serviceOperations";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ICON_MAP: Record<string, any> = {
  Zap,
  Shield,
  Battery,
  PenTool
};

export function ServiceDetail({ service }: { service: ServiceDetailItem }) {
  const Icon = ICON_MAP[service.iconName] || Zap;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="mb-12 flex gap-2 text-sm text-gray-500">
          <Link href="/services" className="hover:text-yellow-500">Services</Link>
          <span>/</span>
          <span className="text-gray-300">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Content */}
          <div className="space-y-10">
            <div className="bg-yellow-500/10 w-20 h-20 rounded-3xl flex items-center justify-center border border-yellow-500/20">
              <Icon className="w-10 h-10 text-yellow-500" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              {service.desc}
            </p>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.fullContent}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-white/10">
               {service.features.map((feature, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="bg-yellow-500/20 p-1.5 rounded-full">
                     <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                   </div>
                   <span className="text-gray-300 font-medium">{feature}</span>
                 </div>
               ))}
            </div>

            <div className="pt-10 flex gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-14 px-10 rounded-2xl">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-14 px-10 rounded-2xl">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Sidebar / Specs Card */}
          <div className="lg:sticky lg:top-40">
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-8 text-white">Technical Specs</h3>
              <div className="space-y-8">
                {service.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center pb-6 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-gray-500 text-sm uppercase tracking-widest">{spec.label}</span>
                    <span className="text-xl font-bold text-yellow-500">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-yellow-500/5 rounded-3xl p-8 border border-yellow-500/10">
                <p className="text-sm text-yellow-500/80 mb-2 font-bold uppercase tracking-wider">Estimated Savings</p>
                <p className="text-3xl font-black text-white">$2,400+ <span className="text-lg font-medium text-gray-500">/ year</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
