import ScrollProgress from "@/components/ScrollProgress";
import SkipLink from "@/components/SkipLink";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AuthorityStrip from "@/components/AuthorityStrip";
import Metrics from "@/components/Metrics";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Services from "@/components/Services";
import OfficeGallery from "@/components/OfficeGallery";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const Index = () => {
  return (
    <>
      {/* SEO Structured Data */}
      <LocalBusinessSchema />
      <FAQSchema />
      <OrganizationSchema />
      
      {/* Accessibility: Skip Link */}
      <SkipLink />
      
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="min-h-screen" role="main" aria-label="Conteúdo principal">
        <Hero />
        <AuthorityStrip />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <Trust />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <Metrics />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <About />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <Services />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <OfficeGallery />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <Testimonials />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <FAQ />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <BlogSection />
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <CTA />
        <Footer />
        <StickyMobileCTA />
        <WhatsAppWidget />
        <ScrollToTop />
        <CookieBanner />
      </main>
    </>
  );
};

export default Index;
