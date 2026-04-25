import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NexFlow AI",
    description: "An AI-powered workflow automation platform for SaaS scale-ups.",
    tags: ["React", "OpenAI", "TailwindCSS", "Prisma"],
    problem: "SaaS teams were wasting 20h/week on manual data entry between tools.",
    solution: "Built a centralized engine that uses LLMs to map and automate data flows.",
    impact: "Reduced manual tasks by 85% for early adopters.",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "EcoSphere Dashboard",
    description: "Real-time carbon footprint monitoring for enterprise logistics.",
    tags: ["React", "Three.js", "D3.js", "Node.js"],
    problem: "Enterprises lacked a visual and real-time way to track supply chain emissions.",
    solution: "Developed an interactive 3D globe visualization with predictive analytics.",
    impact: "Helped client identify 12% energy waste in first month.",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Zenith OS",
    description: "A minimalist, high-performance portfolio template for engineers.",
    tags: ["TypeScript", "GSAP", "Framer Motion"],
    problem: "Most portfolio templates are too heavy or lack professional 'feel'.",
    solution: "Created a lightweight, motion-first framework based on modern design tokens.",
    impact: "500+ stars on GitHub and used by 50+ developers.",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl mb-20 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Featured <span className="text-indigo-500 not-italic">Builds.</span></h2>
          <p className="text-white/60 leading-relaxed">
            A small selection of projects where I solved complex problems using modern architecture and focus on high-impact results.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all">
                        <Github className="w-6 h-6" />
                     </a>
                     <a href={project.link} className="p-3 bg-indigo-600 rounded-full border border-indigo-500/20 hover:scale-110 transition-all text-white">
                        <ArrowUpRight className="w-6 h-6" />
                     </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{project.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-l-2 border-indigo-500/20 pl-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-white/40 uppercase mb-2">Problem</h4>
                    <p className="text-sm text-white/80 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-white/40 uppercase mb-2">Solution</h4>
                    <p className="text-sm text-white/80 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-indigo-400 uppercase mb-2">Impact</h4>
                    <p className="text-sm text-indigo-400 font-medium leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-left">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold hover:text-indigo-400 transition-colors group">
                    Live Demo <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold hover:text-indigo-400 transition-colors group">
                    Repository <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
