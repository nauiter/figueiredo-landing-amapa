import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import logo3d from "@/assets/logo-3d.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src={logo3d} 
              alt="Figueiredo - Sociedade de Advogadas" 
              width="840"
              height="280"
              fetchPriority="high"
              className="h-56 md:h-72 lg:h-80 w-auto drop-shadow-2xl"
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-accent animate-slide-up">
            <MapPin className="h-5 w-5" />
            <span className="text-lg font-medium">Macapá, Amapá</span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Soluções Jurídicas Confiáveis e Eficientes no Amapá
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Defendemos seus direitos com excelência, ética e compromisso com resultados
          </h2>

          <div className="flex items-center justify-center gap-3 pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground font-semibold text-lg">
              5.0 ⭐ (21 avaliações)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+encontrei+seu+contato+atrav%C3%A9s+do+Google.+Estou+falando+com+a+advogada+Daniele+Figueiredo%3F">
                Agende sua Consulta
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 h-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
