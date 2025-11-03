import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, Target, BookOpen, Users, Award, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const InteligenciaArtificial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const whatsappNumber = "5521982837322";
  const whatsappMessage = encodeURIComponent("Tenho interesse no treinamento de Inteligência Artificial!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const objectives = [
    "Compreender e Explicar os princípios fundamentais da Inteligência Artificial, Machine Learning e Deep Learning",
    "Analisar e Selecionar os algoritmos de IA mais adequados para resolver problemas complexos do mundo real",
    "Desenvolver e Implementar modelos de Machine Learning e Deep Learning utilizando bibliotecas e frameworks modernos (Python, TensorFlow, PyTorch)",
    "Projetar e Construir soluções em Processamento de Linguagem Natural (NLP) e Visão Computacional",
    "Avaliar e Otimizar a performance de modelos de IA, lidando com desafios como viés, interpretabilidade e escalabilidade",
    "Aplicar os conhecimentos de IA em diversos domínios, desde a indústria até a pesquisa e o desenvolvimento de produtos inovadores",
    "Discutir e Refletir sobre as implicações éticas e sociais da Inteligência Artificial, promovendo um desenvolvimento responsável"
  ];

  const learnings = [
    "Os pilares matemáticos e estatísticos da IA de forma prática e aplicada",
    "Como construir e treinar modelos de Machine Learning para tarefas de classificação, regressão e clusterização",
    "A arquitetura e o funcionamento das Redes Neurais e o poder do Deep Learning",
    "Técnicas avançadas de Processamento de Linguagem Natural, incluindo modelos transformer (BERT, GPT)",
    "Fundamentos e aplicações de Visão Computacional para reconhecimento de imagens, detecção de objetos e segmentação",
    "Introdução ao Aprendizado por Reforço e IA Generativa",
    "Boas práticas de pré-processamento de dados, engenharia de features e avaliação de modelos",
    "Como usar as principais ferramentas e frameworks da indústria (Python, Scikit-learn, TensorFlow, Keras, PyTorch)",
    "Os desafios e as discussões sobre a ética, o viés e a responsabilidade no desenvolvimento e uso da IA"
  ];

  const modules = [
    {
      title: "Módulo 1: Fundamentos da Inteligência Artificial e Pré-requisitos",
      description: "Este módulo introduz o campo da Inteligência Artificial, sua história, definições, os diferentes tipos de IA e seu impacto atual e futuro. Serão revisados os conceitos essenciais de matemática e estatística que sustentam a maioria dos algoritmos de IA, além de preparar o ambiente de desenvolvimento.",
      topics: [
        "Definição e História da IA: Da Lógica Simbólica ao Machine Learning",
        "Tipos de IA: IA Fraca, IA Forte, Aprendizado Supervisionado, Não Supervisionado, por Reforço",
        "Revisão de Álgebra Linear, Cálculo Diferencial e Integral (aplicado à otimização)",
        "Probabilidade e Estatística para IA: Distribuições, Testes de Hipóteses, Regressão Linear",
        "Introdução à Linguagem Python para Ciência de Dados (NumPy, Pandas, Matplotlib)",
        "Ambientes de Desenvolvimento (Jupyter Notebooks, Google Colab)"
      ]
    },
    {
      title: "Módulo 2: Machine Learning Essencial: Algoritmos e Práticas",
      description: "Este módulo aprofunda nos principais algoritmos de Machine Learning, abordando a teoria e a aplicação prática para problemas de classificação, regressão e clusterização. Serão exploradas técnicas de pré-processamento de dados e avaliação de modelos para garantir a robustez e a interpretabilidade.",
      topics: [
        "Pipeline de Machine Learning: Coleta, Pré-processamento, Treinamento, Avaliação, Implantação",
        "Pré-processamento de Dados: Limpeza, Normalização, Padronização, Engenharia de Features",
        "Algoritmos de Classificação: Regressão Logística, SVM, Árvores de Decisão, Random Forest, XGBoost",
        "Algoritmos de Regressão: Regressão Linear Múltipla, Regressão Polinomial, SVR",
        "Algoritmos de Clusterização: K-Means, DBSCAN, Hierarchical Clustering",
        "Métricas de Avaliação para Classificação e Regressão (Acurácia, Precisão, Recall, F1-Score, MSE, R²)",
        "Seleção de Modelos e Validação Cruzada"
      ]
    },
    {
      title: "Módulo 3: Deep Learning: O Poder das Redes Neurais",
      description: "Este módulo desvenda o fascinante mundo do Deep Learning, explorando a arquitetura e o funcionamento das redes neurais profundas. Os alunos aprenderão a construir e treinar diferentes tipos de redes neurais para resolver problemas complexos em diversas áreas.",
      topics: [
        "O Perceptron e a Origem das Redes Neurais",
        "Redes Neurais Multicamadas (MLPs): Funções de Ativação, Backpropagation",
        "Otimizadores (SGD, Adam, RMSprop) e Regularização (Dropout, L1/L2)",
        "Introdução a Frameworks de Deep Learning (TensorFlow, Keras, PyTorch)",
        "Redes Neurais Convolucionais (CNNs): Arquiteturas (ResNet, VGG), Aplicações em Visão Computacional",
        "Redes Neurais Recorrentes (RNNs), LSTMs e GRUs: Aplicações em Séries Temporais e Sequências",
        "Transfer Learning e Fine-tuning de Modelos Pré-treinados"
      ]
    },
    {
      title: "Módulo 4: Processamento de Linguagem Natural (NLP)",
      description: "Dedicado ao NLP, este módulo cobre as técnicas para que as máquinas compreendam, interpretem e gerem linguagem humana. Da análise básica de texto aos modelos mais avançados de deep learning para NLP, os alunos estarão aptos a desenvolver aplicações inteligentes de linguagem.",
      topics: [
        "Fundamentos de NLP: Tokenização, Stemming, Lemmatization, Vetorização de Texto (TF-IDF, Bag-of-Words)",
        "Modelos de Linguagem e Embeddings de Palavras (Word2Vec, GloVe, FastText)",
        "Arquiteturas Transformer: Atenção, Encoder-Decoder",
        "Modelos Pré-treinados (BERT, GPT, T5) e Fine-tuning para tarefas específicas",
        "Aplicações de NLP: Análise de Sentimentos, Sumarização de Texto, Tradução Automática, Geração de Texto",
        "Introdução a Chatbots e Assistentes Virtuais"
      ]
    },
    {
      title: "Módulo 5: Visão Computacional",
      description: "Este módulo explora como as máquinas podem 'ver' e interpretar imagens e vídeos. Utilizando as poderosas CNNs, os alunos aprenderão a desenvolver sistemas para reconhecimento de objetos, detecção, segmentação e outras aplicações visuais que são a base de carros autônomos e sistemas de segurança.",
      topics: [
        "Introdução à Visão Computacional: Processamento Básico de Imagens",
        "Detecção de Bordas, Filtragem e Segmentação Clássica",
        "CNNs para Classificação de Imagens",
        "Detecção de Objetos: R-CNN, YOLO, SSD",
        "Segmentação Semântica e Instance Segmentation",
        "Reconhecimento Facial e Geração de Imagens (GANs básicas)",
        "Aplicações Avançadas: Visão para Robótica, Veículos Autônomos, Realidade Aumentada"
      ]
    },
    {
      title: "Módulo 6: Tópicos Avançados, Ética e Implantação de IA",
      description: "O módulo final aborda temas de fronteira em IA, incluindo Aprendizado por Reforço, Modelos Generativos avançados, além de focar nas preocupações éticas e sociais, e nas melhores práticas para a implantação e monitoramento de modelos em produção.",
      topics: [
        "Introdução ao Aprendizado por Reforço: Conceitos, Markov Decision Processes, Q-Learning",
        "Deep Reinforcement Learning: DQN, Policy Gradients",
        "IA Generativa e Modelos de Difusão (DALL-E, Midjourney, Stable Diffusion - teoria e conceitos)",
        "Ética em IA: Viés e Fairness, Transparência e Explicabilidade (XAI), Responsabilidade e Privacidade",
        "MLOps (Machine Learning Operations): Implantação, Monitoramento e Manutenção de Modelos",
        "IA na Nuvem (AWS, Azure, Google Cloud AI Services)",
        "Tendências Futuras em IA e Oportunidades de Carreira"
      ]
    }
  ];

  const targetAudience = [
    "Cientistas de Dados e Analistas: Que desejam aprofundar seus conhecimentos em IA e Deep Learning",
    "Desenvolvedores e Engenheiros de Software: Que buscam integrar soluções de IA em seus produtos e sistemas",
    "Pesquisadores: Que querem explorar as últimas fronteiras da Inteligência Artificial",
    "Líderes de Tecnologia e Gerentes de Produto: Que precisam compreender as capacidades e limitações da IA para tomar decisões estratégicas",
    "Estudantes de Pós-graduação: De áreas como Ciência da Computação, Engenharia, Estatística, interessados em especialização em IA",
    "Profissionais de Qualquer Área: Que desejam se requalificar ou impulsionar suas carreiras com uma das habilidades mais demandadas do século XXI"
  ];

  const differentials = [
    "Currículo Abrangente e Atualizado: Abordamos desde os fundamentos até as técnicas mais modernas de Deep Learning e IA Generativa",
    "Abordagem Prática e Hands-on: Mais de 60% do curso é focado em laboratórios, projetos e estudos de caso reais para aplicação imediata do conhecimento",
    "Ferramentas e Frameworks da Indústria: Domínio de Python, Scikit-learn, TensorFlow, Keras e PyTorch, as linguagens e bibliotecas mais usadas no mercado",
    "Corpo Docente Especializado: Professores com sólida experiência acadêmica e prática em projetos de IA de grande impacto",
    "Comunidade de Aprendizado: Acesso a uma rede de colegas e especialistas para troca de conhecimentos e oportunidades",
    "Discussão de Ética e Responsabilidade: Abordagem crítica sobre o desenvolvimento sustentável e ético da IA"
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
              <div className="flex items-center gap-4 mb-6">
                <Brain className="h-12 w-12 md:h-16 md:w-16" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Inteligência Artificial: Da Teoria à Aplicação Inovadora
                </h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Desvende o futuro com a Inteligência Artificial! Este curso de pós-graduação irá capacitá-lo a dominar os conceitos, algoritmos e ferramentas mais recentes em IA, transformando você em um profissional apto a criar soluções inovadoras e impactar o mundo com o poder da computação inteligente.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Transforme sua visão em realidade e seja um especialista em IA
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
                <p className="text-lg text-muted-foreground">Nossa jornada de aprendizado é estruturada em módulos que progridem do entendimento fundamental à aplicação de ponta</p>
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
              Prepare-se para ser um dos protagonistas da revolução da Inteligência Artificial!
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Embarque em uma jornada transformadora pelo universo da Inteligência Artificial e torne-se um agente de transformação
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Inscreva-se já!
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InteligenciaArtificial;
