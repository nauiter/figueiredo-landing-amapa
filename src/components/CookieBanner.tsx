import { useState, useEffect } from "react";
import { X, Cookie, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    
    // Enable analytics or other cookie-dependent features here
    console.log("Cookies aceitos - analytics podem ser habilitados");
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    
    // Disable non-essential cookies
    console.log("Cookies rejeitados - apenas essenciais ativos");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-slide-up">
      <div className="bg-black/95 backdrop-blur-lg border-t border-accent/20 shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Content */}
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0 p-3 bg-accent/10 rounded-full">
                <Cookie className="h-6 w-6 text-accent" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Privacidade e Cookies
                  </h3>
                  <Shield className="h-4 w-4 text-accent" />
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed max-w-3xl">
                  Utilizamos cookies essenciais para garantir o funcionamento do site e cookies analíticos 
                  para melhorar sua experiência. Ao aceitar, você concorda com nossa{" "}
                  <Link 
                    to="/privacidade" 
                    className="text-accent hover:underline font-semibold"
                  >
                    Política de Privacidade
                  </Link>
                  {" "}em conformidade com a LGPD.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Button
                onClick={handleReject}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Rejeitar
              </Button>
              
              <Button
                onClick={handleAccept}
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-semibold shadow-rose-glow"
                size="lg"
              >
                Aceitar Cookies
              </Button>
              
              <button
                onClick={handleReject}
                className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
