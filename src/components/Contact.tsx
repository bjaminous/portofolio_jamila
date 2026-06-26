import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
                <span className="text-white">Travaillons </span>
                <span className="text-primary italic">ensemble.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed font-sans mb-12">
                Vous avez un projet en tête ou vous souhaitez simplement échanger sur les dernières tendances tech ? N'hésitez pas à me contacter. Mon inbox est toujours ouverte.
              </p>

              <div className="space-y-6">
                <a href="mailto:contact@jamila.dev" className="flex items-center gap-6 p-6 glass-card group hover:border-primary/20">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">beulguibe@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a href="https://github.com/bjaminous" target="_blank" className="flex-1 flex items-center gap-4 p-6 glass-card group hover:border-white/20">
                    <Github className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-xs text-white/40 font-bold uppercase tracking-widest">GitHub</p>
                      <p className="text-sm font-bold text-white">bjaminous</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/jamila-beulguibe-inoussa-" target="_blank" className="flex-1 flex items-center gap-4 p-6 glass-card group hover:border-primary/20">
                    <Linkedin className="w-6 h-6 text-white/40 group-hover:text-[#0A66C2] transition-colors" />
                    <div>
                      <p className="text-xs text-white/40 font-bold uppercase tracking-widest">LinkedIn</p>
                      <p className="text-sm font-bold text-white">Jamila B.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-10 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Nom Complet</label>
                      <input
                        required
                        type="text"
                        placeholder="......"
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-colors text-white font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email</label>
                      <input
                        required
                        type="email"
                        placeholder="exemple@example.com"
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-colors text-white font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Comment puis-je vous aider ?"
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-colors text-white font-sans resize-none"
                    />
                  </div>

                  <button
                    disabled={status !== "idle"}
                    className="w-full relative group px-8 py-5 bg-primary text-white rounded-xl font-bold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] disabled:opacity-50"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {status === "idle" && (
                        <>Envoyer le message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                      )}
                      {status === "sending" && (
                        <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Loader2 className="w-4 h-4" /></motion.div> Envoi en cours...</>
                      )}
                      {status === "sent" && (
                        <>Message envoyé ! ✨</>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" /> JAMILA BEULGUIBE . 2024
          </div>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest font-sans">
            <a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Loader2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
