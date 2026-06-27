import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, Sparkles, ExternalLink, X, FileText } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Certifications() {
    const { t } = useTranslation();
    const [selectedCert, setSelectedCert] = useState<any>(null);

    const certData = t("certs.items", { returnObjects: true }) as Record<string, any>;
    const certifications = Object.values(certData).map((cert: any) => ({
        title: cert.title,
        issuer: cert.issuer,
        date: cert.date,
        type: cert.type,
        file: cert.file,
        skills: cert.skills || []
    }));

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display italic text-white text-center">
                            {t("certs.title")}
                        </h2>
                        <p className="text-[#CBD5E1] text-center text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto opacity-80">
                            {t("certs.subtitle")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 md:p-8 group hover:border-primary/40 transition-all border-white/5 relative overflow-hidden h-full flex flex-col"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <Sparkles className="w-12 h-12 text-primary" />
                                </div>

                                <div className="flex flex-col gap-6 relative z-10 h-full">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <span className="text-[9px] font-bold text-primary-light bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">
                                            {cert.date}
                                        </span>
                                    </div>

                                    <div className="flex-grow space-y-4">
                                        <div>
                                            <div className="text-[10px] text-primary-light font-bold uppercase tracking-wider mb-1 opacity-70">
                                                {cert.type}
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white font-display group-hover:text-primary transition-colors leading-tight">
                                                {cert.title}
                                            </h3>
                                            <p className="text-white/60 text-sm font-medium font-sans mt-1">{cert.issuer}</p>
                                        </div>

                                        <div className="grid grid-cols-1 gap-2 py-4 border-y border-white/5">
                                            {cert.skills.map((skill: string) => (
                                                <div key={skill} className="flex items-center gap-2 text-[#CBD5E1] text-[13px] font-sans">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => setSelectedCert(cert)}
                                            className="w-full mt-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary hover:border-primary transition-all group/btn"
                                        >
                                            <FileText className="w-4 h-4" />
                                            {t("certs.view_cert")}
                                            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.2)] flex flex-col max-h-[90vh]"
                        >
                            <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold font-display">{selectedCert.title}</h3>
                                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{selectedCert.issuer} — {selectedCert.date}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-grow bg-black p-2 md:p-4 overflow-hidden relative group">
                                {/* Fallback pattern for better look if file is missing */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                                    <Sparkles className="w-64 h-64 text-primary" />
                                </div>

                                <iframe
                                    src={selectedCert.file}
                                    className="w-full h-full rounded-xl border-0"
                                    title={selectedCert.title}
                                />
                            </div>

                            <div className="p-4 bg-white/[0.02] border-t border-white/10 flex justify-center">
                                <a
                                    href={selectedCert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-light transition-all flex items-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Open in New Tab
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
