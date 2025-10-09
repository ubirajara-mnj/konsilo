import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
import trainingClassroom from "@/assets/training-classroom.jpg";

const services = [
  {
    icon: Zap,
    title: "Cultura Ágil",
    description: "Transforme sua organização com metodologias ágeis modernas e práticas comprovadas",
    link: "/cultura-agil"
  },
  {
    icon: Building2,
    title: "Enterprise Architecture",
    description: "Estruture e otimize sua arquitetura corporativa para máxima eficiência",
    link: "/enterprise-architecture"
  },
  {
    icon: Blocks,
    title: "Arquitetura de Soluções",
    description: "Projete soluções escaláveis e robustas para seus desafios de negócio",
    link: "/arquitetura-solucoes"
  },
  {
    icon: Code2,
    title: "Engenharia de Software",
    description: "Desenvolva software de qualidade com as melhores práticas de engenharia",
    link: "/engenharia-software"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Domine as principais plataformas cloud e estratégias de migração",
    link: "/cloud-computing"
  },
  {
    icon: Bot,
    title: "RPA",
    description: "Automatize processos e aumente a produtividade com Robotic Process Automation",
    link: "/rpa"
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Implemente soluções de IA e machine learning no seu negócio",
    link: "/inteligencia-artificial"
  },
  {
    icon: Network,
    title: "Agentes de IA",
    description: "Crie agentes inteligentes autônomos com as tecnologias mais recentes",
    link: "/agentes-ia"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Image Section */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <img 
            src={trainingClassroom} 
            alt="Alunos em sala de aula de treinamento" 
            className="w-full h-[250px] md:h-[350px] object-cover"
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Treinamentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capacitação especializada nas tecnologias mais demandadas do mercado
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card h-full cursor-pointer"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
