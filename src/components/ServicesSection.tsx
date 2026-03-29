import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Paintbrush, Palette, Brain, Share2, Globe, TrendingUp, Users, Bot } from "lucide-react";

const services = [
  { icon: Paintbrush, title: "UI/UX & Product Design", desc: "Conversion-focused interfaces and seamless user experiences.", tag: "Design" },
  { icon: Palette, title: "Brand & Visual Identity", desc: "Logos, brand systems, and premium visual storytelling.", tag: "Branding" },
  { icon: Brain, title: "AI-Powered Marketing", desc: "Automation, predictive analytics, and intelligent campaigns.", tag: "Marketing" },
  { icon: Share2, title: "Social Media Management", desc: "Content strategy, reels, engagement, and growth systems.", tag: "Social" },
  { icon: Globe, title: "Website Development", desc: "High-converting websites built for performance and elegance.", tag: "Engineering" },
  { icon: TrendingUp, title: "Growth Performance", desc: "Data-driven scaling and conversion optimization.", tag: "Growth" },
  { icon: Users, title: "Community Management", desc: "Discord, Reddit, Telegram growth and engagement.", tag: "Community" },
  { icon: Bot, title: "Automation & Chatbots", desc: "AI assistants and workflow automation for modern brands.", tag: "Automation" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-40 bg-background" id="services" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <span className="text-primary/60 font-body text-[11px] tracking-[0.3em] uppercase block mb-6">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-[3.5rem] leading-[1.1] font-bold max-w-xl">
            What we do<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="border-t border-border/30">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-b border-border/30 group"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center gap-6 md:gap-10 py-6 md:py-7 px-2 cursor-default">
                <span className="text-primary/30 font-body text-[11px] tracking-widest w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
                  <service.icon
                    className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                      activeIndex === i ? "text-primary" : "text-muted-foreground/40"
                    }`}
                  />
                  <h3
                    className={`font-display text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      activeIndex === i ? "text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <p
                  className={`hidden md:block font-body text-sm max-w-xs transition-all duration-300 ${
                    activeIndex === i
                      ? "text-muted-foreground opacity-100"
                      : "text-muted-foreground/40 opacity-60"
                  }`}
                >
                  {service.desc}
                </p>

                <span
                  className={`hidden sm:block text-[10px] tracking-[0.2em] uppercase font-body px-3 py-1 rounded-full border transition-all duration-300 shrink-0 ${
                    activeIndex === i
                      ? "border-primary/40 text-primary"
                      : "border-border/20 text-muted-foreground/30"
                  }`}
                >
                  {service.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
