import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EngenhariaSoftware = () => {
  const whatsappNumber = "5521982837322";
  const whatsappMessage = encodeURIComponent("Tenho interesse no treinamento de Engenharia de Software!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const modules = [
    "SOLID Principles",
    "Design Patterns (GoF)",
    "Clean Code e Code Review",
    "Test-Driven Development (TDD)",
    "Refactoring e Legacy Code",
    "CI/CD e DevOps Practices",
    "Git Flow e Version Control",
    "Performance e Otimização"
  ];

  const benefits = [
    "Escreva código de qualidade profissional",
    "Reduza bugs e problemas em produção",
    "Acelere desenvolvimento com automação",
    "Melhore colaboração em equipe",
    "Domine boas práticas de mercado",
    "Aumente sua empregabilidade"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-primary py-20 text-primary-foreground">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Engenharia de Software
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Desenvolva software de qualidade com as melhores práticas de engenharia
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Quero me inscrever
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Conteúdo Programático</CardTitle>
                  <CardDescription>O que você vai aprender</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {modules.map((module, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Benefícios</CardTitle>
                  <CardDescription>Resultados que você pode esperar</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Torne-se um engenheiro de software de excelência
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aprenda as práticas que diferenciam profissionais seniores no mercado
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar com especialista
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EngenhariaSoftware;
