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
    <footer className="bg-[#0e0e0e] text-white text-center py-6 border-t border-white/[0.08]">
      <div className="container mx-auto px-4">
        <p className="text-[clamp(0.85rem,1vw,1rem)] leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <strong className="text-white font-semibold tracking-wide">
            Developer — Nauiter Master
          </strong>
          {" "}| Todos os direitos reservados
        </p>
        <span className="block mt-2 text-[0.85rem] text-white/70 italic">
          Sic Mundus Creatus Est
        </span>
      </div>
    </footer>
  );
};

export default Footer;
