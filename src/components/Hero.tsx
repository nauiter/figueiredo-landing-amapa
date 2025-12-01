import { Button } from "@/components/ui/button";
import { MapPin, Play } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";
import logo3D from "@/assets/logo-3d.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 md:py-28">
      {/* Rose Gold Radial Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#c99a85]/20 via-transparent to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Content */}
          <div className="space-y-6 md:space-y-7 lg:space-y-8 order-2 lg:order-1">
            {/* Logo */}
            <div className="animate-fade-in">
              <img 
                src={logo3D}
                alt="Figueiredo - Sociedade de Advogadas" 
                width="280"
                height="93"
                fetchPriority="high"
                className="h-20 md:h-24 w-auto drop-shadow-2xl"
              />
            </div>

            {/* Location Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Atendimento em Macapá e Online</span>
            </div>

            {/* Headline */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Soluções Jurídicas Confiáveis e Eficientes no Amapá
            </h1>

            {/* Subheadline with Keywords */}
            <h2 
              className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <strong className="text-accent font-semibold">Advogada em Macapá</strong> especializada em Direito Civil, Trabalhista, Imobiliário e Família. Mais de 13 anos transformando vidas através da justiça.
            </h2>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Primary CTA - WhatsApp */}
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto max-w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <a 
                  href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+encontrei+seu+contato+atrav%C3%A9s+do+site.+Gostaria+de+falar+com+a+advogada+Daniele+Figueiredo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                  Falar com Advogada no WhatsApp
                </a>
              </Button>

              {/* Secondary CTA - Story */}
              <Button 
                size="lg" 
                variant="ghost"
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto max-w-full border-2 border-accent/40 text-white hover:bg-accent/10 hover:border-accent font-semibold transition-all duration-300 group"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Conheça Nossa História
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div 
            className="relative order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Rose Gold Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-radial from-[#c99a85]/40 via-[#c99a85]/20 to-transparent blur-3xl scale-110"></div>
              
              {/* Lawyer Portrait */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={lawyerPortrait}
                  alt="Advogada Daniele Figueiredo - Soluções Jurídicas em Macapá" 
                  width="1920"
                  height="1080"
                  fetchPriority="high"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
