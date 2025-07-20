import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Partner from "@/components/Partner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
