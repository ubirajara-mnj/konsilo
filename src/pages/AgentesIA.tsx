import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, Target, BookOpen, Users, Award, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AgentesIA = () => {
  const whatsappNumber = "5521982837322";
  const whatsappMessage = encodeURIComponent("Tenho interesse no treinamento de Agentes de IA!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const objectives = [
    "Compreender e Distinguir os diferentes tipos e arquiteturas de Agentes de IA, desde os reativos até os deliberativos e híbridos.",
    "Projetar e Modelar Agentes de IA capazes de resolver problemas complexos, utilizando técnicas de raciocínio lógico, planejamento e tomada de decisão.",
    "Desenvolver e Implementar Agentes de IA utilizando linguagens de programação e frameworks específicos, integrando-os com tecnologias como Large Language Models (LLMs).",
    "Criar e Gerenciar Sistemas Multiagentes, explorando conceitos de coordenação, negociação e cooperação entre agentes.",
    "Aplicar Agentes de IA em cenários do mundo real, como automação inteligente, robótica, finanças, saúde e experiência do cliente.",
    "Analisar e Avaliar as implicações éticas, sociais e de governança no desenvolvimento e uso de Agentes de IA, promovendo a construção de sistemas responsáveis.",
    "Explorar as tendências emergentes e o futuro dos Agentes de IA, como IA generativa e agentes autônomos em ambientes dinâmicos."
  ];

  const learnings = [
    "Os princípios fundamentais por trás do design e da operação de Agentes Inteligentes.",
    "Como construir Agentes Reativos, Deliberativos (com planejamento e raciocínio lógico) e Híbridos.",
    "A utilização de Large Language Models (LLMs) como componentes centrais para o raciocínio e a comunicação de agentes.",
    "Técnicas para criar Agentes capazes de aprender e se adaptar ao ambiente (Aprendizado por Reforço, Aprendizado Federado).",
    "Como projetar e implementar sistemas onde múltiplos agentes interagem para atingir objetivos complexos.",
    "As ferramentas, bibliotecas e frameworks mais recentes para o desenvolvimento de Agentes de IA (e.g., LangChain, AutoGen, AgentGPT).",
    "Casos de uso e aplicações de Agentes de IA em diversas indústrias, desde automação empresarial até interfaces conversacionais avançadas.",
    "As considerações cruciais sobre ética, segurança e interpretabilidade no desenvolvimento de Agentes de IA."
  ];

  const modules = [
    {
      title: "Módulo 1: Fundamentos de Agentes de IA e Arquiteturas Básicas",
      description: "Este módulo estabelece a base conceitual para o estudo dos Agentes de IA. Abordaremos a definição, a história, os componentes essenciais e as classificações dos agentes inteligentes. Serão exploradas as arquiteturas fundamentais, desde os agentes reativos simples até os agentes com raciocínio baseado em estado.",
      topics: [
        "Definição e História dos Agentes de IA: Da Lógica Simbólica aos Agentes Modernos",
        "Componentes de um Agente Inteligente: Percepção, Raciocínio, Ação, Ambiente",
        "Classificação de Agentes: Agentes Reativos Simples, Agentes Reativos Baseados em Modelo, Agentes Baseados em Objetivo, Agentes Baseados em Utilidade",
        "Representação de Conhecimento e Lógica para Agentes",
        "Introdução a Ambientes de Simulação para Agentes",
        "Programação em Python para Lógica de Agentes (Revisão e Aplicação)"
      ]
    },
    {
      title: "Módulo 2: Agentes Deliberativos e o Poder dos Large Language Models (LLMs)",
      description: "Foco nos agentes capazes de planejar e raciocinar sobre suas ações. Este módulo explora técnicas de planejamento clássicas e a integração revolucionária de Large Language Models (LLMs) para dotar agentes com capacidades avançadas de compreensão, geração de texto, raciocínio complexo e interação natural.",
      topics: [
        "Técnicas de Busca e Planejamento: Graph Search, A*, STRIPS, PDDL",
        "Introdução aos LLMs: Arquitetura, Treinamento e Capacidades",
        "LLMs como Módulos de Raciocínio para Agentes: Prompt Engineering, Fine-tuning para tarefas de Agente",
        "Técnicas de Cadeia de Pensamento (Chain-of-Thought) e Reflexão para Agentes LLM-based",
        "Memória de Agentes: Curto e Longo Prazo, Mecanismos de Recuperação",
        "Agentes Baseados em LLMs: Estruturas como ReAct, CoT-SC, Auto-GPT (princípios)"
      ]
    },
    {
      title: "Módulo 3: Desenvolvimento e Sistemas Multiagentes",
      description: "Este módulo mergulha na prática do desenvolvimento de agentes e sistemas multiagentes. Os alunos aprenderão a utilizar frameworks e bibliotecas modernas para construir e orquestrar múltiplos agentes que interagem para resolver problemas complexos, explorando conceitos de comunicação e cooperação.",
      topics: [
        "Frameworks para Desenvolvimento de Agentes: LangChain, AutoGen, CrewAI e outros",
        "Ferramentas para Agentes: Integração com APIs e Dados Externos",
        "Arquiteturas de Sistemas Multiagentes (MAS): Cooperação, Competição, Negociação",
        "Comunicação entre Agentes: Padrões de Mensagem, Linguagens de Comunicação de Agentes (ACLs)",
        "Coordenação e Colaboração em MAS: Leilões, Alocação de Tarefas",
        "Gerenciamento de Conflitos e Resolução de Problemas em Ambientes Multiagentes",
        "Laboratórios práticos de construção de Agentes e MAS com frameworks específicos"
      ]
    },
    {
      title: "Módulo 4: Aplicações Práticas e Casos de Uso de Agentes de IA",
      description: "Este módulo explora a aplicação de Agentes de IA em diversos domínios e indústrias. Analisaremos casos de uso reais e discutiremos como os agentes estão transformando automação empresarial, atendimento ao cliente, finanças, robótica e muito mais.",
      topics: [
        "Agentes em Automação de Processos de Negócio (RPA com IA)",
        "Agentes Conversacionais Avançados e Assistentes Virtuais (Customer Service, Suporte Técnico)",
        "Agentes de IA em Finanças: Trading Algorítmico, Detecção de Fraudes",
        "Agentes em Saúde: Diagnóstico Assistido, Gerenciamento de Pacientes, Descoberta de Medicamentos",
        "Robótica e Veículos Autônomos: Agentes Embarcados para Navegação e Tomada de Decisão",
        "Agentes de IA em Jogos e Ambientes Virtuais",
        "Agentes para Análise e Geração de Conteúdo (Agentes Criativos)",
        "Estudos de Caso e Projetos Aplicados"
      ]
    },
    {
      title: "Módulo 5: Ética, Governança e Futuro dos Agentes de IA",
      description: "O módulo final aborda as questões críticas relacionadas à ética, segurança e governança no desenvolvimento e implantação de Agentes de IA. Serão discutidas as implicações sociais e os desafios regulatórios, além de explorar as tendências emergentes e as direções futuras da pesquisa e aplicação de agentes inteligentes.",
      topics: [
        "Ética em Agentes de IA: Viés Algorítmico, Fairness, Transparência e Explicabilidade (XAI)",
        "Privacidade e Segurança de Dados em Sistemas de Agentes",
        "Responsabilidade e Autonomia de Agentes: Questões Legais e Morais",
        "Regulamentação de IA: Lei de IA da União Europeia e outras iniciativas globais",
        "Interpretabilidade e Monitoramento de Agentes em Produção",
        "Tendências Futuras: Agentes Autônomos em Ambientes Físicos, Agentes Auto-evolutivos, IA Geral",
        "O Impacto dos Agentes de IA no Mercado de Trabalho e na Sociedade"
      ]
    }
  ];

  const targetAudience = [
    "Desenvolvedores e Engenheiros de Software: Que desejam construir a próxima geração de aplicações inteligentes.",
    "Cientistas de Dados e Engenheiros de Machine Learning: Que buscam expandir suas habilidades para sistemas autônomos.",
    "Arquitetos de Soluções e Líderes de Tecnologia: Interessados em projetar e implementar estratégias de IA avançadas.",
    "Pesquisadores: Que querem explorar as fronteiras da Inteligência Artificial e sistemas autônomos.",
    "Empreendedores e Inovadores: Que buscam criar produtos e serviços disruptivos baseados em agentes inteligentes.",
    "Profissionais de Qualquer Área: Que desejam se qualificar em uma das tecnologias mais promissoras da atualidade e liderar a transformação digital."
  ];

  const differentials = [
    "Conteúdo de Ponta: Abrange as arquiteturas mais recentes de agentes, incluindo a profunda integração com Large Language Models (LLMs) e frameworks modernos.",
    "Abordagem Prática e Hands-on: Grande foco em laboratórios, projetos e desenvolvimento de agentes reais para aplicação imediata do conhecimento.",
    "Ferramentas e Frameworks da Indústria: Domínio de Python e as principais bibliotecas e plataformas de desenvolvimento de agentes (e.g., LangChain, AutoGen).",
    "Corpo Docente Especializado: Professores com vasta experiência acadêmica e prática na concepção e implantação de sistemas de Agentes de IA.",
    "Discussão Ética e Responsável: Abordagem crítica sobre as implicações e desafios do desenvolvimento de IA autônoma.",
    "Projetos Aplicados: Oportunidade de desenvolver um projeto final que simula um caso de uso real de agentes de IA."
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
                  Agentes de Inteligência Artificial
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Projetando e Construindo Sistemas Autônomos para o Futuro
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
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prepare-se para moldar o futuro da Inteligência Artificial! Este curso de pós-graduação oferece uma imersão completa no universo dos Agentes de IA, desde os fundamentos conceituais até o desenvolvimento prático de sistemas autônomos. Você aprenderá a projetar, construir e implantar agentes inteligentes capazes de interagir, raciocinar e tomar decisões em ambientes complexos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Objetivos Alcançados</h2>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">Ao final deste curso, você estará apto a:</p>
                  <ul className="space-y-4">
                    {objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
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
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <BookOpen className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">O que o aluno irá aprender</h2>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">Este programa abrangente cobrirá:</p>
                  <ul className="space-y-4">
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

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ementa Detalhada e Módulos do Curso</h2>
              <p className="text-muted-foreground mb-12">
                Nossa jornada de aprendizado está estruturada em módulos que progridem do entendimento conceitual à construção prática e à aplicação estratégica.
              </p>
              <div className="space-y-8">
                {modules.map((module, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <CardDescription className="text-base">{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold mb-3">Conteúdo Programático:</p>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
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
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Para Quem é Este Curso?</h2>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">Este curso é ideal para:</p>
                  <ul className="space-y-4">
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

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Diferenciais</h2>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {differentials.map((differential, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{differential}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Não fique para trás na revolução dos Agentes de IA
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Seja um dos construtores do futuro inteligente. Invista em sua carreira e torne-se um especialista em Agentes de Inteligência Artificial.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Inscreva-se agora
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgentesIA;
