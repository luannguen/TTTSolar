import Link from "next/link";
import { Sun, Globe, MessageCircle, Mail, Phone, MapPin, Link2 } from "lucide-react";
import { Newsletter } from "../sections/Newsletter";

export function Footer() {
  return (
    <footer className="pt-32 pb-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <Newsletter />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Sun className="text-black w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter text-white">TTT SOLAR</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading the global transition to renewable energy with advanced solar turbine technology and smart grid solutions.
          </p>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 text-gray-500 hover:text-yellow-500 cursor-pointer transition-colors" />
            <MessageCircle className="w-5 h-5 text-gray-500 hover:text-yellow-500 cursor-pointer transition-colors" />
            <Link2 className="w-5 h-5 text-gray-500 hover:text-yellow-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link href="/services" className="hover:text-yellow-500">Our Services</Link></li>
            <li><Link href="/projects" className="hover:text-yellow-500">Portfolio</Link></li>
            <li><Link href="/news" className="hover:text-yellow-500">Latest News</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/contact" className="hover:text-yellow-500">Contact Support</Link></li>
            <li><Link href="/privacy" className="hover:text-yellow-500">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-yellow-500">Terms of Service</Link></li>
            <li><Link href="/faq" className="hover:text-yellow-500">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>123 Solar Street, Renewable Valley, CA 94000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>+1 (800) SOLAR-POWER</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>hello@tttsolar.com</span>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 TTT Solar Energy Corp. All rights reserved.</p>
        <p>Built with ❤️ for a Sustainable Future.</p>
      </div>
    </footer>
  );
}
