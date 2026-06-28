import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight, Loader2, Download } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  const socialLinks = [
    {
      name: t("contact.social.github"),
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/bjaminous",
      color: "hover:text-white"
    },
    {
      name: t("contact.social.linkedin"),
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/jamila-beulguibe-inoussa-",
      color: "hover:text-[#0077B5]"
    },
    {
      name: t("contact.social.email"),
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:jamilabeulguibe@icloud.com",
      color: "hover:text-primary"
    },
    {
      name: t("contact.social.cv"),
      icon: <Download className="w-5 h-5" />,
      href: "/CV_Jamila_BEULGUIBE.pdf",
      color: "hover:text-white",
      download: "CV_Jamila_BEULGUIBE.pdf"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 font-display tracking-tight leading-none">
              <span className="text-white">{t("contact.title_part1")} </span>
              <span className="text-primary font-display">{t("contact.title_part2")}</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-medium font-sans">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 space-y-8">
              <div className="glass-card p-10 space-y-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-light">
                  {t("contact.social_title")}
                </p>
                <div className="flex flex-col gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.download}
                      className={`flex items-center justify-between group py-2 border-b border-white/5 ${link.color} transition-colors`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="p-3 rounded-xl bg-white/5 group-hover:bg-current/10 transition-colors">
                          {link.icon}
                        </span>
                        <span className="text-lg font-bold text-white/60 group-hover:text-white transition-colors font-display">{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-light mb-8">
                  {t("contact.form_title")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-white/40 ml-1 tracking-widest">{t("contact.name")}</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:ring-0 transition-all outline-none font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-white/40 ml-1 tracking-widest">{t("contact.email")}</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:ring-0 transition-all outline-none font-sans"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-white/40 ml-1 tracking-widest">{t("contact.message")}</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary/50 focus:ring-0 transition-all outline-none resize-none font-sans"
                  />
                </div>
                <button
                  disabled={status !== "idle"}
                  className="w-full py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all active:scale-[0.98] flex items-center justify-center gap-3 font-sans shadow-xl disabled:opacity-50"
                >
                  {status === "idle" && (
                    <>{t("contact.send")} <Send className="w-4 h-4" /></>
                  )}
                  {status === "sending" && (
                    <><Loader2 className="w-4 h-4 animate-spin" /> {t("contact.sending")}</>
                  )}
                  {status === "sent" && (
                    <>{t("contact.sent")} ✨</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
