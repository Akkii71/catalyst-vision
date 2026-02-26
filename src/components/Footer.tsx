import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="font-display text-xl tracking-widest uppercase">Catalyst</span>
          <p className="font-body text-xs text-muted-foreground mt-2">Crafted by Catalyst</p>
        </div>

        <nav className="flex gap-8 font-body text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex gap-5">
          {[Instagram, Mail, MessageCircle].map((Icon, i) => (
            <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border/20 text-center">
        <p className="font-body text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Catalyst. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
