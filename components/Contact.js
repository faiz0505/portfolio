"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, MapPin, MessageSquare, CheckCircle2, XCircle, Loader2, X } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Contact() {
  const { phone, email, location } = siteData.personal;
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setShowModal(true);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-12  bg-[#0c0c0c] relative overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase text-glow flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-[#ff5e00] shrink-0" />
            <span className="text-center">Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff5e00] to-[#e65500]">Connect</span></span>
          </h2>
          <p className="text-white/60 uppercase tracking-widest text-sm">Reach out and start a conversation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 group">
              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 text-[#ff5e00] group-hover:border-[#ff5e00] group-hover:shadow-[0_0_20px_rgba(255,94,0,0.3)] transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/50 mb-1">Phone</h4>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-white/90 hover:text-[#ff5e00] transition-colors">
                  {phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 text-[#ff5e00] group-hover:border-[#ff5e00] group-hover:shadow-[0_0_20px_rgba(255,94,0,0.3)] transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/50 mb-1">Email</h4>
                <a href={`mailto:${email}`} className="text-lg font-bold text-white/90 hover:text-[#ff5e00] transition-colors">
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 text-[#ff5e00] group-hover:border-[#ff5e00] group-hover:shadow-[0_0_20px_rgba(255,94,0,0.3)] transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/50 mb-1">Location</h4>
                <p className="text-lg font-bold text-white/90">{location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#0c0c0c]/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs text-[#ff5e00] mb-2 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c0c0c] border border-white/10 text-white focus:outline-none focus:border-[#ff5e00]/50 focus:shadow-[0_0_15px_rgba(255,94,0,0.2)] transition-all text-sm"
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label className="block text-xs text-[#ff5e00] mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c0c0c] border border-white/10 text-white focus:outline-none focus:border-[#ff5e00]/50 focus:shadow-[0_0_15px_rgba(255,94,0,0.2)] transition-all text-sm"
                  placeholder="Enter your email..."
                />
              </div>
              <div>
                <label className="block text-xs text-[#ff5e00] mb-2 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c0c0c] border border-white/10 text-white focus:outline-none focus:border-[#ff5e00]/50 focus:shadow-[0_0_15px_rgba(255,94,0,0.2)] transition-all text-sm"
                  placeholder="Enter your message here..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-linear-to-r from-[#ff5e00] to-[#e65500] hover:opacity-90 disabled:opacity-50 text-white font-bold tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,94,0,0.3)]"
              >
                {status === "loading" ? (
                  <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : status === "success" ? (
                  <>Sent Successfully! <CheckCircle2 className="w-5 h-5" /></>
                ) : status === "error" ? (
                  <>Failed to Send <XCircle className="w-5 h-5" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#161513] border border-white/10 rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981] mb-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Msg Sent Successfully</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Thank you for reaching out! I have received your message and I will reply soon.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
