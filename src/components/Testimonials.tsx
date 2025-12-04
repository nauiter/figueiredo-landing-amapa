import React from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "João Oliveira",
    initials: "JO",
    text: "Profissionalismo e transparência em cada etapa do processo. A equipe da Figueiredo me manteve informado o tempo todo e conquistou um resultado excelente.",
    rating: 5,
  },
  {
    name: "Marina Santos",
    initials: "MS",
    text: "A Dra. Daniele resolveu meu caso com extrema competência e dedicação. Sempre atenciosa e clara nas orientações. Recomendo com total confiança.",
    rating: 5,
  },
  {
    name: "Rafael Lima",
    initials: "RL",
    text: "Excelente atendimento e comprometimento. A Advocacia Figueiredo conduziu meu processo com eficiência e empatia, sempre buscando a melhor solução.",
    rating: 5,
  },
  {
    name: "Paula Castro",
    initials: "PC",
    text: "Fui atendida pela Dra. Daniele Figueiredo em um momento muito delicado. Sua sensibilidade e firmeza jurídica fizeram toda a diferença. Profissional exemplar.",
    rating: 5,
  },
  {
    name: "Carlos Menezes",
    initials: "CM",
    text: "Equipe muito preparada e dedicada. O escritório Figueiredo solucionou uma questão trabalhista complexa com agilidade e resultado positivo.",
    rating: 5,
  },
  {
    name: "Luciana Prado",
    initials: "LP",
    text: "A Dra. Daniele é uma advogada extremamente ética e competente. Seu compromisso com a justiça é inspirador. Indico sem hesitar!",
    rating: 5,
  },
  {
    name: "André Barbosa",
    initials: "AB",
    text: "Atendimento humanizado e eficiente. Desde o primeiro contato senti segurança e confiança no trabalho do escritório.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    initials: "FC",
    text: "Profissionais atenciosos e experientes. A Advocacia Figueiredo oferece um serviço jurídico de excelência, sempre com foco em resultados.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        {/* Header with Social Proof */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white text-2xl font-bold">5.0</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            O Que Nossos Clientes Dizem
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Mais de <strong className="text-accent">750 clientes atendidos</strong> com excelência jurídica. 
            Confira alguns depoimentos reais.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 p-3 rounded-full bg-accent/20 hover:bg-accent/40 text-white transition-all duration-300 hidden md:block"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 p-3 rounded-full bg-accent/20 hover:bg-accent/40 text-white transition-all duration-300 hidden md:block"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-elegant hover:border-accent/30 transition-all duration-300">
                    {/* Quote Icon */}
                    <Quote className="h-10 w-10 text-accent/40 mb-6" />
                    
                    {/* Testimonial Text */}
                    <p className="text-white text-lg md:text-xl leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.initials}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-white text-lg">
                            {testimonial.name}
                          </p>
                          <CheckCircle2 className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
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
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent w-10' 
                    : 'bg-white/30 hover:bg-white/50 w-3'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-white/60 mb-6 text-lg">
            Você também foi atendido por nós? Deixe seu depoimento!
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 h-auto text-lg"
            asChild
          >
            <a 
              href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+gostaria+de+deixar+um+depoimento+sobre+o+atendimento."
              target="_blank"
              rel="noopener noreferrer"
            >
              Deixar Meu Depoimento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;