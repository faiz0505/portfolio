"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { siteData } from "@/lib/data";

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-full rounded-3xl bg-[#0c0c0c]/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] relative text-left group hover:border-[#ff5e00]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,94,0,0.1)]"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10 bg-black/50 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/20 transition-colors group-hover:bg-[#ff5e00]/40" />
          <div className="w-3 h-3 rounded-full bg-white/20 transition-colors group-hover:bg-[#ff5e00]/60" />
          <div className="w-3 h-3 rounded-full bg-white/20 transition-colors group-hover:bg-[#ff5e00]" />
        </div>
        <span className="ml-4 text-xs font-mono text-white/50">Details</span>
      </div>

      <div className="p-6 md:p-8">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff5e00] mb-6 px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/20">
          <Calendar className="w-4 h-4" /> {exp.date}
        </span>
        
        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{exp.title}</h3>
        <h4 className="text-lg text-[#ff5e00] font-medium mb-8 flex items-center gap-2">
          {exp.type === "education" ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
          {exp.company}
        </h4>
        
        <p className="text-white/60 leading-relaxed mb-8">
          {exp.description}
        </p>

        <div className="space-y-4">
          {exp.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff5e00] shrink-0 shadow-[0_0_10px_rgba(255,94,0,0.8)]" />
              <p className="text-white/80 text-sm md:text-base leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-12 overflow-x-hidden bg-[#0c0c0c] relative" ref={containerRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,94,0,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="w-full max-w-[1536px] mx-auto px-4 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase text-glow flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-[#ff5e00] shrink-0" />
            <span className="text-center">Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff5e00] to-[#e65500]">Journey</span></span>
          </h2>
          <p className="text-white/60 uppercase tracking-widest text-sm">Experience and education</p>
        </motion.div>

        <div className="relative w-full mx-auto">
          {/* Background Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-[30px] md:left-1/2 top-0 w-[2px] bg-linear-to-b from-[#ff5e00] to-[#e65500] -translate-x-1/2 shadow-[0_0_15px_rgba(255,94,0,0.8)] rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {siteData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-start w-full">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[30px] md:left-1/2 top-12 w-4 h-4 rounded-full bg-[#0c0c0c] border-[3px] border-[#ff5e00] shadow-[0_0_15px_rgba(255,94,0,0.8)] -translate-x-1/2 z-20" />

                  {/* Left Side */}
                  <div className={`w-full md:w-1/2 pl-[70px] md:pl-0 ${isEven ? 'md:pr-12' : 'hidden md:block'}`}>
                    {isEven && <ExperienceCard exp={exp} index={index} />}
                  </div>

                  {/* Right Side */}
                  <div className={`w-full md:w-1/2 pl-[70px] md:pl-12 ${!isEven ? 'block' : 'hidden md:block'}`}>
                    {!isEven && <ExperienceCard exp={exp} index={index} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
