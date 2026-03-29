import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discover", desc: "Deep-dive into your vision, market, and goals." },
  { num: "02", title: "Design", desc: "Craft the visual language and user experience." },
  { num: "03", title: "Build", desc: "Engineer with precision and performance." },
  { num: "04", title: "Launch", desc: "Deploy with strategy and momentum." },
  { num: "05", title: "Scale", desc: "Optimize, automate, and grow." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 bg-secondary" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <span className="text-primary/60 font-body text-[11px] tracking-[0.3em] uppercase block mb-6">
            Process
          </span>
          <h2 className="font-display text-4xl md:text-[3.5rem] leading-[1.1] font-bold max-w-lg">
            How we work<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative group"
            >
              {/* Top bar */}
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {i < steps.length - 1 && (
                  <div className="h-px flex-1 bg-border/30 hidden md:block" />
                )}
              </div>

              <div className="pr-8 md:pr-6">
                <span className="text-primary/40 font-body text-[11px] tracking-widest block mb-3">
                  {step.num}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
