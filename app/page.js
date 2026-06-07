import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubContributions from "@/components/GithubContributions";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <GithubContributions />
      <Contact />
      
      <footer className="py-6 flex flex-col items-center gap-6 border-t border-white/5 bg-[#040715] text-white/50 text-sm relative z-20">
        <SocialLinks className="flex items-center gap-4" />
        <p>© {new Date().getFullYear()} Faiz Ali. All rights reserved.</p>
      </footer>
    </main>
  );
}
