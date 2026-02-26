import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding" id="contact" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something{" "}
            <span className="text-gradient-gold">Remarkable.</span>
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 glass-card rounded-sm p-12"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Message Sent</h3>
            <p className="text-muted-foreground font-body">We'll be in touch within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  className="w-full bg-secondary border border-border/50 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  className="w-full bg-secondary border border-border/50 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">Brand / Startup Name</label>
              <input
                type="text"
                maxLength={100}
                className="w-full bg-secondary border border-border/50 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                placeholder="Your brand name"
              />
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">What do you need help with?</label>
              <select
                className="w-full bg-secondary border border-border/50 rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
              >
                <option value="">Select a service</option>
                <option>Branding & Identity</option>
                <option>UI/UX Design</option>
                <option>Website Development</option>
                <option>AI-Powered Marketing</option>
                <option>Social Media Growth</option>
                <option>Community Management</option>
                <option>Full Growth Package</option>
              </select>
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">Message</label>
              <textarea
                rows={4}
                maxLength={1000}
                className="w-full bg-secondary border border-border/50 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                placeholder="Tell us about your vision..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wide rounded-sm hover:gold-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
