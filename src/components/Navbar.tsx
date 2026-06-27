import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.stack"), href: "#stack" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "py-4" : "py-8"
        }`}
    >
      <div className="container px-6 mx-auto">
        <div
          className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled
            ? "bg-black/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-transparent"
            }`}
        >
          {/* Logo with Avatar for Human Touch */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:rotate-12">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tighter text-white leading-none font-display uppercase group-hover:text-primary transition-colors">Jamila</span>
              <span className="text-[10px] font-bold text-primary-light tracking-widest leading-none font-display uppercase opacity-70">BEULGUIBE</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#E2E8F0] hover:text-white transition-colors relative group font-sans"
              >
                {link.name}
                <span className="absolute bottom-1.5 left-5 right-5 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 hover:text-white transition-all uppercase tracking-widest"
            >
              <Globe className="w-3.5 h-3.5" />
              {i18n.language.split("-")[0].toUpperCase()}
            </button>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all active:scale-95 font-sans"
            >
              {t("nav.hire")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 text-white/60"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-6 md:hidden"
          >
            <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white/70 hover:text-primary transition-colors font-display"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <a href="https://github.com/bjaminous" target="_blank" className="text-white/40"><Github /></a>
                  <a href="https://www.linkedin.com/in/jamila-beulguibe-inoussa-" target="_blank" className="text-white/40"><Linkedin /></a>
                </div>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-primary text-white rounded-full font-bold font-sans text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.contact_me")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
