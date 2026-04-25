import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import ThreeBackground from "./components/ThreeBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <CustomCursor />
      <ThreeBackground />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <About />
        <Contact />
        
        <footer className="py-12 border-t border-white/5 opacity-40">
          <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm font-bold tracking-tighter">
              <span className="text-indigo-500">JAMILA</span>
              <span className="text-white/60">.DEV</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold">
              © 2024 Built with React & Framer Motion
            </div>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-indigo-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
