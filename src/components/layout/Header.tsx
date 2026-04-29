"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Khám phá", 
    href: "#",
    subItems: [
      { name: "Đội ngũ", href: "/team" },
      { name: "Sự kiện", href: "/events" },
    ]
  },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <Sun className="text-black w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">TTT SOLAR</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group/item"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.subItems ? (
                <>
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2">
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-48 bg-[#0f0f0f] border border-white/10 rounded-xl py-2 shadow-2xl transition-all duration-300 origin-top ${
                    activeDropdown === link.name ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}>
                    {link.subItems.map((sub) => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-yellow-500 hover:bg-white/5 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-6">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 space-y-4 animate-in slide-in-from-top-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-2">
              {link.subItems ? (
                <>
                  <div className="text-lg font-medium text-yellow-500/50 uppercase text-xs tracking-widest pt-2">
                    {link.name}
                  </div>
                  {link.subItems.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium text-white hover:text-yellow-500 pl-4"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-white hover:text-yellow-500"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-12">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
