import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyKonsilo from "@/components/WhyKonsilo";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyKonsilo />
      <Clients />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
