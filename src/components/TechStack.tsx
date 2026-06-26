import { motion } from "framer-motion";
import { Code2, Database, Layout, Settings } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5 text-accent-pink" />,
    items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <Code2 className="w-5 h-5 text-primary-light" />,
    items: ["Node.js", "Laravel", "Express", "REST API", "PostgreSQL", "MySQL"]
  },
  {
    category: "Base de données",
    icon: <Database className="w-5 h-5 text-accent-blue" />,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "Redis"]
  },
  {
    category: "Outils & DevOps",
    icon: <Settings className="w-5 h-5 text-white/40" />,
    items: ["Git", "GitHub", "Vercel", "Docker", "Postman", "Figma"]
  }
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-white/[0.01]">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display italic text-white">Mon <span className="not-italic text-primary font-display">Tech Stack.</span></h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed font-sans max-w-2xl">
            Une sélection d'outils et de technologies modernes que j'utilise pour concevoir des produits digitaux performants et élégants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {skill.icon}
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-bold text-white font-display uppercase tracking-[0.2em]">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] text-white/60 font-medium group-hover:border-white/20 group-hover:text-white transition-all font-sans"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
