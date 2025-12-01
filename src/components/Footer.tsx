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
      <div className="container mx-auto px-4">
        <p className="text-[clamp(0.85rem,1vw,1rem)] leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <strong className="text-white font-semibold tracking-wide">
            Developer — Nauiter Master
          </strong>
          {" "}| Todos os direitos reservados
          {" "}|{" "}
          <Link 
            to="/privacidade" 
            className="text-white/70 hover:text-accent transition-colors underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0e0e0e] rounded px-1"
            aria-label="Ler Política de Privacidade"
          >
            Política de Privacidade
          </Link>
          {" "}|{" "}
          <Link 
            to="/termos" 
            className="text-white/70 hover:text-accent transition-colors underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0e0e0e] rounded px-1"
            aria-label="Ler Termos de Uso"
          >
            Termos de Uso
          </Link>
        </p>
        <span className="block mt-2 text-[0.85rem] text-white/70 italic">
          Sic Mundus Creatus Est
        </span>
      </div>
    </footer>
  );
};

export default Footer;
