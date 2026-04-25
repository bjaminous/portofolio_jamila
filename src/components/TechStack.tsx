import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Server, 
  Zap 
} from "lucide-react";

const technologies = [
  { name: "React", icon: <Layout className="w-6 h-6" />, category: "Frontend", level: "Expert" },
  { name: "TypeScript", icon: <Code2 className="w-6 h-6" />, category: "Language", level: "Expert" },
  { name: "Tailwind CSS", icon: <Globe className="w-6 h-6" />, category: "Styling", level: "Advanced" },
  { name: "Node.js", icon: <Server className="w-6 h-6" />, category: "Backend", level: "Advanced" },
  { name: "Three.js", icon: <Layers className="w-6 h-6" />, category: "Graphics", level: "Intermediate" },
  { name: "GSAP", icon: <Zap className="w-6 h-6" />, category: "Motion", level: "Advanced" },
  { name: "Prisma", icon: <Database className="w-6 h-6" />, category: "Database", level: "Advanced" },
  { name: "Docker", icon: <Cpu className="w-6 h-6" />, category: "DevOps", level: "Intermediate" },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mastered <span className="text-indigo-400 text-gradient">Tools.</span></h2>
            <p className="text-white/60 max-w-md">
              A curated selection of technologies I use to build robust and scalable digital products.
            </p>
          </div>
          <div className="text-sm font-mono text-indigo-400/60">
            [ SKILLS.JSON ]
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 glass rounded-3xl relative overflow-hidden transition-all hover:border-indigo-500/30"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all text-indigo-400">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{tech.name}</h3>
                <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest">{tech.category}</p>
                
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: tech.level === "Expert" ? "95%" : tech.level === "Advanced" ? "80%" : "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-indigo-500"
                    />
                  </div>
                  <span className="text-[10px] text-white/40 font-bold">{tech.level}</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 text-7xl font-bold text-white/[0.02] select-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
