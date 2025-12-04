import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import office1 from "@/assets/office/office-1.webp";
import office2 from "@/assets/office/office-2.webp";
import office3 from "@/assets/office/office-3.webp";
import office4 from "@/assets/office/office-4.webp";
import office5 from "@/assets/office/office-5.webp";
import office6 from "@/assets/office/office-6.webp";
import office7 from "@/assets/office/office-7.webp";
import office8 from "@/assets/office/office-8.webp";
import office9 from "@/assets/office/office-9.webp";
import office10 from "@/assets/office/office-10.webp";

const officeImages = [
  { src: office1, caption: "Detalhe decorativo com balança da justiça" },
  { src: office2, caption: "Hall de entrada do escritório" },
  { src: office3, caption: "Fachada do escritório Figueiredo Advogadas" },
  { src: office4, caption: "Letreiro da Sociedade de Advogadas" },
  { src: office5, caption: "Estátua da Deusa Themis símbolo da justiça" },
  { src: office6, caption: "Sala da advogada Daniele Figueiredo" },
  { src: office7, caption: "Recepção e espaço do café" },
  { src: office8, caption: "Sala de espera confortável" },
  { src: office9, caption: "Sala de atendimento principal" },
  { src: office10, caption: "Cantinho do café para clientes" },
];

const OfficeGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
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
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-[300px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    </div>
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

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {officeImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index 
                  ? "bg-accent w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
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