import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const lines = [
  "We believe brands aren't built — they are revealed.",
  "Catalyst exists to bridge the gap between vision and visibility.",
  "Through design, strategy, and intelligent automation,",
  "we transform ideas into influential digital experiences.",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" id="about">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-6 block"
          >
            About Catalyst
          </motion.span>
          <div className="space-y-4">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`font-display text-2xl md:text-3xl leading-relaxed ${
                  i === 0 ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border border-border/30" />
          <div className="absolute inset-8 rounded-sm border border-primary/20" />
          <div className="absolute inset-16 rounded-sm bg-primary/5 border border-primary/10 flex items-center justify-center">
            <span className="font-display text-6xl text-gradient-gold">C</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
