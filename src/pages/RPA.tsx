import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, Target, BookOpen, Users, Award, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const RPA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const whatsappNumber = "5521982837322";
  const whatsappMessage = encodeURIComponent("Tenho interesse no treinamento de RPA!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const objectives = [
    "Compreender e Articular os fundamentos, benefícios e o potencial estratégico da Automação Robótica de Processos (RPA) para o negócio.",
    "Identificar e Priorizar processos de negócios adequados para automação, calculando o retorno sobre o investimento (ROI).",
    "Desenvolver e Implementar robôs de software utilizando plataformas líderes de mercado (e.g., UiPath), cobrindo desde tarefas simples até automações complexas.",
    "Integrar a RPA com outras tecnologias de Inteligência Artificial (IA), como OCR e NLP, para criar soluções de Automação Inteligente (Intelligent Automation).",
    "Estabelecer e Gerenciar um Centro de Excelência (CoE) de RPA, garantindo a governança, escalabilidade e sustentabilidade das iniciativas de automação.",
    "Avaliar e Monitorar o desempenho dos robôs em produção, garantindo a resiliência e a melhoria contínua dos processos automatizados.",
    "Liderar projetos de RPA, desde a concepção até a implantação, garantindo a entrega de valor e a adesão da equipe."
  ];

  const learnings = [
    "A filosofia e os princípios da Automação Robótica de Processos (RPA) e seu papel na transformação digital.",
    "Como identificar, analisar e modelar processos candidatos à automação.",
    "As principais ferramentas e plataformas de RPA do mercado, com foco prático em uma delas (e.g., UiPath).",
    "Técnicas de desenvolvimento de bots, incluindo manipulação de dados, automação de aplicações (desktop e web), tratamento de exceções e uso de APIs.",
    "A integração da RPA com OCR, Process Mining, Machine Learning e Processamento de Linguagem Natural para automação de ponta a ponta.",
    "Estratégias para gerenciamento de projetos de RPA, incluindo governança, segurança, auditoria e melhores práticas.",
    "Como construir um Centro de Excelência (CoE) de RPA e escalar a automação em toda a empresa.",
    "Métodos para medir o ROI e o impacto da RPA nas operações e na força de trabalho."
  ];

  const modules = [
    {
      title: "Módulo 1: Fundamentos de RPA e Estratégia de Automação",
      description: "Este módulo introduz a Automação Robótica de Processos (RPA) como um pilar da transformação digital. Abordaremos os conceitos fundamentais, os benefícios estratégicos e as aplicações em diversas indústrias. O foco será em como identificar e qualificar processos de negócios para automação.",
      topics: [
        "Introdução à RPA: Definição, História, Evolução e Tipos de Automação",
        "RPA e a Indústria 4.0: Contexto na Transformação Digital",
        "Benefícios da RPA: Redução de Custos, Aumento de Eficiência, Melhoria da Qualidade, Conformidade",
        "Identificação de Processos Candidatos à Automação: Critérios de Seleção, Análise de Viabilidade",
        "Modelagem e Documentação de Processos (BPMN para RPA)",
        "Cálculo de ROI e Justificativa de Negócio para Projetos de RPA",
        "Diferenças entre RPA, IPA (Intelligent Process Automation) e Hiperautomação"
      ]
    },
    {
      title: "Módulo 2: Ferramentas de RPA e Introdução ao Desenvolvimento de Bots",
      description: "Este módulo apresenta as principais plataformas de RPA do mercado, com uma visão geral de suas capacidades e arquiteturas. Será dada uma introdução prática ao ambiente de desenvolvimento de uma ferramenta líder (e.g., UiPath Studio), cobrindo a interface, os componentes básicos e a lógica de construção de fluxos de trabalho.",
      topics: [
        "Panorama das Plataformas RPA (UiPath, Automation Anywhere, Blue Prism, Power Automate)",
        "Arquitetura de Soluções RPA: Studio, Orchestrator, Robots (Attended vs. Unattended)",
        "Introdução ao UiPath Studio: Interface, Painéis, Atividades, Variáveis e Argumentos",
        "Construção de Fluxos de Trabalho Simples: Sequências, Fluxogramas e Máquinas de Estado",
        "Gravação de Ações (Recording) em Aplicações Desktop e Web",
        "Manipulação Básica de Dados: Strings, Números, Datatables"
      ]
    },
    {
      title: "Módulo 3: Desenvolvimento Avançado de Bots e Tratamento de Exceções",
      description: "Neste módulo, os alunos aprofundarão suas habilidades em desenvolvimento de bots. Serão abordadas técnicas avançadas de automação de aplicações (web, desktop e terminais), manipulação de elementos de interface, e, crucialmente, o tratamento robusto de erros e exceções para criar robôs resilientes.",
      topics: [
        "Seletores Avançados: Tipos de Seletores, Dynamic Selectors, UI Explorer",
        "Automação de Aplicações Web: Navegadores, Elementos HTML, Extração de Dados",
        "Automação de Aplicações Desktop: Interação com Elementos de UI, Atalhos de Teclado",
        "Automação de Terminais e Mainframes",
        "Tratamento de Exceções: Try-Catch-Finally, Global Exception Handler",
        "Estruturas de Controle: Loops (For Each, While), Decisões (If/Else, Switch)",
        "Automação de E-mails e Planilhas Excel",
        "Best Practices em Desenvolvimento de Bots: Reusabilidade de Código, Nomenclatura, Modularização"
      ]
    },
    {
      title: "Módulo 4: Automação Inteligente (IPA) e Integração com IA",
      description: "Este módulo explora a evolução da RPA para a Automação Inteligente, integrando capacidades de Inteligência Artificial para lidar com dados não estruturados e decisões complexas. Os alunos aprenderão a usar OCR, NLP e Machine Learning para estender as capacidades dos robôs.",
      topics: [
        "Introdução à Automação Inteligente (IPA): RPA + IA",
        "Reconhecimento Óptico de Caracteres (OCR): Tipos de OCR, Motores, Extração de Dados de Documentos",
        "Processamento de Linguagem Natural (NLP) para Análise de Texto e Classificação",
        "Integração de Machine Learning: Modelos Preditivos para Tomada de Decisão em Bots",
        "Process Mining e Task Mining: Descoberta e Otimização de Processos Automatizáveis",
        "Automação com APIs: Consumo de Web Services e Integração com Outros Sistemas",
        "Case Studies de IPA: Processamento de Faturas, Onboarding de Clientes, Análise de Contratos"
      ]
    },
    {
      title: "Módulo 5: Governança, Gestão e Escalabilidade de RPA",
      description: "Foco na gestão estratégica e operacional de um programa de RPA. Este módulo aborda como estabelecer um Centro de Excelência (CoE), garantir a governança, segurança, monitoramento e escalabilidade das soluções de automação em nível empresarial.",
      topics: [
        "Criação e Operação de um Centro de Excelência (CoE) de RPA: Estrutura, Papéis e Responsabilidades",
        "Governança de RPA: Políticas, Padrões, Auditoria e Conformidade",
        "Segurança em RPA: Gerenciamento de Credenciais, Acesso, Logs e Dados Sensíveis",
        "Implantação e Monitoramento de Robôs: Orquestrador, Painéis de Controle (Dashboards), Alertas",
        "Gerenciamento de Ciclo de Vida de Bots (Bot Lifecycle Management)",
        "Estratégias de Escalabilidade de RPA: Da Prova de Conceito à Automação em Escala",
        "Otimização e Melhoria Contínua de Processos Automatizados",
        "Gerenciamento da Mudança e Impacto Humano da Automação"
      ]
    },
    {
      title: "Módulo 6: Projeto Aplicado e Tópicos Avançados em RPA",
      description: "O módulo final é dedicado a um projeto prático onde os alunos aplicarão todos os conhecimentos adquiridos para desenvolver uma solução de RPA completa. Além disso, serão explorados tópicos avançados e tendências futuras, preparando os alunos para os desafios e inovações do mercado.",
      topics: [
        "Desenvolvimento de um Projeto Final Integrador (POC completa ou solução de negócio)",
        "Revisão de Código e Boas Práticas de Desenvolvimento Colaborativo",
        "Testes de Bots e Estratégias de Qualidade em RPA",
        "Resolução de Desafios Comuns na Implementação de RPA",
        "Tendências Futuras em RPA: Automação Preditiva, IA Generativa em Bots",
        "Ética em Automação: Responsabilidade, Viés e Impacto Social",
        "Preparação para Certificações de RPA (Ex: UiPath RPA Developer Advanced)",
        "Apresentação e Discussão dos Projetos Finais"
      ]
    }
  ];

  const targetAudience = [
    "Analistas de Negócios e Processos: Que buscam otimizar e automatizar operações.",
    "Gerentes de Projetos e Líderes de Equipe: Que desejam implementar soluções de automação em suas áreas.",
    "Desenvolvedores e Profissionais de TI: Que querem se especializar em uma tecnologia de alto impacto e demanda.",
    "Cientistas de Dados e Especialistas em IA: Que desejam integrar suas habilidades com a automação de processos.",
    "Consultores de Transformação Digital: Que precisam dominar a RPA para oferecer soluções inovadoras a seus clientes.",
    "Profissionais de Qualquer Área: Que buscam impulsionar a eficiência, reduzir custos e criar valor através da automação."
  ];

  const differentials = [
    "Foco Prático e Hands-on: Grande parte do curso é dedicada ao desenvolvimento de robôs e projetos reais, garantindo a aplicação imediata do conhecimento.",
    "Ferramentas Líderes de Mercado: Aprendizado e prática com plataformas de RPA de ponta, como UiPath, altamente demandadas pelo mercado.",
    "Corpo Docente Especializado: Professores com sólida experiência em projetos de RPA e implementação em grandes empresas.",
    "Integração com IA: Abordagem completa da Automação Inteligente, preparando o aluno para os desafios mais complexos.",
    "Visão Estratégica e de Governança: Além da parte técnica, o curso capacita na gestão e escalabilidade de programas de RPA.",
    "Projeto Final Integrador: Oportunidade de desenvolver uma solução completa, construindo um portfólio valioso para o mercado."
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
              <div className="flex items-center gap-4 mb-6">
                <Bot className="h-16 w-16" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Robotic Process Automation (RPA)
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Implementação e Estratégia de Automação Inteligente
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Como especialista em Robotic Process Automation (RPA), é com grande entusiasmo que apresento um curso de pós-graduação desenhado para capacitá-los a dominar uma das tecnologias mais disruptivas do mundo corporativo. Em um cenário onde a otimização de processos e a busca por maior produtividade são imperativos, a Automação Robótica de Processos (RPA) emerge como a chave para desbloquear o potencial máximo de suas operações e liberar o talento humano para tarefas de maior valor.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Este curso foi meticulosamente estruturado para profissionais que buscam não apenas entender a RPA, mas implementá-la estrategicamente, construindo e gerenciando robôs que transformarão a forma como o trabalho é feito. Preparem-se para liderar a revolução da automação inteligente em suas organizações.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Objetivos Alcançados</h2>
              <p className="text-lg text-muted-foreground">
                Ao final deste curso, você estará apto a:
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que o aluno irá aprender</h2>
              <p className="text-lg text-muted-foreground">
                Este programa abrangente cobrirá:
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {learnings.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ementa Detalhada e Módulos do Curso</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nossa jornada de aprendizado está estruturada em módulos que progridem do entendimento estratégico à implementação técnica e à gestão de longo prazo.
                </p>
              </div>
              <div className="space-y-6">
                {modules.map((module, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <CardDescription className="text-base">{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground">Conteúdo Programático:</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{topic}</span>
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Para Quem é Este Curso?</h2>
              <p className="text-lg text-muted-foreground">
                Este curso é ideal para:
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{audience}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Diferenciais</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {differentials.map((differential, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{differential}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Não fique para trás na era da automação
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Seja o arquiteto da próxima geração de eficiência em sua organização. Invista em seu futuro e torne-se um especialista em Automação Robótica de Processos.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Inscreva-se já
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RPA;
