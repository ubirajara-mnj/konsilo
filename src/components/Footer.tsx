import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import logoKonsilo from "@/assets/logo_konsilo.png";

const Footer = () => {
  const services = [
    { name: "Cultura Ágil", path: "/cultura-agil" },
    { name: "Enterprise Architecture", path: "/enterprise-architecture" },
    { name: "Arquitetura de Soluções", path: "/arquitetura-solucoes" },
    { name: "Engenharia de Software", path: "/engenharia-software" },
    { name: "Cloud Computing", path: "/cloud-computing" },
    { name: "RPA", path: "/rpa" },
    { name: "Inteligência Artificial", path: "/inteligencia-artificial" },
    { name: "Agentes de IA", path: "/agentes-ia" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "+55 (21) 98283-7322",
      href: "https://wa.me/5521982837322",
      label: "WhatsApp"
    },
    {
      icon: Mail,
      text: "contato@konsilo.com.br",
      href: "mailto:contato@konsilo.com.br",
      label: "Email"
    },
    {
      icon: MapPin,
      text: "Rio de Janeiro, RJ",
      href: null,
      label: "Localização"
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div className="space-y-4">
            <img 
              src={logoKonsilo} 
              alt="Konsilo" 
              className="h-14 opacity-90"
            />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Consultoria especializada em transformação digital, arquitetura empresarial e soluções de TI inovadoras.
            </p>
            <a 
              href="https://www.linkedin.com/company/konsilo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">Siga-nos no LinkedIn</span>
            </a>
          </div>

          {/* Serviços - Coluna 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços - Coluna 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4 invisible md:visible">Mais Serviços</h3>
            <ul className="space-y-2">
              {services.slice(4).map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-2 text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-2 text-secondary-foreground/70 text-sm">
                      <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Konsilo. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/politica-privacidade"
                className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <span className="text-secondary-foreground/30">•</span>
              <Link
                to="/"
                className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
