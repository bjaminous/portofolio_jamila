import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { RiRobot2Line, RiSparklingLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

interface Message {
    id: number;
    from: "jami" | "user";
    text: string;
}

// ─── Knowledge base ──────────────────────────────────────────────────────────
const getJamiResponse = (input: string, lang: string): string => {
    const q = input.toLowerCase().trim();
    const isFr = lang === "fr";

    if (/^(hi|hello|hey|bonjour|salut|coucou|bonsoir|yo)/.test(q)) {
        return isFr
            ? "Bonjour ! Je suis Jami — l'assistante de Jamila. Posez-moi n'importe quelle question sur son profil !"
            : "Hey! I'm Jami — Jamila's personal assistant. Ask me anything about her profile!";
    }

    if (/qui est|qui es|who is|about|profil|présente|tell me/.test(q)) {
        return isFr
            ? "Jamila est une développeuse Full-Stack passionnée, spécialisée en React, Laravel, Symfony et intégration IA (LLMs, Prompt Engineering). Elle recherche une alternance à Paris pour septembre 2026."
            : "Jamila is a passionate Full-Stack Developer, specialised in React, Laravel, Symfony and AI integration (LLMs, Prompt Engineering). She's seeking a tech alternance in Paris from September 2026.";
    }

    if (/skill|technolog|stack|compétence|maîtrise|framework|language|langag|code/.test(q)) {
        return isFr
            ? "Son stack principale :\n• Front : React.js, TypeScript, Tailwind CSS\n• Back : Laravel, Symfony, PHP 8, Node.js\n• BDD : MySQL, PostgreSQL\n• IA : LLM APIs, Prompt Engineering\n• Outils : Git, Docker, REST APIs"
            : "Her main stack:\n• Front: React.js, TypeScript, Tailwind CSS\n• Back: Laravel, Symfony, PHP 8, Node.js\n• DB: MySQL, PostgreSQL\n• AI: LLM APIs, Prompt Engineering\n• Tools: Git, Docker, REST APIs";
    }

    if (/ai |ia |artificial|intelligence artificielle|llm|gpt|prompt|openai|gen ?ai/.test(q)) {
        return isFr
            ? "Oui ! Jamila intègre nativement l'IA dans ses projets : optimisation de prompts, connexion aux APIs LLM (OpenAI, etc.) et automatisation de workflows. Elle est certifiée en Prompt Engineering (DataScientest)."
            : "Absolutely! Jamila natively integrates AI into her projects: prompt optimisation, LLM API connections (OpenAI etc.) and workflow automation. She holds a Prompt Engineering certification (DataScientest).";
    }

    if (/projet|project|réalisation|work|portfolio|github|fastcare|chronicare|vitacare|curly|humens/.test(q)) {
        return isFr
            ? "Quelques projets phares :\n• FastCare — app jeûne intermittent (JS, Node.js)\n• ChronicCare — suivi patients chroniques (React, TypeScript)\n• curly_hair — démo cybersécurité multi-étapes\n• humens — app émotions & communauté\nRetrouvez tous ses projets dans la section Projets !"
            : "Some key projects:\n• FastCare — intermittent fasting app (JS, Node.js)\n• ChronicCare — chronic patient monitoring (React, TypeScript)\n• curly_hair — multi-step cybersecurity demo\n• humens — emotions & community app\nExplore them all in the Projects section!";
    }

    if (/expérience|experience|stage|internship|travail|worked|emploi|iuc|innovative|edtech/.test(q)) {
        return isFr
            ? "Jamila a 5 mois d'expérience professionnelle en EDTECH :\n• Stage Full-Stack @ IUC Douala (jan–mai 2025) — app alumni Laravel/MySQL\n• Stage Web Dev @ Innovative Clan EDTECH (fév–juin 2024) — plateforme universitaire"
            : "Jamila has 5 months of professional EDTECH experience:\n• Full-Stack Internship @ IUC Douala (Jan–May 2025) — Laravel/MySQL alumni app\n• Web Dev Internship @ Innovative Clan EDTECH (Feb–Jun 2024) — university platform";
    }

    if (/éducation|education|formation|école|school|ece|iuc|iut|diplôme|bachelor|cursus|étude|study/.test(q)) {
        return isFr
            ? "Son parcours académique :\n• Bachelor Développement d'apps — ECE Paris (oct. 2025 – présent)\n• Bachelor CSI — IUC Douala (2024–2025)\n• DUT Génie Informatique — IUT Douala (2022–2024)"
            : "Her academic path:\n• Bachelor in App Development — ECE Paris (Oct 2025 – present)\n• Bachelor in Information Systems — IUC Douala (2024–2025)\n• DUT Computer Science — IUT Douala (2022–2024)";
    }

    if (/certif|certification|loreal|datascientest|nocode|prompt|brandstorm/.test(q)) {
        return isFr
            ? "Ses certifications :\n• L'Oréal Brandstorm 2026 — Distinction Internationale\n• Prompt Engineering Niv.1 — DataScientest (déc. 2025)\n• No Code Techaway Niv.2 — DataScientest (nov. 2025)\nToutes vérifiables dans la section Certifications !"
            : "Her certifications:\n• L'Oréal Brandstorm 2026 — International Recognition\n• Prompt Engineering Lv.1 — DataScientest (Dec 2025)\n• No Code Techaway Lv.2 — DataScientest (Nov 2025)\nAll verifiable in the Certifications section!";
    }

    if (/alternance|alternant|recrut|hire|embauche|dispon|available|cherche|looking|job|poste|opportunit/.test(q)) {
        return isFr
            ? "Jamila est disponible pour une alternance à partir de **septembre 2026**, idéalement sur Paris. Elle recherche un poste de développeuse Full-Stack ou développeuse IA dans une entreprise tech ambitieuse. N'hésitez pas à la contacter !"
            : "Jamila is available for a tech alternance from **September 2026**, ideally in Paris. She's looking for a Full-Stack or AI Developer role in an ambitious tech company. Feel free to reach out!";
    }

    if (/contact|email|linkedin|joindre|reach|message/.test(q)) {
        return isFr
            ? "Vous pouvez contacter Jamila via la section Contact en bas de page, ou directement sur LinkedIn. Elle répond rapidement !"
            : "You can contact Jamila through the Contact section at the bottom of the page, or directly on LinkedIn. She replies quickly!";
    }

    if (/cv|resume|curriculum/.test(q)) {
        return isFr
            ? "Vous pouvez télécharger le CV de Jamila via le bouton CV dans la barre de navigation en haut !"
            : "You can download Jamila's CV via the CV button in the top navigation bar!";
    }

    if (/soft|qualité|quality|person|caractère|collabor|équipe|team|autonome|autonomous|rigueur/.test(q)) {
        return isFr
            ? "Jamila se distingue par sa rigueur, son sens produit et sa capacité à collaborer efficacement en équipe. Autonome et curieuse, elle intègre toujours l'IA dans ses réflexions pour aller plus loin."
            : "Jamila stands out for her rigour, product mindset and ability to collaborate effectively in a team. Autonomous and curious, she always integrates AI thinking into her work.";
    }

    if (/premier|first|suggest|recommand|start|commencer|voir d'abord/.test(q)) {
        return isFr
            ? "Je vous recommande de commencer par **ChronicCare** pour voir son niveau Full-Stack, puis **FastCare** pour sa créativité produit. Et bien sûr, ce portfolio est lui-même un reflet de ses compétences !"
            : "I'd suggest starting with **ChronicCare** to see her Full-Stack level, then **FastCare** for her product creativity. And of course, this portfolio itself showcases her skills!";
    }

    if (/paris|france|localisation|location|où|where|ville|city/.test(q)) {
        return isFr
            ? "Jamila est basée à Paris et recherche une alternance en Île-de-France. Elle est également ouverte au télétravail partiel."
            : "Jamila is based in Paris and is looking for an alternance in the Île-de-France region. She's also open to partial remote work.";
    }

    return isFr
        ? "Je suis ici pour parler de Jamila et de son parcours. Posez-moi une question sur ses compétences, projets, formations ou disponibilités !"
        : "I'm here to talk about Jamila and her work. Ask me about her skills, projects, education or availability!";
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function JamiChat() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            from: "jami",
            text:
                i18n.language === "fr"
                    ? "Bonjour ! Je suis **Jami** — l'assistante de Jamila. Posez-moi n'importe quelle question sur son profil, ses projets ou ses disponibilités !"
                    : "Hey! I'm **Jami** — Jamila's personal assistant. Ask me anything about her profile, projects or availability!",
        },
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const nextId = useRef(1);

    useEffect(() => {
        if (isOpen) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const send = (text?: string) => {
        const msg = (text ?? input).trim();
        if (!msg) return;

        const userMsg: Message = { id: nextId.current++, from: "user", text: msg };
        const botText = getJamiResponse(msg, i18n.language.split("-")[0]);
        const botMsg: Message = { id: nextId.current++, from: "jami", text: botText };

        setMessages((prev) => [...prev, userMsg, botMsg]);
        setInput("");
    };

    const handleKey = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    };

    const formatText = (text: string) =>
        text.split("\n").map((line, i, arr) => (
            <span key={i}>
                {line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                    j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                )}
                {i < arr.length - 1 && <br />}
            </span>
        ));

    return (
        <>
            {/* Floating button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full bg-primary shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                animate={isOpen ? { scale: 0 } : { scale: 1 }}
                aria-label="Open Jami chatbot"
            >
                <BsStars className="w-6 h-6 text-white" />
            </motion.button>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-6 right-6 z-[200] w-[340px] sm:w-[380px] flex flex-col rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10"
                        style={{ maxHeight: "560px" }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-primary/90 to-[#a855f7]/90 backdrop-blur-xl shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                                    <RiRobot2Line className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm leading-none">Jami</p>
                                    <p className="text-white/70 text-[10px] leading-none mt-0.5">
                                        {i18n.language === "fr" ? "Assistante de Jamila" : "Jamila's Assistant"}
                                    </p>
                                </div>
                                <span className="ml-1 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#09090b]/95 backdrop-blur-2xl">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    {msg.from === "jami" && (
                                        <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mr-2 shrink-0 mt-0.5">
                                            <RiSparklingLine className="w-4 h-4 text-primary" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.from === "user"
                                                ? "bg-primary text-white rounded-br-sm"
                                                : "bg-white/5 text-white/90 border border-white/10 rounded-bl-sm"
                                            }`}
                                    >
                                        {formatText(msg.text)}
                                    </div>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Suggestions */}
                        <div className="px-3 py-2 bg-[#09090b]/95 border-t border-white/5 flex gap-2 overflow-x-auto shrink-0">
                            {(i18n.language === "fr"
                                ? ["Ses skills ?", "Ses projets ?", "Contact ?", "Disponibilités ?"]
                                : ["Her skills?", "Her projects?", "Contact?", "Availability?"]
                            ).map((s) => (
                                <button
                                    key={s}
                                    onClick={() => send(s)}
                                    className="shrink-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 hover:text-white hover:border-primary/40 transition-all font-bold uppercase tracking-wide whitespace-nowrap"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#09090b]/95 border-t border-white/10 shrink-0">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKey}
                                placeholder={
                                    i18n.language === "fr" ? "Posez votre question..." : "Ask a question..."
                                }
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-primary/50 transition-all"
                            />
                            <button
                                onClick={() => send()}
                                disabled={!input.trim()}
                                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-light transition-colors active:scale-95 disabled:opacity-40 shrink-0"
                            >
                                <Send className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
