import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Loader2, Star, GitFork } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export default function Projects() {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/bjaminous/repos?sort=updated&per_page=6")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-12 md:mb-20 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 font-display italic">
            <span className="heading-gradient not-italic font-display">{t("projects.title_part1")} </span>
            <span className="text-primary italic font-display">{t("projects.title_part2")}</span>
          </h2>
          <p className="text-[#CBD5E1] text-base md:text-lg leading-relaxed font-sans max-w-2xl">
            {t("projects.subtitle")}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <p className="text-[#E2E8F0] font-bold tracking-[0.2em] text-[10px] uppercase">{t("projects.loading")}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {repos.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 group flex flex-col h-full hover:bg-white/[0.03] transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                    <Github className="w-6 h-6 text-[#E2E8F0] group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex gap-4 text-[#E2E8F0] text-[10px] font-bold">
                    <span className="flex items-center gap-1.5"><Star className="w-3 h-3" /> {project.stargazers_count}</span>
                    <span className="flex items-center gap-1.5"><GitFork className="w-3 h-3" /> {project.forks_count}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white font-display group-hover:text-primary-light transition-colors">
                  {project.name.replace(/-/g, ' ')}
                </h3>

                <p className="text-[#CBD5E1] text-sm leading-relaxed mb-8 flex-grow font-sans">
                  {project.description || t("projects.no_description")}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.topics && project.topics.slice(0, 3).map(topic => (
                    <span key={topic} className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 bg-white/5 text-[#E2E8F0] rounded-md border border-white/5">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors group/link"
                  >
                    {t("projects.source_code")} <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary-light transition-colors group/link"
                    >
                      {t("projects.live_demo")} <ExternalLink className="w-3.5 h-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/bjaminous"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-bold text-sm text-white/60 hover:text-white font-sans"
          >
            {t("projects.view_more")} <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
