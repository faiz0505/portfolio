"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-12  bg-[#0c0c0c] relative">
      <div className="w-full max-w-[1536px] mx-auto px-4 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase text-glow flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-[#ff5e00] shrink-0" />
            <span className="text-center">Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff5e00] to-[#e65500]">Skills</span></span>
          </h2>
          <p className="text-white/60 uppercase tracking-widest text-sm">Tools and technologies</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0c0c0c]/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/10 bg-black/50 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
              <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
              <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
            </div>
            <span className="text-xs font-mono text-white/50">Skills Overview</span>
            <div className="w-10" />
          </div>

          <div className="p-8 md:p-12 font-mono">
            <p className="text-white/60 mb-6">
              <span className="text-[#ff5e00]">➜</span> <span className="text-[#ff5e00]/70">~</span> <span className="text-white/90">cat current_stack.json</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {siteData.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff5e00]/30 hover:bg-white/10 transition-colors group"
                  >
                    <Icon className={`w-5 h-5 text-[#ff5e00] group-hover:scale-110 transition-transform`} />
                    <span className="text-white/80 text-sm font-semibold tracking-tight group-hover:text-white">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
            
            <p className="text-white/60 mt-8 flex items-center">
              <span className="text-[#ff5e00]">➜</span> <span className="text-[#ff5e00]/70 ml-2">~</span> <span className="w-2.5 h-5 bg-[#ff5e00] inline-block ml-2 animate-pulse" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
