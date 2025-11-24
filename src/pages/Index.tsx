import Hero from "@/components/Hero";
import AuthorityStrip from "@/components/AuthorityStrip";
import Metrics from "@/components/Metrics";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Services from "@/components/Services";
import OfficeGallery from "@/components/OfficeGallery";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AuthorityStrip />
      <Trust />
      <Metrics />
      <About />
      <Services />
      <OfficeGallery />
      <Testimonials />
      <BlogSection />
      <CTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
