import { Scale, Briefcase, Home, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import civilLawBg from "@/assets/services/civil-law-bg.jpg";
import laborLawBg from "@/assets/services/labor-law-bg.jpg";
import realEstateBg from "@/assets/services/real-estate-bg.jpg";
import familyLawBg from "@/assets/services/family-law-bg.jpg";

const services = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Proteção integral dos seus direitos pessoais e patrimoniais. Resolução estratégica de conflitos.",
    background: civilLawBg,
    whatsappMessage: "Olá, gostaria de saber mais sobre os serviços de Direito Civil."
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Defesa completa dos seus direitos trabalhistas. Atuação em processos e rescisões.",
    background: laborLawBg,
    whatsappMessage: "Olá, gostaria de saber mais sobre os serviços de Direito Trabalhista."
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Segurança jurídica em transações imobiliárias. Análise de contratos e regularizações.",
    background: realEstateBg,
    whatsappMessage: "Olá, gostaria de saber mais sobre os serviços de Direito Imobiliário."
  },
  {
    icon: Heart,
    title: "Direito de Família",
    description: "Atendimento humanizado em divórcios, partilhas, inventários e planejamento sucessório.",
    background: familyLawBg,
    whatsappMessage: "Olá, gostaria de saber mais sobre os serviços de Direito de Família."
  }
];

const Services = () => {
  return (
    <section id="servicos" aria-labelledby="services-heading" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-white">
              Áreas de Atuação
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Assessoria jurídica completa e personalizada para defender seus interesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-[420px] md:h-[480px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src={service.background}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8 z-10">
                {/* Icon - Standardized: line style, strokeWidth 1.75 */}
                  <div className="mb-4 transition-transform duration-500 group-hover:scale-110">
                    <div className="inline-flex p-4 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30">
                      <service.icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Rose Gold Accent Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/50 mb-4 transition-all duration-500 group-hover:w-20"></div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed text-sm md:text-base mb-6">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full border-accent/50 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 group/btn"
                    asChild
                  >
                    <a 
                      href={`https://wa.me/5596981293353?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.75} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;