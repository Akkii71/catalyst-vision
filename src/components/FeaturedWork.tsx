import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Clock } from "lucide-react";
import projectUnifye from "@/assets/project-unifye.jpg";
import projectDropcult from "@/assets/project-dropcult.jpg";
import projectJuice from "@/assets/project-juice.jpg";

const projects = [
  {
    title: "UNIFYE",
    category: "Social Platform / Community Ecosystem",
    url: "https://unifye-frontend-v1.vercel.app/",
    image: projectUnifye,
    highlights: [
      "Designed for seamless community interaction",
      "Clean, intuitive interface for high engagement",
      "Scalable architecture for growing user bases",
    ],
    narrative: "Unifye demonstrates how thoughtful UX and structured interaction design can transform a simple platform into a thriving digital community.",
    comingSoon: false,
  },
  {
    title: "DROPCULT",
    category: "Gen Z E-commerce Experience",
    url: "https://main-drop-cult-gc3l.vercel.app/",
    image: projectDropcult,
    highlights: [
      "Designed for Gen Z attention patterns",
      "Bold typography and high-contrast visuals",
      "Mobile-first shopping experience",
    ],
    narrative: "DropCult showcases how design aligned with generational behavior can dramatically improve engagement and conversion.",
    comingSoon: false,
  },
  {
    title: "FRUIT JUICE BRAND",
    category: "Lifestyle & Beverage Branding",
    url: null,
    image: projectJuice,
    highlights: [
      "Bright, refreshing color palette",
      "Immersive product storytelling",
      "Mobile-first experience",
    ],
    narrative: "This project reflects Catalyst's ability to craft sensory digital experiences that connect emotionally with consumers.",
    comingSoon: true,
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" id="work" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Crafted experiences. Measurable impact. We partner with ambitious brands to design
            experiences that are visually compelling and strategically engineered for growth.
          </p>
        </motion.div>

        <div className="space-y-24 mt-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative group ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                {project.comingSoon && (
                  <div className="absolute top-4 right-4 z-10 px-4 py-1.5 shimmer rounded-sm text-primary font-body text-xs tracking-widest uppercase flex items-center gap-2 border border-primary/30">
                    <Clock size={12} /> Coming Soon
                  </div>
                )}
                <div className="overflow-hidden rounded-sm gold-border-hover">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </a>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                <span className="text-primary font-body text-xs tracking-[0.2em] uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
                  {project.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed italic mb-6">
                  {project.narrative}
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-body text-sm tracking-wide hover:gap-3 transition-all duration-300"
                  >
                    View Live Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
