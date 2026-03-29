import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link to="/" className="font-display text-sm tracking-widest text-muted-foreground/50 uppercase">
          Catalyst
        </Link>
        <p className="font-body text-xs text-muted-foreground/30">
          © {new Date().getFullYear()} Catalyst. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
