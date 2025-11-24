import { Scale, Briefcase, Home, Heart } from "lucide-react";
import civilLawBg from "@/assets/services/civil-law-bg.jpg";
import laborLawBg from "@/assets/services/labor-law-bg.jpg";
import realEstateBg from "@/assets/services/real-estate-bg.jpg";
import familyLawBg from "@/assets/services/family-law-bg.jpg";

const services = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Proteção integral dos seus direitos pessoais e patrimoniais. Resolução estratégica de conflitos com foco em soluções práticas e efetivas.",
    background: civilLawBg
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Defesa completa dos seus direitos trabalhistas. Atuação em processos, rescisões e negociações com empresas para garantir seus benefícios.",
    background: laborLawBg
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Segurança jurídica em todas as suas transações imobiliárias. Análise de contratos, regularizações e resolução de conflitos de propriedade.",
    background: realEstateBg
  },
  {
    icon: Heart,
    title: "Direito de Família e Sucessões",
    description: "Atendimento humanizado em momentos delicados. Divórcios, partilhas, inventários e planejamento sucessório com sensibilidade e expertise.",
    background: familyLawBg
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Nossas Especialidades
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Oferecemos assessoria jurídica completa e personalizada em diversas áreas do direito, 
              sempre focados em defender seus interesses com máxima dedicação e profissionalismo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-[400px] md:h-[450px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 animate-slide-up"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8 z-10">
                  {/* Icon */}
                  <div className="mb-4 transition-transform duration-500 group-hover:scale-110">
                    <div className="inline-flex p-3 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  {/* Rose Gold Accent Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/50 mb-4 transition-all duration-500 group-hover:w-20"></div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
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
