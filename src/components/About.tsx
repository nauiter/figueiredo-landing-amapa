import { Building2 } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Sobre a Figueiredo Advocacia
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Com <strong className="text-accent">mais de 13 anos de experiência jurídica</strong>, a Advocacia Figueiredo combina técnica, ética e sensibilidade para defender os direitos de seus clientes em todo o Amapá.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nossa abordagem é <strong className="text-accent">digital e humanizada</strong> - utilizamos tecnologia de ponta para oferecer eficiência e transparência, enquanto mantemos o atendimento pessoal e atencioso que cada caso merece. Nossa equipe atua com excelência, garantindo soluções seguras e eficazes em cada processo.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-[#b8806e15] rounded-xl p-8 border border-border shadow-elegant">
                <div className="flex items-center justify-center h-64">
                  <Building2 className="h-32 w-32 text-accent/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
