import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
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
    align: "center",
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
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Conheça Nosso Escritório
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Ambiente acolhedor, moderno e preparado para oferecer atendimento jurídico de excelência.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex">
              {officeImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2"
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/40 transition-all duration-300 ease-in-out hover:scale-[1.03] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
                    <img
                      src={image}
                      alt={`Escritório Advocacia Figueiredo - Ambiente ${index + 1}`}
                      className="w-full h-[300px] object-cover"
                      loading="lazy"
                    />
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

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+José+do+Espírito+Santo+Araújo,+n°+492,+Macapá+-+AP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 text-sm md:text-base bg-[#b8806e] text-white font-semibold rounded-[10px] shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
          >
            <MapPin className="h-4 w-4 md:h-5 md:w-5" />
            Veja como chegar até nós
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfficeGallery;
