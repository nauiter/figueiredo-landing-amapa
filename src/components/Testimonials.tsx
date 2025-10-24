import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Santos",
    text: "A Dra. Daniele conduziu meu caso com extrema competência e dedicação. Conseguiu resolver uma questão trabalhista que eu achava impossível. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "João Oliveira",
    text: "Profissionalismo e transparência em cada etapa do processo. A equipe da Figueiredo me manteve informado o tempo todo e conquistou um resultado excelente.",
    rating: 5,
  },
  {
    name: "Ana Paula Costa",
    text: "Atendimento humanizado e eficiente. Senti que meu caso era tratado com a importância que ele merecia. Gratidão por todo o suporte jurídico recebido.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O que nossos clientes dizem sobre nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Garantimos um atendimento jurídico transparente e eficiente. A confiança de nossos clientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-elegant hover:shadow-rose-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Quote className="h-8 w-8 text-accent opacity-50" />
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 h-auto text-lg shadow-rose-glow hover:shadow-xl hover:scale-105 transition-all duration-300"
            asChild
          >
            <a 
              href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+encontrei+seu+contato+atrav%C3%A9s+do+Google.+Estou+falando+com+a+advogada+Daniele+Figueiredo%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deixe seu depoimento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
