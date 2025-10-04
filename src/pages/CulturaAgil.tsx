import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, Target, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CulturaAgil = () => {
  const whatsappNumber = "5521982837322";
  const whatsappMessage = encodeURIComponent("Tenho interesse no treinamento de Cultura Ágil!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const objectives = [
    "Compreender e Aplicar os fundamentos e valores da Cultura Ágil, promovendo uma mentalidade de adaptabilidade e aprendizado contínuo",
    "Dominar as práticas, os ritos e os artefatos do Scrum para gestão eficaz de projetos e desenvolvimento de produtos complexos",
    "Implementar os princípios do Kanban para otimização do fluxo de trabalho, redução de gargalos e melhoria contínua da entrega",
    "Desenvolver habilidades para liderar e facilitar a transformação ágil em equipes e organizações de diversos portes e segmentos",
    "Utilizar ferramentas e métricas ágeis para monitorar, analisar e melhorar o desempenho, garantindo a sustentabilidade das práticas ágeis"
  ];

  const learnings = [
    "A mentalidade ágil, seus pilares e como aplicá-la no dia a dia",
    "Como planejar, executar, revisar e adaptar projetos com o framework Scrum",
    "A visualização, gerenciamento e otimização do fluxo de trabalho com o sistema Kanban",
    "Técnicas avançadas de facilitação, colaboração e construção de equipes auto-organizadas",
    "Estratégias para escalar a agilidade em grandes organizações e promover a mudança cultural de forma sustentável",
    "As principais métricas de desempenho e indicadores de sucesso em contextos ágeis (Lead Time, Cycle Time, Velocity, Burndown, etc.)",
    "A integração da Cultura Ágil com práticas de DevOps e Design Thinking"
  ];

  const modules = [
    {
      title: "Módulo 1: Fundamentos da Cultura Ágil e Mentalidade",
      description: "Este módulo estabelece a base para a compreensão da filosofia Ágil, explorando seus valores, princípios e o Manifesto Ágil.",
      topics: [
        "Introdução à Transformação Digital e a Necessidade da Agilidade",
        "Manifesto Ágil: Valores e Princípios",
        "Cultura Organizacional e o Mindset Ágil",
        "Diferenças entre Abordagens Tradicionais e Ágeis",
        "Design Thinking e sua Relação com a Agilidade",
        "O Conceito de Lean e sua Influência na Agilidade"
      ]
    },
    {
      title: "Módulo 2: Scrum: Gestão de Projetos de Alta Performance",
      description: "Mergulhe a fundo no Scrum, a estrutura ágil mais popular para desenvolver, entregar e sustentar produtos complexos.",
      topics: [
        "Visão Geral do Framework Scrum: Estrutura e Propósito",
        "Os Três Pilares do Scrum: Transparência, Inspeção e Adaptação",
        "Papéis no Scrum: Product Owner, Scrum Master e Time de Desenvolvimento",
        "Eventos do Scrum: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective",
        "Artefatos do Scrum: Product Backlog, Sprint Backlog, Incremento",
        "Estimativas e Planejamento no Scrum (User Stories, Story Points, Planning Poker)",
        "Métricas e Indicadores de Progresso no Scrum (Burndown Charts, Velocity)"
      ]
    },
    {
      title: "Módulo 3: Kanban: Otimização do Fluxo de Trabalho e Eficiência",
      description: "Este módulo foca no Kanban como uma abordagem para gerenciar e melhorar o fluxo de trabalho de forma visual e contínua.",
      topics: [
        "Princípios e Práticas do Kanban",
        "Visualização do Fluxo de Trabalho (Kanban Board): Design e Customização",
        "Limites de Trabalho em Progresso (WIP Limits): Entendimento e Aplicação",
        "Gestão de Fluxo e Métricas do Kanban (Lead Time, Cycle Time, Throughput, CFD)",
        "Tipos de Cartões e Políticas de Fluxo Explícitas",
        "Kanban para Serviços e Operações: Casos de Uso e Adaptações",
        "Cadence e Feedback Loops no Kanban"
      ]
    },
    {
      title: "Módulo 4: Ferramentas, Escalabilidade e Práticas Avançadas",
      description: "Explore as ferramentas que potencializam a agilidade e as abordagens para escalar as metodologias ágeis em organizações maiores.",
      topics: [
        "Visão Geral das Ferramentas para Gestão Ágil (Jira, Trello, Azure DevOps, Asana, Monday.com, etc.)",
        "Estratégias de Escalabilidade Ágil (SAFe, LeSS, DaD, Scrum@Scale): Modelos e Comparativos",
        "Integração Contínua e Entrega Contínua (CI/CD): Conceitos e Benefícios",
        "DevOps e a Cultura Ágil: Sinergias e Implementação",
        "Gestão de Portfólio Ágil: Alinhamento Estratégico e Priorização",
        "Gestão de Riscos e Qualidade em Contextos Ágeis"
      ]
    },
    {
      title: "Módulo 5: Liderança Ágil, Transformação e Sustentabilidade",
      description: "O último módulo aborda o papel crucial da liderança na transformação ágil e como sustentar a cultura ágil a longo prazo.",
      topics: [
        "O Papel da Liderança na Transformação Ágil: Coaching, Mentoring e Facilitação",
        "Gestão da Mudança e Resistência: Estratégias para Superar Obstáculos",
        "Construindo Equipes Auto-organizadas e de Alta Performance: Engajamento e Empoderamento",
        "Cultura de Feedback e Melhoria Contínua: O Ciclo PDCA Ágil",
        "Agilidade em Escala e Governança: Modelos de Sucesso e Desafios Comuns",
        "Ética e Responsabilidade na Aplicação de Metodologias Ágeis",
        "Casos de Sucesso e Lições Aprendidas na Jornada Ágil"
      ]
    }
  ];

  const targetAudience = [
    "Profissionais de Gestão de Projetos: Gerentes de Projeto, Product Owners, Scrum Masters, Coordenadores",
    "Líderes de Equipe e Gestores: Que buscam otimizar o desempenho e a inovação em seus times",
    "Desenvolvedores e Analistas de Sistemas: Que desejam entender o contexto ágil de desenvolvimento",
    "Empreendedores e Inovadores: Que procuram métodos para acelerar o desenvolvimento de produtos e serviços",
    "Consultores e Coaches: Que querem aprofundar e certificar seus conhecimentos em agilidade",
    "Qualquer profissional que aspira a ser um agente de mudança e liderar a transformação cultural em sua organização"
  ];

  const differentials = [
    "Abordagem Prática e Hands-on: Foco em estudos de caso reais, simulações e workshops interativos que permitem a aplicação imediata do conhecimento",
    "Corpo Docente Especializado: Professores com vasta experiência de mercado, certificações reconhecidas e atuação em projetos de transformação ágil",
    "Conteúdo Atualizado: Currículo alinhado com as últimas tendências e melhores práticas do mercado global de agilidade",
    "Networking Qualificado: Oportunidade de construir uma rede de contatos valiosa com outros profissionais da área"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20 text-primary-foreground">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cultura Ágil: Scrum e Kanban para a Transformação Digital
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Desvende os segredos da Cultura Ágil e torne-se um agente de transformação em sua organização. Com este curso de pós-graduação, você dominará as metodologias Scrum e Kanban, impulsionando a inovação, a eficiência e a entrega de valor em um mundo em constante mudança.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Inscreva-se agora e seja um líder na Cultura Ágil!
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Objetivos Alcançados</h2>
              <p className="text-lg text-muted-foreground">Ao final deste curso, você estará apto a:</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que o aluno irá aprender</h2>
              <p className="text-lg text-muted-foreground">Este programa abrangente cobrirá:</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {learnings.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Modules */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ementa Detalhada e Módulos do Curso</h2>
                <p className="text-lg text-muted-foreground">Nossa jornada de aprendizado está estruturada em módulos que progridem do entendimento fundamental à aplicação avançada e estratégica</p>
              </div>
              <div className="space-y-6">
                {modules.map((module, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="text-xl md:text-2xl">{module.title}</CardTitle>
                      <CardDescription className="text-base">{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">Conteúdo Programático:</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Para Quem é Este Curso?</h2>
              <p className="text-lg text-muted-foreground">Este curso é ideal para:</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Diferenciais</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {differentials.map((differential, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{differential}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme sua carreira e impulsione sua organização para o futuro
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Não perca a oportunidade de liderar a Cultura Ágil e ser o motor da inovação
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Inscreva-se agora e seja um líder na Cultura Ágil!
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CulturaAgil;
