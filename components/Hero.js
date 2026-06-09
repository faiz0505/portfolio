"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, Briefcase, Handshake, Target, Globe, Building2, Rocket } from "lucide-react";
import SocialLinks from "./SocialLinks";

// Floating cards data matching the reference design
const floatingCards = [
  {
    id :"1", icon : Building2, title : "Professional Journey", value :"3+",companiesLogo: ["https://bottrion.com/bottrion.png","/ncs-logo.png","/NoblesseTech-logo.png"],
  },
  {
    id:"2", icon : Rocket, title :"Projects Delivered", value : "20+"
  },
  {
    id : "3", icon : Globe, title : "Years of Experience", value : "2+"
  },
  {
    id : "4", title : "Happy Clients", icon : Users, value : "6+"
  }
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen md:min-h-[800px] lg:min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden bg-[#0c0c0c]">
      
      {/* Constellation / Glowing Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Core Glow */}
        <div className="absolute top-[40%] right-[-10%] w-[800px] h-[800px] bg-[#ff5e00] rounded-full blur-[150px] opacity-30 animate-pulse" />
        
        {/* Intricate Network SVG */}
        <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="superglow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <g opacity="0.6">
            <path d="M -100 800 Q 400 900 800 700 T 1600 800" stroke="#ff5e00" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M -100 820 Q 300 700 900 800 T 1600 750" stroke="#ff5e00" strokeWidth="0.5" fill="none" opacity="0.8" />
            <path d="M -100 850 Q 500 1000 1000 600 T 1600 900" stroke="#ff5e00" strokeWidth="2" fill="none" opacity="0.3" filter="url(#superglow)" />
            <path d="M -100 750 Q 450 850 850 750 T 1600 850" stroke="#ff5e00" strokeWidth="1" fill="none" opacity="0.6" />
            
            <circle cx="90%" cy="40%" r="300" stroke="#ff5e00" strokeWidth="0.5" fill="none" opacity="0.3" />
            <circle cx="90%" cy="40%" r="500" stroke="#ff5e00" strokeWidth="1" fill="none" opacity="0.2" />
            <circle cx="90%" cy="40%" r="700" stroke="#ff5e00" strokeWidth="0.5" fill="none" opacity="0.4" strokeDasharray="10 15" />
            <circle cx="90%" cy="40%" r="900" stroke="#ff5e00" strokeWidth="1.5" fill="none" opacity="0.1" />

            <g transform="translate(600, 500)">
              <line x1="0" y1="0" x2="-50" y2="-40" stroke="#ff5e00" strokeWidth="0.5" opacity="0.7" />
              <line x1="0" y1="0" x2="30" y2="-60" stroke="#ff5e00" strokeWidth="0.5" opacity="0.7" />
              <line x1="0" y1="0" x2="60" y2="20" stroke="#ff5e00" strokeWidth="0.5" opacity="0.7" />
              <line x1="60" y1="20" x2="30" y2="-60" stroke="#ff5e00" strokeWidth="0.5" opacity="0.7" />
              <line x1="-50" y1="-40" x2="30" y2="-60" stroke="#ff5e00" strokeWidth="0.5" opacity="0.7" />
              <circle cx="0" cy="0" r="4" fill="#ff5e00" filter="url(#superglow)" />
              <circle cx="-50" cy="-40" r="2.5" fill="#ff5e00" filter="url(#superglow)" />
              <circle cx="30" cy="-60" r="3" fill="#ff5e00" filter="url(#superglow)" />
              <circle cx="60" cy="20" r="4.5" fill="#ff5e00" filter="url(#superglow)" />
              <circle cx="0" cy="0" r="8" stroke="#ff5e00" strokeWidth="0.5" fill="none" />
              <circle cx="60" cy="20" r="10" stroke="#ff5e00" strokeWidth="0.5" fill="none" />
            </g>

            <g transform="translate(400, 200)">
              <line x1="0" y1="0" x2="50" y2="40" stroke="#ff5e00" strokeWidth="0.5" opacity="0.5" />
              <line x1="50" y1="40" x2="10" y2="80" stroke="#ff5e00" strokeWidth="0.5" opacity="0.5" />
              <line x1="10" y1="80" x2="-40" y2="50" stroke="#ff5e00" strokeWidth="0.5" opacity="0.5" />
              <line x1="-40" y1="50" x2="0" y2="0" stroke="#ff5e00" strokeWidth="0.5" opacity="0.5" />
              <circle cx="0" cy="0" r="3" fill="#ff5e00" filter="url(#superglow)" />
              <circle cx="50" cy="40" r="2" fill="#ff5e00" filter="url(#superglow)" />
              <circle cx="10" cy="80" r="3.5" fill="#ff5e00" filter="url(#superglow)" />
              <circle cx="-40" cy="50" r="2" fill="#ff5e00" filter="url(#superglow)" />
            </g>

            <circle cx="20%" cy="30%" r="2" fill="#ff5e00" filter="url(#superglow)" opacity="0.8" />
            <circle cx="35%" cy="15%" r="1.5" fill="#ff5e00" filter="url(#superglow)" opacity="0.6" />
            <circle cx="15%" cy="60%" r="2.5" fill="#ff5e00" filter="url(#superglow)" opacity="0.9" />
            <circle cx="45%" cy="75%" r="1" fill="#ff5e00" filter="url(#superglow)" opacity="0.5" />
            <circle cx="75%" cy="20%" r="3" fill="#ff5e00" filter="url(#superglow)" opacity="1" />
            <circle cx="85%" cy="80%" r="2" fill="#ff5e00" filter="url(#superglow)" opacity="0.7" />
            
            <line x1="20%" y1="30%" x2="600" y2="500" stroke="#ff5e00" strokeWidth="0.5" opacity="0.2" />
            <line x1="15%" y1="60%" x2="400" y2="200" stroke="#ff5e00" strokeWidth="0.5" opacity="0.2" />
            <line x1="45%" y1="75%" x2="600" y2="500" stroke="#ff5e00" strokeWidth="0.5" opacity="0.2" />
          </g>
        </svg>
      </div>

      <div className="relative z-20 w-full max-w-[1536px] mx-auto px-6 lg:px-12 pt-24 pb-12 md:pt-0 md:pb-0 h-full  flex flex-col md:flex-row items-center justify-start pointer-events-none">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[50%] lg:w-[55%] flex flex-col items-start text-left gap-5 md:gap-6 pointer-events-auto z-30 mt-4 md:mt-0"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 bg-[#ff5e00]/10 px-4 py-2 rounded-full border border-[#ff5e00]/20 backdrop-blur-md shadow-lg shadow-[#ff5e00]/5">
            <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-pulse shadow-[0_0_8px_#ff5e00]" />
            <span className="text-xs font-medium text-[#ff5e00] tracking-wide">Crafting Digital Experiences</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-[1.7rem] sm:text-4xl md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.15] tracking-tight drop-shadow-md">
            Building high-converting<br className="hidden md:block" />
            <span className="text-[#ff5e00]"> websites & apps </span><br className="hidden lg:block" />
            <span className="text-white">for growing businesses</span>
          </h1>
          
          {/* Description */}
          <p className="text-white/60 text-xs md:text-lg max-w-[550px] leading-relaxed">
            I’m Faiz Ali, co-founder of Xceler Media. We help businesses launch fast, scalable digital products through web development, app development, and strategic digital marketing.
          </p>

          {/* Button Group */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
            <a href="#portfolio" className="flex items-center gap-3 bg-linear-to-r from-[#ff5e00] to-[#e65500] text-white px-3 sm:px-8 py-2 md:py-3.5 rounded-full font-medium shadow-[0_0_20px_rgba(255,94,0,0.3)] hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] hover:scale-105 transition-all text-xs sm:text-base">
              Explore My Work
              <div className="bg-white text-[#ff5e00] p-1 md:p-1.5 rounded-full">
                <ArrowRight size={16} />
              </div>
            </a>
            <a href="#contact" className="flex items-center gap-3 bg-transparent border border-white/10 hover:bg-white/5 hover:border-white/20 text-white px-3 sm:px-8 py-2 md:py-3.5 rounded-full font-medium transition-all text-xs sm:text-base">
              Work With Me
              <Users size={18} className="text-white/50" />
            </a>
          </div>
        </motion.div>

        {/* Mobile Layout Container (Character + Cards + Bottom Elements) */}
        <div className="w-full flex flex-col items-center mt-12 md:hidden pointer-events-auto z-20 ">
          
          {/* Character + Floating Cards Overlay */}
          <div className="relative w-full h-[50vh] max-h-[600px] flex justify-center">
            {/* Character Image */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative w-[80%] h-full z-10 pointer-events-none"
            >
              <Image
                src="/profile.png"
                alt="Faiz Ali"
                fill
                sizes="(max-width: 768px) 80vw, 50vw"
                className="object-contain object-bottom drop-shadow-[0_0_15px_rgba(255,94,0,0.5)]"
                priority
              />
            </motion.div>

            {/* Mobile Orbiting Cards */}
            {floatingCards.map((card, index) => {
              const mPositions = [
                { top: "15%", left: "-4%" },
                { top: "20%", right: "-4%" },
                { bottom: "15%", left: "-4%" },
                { bottom: "10%", right: "-4%" },
              ];
              const mPos = mPositions[index % 4];

              return (
                <motion.div
                  key={`m-${card.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -5, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.5 + index * 0.1 },
                    y: { repeat: Infinity, duration: 4 + index, ease: "easeInOut", delay: index * 0.2 }
                  }}
                  style={{ top: mPos.top, bottom: mPos.bottom, left: mPos.left, right: mPos.right }}
                  className="absolute z-20 bg-[#0c0c0c]/90 backdrop-blur-md border border-[#ff5e00]/20 rounded-2xl p-3 flex flex-col items-start gap-2 w-24 shadow-[0_0_20px_rgba(255,94,0,0.1)] pointer-events-auto"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                    <card.icon size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-white/70 text-[11px] mb-1 leading-tight">{card.title}</p>
                    {card.companiesLogo ? (
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {card.companiesLogo.map((logo, j) => (
                            <div key={j} className="w-4 h-4 rounded-full border border-[#0c0c0c] bg-white/5 relative -ml-1.5 first:ml-0 overflow-hidden">
                               <img src={logo} alt="Company" className="object-cover w-full h-full" />
                            </div>
                          ))}
                        </div>
                        <span className="text-[#ff5e00] text-sm font-bold leading-none">{card.value}</span>
                      </div>
                    ) : (
                      <p className="text-[#ff5e00] text-sm font-bold leading-none">{card.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Availability Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full  p-5 rounded-2xl border border-white/5 bg-[#161513]/50 backdrop-blur-md flex flex-row items-center justify-between gap-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              <h3 className="text-white font-medium mb-1 text-sm">Let's build something amazing together!</h3>
              <p className="text-white/50 text-xs">I'm available for new projects.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#10b981]/10 px-3 py-1.5 rounded-full border border-[#10b981]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-white/90 text-xs font-medium">Available</span>
            </div>
          </motion.div>

          {/* Social Links Mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center justify-center gap-4 w-full"
          >
             <SocialLinks className="flex items-center justify-center gap-4 w-full" />
          </motion.div>

        </div>

      </div>

      {/* Character Image & Orbiting Cards (Desktop) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
        
        {/* Character */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-0 lg:right-[8%] right-[5%] w-[45vw] max-w-[600px] h-[85vh]  z-20" 
        >
          <Image
            src="/profile.png"
            alt="Faiz Ali"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom rotate-3 drop-shadow-[0_0_5px_rgba(255,94,0,0.7)] hover:drop-shadow-[0_0_40px_rgba(255,94,0,0.7)] transition-all duration-500 "
            priority
          />
        </motion.div>

        {/* Orbiting Cards */}
        <div className="absolute inset-0">
          {floatingCards.map((card, index) => {
            const positions = [
              { top: "18%", right: "5%", line: "-left-12 bg-gradient-to-r from-transparent to-[#ff5e00]/50" },
              { top: "35%", left: "50%", line: "-right-12 bg-gradient-to-l from-transparent to-[#ff5e00]/50" },
              { bottom: "35%", right: "5%", line: "-left-12 bg-gradient-to-r from-transparent to-[#ff5e00]/50" },
              { bottom: "20%", left: "45%", line: "-right-12 bg-gradient-to-l from-transparent to-[#ff5e00]/50" },
            ];
            const pos = positions[index % 4];

            return (
              <motion.div
                key={`d-${card.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ 
                  opacity: { duration: 0.8, delay: index * 0.2 },
                  scale: { duration: 0.8, delay: index * 0.2 },
                  y: { repeat: Infinity, duration: 4 + index, ease: "easeInOut", delay: index * 0.2 }
                }}
                style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right }}
                className="absolute z-30 bg-[#0c0c0c]/80 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-center gap-4 min-w-[240px] shadow-[0_0_30px_rgba(255,94,0,0.05)] pointer-events-auto hover:border-[#ff5e00]/30 transition-colors group"
              >
                {/* Glowing edge dots */}
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#ff5e00] shadow-[0_0_8px_#ff5e00] opacity-80" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-[#ff5e00] shadow-[0_0_8px_#ff5e00] opacity-80" />
                
                {/* Connecting Line */}
                <div className={`absolute top-1/2 w-12 h-px ${pos.line} opacity-50`} />

                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-[#ff5e00] shadow-[inset_0_0_10px_rgba(255,94,0,0.1)]">
                  <card.icon size={22} strokeWidth={1.5} />
                </div>
                
                <div className="flex-1">
                  <p className="text-white/90 font-medium text-sm leading-none mb-1.5">{card.title}</p>
                  {card.companiesLogo ? (
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {card.companiesLogo.map((logo, i) => (
                          <div key={i} className="w-6 h-6 rounded-full border border-[#0c0c0c] overflow-hidden bg-white/5 relative">
                             <img src={logo} alt="Company" className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-[#ff5e00] text-xs font-semibold">{card.value}</span>
                    </div>
                  ) : (
                    <p className="text-[#ff5e00] text-sm font-semibold">{card.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Desktop Bottom Elements */}
      <div className="absolute bottom-6 left-12 items-center gap-4 z-40 hidden md:flex">
        <span className="text-white/50 text-sm font-medium">Let's connect</span>
        <div className="h-px w-8 bg-white/10" />
        <SocialLinks className="flex items-center gap-3" />
      </div>

      <div className="absolute bottom-6 right-12 z-40 hidden md:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer">
        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        <span className="text-white/70 text-sm font-medium">Available for new projects</span>
      </div>

      {/* Gradient Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10 pointer-events-none" />

    </section>
  );
}
