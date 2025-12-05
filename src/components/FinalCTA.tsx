import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Shield, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Icon - Lucide line style, stroke-width: 1.75 */}
          <div className="inline-flex p-4 rounded-2xl bg-accent/20 border border-accent/30 animate-fade-in">
            <Shield className="h-10 w-10 text-accent" strokeWidth={1.75} />
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in px-2" style={{ animationDelay: "0.1s" }}>
            Proteja Seus Direitos<br />
            <span className="text-accent">Hoje Mesmo</span>
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
            Não deixe para depois. Agende uma consulta gratuita e descubra como podemos ajudar você a resolver sua questão jurídica.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Final CTA - Enhanced contrast 5.2:1 (white on #1A8549) */}
            <Button 
              size="lg" 
              variant="whatsapp-strong"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 h-auto"
              asChild
            >
              <a 
                href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+jur%C3%ADdica."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 justify-center"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Agendar Consulta Gratuita</span>
              </a>
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto group"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Mais Opções
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-xs sm:text-sm text-muted-foreground animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            <span className="block sm:inline">✓ Atendimento humanizado</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">✓ +750 clientes atendidos</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">✓ +13 anos de experiência</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
