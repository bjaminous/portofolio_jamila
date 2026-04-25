import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechNexus Scale-up",
    period: "2023 - Present",
    description: "Leading the core product team in migrating from a monolith to a micro-frontend architecture using React and Module Federation.",
    type: "work",
  },
  {
    title: "Junior Backend Developer",
    company: "Innovate AI",
    period: "2022 - 2023",
    description: "Optimized data processing pipelines reducing latency by 40%. Implemented secure OAuth2 flows and refined PostgreSQL schemas.",
    type: "work",
  },
  {
    title: "MSc in Computer Science",
    company: "Lille Tech University",
    period: "2020 - 2022",
    description: "Specialized in Distributed Systems and Advanced Web Engineering. Graduated with high honors.",
    type: "edu",
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 relative" ref={containerRef}>
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">My <span className="text-indigo-500 italic">Journey.</span></h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent origin-top hidden md:block"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex items-center justify-between gap-8 flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Desktop Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-indigo-500 rounded-full z-20 hidden md:block ring-4 ring-indigo-500/20" />

                <div className="w-full md:w-[45%] glass p-8 rounded-[2rem] border border-white/5 hover:border-indigo-500/20 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                      {exp.type === "work" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase">{exp.period}</span>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-white/40 font-bold mb-4 uppercase tracking-tighter">{exp.company}</p>
                  <p className="text-sm text-white/60 leading-relaxed italic">{exp.description}</p>
                </div>
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
