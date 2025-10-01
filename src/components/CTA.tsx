import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para capacitar sua equipe?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
            Entre em contato conosco e descubra como podemos ajudar sua organização a alcançar novos patamares
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar mensagem
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Agendar conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
