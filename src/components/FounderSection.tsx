import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-6 block"
        >
          Our Story
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-8"
        >
          Built by Creators.{" "}
          <span className="text-gradient-gold">Driven by Vision.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="font-body text-lg text-muted-foreground leading-relaxed mb-6"
        >
          Catalyst was founded on the belief that great ideas deserve world-class execution.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="font-body text-lg text-muted-foreground leading-relaxed"
        >
          Led by creators who understand design, technology, and human psychology, we don't just
          market brands — we architect perception.
        </motion.p>
      </div>
    </section>
  );
};

export default FounderSection;
