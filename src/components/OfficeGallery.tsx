import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import office1 from "@/assets/office/office-1.png";
import office2 from "@/assets/office/office-2.png";
import office3 from "@/assets/office/office-3.png";
import office4 from "@/assets/office/office-4.png";
import office5 from "@/assets/office/office-5.png";
import office6 from "@/assets/office/office-6.png";
import office7 from "@/assets/office/office-7.png";
import office8 from "@/assets/office/office-8.png";
import office9 from "@/assets/office/office-9.png";
import office10 from "@/assets/office/office-10.png";

const officeImages = [
  office1,
  office2,
  office3,
  office4,
  office5,
  office6,
  office7,
  office8,
  office9,
  office10,
];

const OfficeGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Conheça Nosso Escritório
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Ambiente acolhedor, moderno e preparado para oferecer atendimento jurídico de excelência.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {officeImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(33.333%-11px)] min-w-0"
                >
                  <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
                    <img
                      src={image}
                      alt={`Escritório Advocacia Figueiredo - Ambiente ${index + 1}`}
                      className="w-full h-[300px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeGallery;
