import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyKonsilo from "@/components/WhyKonsilo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyKonsilo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
