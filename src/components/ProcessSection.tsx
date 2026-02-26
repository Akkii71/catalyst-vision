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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient-gold">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[24px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 bg-primary rounded-full z-10 shadow-[0_0_12px_hsl(43_72%_52%/0.5)]" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-primary/50 font-body text-xs tracking-widest">{step.num}</span>
                  <h3 className="font-display text-2xl font-bold mt-1 mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
