import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"
        }`}
    >
      <div className="container px-6 mx-auto">
        <div className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent border-transparent"
          }`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transform group-hover:rotate-12 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tighter text-white leading-none font-display uppercase">Jamila</span>
              <span className="text-[10px] font-bold text-primary-light tracking-widest leading-none font-display uppercase">Beulguibe</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors relative group font-sans"
              >
                {link.name}
                <span className="absolute bottom-1.5 left-5 right-5 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/bjaminous"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/40 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all active:scale-95 font-sans"
            >
              Me recruter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
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
                  Me contacter
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
