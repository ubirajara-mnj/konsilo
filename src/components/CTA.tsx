import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import teamSuccess from "@/assets/team-success.jpg";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Pronto para capacitar sua equipe?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-10">
              Entre em contato conosco e descubra como podemos ajudar sua organização a alcançar novos patamares
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar mensagem
              </Button>
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 border-2 border-secondary"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="mr-2 h-5 w-5" />
                Agendar conversa
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamSuccess} 
                alt="Equipe celebrando sucesso no trabalho" 
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
