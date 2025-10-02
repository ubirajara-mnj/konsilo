import { Award, Users, Lightbulb, Target } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Expertise Comprovada",
    description: "Profissionais certificados com vasta experiência no mercado de tecnologia"
  },
  {
    icon: Users,
    title: "Abordagem Prática",
    description: "Treinamentos hands-on com casos reais e projetos aplicados"
  },
  {
    icon: Lightbulb,
    title: "Conteúdo Atualizado",
    description: "Material sempre alinhado com as últimas tendências e tecnologias"
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Metodologia orientada a entregar valor mensurável para sua organização"
  }
];

const WhyKonsilo = () => {
  return (
    <section id="por-que-konsilo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a Konsilo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de uma década transformando profissionais e organizações através da educação em tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-primary)]">
                <benefit.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKonsilo;
