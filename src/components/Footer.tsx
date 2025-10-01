import logoKonsilo from "@/assets/logo_konsilo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoKonsilo} 
              alt="Konsilo" 
              className="h-16 mb-4 opacity-90"
            />
            <p className="text-secondary-foreground/80 text-center md:text-left">
              Soluções em Tecnologia da Informação
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-secondary-foreground/80 mb-2">
              © {new Date().getFullYear()} Konsilo. Todos os direitos reservados.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Consultoria e Treinamento em TI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
