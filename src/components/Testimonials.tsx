import React from "react";
import { Star, Quote, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "João Oliveira",
    text: "Profissionalismo e transparência em cada etapa do processo. A equipe da Figueiredo me manteve informado o tempo todo e conquistou um resultado excelente.",
    rating: 5,
  },
  {
    name: "Marina Santos",
    text: "A Dra. Daniele resolveu meu caso com extrema competência e dedicação. Sempre atenciosa e clara nas orientações. Recomendo com total confiança.",
    rating: 5,
  },
  {
    name: "Rafael Lima",
    text: "Excelente atendimento e comprometimento. A Advocacia Figueiredo conduziu meu processo com eficiência e empatia, sempre buscando a melhor solução.",
    rating: 5,
  },
  {
    name: "Paula Castro",
    text: "Fui atendida pela Dra. Daniele Figueiredo em um momento muito delicado. Sua sensibilidade e firmeza jurídica fizeram toda a diferença. Profissional exemplar.",
    rating: 5,
  },
  {
    name: "Carlos Menezes",
    text: "Equipe muito preparada e dedicada. O escritório Figueiredo solucionou uma questão trabalhista complexa com agilidade e resultado positivo.",
    rating: 5,
  },
  {
    name: "Luciana Prado",
    text: "A Dra. Daniele é uma advogada extremamente ética e competente. Seu compromisso com a justiça é inspirador. Indico sem hesitar!",
    rating: 5,
  },
  {
    name: "André Barbosa",
    text: "Atendimento humanizado e eficiente. Desde o primeiro contato senti segurança e confiança no trabalho do escritório.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    text: "Profissionais atenciosos e experientes. A Advocacia Figueiredo oferece um serviço jurídico de excelência, sempre com foco em resultados.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#1f1f1f]">
      <div className="container mx-auto px-4">
        {/* Header with Social Proof */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white/70 text-lg font-semibold">5.0</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A confiança de nossos clientes fala por nós
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Mais de <strong className="text-accent">750 clientes atendidos</strong> com excelência. 
            Veja o que dizem sobre nosso trabalho.
          </p>
          
          {/* Verified Badge */}
          <div className="flex items-center justify-center gap-2 text-accent">
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm font-medium">Depoimentos Verificados</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 shadow-elegant hover:border-accent/30 transition-all duration-300">
                    <div className="mb-4 flex items-center justify-between">
                      <Quote className="h-8 w-8 text-accent opacity-50" />
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    
                    <p className="text-white text-lg mb-6 leading-relaxed min-h-[120px]">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-white/50 text-sm">Cliente Verificado</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action - Add Your Review */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-white/60 mb-4 text-lg">
            Você também foi atendido por nós?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto max-w-full"
            asChild
          >
            <a 
              href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+gostaria+de+deixar+um+depoimento+sobre+o+atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Deixe seu Depoimento
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
