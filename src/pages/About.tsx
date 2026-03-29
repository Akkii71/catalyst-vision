import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-24">
      <AboutSection />
      <FounderSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default About;
