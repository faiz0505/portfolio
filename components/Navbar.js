"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Send } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#161513]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-xl" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/xcelermedia-logo.png" alt="Xceler Media" className="w-10 h-10 object-contain rounded-xl" />
            <span className="text-white font-semibold text-lg tracking-wide">Faiz Ali</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.name === "Home" 
                    ? "text-[#ff5e00] drop-shadow-[0_0_8px_#ff5e00]" 
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="flex items-center gap-2 border border-[#ff5e00]/50 hover:bg-[#ff5e00]/10 text-[#ff5e00] px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-[0_0_15px_rgba(255,94,0,0.1)]">
              <Send size={16} />
              Let's Connect
            </a>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5e00] animate-pulse shadow-[0_0_8px_#ff5e00]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/60 hover:text-white transition-colors p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#161513] pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-semibold tracking-tight">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${
                    link.name === "Home" ? "text-[#ff5e00]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-[#ff5e00] text-white px-6 py-4 rounded-xl font-medium shadow-lg shadow-[#ff5e00]/20">
                <Send size={20} />
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
