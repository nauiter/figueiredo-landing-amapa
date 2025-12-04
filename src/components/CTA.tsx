import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const CTA = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#0e0e0e] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Entre em Contato
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Agende uma consulta e receba orientação jurídica especializada para o seu caso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent" />
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+encontrei+seu+contato+atrav%C3%A9s+do+site.+Gostaria+de+agendar+uma+consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-xl hover:bg-[#25D366]/20 transition-colors group"
                  >
                    <div className="p-3 bg-[#25D366] rounded-full">
                      <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">WhatsApp</p>
                      <p className="text-white font-semibold text-lg group-hover:text-accent transition-colors">(96) 98129-3353</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href="tel:+5596981293353" 
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="p-3 bg-accent/20 rounded-full">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Telefone</p>
                      <p className="text-white font-semibold text-lg group-hover:text-accent transition-colors">(96) 98129-3353</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:contato@figueiredoadv.com.br" 
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="p-3 bg-accent/20 rounded-full">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">E-mail</p>
                      <p className="text-white font-semibold text-lg group-hover:text-accent transition-colors">contato@figueiredoadv.com.br</p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Horário de Atendimento</p>
                      <p className="text-white font-semibold text-lg">Seg a Sex · 08h às 18h</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Endereço</p>
                      <p className="text-white font-semibold">Av. José do Espírito Santo Araújo, n° 492</p>
                      <p className="text-white/80">Perpétuo Socorro, Macapá - AP</p>
                      <p className="text-white/60 text-sm">CEP: 68905-627</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full text-lg px-8 py-7 h-auto bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+encontrei+seu+contato+atrav%C3%A9s+do+site.+Gostaria+de+agendar+uma+consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                  Agendar Consulta no WhatsApp
                </a>
              </Button>
            </div>

            {/* Google Maps */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817614430727!2d-51.07193492394668!3d0.03500639992716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61f30e2cd08c91%3A0x3c4b97b9f5b2c7e8!2sAv.%20Jos%C3%A9%20do%20Esp%C3%ADrito%20Santo%20Ara%C3%BAjo%2C%20492%20-%20Perp%C3%A9tuo%20Socorro%2C%20Macap%C3%A1%20-%20AP%2C%2068905-627!5e0!3m2!1spt-BR!2sbr!4v1701700000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '12px', minHeight: '480px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Escritório Figueiredo Advocacia em Macapá"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;