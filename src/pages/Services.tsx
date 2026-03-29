import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-24">
      <ServicesSection />
      <ProcessSection />
      <Footer />
    </main>
  );
};

export default Services;
