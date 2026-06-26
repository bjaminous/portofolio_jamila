import { motion } from "framer-motion";
import { Code2, Target, Lightbulb, Users } from "lucide-react";

const principles = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Sens Produit",
    description: "Je ne développe pas juste des fonctionnalités, je conçois des solutions centrées sur la valeur utilisateur et métier."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-accent-blue" />,
    title: "Solution Maker",
    description: "Mon rôle est de traduire des besoins complexes en architectures techniques simples, scalables et maintenables."
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent-pink" />,
    title: "Qualité Logicielle",
    description: "Je privilégie la rigueur et le clean code pour garantir des applications fiables et prêtes pour l'évolution."
  },
  {
    icon: <Users className="w-6 h-6 text-primary-light" />,
    title: "Esprit d'Équipe",
    description: "La communication et la collaboration sont pour moi le socle de tout projet applicatif réussi."
  }
];

export default function About() {
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
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
            <h2 className="text-4xl md:text-6xl font-bold mb-10 font-display leading-[1.1]">
              <span className="text-white">L'ingénierie au service du </span>
              <span className="text-primary font-display italic">produit.</span>
            </h2>

            <div className="space-y-8 text-white/60 text-lg leading-relaxed font-sans">
              <p>
                Développeuse Full-Stack en formation, je me distingue par ma capacité à <span className="text-white font-semibold italic">traduire un besoin métier</span> en solution technique robuste et élégante. Mon approche ne s'arrête pas au code : j'analyse l'impact utilisateur pour chaque ligne écrite.
              </p>
              <p>
                Actuellement en Bachelor à l'@<span className="text-white font-semibold">ECE Paris</span>, j'ai forgé mon expertise à travers des projets à forte valeur ajoutée, notamment dans les domaines de l'EDTECH et de la gestion applicative métier.
              </p>
              <p>
                Ma force réside dans mon autonomie, ma rigueur et ma vision transversale qui me permet de piloter des projets de <span className="text-white">bout en bout</span>, de la conception logicielle à la mise en œuvre de solutions scalables.
              </p>
            </div>

            <div className="flex gap-12 mt-12 pt-8 border-t border-white/5">
              <div>
                <p className="text-4xl font-bold text-white mb-1 font-display">100%</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Orientée Valeur</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1 font-display">Full</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Stack Autonome</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-10 group hover:border-primary/30 transition-all border-white/[0.05]"
            >
              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white font-display uppercase tracking-widest">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
