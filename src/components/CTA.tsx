import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              Proteja Seus Direitos Hoje Mesmo
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Não espere para resolver suas questões jurídicas. 
              Agende uma consulta e receba orientação profissional personalizada.
            </p>
          </div>

          <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-accent/20 shadow-rose-glow animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-accent" />
                  Nossa Localização
                </h3>
                <div className="space-y-3 text-primary-foreground/90">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-accent">Endereço:</strong><br />
                    Av. José do Espírito Santo Araújo, n° 492<br />
                    Perpétuo Socorro, Macapá - AP, 68905-627
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-accent" />
                  Entre em Contato
                </h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+5596981293353" 
                    className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-lg">(96) 98129-3353</span>
                  </a>
                  <div className="flex items-center gap-3 text-primary-foreground/90">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="text-lg">Segunda a Sexta · 08h às 18h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button 
                size="lg" 
                variant="hero"
                className="text-base md:text-lg px-6 md:px-12 py-4 md:py-6 h-auto w-full md:w-auto max-w-full"
                asChild
              >
                <a 
                  href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+encontrei+seu+contato+atrav%C3%A9s+do+Google.+Estou+falando+com+a+advogada+Daniele+Figueiredo%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta Agora
                </a>
              </Button>
              <p className="mt-4 text-sm text-primary-foreground/70">
                Respondemos em até 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
