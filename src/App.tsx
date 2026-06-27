import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import ThreeBackground from "./components/ThreeBackground";
import CustomCursor from "./components/CustomCursor";
import { Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <CustomCursor />
      <ThreeBackground />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />

        <footer className="py-20 border-t border-white/5 overflow-hidden relative">
          <div className="container px-6 mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div>
                <a href="#home" className="flex items-center gap-2 group w-fit">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transform group-hover:rotate-12 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-tighter text-white leading-none uppercase font-display">JAMILA</span>
                    <span className="text-[10px] font-bold text-primary-light tracking-widest leading-none uppercase font-display">BEULGUIBE</span>
                  </div>
                </a>
              </div>

              <div className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
                {t("footer.text")} <br className="md:hidden" /> © 2024 Jamila Beulguibe
              </div>

              <div className="flex justify-center md:justify-end gap-8 text-[10px] uppercase tracking-widest font-bold text-white/40">
                <a href="https://github.com/bjaminous" target="_blank" className="hover:text-primary transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/jamila-beulguibe-inoussa-" target="_blank" className="hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
