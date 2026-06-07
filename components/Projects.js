"use client";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Rocket, Lock } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-12  bg-[#0c0c0c] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,94,0,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="w-full max-w-[1536px] mx-auto px-4 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase text-glow flex flex-wrap items-center gap-3 md:gap-4">
            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-[#ff5e00] shrink-0" />
            <span>Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff5e00] to-[#e65500]">Projects</span></span>
          </h2>
          <p className="text-white/60 uppercase tracking-widest text-sm">Work and case studies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-[#0c0c0c]/80 border border-white/10 hover:border-[#ff5e00]/50 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,94,0,0.15)] transition-all flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle gradient glow inside card */}
              <div className="absolute inset-0 bg-linear-to-br from-[#ff5e00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#ff5e00] group-hover:bg-[#ff5e00] group-hover:text-white transition-colors">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                {project.isPrivate ? (
                  <div className="text-white/30 cursor-not-allowed" title="Private Platform">
                    <Lock className="w-5 h-5" />
                  </div>
                ) : project.link && project.link !== "#" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#ff5e00] transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : null}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{project.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 grow relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-[#ff5e00]/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
