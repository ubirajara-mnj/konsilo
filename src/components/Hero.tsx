import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoKonsilo from "@/assets/logo_konsilo.png";
import heroTeam from "@/assets/hero-team.jpg";

const Hero = () => {
  const whatsappNumber = "5521982837322";
  const whatsappMessage = encodeURIComponent("Tenho interesse nos seus treinamentos...");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="relative min-h-[90vh] py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8 animate-fade-in">
              <img 
                src={logoKonsilo} 
                alt="Konsilo - Consultoria e Treinamento" 
                className="h-32 md:h-48 mx-auto lg:mx-0 drop-shadow-2xl"
              />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in-up">
              Soluções em Tecnologia da Informação
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Transforme sua equipe com treinamentos especializados em tecnologias emergentes e metodologias ágeis
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
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

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroTeam} 
                alt="Equipe de TI feliz colaborando em um ambiente moderno" 
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
