import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoKonsilo from "@/assets/logo_konsilo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src={logoKonsilo} 
              alt="Konsilo - Consultoria e Treinamento" 
              className="h-32 md:h-40 mx-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:200ms] opacity-0">
            Soluções em Tecnologia da Informação
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms] opacity-0">
            Transforme sua equipe com treinamentos especializados em tecnologias emergentes e metodologias ágeis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:600ms] opacity-0">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8"
            >
              Conheça nossos treinamentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
