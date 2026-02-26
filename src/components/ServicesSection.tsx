import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Paintbrush, Palette, Brain, Share2, Globe, TrendingUp, Users, Bot } from "lucide-react";

const services = [
  { icon: Paintbrush, title: "UI/UX & Product Design", desc: "Conversion-focused interfaces and seamless user experiences." },
  { icon: Palette, title: "Brand & Visual Identity", desc: "Logos, brand systems, and premium visual storytelling." },
  { icon: Brain, title: "AI-Powered Marketing", desc: "Automation, predictive analytics, and intelligent campaigns." },
  { icon: Share2, title: "Social Media Management", desc: "Content strategy, reels, engagement, and growth systems." },
  { icon: Globe, title: "Website Development", desc: "High-converting websites built for performance and elegance." },
  { icon: TrendingUp, title: "Growth Performance", desc: "Data-driven scaling and conversion optimization." },
  { icon: Users, title: "Community Management", desc: "Discord, Reddit, Telegram growth and engagement." },
  { icon: Bot, title: "Automation & Chatbots", desc: "AI assistants and workflow automation for modern brands." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary" id="services" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            End-to-End Services for{" "}
            <span className="text-gradient-gold">Modern Brands</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-sm p-8 gold-border-hover group cursor-default"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
