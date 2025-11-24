import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-fade-in"
          aria-label="Voltar ao topo"
        >
          {/* Icon */}
          <ArrowUp className="h-5 w-5 text-primary group-hover:translate-y-[-2px] transition-transform" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-2 bg-black/90 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Voltar ao topo
          </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
