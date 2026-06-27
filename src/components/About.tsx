import { motion } from "framer-motion";
import { Code2, Target, Lightbulb, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const principles = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: t("about.principles.target.title"),
      description: t("about.principles.target.description")
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-accent-blue" />,
      title: t("about.principles.lightbulb.title"),
      description: t("about.principles.lightbulb.description")
    },
    {
      icon: <Code2 className="w-6 h-6 text-accent-pink" />,
      title: t("about.principles.code.title"),
      description: t("about.principles.code.description")
    },
    {
      icon: <Users className="w-6 h-6 text-primary-light" />,
      title: t("about.principles.users.title"),
      description: t("about.principles.users.description")
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img
                src="/profile.jpg"
                alt="Jamila Beulguibe"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-2xl font-bold text-white font-display">Jamila Beulguibe</p>
                <p className="text-primary-light font-medium tracking-wide">Développeuse Full-Stack</p>
              </div>
            </div>
            {/* Décorations subtiles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-blue/20 rounded-full blur-[80px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-10 font-display leading-[1.1]">
              <span className="text-white">{t("about.title_part1")} </span>
              <span className="text-primary font-display italic">{t("about.title_part2")}</span>
            </h2>

            <div className="space-y-6 md:space-y-8 text-[#CBD5E1] text-base md:text-lg leading-relaxed font-sans">
              <p dangerouslySetInnerHTML={{ __html: t("about.description1").replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }} />
              <p dangerouslySetInnerHTML={{ __html: t("about.description2").replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }} />
              <p dangerouslySetInnerHTML={{ __html: t("about.description3").replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') }} />
            </div>

            <div className="flex gap-8 md:gap-12 mt-10 md:mt-12 pt-8 border-t border-white/5">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1 font-display">5 mois</p>
                <p className="text-[9px] text-[#E2E8F0] uppercase tracking-[0.2em] font-bold">{t("about.stats.value")}</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1 font-display">24 mois</p>
                <p className="text-[9px] text-[#E2E8F0] uppercase tracking-[0.2em] font-bold">{t("about.stats.autonomy")}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-10 group hover:border-primary/30 transition-all border-white/[0.05]"
            >
              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white font-display uppercase tracking-widest">{item.title}</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed font-sans">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
