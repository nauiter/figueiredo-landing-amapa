import { Scale, Briefcase, Home, Heart } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Proteção integral dos seus direitos pessoais e patrimoniais. Resolução estratégica de conflitos com foco em soluções práticas e efetivas."
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Defesa completa dos seus direitos trabalhistas. Atuação em processos, rescisões e negociações com empresas para garantir seus benefícios."
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Segurança jurídica em todas as suas transações imobiliárias. Análise de contratos, regularizações e resolução de conflitos de propriedade."
  },
  {
    icon: Heart,
    title: "Direito de Família e Sucessões",
    description: "Atendimento humanizado em momentos delicados. Divórcios, partilhas, inventários e planejamento sucessório com sensibilidade e expertise."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Nossas Especialidades
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos assessoria jurídica completa e personalizada em diversas áreas do direito, 
              sempre focados em defender seus interesses com máxima dedicação e profissionalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group service-card p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-500 hover:shadow-rose-glow"
              >
                <div className="flex items-start gap-6">
                  <div className="service-icon-wrapper p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
