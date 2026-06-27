import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("experience.items.ece_bachelor.title"),
      company: t("experience.items.ece_bachelor.company"),
      period: t("experience.items.ece_bachelor.period"),
      description: t("experience.items.ece_bachelor.description"),
      type: "edu",
      tags: ["Conception Logicielle", "Agile", "Qualité"]
    },
    {
      title: t("experience.items.iuc_stage.title"),
      company: t("experience.items.iuc_stage.company"),
      period: t("experience.items.iuc_stage.period"),
      description: t("experience.items.iuc_stage.description"),
      type: "work",
      tags: ["Full-Stack", "Architecture", "Relation Client"]
    },
    {
      title: t("experience.items.iuc_bachelor.title"),
      company: t("experience.items.iuc_bachelor.company"),
      period: t("experience.items.iuc_bachelor.period"),
      description: t("experience.items.iuc_bachelor.description"),
      type: "edu",
      tags: ["Analyse SI", "Full-Stack Dev", "Modélisation"]
    },
    {
      title: t("experience.items.innovative_stage.title"),
      company: t("experience.items.innovative_stage.company"),
      period: t("experience.items.innovative_stage.period"),
      description: t("experience.items.innovative_stage.description"),
      type: "work",
      tags: ["EDTECH", "Collaboration Team", "Product Thinking"]
    },
    {
      title: t("experience.items.iut_dut.title"),
      company: t("experience.items.iut_dut.company"),
      period: t("experience.items.iut_dut.period"),
      description: t("experience.items.iut_dut.description"),
      type: "edu",
      tags: ["Génie Logiciel", "Mobile", "Algo"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display text-white italic">{t("experience.title_part1")} <span className="not-italic text-primary">{t("experience.title_part2")}</span></h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed font-sans max-w-2xl">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-2 md:ml-12 space-y-12 md:space-y-16 pb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
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
