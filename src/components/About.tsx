import { motion } from "framer-motion";
import { Terminal, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-indigo-500/20 rounded-[3rem] blur-3xl" />
            <div className="relative glass p-2 rounded-[3.5rem] border border-white/10 overflow-hidden aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Jamila profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            {/* Float stats */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border border-white/20 shadow-2xl"
            >
              <div className="text-3xl font-bold text-indigo-500">3+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Years Exp.</div>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Engineering with <br /> <span className="text-indigo-500 italic font-medium">Soul.</span></h2>
            
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                My name is <span className="text-white font-semibold">Jamila Beulguibe Inoussa</span>. 
                I don't just write code; I design systems that solve human problems. My journey started 
                with a fascination for how logic can manifest into visual beauty.
              </p>
              <p>
                As a developer based in <span className="text-white font-semibold">Paris / Lille</span>, 
                I bridge the gap between complex engineering and intuitive design. I believe that performance 
                is a feature and that every micro-interaction contributes to the final product's success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-indigo-400">
                  <Terminal className="w-5 h-5" />
                  <span className="font-bold text-[10px] tracking-widest uppercase">Clean Code</span>
                </div>
                <p className="text-xs text-white/50 italic">Semantic, DRY and scalable architecture.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-indigo-400">
                  <Rocket className="w-5 h-5" />
                  <span className="font-bold text-[10px] tracking-widest uppercase">Performance</span>
                </div>
                <p className="text-xs text-white/50 italic">Optimized assets and server-side rendering.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
