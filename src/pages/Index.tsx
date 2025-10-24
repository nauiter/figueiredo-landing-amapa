import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Metrics />
      <Services />
      <Trust />
      <Testimonials />
      <BlogSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
