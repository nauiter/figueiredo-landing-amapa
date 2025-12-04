import { useState } from "react";
import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5596981293353?text=Ol%C3%A1%2C+encontrei+seu+contato+atrav%C3%A9s+do+site.+Gostaria+de+falar+com+a+advogada+Daniele+Figueiredo.",
      "_blank"
    );
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded Tooltip */}
        {isExpanded && (
          <div className="animate-fade-in bg-white rounded-lg shadow-elegant p-4 max-w-[280px] border border-accent/20">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-semibold text-foreground text-sm">
                  Fale Conosco
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Tire suas dúvidas pelo WhatsApp
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full mt-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
              Iniciar Conversa
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          onMouseEnter={() => setIsExpanded(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          {/* Pulse Animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
          
          {/* Icon */}
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="relative h-8 w-8 text-white"
          />
        </button>
      </div>
    </>
  );
};

export default WhatsAppWidget;
