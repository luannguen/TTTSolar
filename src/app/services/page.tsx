import { Zap, Shield, Battery, PenTool } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      slug: "residential-solar",
      title: "Residential Solar",
      desc: "Custom solar solutions for your home. Save money and reduce your carbon footprint with high-efficiency panels.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      features: ["Custom Design", "Full Installation", "Smart Monitoring"]
    },
    {
      slug: "commercial-solar",
      title: "Commercial Solar",
      desc: "Scaleable energy solutions for businesses. Optimize your operational costs and meet sustainability goals.",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      features: ["Grid-tie systems", "Power Purchase Agreements", "Tax Benefit Consulting"]
    },
    {
      slug: "energy-storage",
      title: "Energy Storage",
      desc: "Advanced battery systems to store your solar power. Stay powered 24/7 even during grid outages.",
      icon: <Battery className="w-8 h-8 text-green-500" />,
      features: ["Li-ion Technology", "Seamless Integration", "Backup Power Logic"]
    },
    {
      slug: "maintenance",
      title: "Maintenance",
      desc: "Professional cleaning and technical maintenance to ensure your system performs at its peak.",
      icon: <PenTool className="w-8 h-8 text-orange-500" />,
      features: ["Annual Inspection", "Efficiency Audit", "Remote Support"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive renewable energy services tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          {services.map((service, i) => (
            <div key={i} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all group overflow-hidden relative">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all" />
              
              <div className="bg-black/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href={`/services/${service.slug}`}>
                <button className="mt-10 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium">
                  Learn Details →
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
