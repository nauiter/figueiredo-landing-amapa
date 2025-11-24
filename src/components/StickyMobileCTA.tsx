import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const StickyMobileCTA = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de falar com uma advogada.");
    window.open(`https://wa.me/5596981293353?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="md:hidden fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:scale-110 group"
      aria-label="Falar com Advogada no WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7" />
      <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Falar com Advogada
      </span>
    </button>
  );
};

export default StickyMobileCTA;
