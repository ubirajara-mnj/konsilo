import { useState } from "react";
import { Helmet } from "react-helmet";
import { Shield, Trash2, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const deleteRequestSchema = z.object({
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
});

const PoliticaPrivacidade = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = deleteRequestSchema.parse({ email });
      setIsSubmitting(true);

      // Simular envio - em produção, isso enviaria para um backend
      await new Promise(resolve => setTimeout(resolve, 1500));

      const whatsappMessage = encodeURIComponent(
        `Olá! Solicito a exclusão de todos os meus dados pessoais conforme LGPD.\n\nEmail: ${validated.email}`
      );
      const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;
      
      toast({
        title: "Solicitação registrada",
        description: "Você será direcionado ao WhatsApp para confirmar sua solicitação.",
      });

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Política de Privacidade - LGPD | Konsilo</title>
        <meta name="description" content="Política de privacidade da Konsilo em conformidade com a LGPD. Saiba como tratamos seus dados pessoais e como exercer seus direitos." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
              <p className="text-muted-foreground text-lg">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>

            {/* Conteúdo da Política */}
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground">
                  A Konsilo está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários, clientes e parceiros. 
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em 
                  conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Dados Coletados</h2>
                <p className="text-muted-foreground mb-3">Coletamos os seguintes tipos de dados pessoais:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Dados de Identificação:</strong> nome completo, CPF, RG, data de nascimento</li>
                  <li><strong>Dados de Contato:</strong> endereço de e-mail, telefone, endereço físico</li>
                  <li><strong>Dados Profissionais:</strong> empresa, cargo, área de atuação</li>
                  <li><strong>Dados de Navegação:</strong> endereço IP, cookies, logs de acesso, comportamento de navegação</li>
                  <li><strong>Dados de Uso:</strong> informações sobre como você utiliza nossos serviços e plataformas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Finalidade do Tratamento</h2>
                <p className="text-muted-foreground mb-3">Utilizamos seus dados pessoais para:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Prestação de serviços de consultoria e treinamento</li>
                  <li>Comunicação sobre nossos produtos, serviços e eventos</li>
                  <li>Análise e melhoria de nossos serviços</li>
                  <li>Cumprimento de obrigações legais e regulatórias</li>
                  <li>Exercício regular de direitos em processos judiciais, administrativos ou arbitrais</li>
                  <li>Proteção ao crédito e prevenção à fraude</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Base Legal</h2>
                <p className="text-muted-foreground">
                  O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Consentimento do titular</li>
                  <li>Execução de contrato ou procedimentos preliminares</li>
                  <li>Cumprimento de obrigação legal ou regulatória</li>
                  <li>Exercício regular de direitos</li>
                  <li>Legítimo interesse da Konsilo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground">
                  Seus dados pessoais podem ser compartilhados com:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Prestadores de serviços essenciais à operação da Konsilo (fornecedores de tecnologia, hospedagem)</li>
                  <li>Autoridades judiciais, administrativas ou governamentais, quando exigido por lei</li>
                  <li>Parceiros comerciais, mediante seu consentimento expresso</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  Todos os terceiros que têm acesso aos seus dados são obrigados a protegê-los adequadamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos (LGPD)</h2>
                <p className="text-muted-foreground mb-3">
                  Como titular de dados pessoais, você possui os seguintes direitos garantidos pela LGPD:
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: CheckCircle2, text: "Confirmação da existência de tratamento de dados" },
                    { icon: CheckCircle2, text: "Acesso aos seus dados pessoais" },
                    { icon: CheckCircle2, text: "Correção de dados incompletos, inexatos ou desatualizados" },
                    { icon: CheckCircle2, text: "Anonimização, bloqueio ou eliminação de dados desnecessários" },
                    { icon: CheckCircle2, text: "Portabilidade dos dados a outro fornecedor" },
                    { icon: CheckCircle2, text: "Eliminação dos dados tratados com seu consentimento" },
                    { icon: CheckCircle2, text: "Informação sobre compartilhamento de dados" },
                    { icon: CheckCircle2, text: "Revogação do consentimento" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Segurança dos Dados</h2>
                <p className="text-muted-foreground">
                  A Konsilo adota medidas técnicas e organizacionais de segurança aptas a proteger seus dados pessoais contra 
                  acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou 
                  qualquer forma de tratamento inadequado. Utilizamos criptografia, controles de acesso, monitoramento contínuo 
                  e outras práticas de mercado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Retenção de Dados</h2>
                <p className="text-muted-foreground">
                  Seus dados pessoais serão retidos pelo tempo necessário para cumprir as finalidades para as quais foram coletados, 
                  incluindo requisitos legais, contábeis ou de relatórios. Após esse período, os dados serão eliminados de forma segura.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Cookies</h2>
                <p className="text-muted-foreground">
                  Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, analisar o tráfego e 
                  personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Alterações na Política</h2>
                <p className="text-muted-foreground">
                  Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos você sobre alterações significativas 
                  através de e-mail ou aviso em nosso site. Recomendamos revisar esta política regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contato</h2>
                <p className="text-muted-foreground">
                  Para exercer seus direitos, esclarecer dúvidas ou enviar solicitações relacionadas à proteção de dados, 
                  entre em contato conosco:
                </p>
                <div className="mt-3 text-muted-foreground">
                  <p><strong>Encarregado de Dados (DPO):</strong> Konsilo Consultoria</p>
                  <p><strong>E-mail:</strong> privacidade@konsilo.com.br</p>
                  <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
                </div>
              </section>
            </div>

            {/* Formulário de Exclusão de Dados */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-destructive" />
                  Solicitação de Exclusão de Dados
                </CardTitle>
                <CardDescription>
                  Conforme previsto pela LGPD, você tem o direito de solicitar a exclusão de todos os seus dados pessoais 
                  armazenados em nossos sistemas. Preencha o formulário abaixo para iniciar o processo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Seu E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Enviaremos uma confirmação para este e-mail antes de processar a exclusão.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground">
                    <p className="font-medium mb-2">⚠️ Atenção:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>A exclusão dos dados é permanente e irreversível</li>
                      <li>Você perderá acesso a todos os serviços associados à sua conta</li>
                      <li>O processo pode levar até 30 dias úteis</li>
                      <li>Dados necessários por obrigação legal serão mantidos pelo período exigido</li>
                    </ul>
                  </div>

                  <Button 
                    type="submit" 
                    variant="destructive" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processando..." : "Solicitar Exclusão de Dados"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
