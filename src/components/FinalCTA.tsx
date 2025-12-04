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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-accent/20 border border-accent/30 animate-fade-in">
            <Shield className="h-10 w-10 text-accent" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Proteja Seus Direitos<br />
            <span className="text-accent">Hoje Mesmo</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Não deixe para depois. Agende uma consulta gratuita e descubra como podemos ajudar você a resolver sua questão jurídica.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-10 py-7 h-auto bg-[#25D366] hover:bg-[#1EB954] text-white font-bold shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:scale-105 transition-all duration-300"
              asChild
            >
              <a 
                href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+jur%C3%ADdica."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-center"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                Agendar Consulta Gratuita
              </a>
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto border-2 border-accent/40 text-foreground hover:bg-accent/10 hover:border-accent font-semibold transition-all duration-300 group"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Mais Opções
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground/70 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            ✓ Atendimento humanizado · ✓ +750 clientes atendidos · ✓ +13 anos de experiência
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
