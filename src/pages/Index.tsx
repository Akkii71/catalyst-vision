import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <TrustStrip />
      <Footer />
    </main>
  );
};

export default Index;
