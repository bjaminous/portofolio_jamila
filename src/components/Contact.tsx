import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    console.log(formState);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/3 text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Let's <span className="text-indigo-500 not-italic font-medium">Connect.</span></h2>
            <p className="text-white/60 mb-12">
              Have a project in mind or want to chat about tech? Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</div>
                  <div className="font-bold">jamila@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Location</div>
                  <div className="font-bold">Paris / Lille, France</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-20">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-white/60">Thank you for reaching out. I'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-widest ml-4">Your Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-all"
                          onChange={e => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-widest ml-4">Your Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-all"
                          onChange={e => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-4">Message</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-all resize-none"
                        onChange={e => setFormState({...formState, message: e.target.value})}
                      />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-indigo-600 text-white font-bold py-6 rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50",
                        !isSubmitting && "hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                      )}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Send Message <Send className="w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
