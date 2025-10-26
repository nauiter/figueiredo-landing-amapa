import React from "react";
import { Star, Quote } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#1f1f1f]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A confiança de nossos clientes fala por nós
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Garantimos um atendimento jurídico transparente e eficiente. A confiança de nossos clientes é nossa maior conquista.
          </p>
        </div>

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
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 shadow-elegant">
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-accent opacity-50" />
                    </div>
                    
                    <p className="text-white text-lg mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
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

      </div>
    </section>
  );
};

export default Testimonials;
