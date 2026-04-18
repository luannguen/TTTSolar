import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400">
            Have questions about our solar solutions? We're here to help you transition to clean energy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <Input placeholder="John" className="bg-black/40 border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <Input placeholder="Doe" className="bg-black/40 border-white/10 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="bg-black/40 border-white/10 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <Textarea placeholder="How can we help you?" className="bg-black/40 border-white/10 min-h-[150px]" />
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-14 rounded-2xl">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Office Information</h2>
              <div className="space-y-8">
                {[
                  { icon: <MapPin className="text-yellow-500" />, title: "Address", desc: "123 Solar Street, Renewable Valley, CA 94000" },
                  { icon: <Phone className="text-yellow-500" />, title: "Phone", desc: "+1 (800) SOLAR-POWER" },
                  { icon: <Mail className="text-yellow-500" />, title: "Email", desc: "hello@tttsolar.com" }
                ].map((info, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{info.title}</p>
                      <p className="text-lg text-white font-medium">{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center relative">
               <div className="absolute inset-0 bg-[#111] flex flex-col items-center justify-center text-gray-700">
                  <MapPin size={60} className="mb-4" />
                  <span className="font-bold">INTERACTIVE MAP COMING SOON</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
