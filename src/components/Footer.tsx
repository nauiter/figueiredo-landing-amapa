import symbol from "@/assets/symbol.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={symbol} 
                alt="Figueiredo Symbol"
                width="48"
                height="48"
                className="h-12 w-12"
              />
              <div className="text-primary-foreground/80">
                <p className="font-semibold">Advocacia Figueiredo</p>
                <p className="text-sm">Sociedade de Advogadas</p>
              </div>
            </div>
            
            <div className="text-center md:text-right text-primary-foreground/70 text-sm">
              <p>&copy; {new Date().getFullYear()} Advocacia Figueiredo. Todos os direitos reservados.</p>
              <p className="mt-1">Macapá, Amapá</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
