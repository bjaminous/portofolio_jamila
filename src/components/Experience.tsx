import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Bachelor – Développement d’applications",
    company: "ECE – École d’ingénieurs, Paris",
    period: "Depuis Octobre 2025",
    description: "Approfondissement des architectures orientées services et de la gestion de projet Agile. Focus sur la vision produit, la qualité logicielle et l'intégration de solutions NoCode performantes.",
    type: "edu",
    tags: ["Conception Logicielle", "Agile", "Qualité"]
  },
  {
    title: "Développeuse Full-Stack (Stage)",
    company: "Institut Universitaire de la Côte – Douala",
    period: "Janvier 2025 – Mai 2025",
    description: "Conception intégrale d'une application de gestion pour les Alumni. Modélisation de bases de données complexes répondant aux besoins métier et participation active à l'analyse fonctionnelle.",
    type: "work",
    tags: ["Full-Stack", "Architecture", "Relation Client"]
  },
  {
    title: "Bachelor – Conception des systèmes d’information",
    company: "IUC, Douala",
    period: "Octobre 2024 – Juillet 2025",
    description: "Spécialisation dans l'analyse et la modélisation des besoins. Maîtrise du cycle de vie des données et des méthodologies de conception de systèmes d'information robustes.",
    type: "edu",
    tags: ["Analyse SI", "Full-Stack Dev", "Modélisation"]
  },
  {
    title: "Développeuse Web (Stage)",
    company: "Innovative Clan (EDTECH) – Douala",
    period: "Février 2024 – Juin 2024",
    description: "Contribution majeure au développement d'une plateforme EDTECH pour les universités. Immersion dans le cycle complet du projet : de l'analyse des besoins à l'implémentation technique finale.",
    type: "work",
    tags: ["EDTECH", "Collaboration Team", "Product Thinking"]
  },
  {
    title: "DUT – Génie Informatique",
    company: "IUT, Douala",
    period: "Septembre 2022 – Juillet 2024",
    description: "Acquisition des fondamentaux du génie logiciel et du développement d'applications mobiles et web. Apprentissage rigoureux de la gestion de projet informatique.",
    type: "edu",
    tags: ["Génie Logiciel", "Mobile", "Algo"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display text-white italic">Mon <span className="not-italic text-primary">Parcours.</span></h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed font-sans max-w-2xl">
            Une progression logique alliant rigueur académique et expériences concrètes sur le terrain, centrée sur la création de valeur et l'excellence technique.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-2 md:ml-12 space-y-12 md:space-y-16 pb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Marker */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 group-hover:bg-primary transition-all duration-300 z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]" />

              <div className="glass-card p-6 md:p-10 hover:bg-white/[0.03] transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className={`p-2.5 md:p-3.5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 ${exp.type === 'work' ? 'text-accent-pink' : 'text-primary-light'} group-hover:scale-110 transition-transform`}>
                      {exp.type === "work" ? <Briefcase className="w-5 h-5 md:w-6 md:h-6" /> : <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-display mb-1 group-hover:text-primary transition-colors leading-tight">{exp.title}</h3>
                      <p className="text-primary-light font-bold font-sans tracking-wide uppercase text-[10px] md:text-xs">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-widest h-fit backdrop-blur-sm w-fit">
                    <Calendar className="w-3 md:w-3.5 h-3 md:h-3.5" /> {exp.period}
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed font-sans text-base md:text-lg mb-6 md:mb-8">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40">
                      <CheckCircle2 className="w-2.5 md:w-3 h-2.5 md:h-3 text-primary/60" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pr-20" />
    </section>
  );
}
