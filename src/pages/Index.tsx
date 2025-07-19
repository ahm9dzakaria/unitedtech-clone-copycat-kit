import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import partner from "@/partner/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
