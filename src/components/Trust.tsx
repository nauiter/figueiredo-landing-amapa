import { Shield, Users, Award, MapPin } from "lucide-react";

const trustPoints = [
  {
    icon: MapPin,
    title: "Conhecimento Local",
    description: "Profundo domínio da legislação do Amapá e das particularidades regionais"
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Escuta ativa e atendimento personalizado para cada cliente"
  },
  {
    icon: Shield,
    title: "Compromisso Ético",
    description: "Transparência total e atuação dentro dos mais altos padrões éticos"
  },
  {
    icon: Award,
    title: "Foco em Resultados",
    description: "Estratégias práticas e efetivas para alcançar os melhores resultados"
  }
];

const Trust = () => {
  return (
    <section id="sobre" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Por Que Escolher a Advocacia Figueiredo?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Com histórico comprovado de excelência e resultados sólidos, a Advocacia Figueiredo é reconhecida pela precisão técnica e compromisso em cada caso atendido. Nosso trabalho é guiado por ética, dedicação e assertividade em todas as etapas do processo jurídico.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nossa missão é oferecer soluções jurídicas completas e personalizadas, combinando expertise técnica com compromisso ético absoluto para proteger seus direitos e interesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="trust-card text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-accent transition-all duration-500 hover:shadow-rose-glow hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mb-4">
                  <point.icon className="h-8 w-8 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
