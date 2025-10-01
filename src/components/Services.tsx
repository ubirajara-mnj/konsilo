import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Building2, 
  Blocks, 
  Code2, 
  Cloud, 
  Bot, 
  Brain, 
  Network 
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Cultura Ágil",
    description: "Transforme sua organização com metodologias ágeis modernas e práticas comprovadas"
  },
  {
    icon: Building2,
    title: "Enterprise Architecture",
    description: "Estruture e otimize sua arquitetura corporativa para máxima eficiência"
  },
  {
    icon: Blocks,
    title: "Arquitetura de Soluções",
    description: "Projete soluções escaláveis e robustas para seus desafios de negócio"
  },
  {
    icon: Code2,
    title: "Engenharia de Software",
    description: "Desenvolva software de qualidade com as melhores práticas de engenharia"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Domine as principais plataformas cloud e estratégias de migração"
  },
  {
    icon: Bot,
    title: "RPA",
    description: "Automatize processos e aumente a produtividade com Robotic Process Automation"
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Implemente soluções de IA e machine learning no seu negócio"
  },
  {
    icon: Network,
    title: "Agentes de IA",
    description: "Crie agentes inteligentes autônomos com as tecnologias mais recentes"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-accent/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Treinamentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capacitação especializada nas tecnologias mais demandadas do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
