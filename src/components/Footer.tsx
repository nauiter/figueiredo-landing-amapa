import symbol from "@/assets/symbol.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer role="contentinfo" aria-label="Informações do rodapé" className="bg-[#0e0e0e] text-white text-center py-6 border-t border-white/[0.08]">
      <div className="container mx-auto px-4 space-y-3">
        {/* Links Row */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[0.85rem] sm:text-[0.9rem]">
          <Link 
            to="/termos" 
            className="text-white/70 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0e0e0e] rounded px-1"
            aria-label="Ler Termos de Uso"
          >
            Termos de Uso
          </Link>
          <Link 
            to="/privacidade" 
            className="text-white/70 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0e0e0e] rounded px-1"
            aria-label="Ler Política de Privacidade"
          >
            Privacidade
          </Link>
          <button 
            onClick={() => {}}
            className="text-white/70 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0e0e0e] rounded px-1"
            aria-label="Configurações de Cookies"
          >
            Cookies
          </button>
        </nav>

        {/* Copyright Row */}
        <p className="text-[clamp(0.75rem,2.5vw,1rem)] leading-relaxed px-2">
          © {new Date().getFullYear()}{" "}
          <a 
            href="https://nauitermaster.com/pt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-semibold tracking-wide hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0e0e0e] rounded"
            aria-label="Visitar site do desenvolvedor Nauiter Master"
          >
            Developer - Nauiter Master
          </a>
          <span className="hidden sm:inline">{" "}|</span>
          <span className="block sm:inline"> Todos os direitos reservados</span>
        </p>

        {/* Tagline Row */}
        <span className="block text-[0.85rem] text-white/70 italic">
          Sic Mundus Creatus Est
        </span>
      </div>
    </footer>
  );
};

export default Footer;
