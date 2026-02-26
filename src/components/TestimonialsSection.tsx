import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { quote: "Catalyst transformed our startup into a brand people trust.", author: "Aarya Mehta", role: "Founder" },
  { quote: "Our growth tripled within 3 months.", author: "Daniel Cruz", role: "D2C Founder" },
  { quote: "Finally, an agency that understands design and data.", author: "Riya Sharma", role: "Creator" },
  { quote: "They built more than a website — they built our presence.", author: "Marcus Lee", role: "SaaS Builder" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-12 block">
            Testimonials
          </span>
        </motion.div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[200px] flex flex-col items-center justify-center"
        >
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="font-display text-2xl md:text-4xl font-medium leading-relaxed mb-8 text-foreground">
            "{testimonials[current].quote}"
          </blockquote>
          <p className="font-body text-sm text-muted-foreground tracking-wide">
            — {testimonials[current].author},{" "}
            <span className="text-primary">{testimonials[current].role}</span>
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-border/50 rounded-full flex items-center justify-center hover:border-primary/60 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} className="text-muted-foreground" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-border/50 rounded-full flex items-center justify-center hover:border-primary/60 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
