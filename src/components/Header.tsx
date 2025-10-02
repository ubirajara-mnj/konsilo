import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_konsilo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "5521982837322";
  const whatsappMessage = encodeURIComponent("Tenho interesse nos seus treinamentos...");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Konsilo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Treinamentos
            </button>
            <button
              onClick={() => scrollToSection('por-que-konsilo')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Por que Konsilo
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Treinamentos
            </button>
            <button
              onClick={() => scrollToSection('por-que-konsilo')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Por que Konsilo
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Contato
            </button>
            <div className="px-4">
              <Button asChild className="w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
