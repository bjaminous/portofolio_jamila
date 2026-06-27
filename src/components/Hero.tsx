import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />

      <div className="container px-6 relative z-10 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary-light mb-8 backdrop-blur-sm font-sans"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("hero.status")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[1.1] md:leading-[0.9] font-display"
          >
            <span className="heading-gradient font-display">{t("hero.title_part1")} </span>
            <br className="hidden md:block" />
            <span className="text-gradient font-display">{t("hero.title_part2")}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium tracking-wide font-sans">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4 font-sans">
              <a
                href="#projects"
                className="group relative px-10 py-4 bg-primary text-white rounded-full font-bold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2 text-base">
                  {t("hero.view_projects")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              <a
                href="#contact"
                className="px-10 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 font-bold active:scale-95"
              >
                {t("hero.contact_me")}
              </a>
            </div>

            <div className="flex items-center gap-5 mt-8">
              <a href="https://github.com/bjaminous" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/jamila-beulguibe-inoussa-" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
