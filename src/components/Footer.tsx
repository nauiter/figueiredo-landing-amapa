import symbol from "@/assets/symbol.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-primary border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <img 
              src={symbol} 
              alt="Advocacia Figueiredo - Sociedade de Advogadas"
              width="48"
              height="48"
              className="h-12 w-12 object-contain"
            />
            <div className="text-primary-foreground/80 text-center">
              <p className="font-semibold">Advocacia Figueiredo</p>
              <p className="text-sm">Sociedade de Advogadas</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-2 text-primary-foreground/70 text-sm">
            <button 
              onClick={scrollToTop}
              className="hover:text-accent transition-colors"
            >
              Início
            </button>
            <span>|</span>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="hover:text-accent transition-colors"
            >
              Especialidades
            </button>
            <span>|</span>
            <button 
              onClick={() => scrollToSection('contato')}
              className="hover:text-accent transition-colors"
            >
              Contato
            </button>
            <span>|</span>
            <a 
              href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+encontrei+seu+contato+atrav%C3%A9s+do+Google.+Estou+falando+com+a+advogada+Daniele+Figueiredo%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              WhatsApp
            </a>
          </nav>
          
          <div className="text-center text-primary-foreground/70 text-sm space-y-2">
            <p>&copy; {new Date().getFullYear()} Advocacia Figueiredo. Todos os direitos reservados.</p>
            <p>Macapá, Amapá</p>
            <p className="text-primary-foreground/60 flex items-center justify-center gap-1">
              Desenvolvido com <span className="text-red-400">❤️</span> pela equipe Figueiredo Advocacia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
