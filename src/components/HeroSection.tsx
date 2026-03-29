import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Social icons top-right */}
      <div className="absolute top-8 right-8 flex gap-5 z-10">
        {[
          { icon: Instagram, href: "#", label: "Instagram" },
          { icon: Mail, href: "#", label: "Email" },
          { icon: MessageCircle, href: "#", label: "Reddit" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Logo removed - using Navbar now */}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          From Vision to{" "}
          <span className="text-gradient-gold">Velocity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We craft premium brand experiences, AI-driven growth systems, and
          elegant digital products for startups, creators, and modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wide rounded-sm hover:gold-glow transition-all duration-300 hover:scale-105"
          >
            Start Your Growth
          </Link>
          <Link
            to="/work"
            className="px-8 py-4 border border-foreground/20 text-foreground font-body font-semibold tracking-wide rounded-sm hover:border-primary/60 transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
