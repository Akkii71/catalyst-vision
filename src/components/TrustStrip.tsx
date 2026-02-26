const brands = ["LUXETECH", "VANGUARD", "ELEVATE", "PRISMIQ", "NOVAFLOW", "ZENITHCO"];

const TrustStrip = () => {
  return (
    <section className="py-12 border-y border-border/30 overflow-hidden">
      <p className="text-center text-sm font-body text-muted-foreground tracking-[0.2em] uppercase mb-8">
        Trusted by emerging startups and creators worldwide
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left gap-16 w-max">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-muted-foreground/30 font-display text-2xl tracking-widest whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
