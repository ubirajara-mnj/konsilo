import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoKonsilo from "@/assets/logo_konsilo.png";
import heroTeam from "@/assets/hero-team.jpg";

const Hero = () => {
  const whatsappNumber = "5521982837322";
  const whatsappMessage = encodeURIComponent("Tenho interesse nos seus treinamentos...");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="relative min-h-[90vh] py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroTeam} 
          alt="Equipe de TI feliz colaborando em um ambiente moderno" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img 
              src={logoKonsilo} 
              alt="Konsilo - Consultoria e Treinamento" 
              className="h-32 md:h-48 mx-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in-up">
            Soluções em Tecnologia da Informação
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl">
            Transforme sua equipe com treinamentos especializados em tecnologias emergentes e metodologias ágeis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça nossos treinamentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
