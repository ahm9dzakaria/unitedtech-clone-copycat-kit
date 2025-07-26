import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Settings, Users, ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import partnerLogo1 from "@/assets/P1.jpg";
import partnerLogo2 from "@/assets/P2.jpg";
import partnerLogo3 from "@/assets/P3.jpg";
import partnerLogo4 from "@/assets/P4.jpg";
import partnerLogo5 from "@/assets/P5.jpg";
import partnerLogo6 from "@/assets/P6.jpg";
import partnerLogo7 from "@/assets/P7.jpg";
import partnerLogo8 from "@/assets/P8.jpg";
import partnerLogo9 from "@/assets/P9.jpg";
import partnerLogo10 from "@/assets/P10.jpg";
import partnerLogo11 from "@/assets/P11.jpg";
import partnerLogo12 from "@/assets/P12.jpg";
import partnerLogo13 from "@/assets/P13.jpg";

const Services = () => {
  const partners = [
    {
      logo: partnerLogo1,
      name: "مطعم سما العاصمة",
      description: "",
      website: "https://wa.me/01222919936"
    },
    {
      logo: partnerLogo2,
      name: "سلسلة مطاعم ماكسمام",
      description: "",
      website: "https://wa.me/01222919936"
    },
    {
      logo: partnerLogo3,
      name: "مطعم اسماك البحرين",
      description: "",
      website: "https://wa.me/01222919936"
    },
      {
      logo: partnerLogo4,
      name: "Bellissimo سلسلة كافيهات ",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo5,
      name: "شركة عمالة لألحاق العمالة بالخارج",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo6,
      name: "digital Squad شركة",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo7,
      name: "شركة راجي و شركاه",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo8,
      name: "Lampatronics شركة",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo9,
      name: "شركة سيراميكا روندي",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo10,
      name: "welyra APP",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo11,
      name: "عيادات تمازج",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo12,
      name: "جمعية بنكمل بعض",
      description: "",
      website: "https://wa.me/01222919936"
    },
     {
      logo: partnerLogo13,
      name: "Rident عيادات",
      description: "",
      website: "https://wa.me/01222919936"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-8 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-6">
            شركاء النجاح
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-cairo">
            نقدم مجموعة من شركاء النجاح لنا
          </p>
        </div>

        {/* Partners Grid with Sliding Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-rtl space-x-8 rtl:space-x-reverse">
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 min-w-[300px] flex-shrink-0">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-white p-2 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <CardTitle className="text-xl font-cairo mb-2">{partner.name}</CardTitle>
                  <CardDescription className="text-muted-foreground font-cairo leading-relaxed">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full font-cairo group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(partner.website, '_blank')}
                  >
                    تواصل معنا
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <Card key={`duplicate-${index}`} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 min-w-[300px] flex-shrink-0">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-white p-2 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <CardTitle className="text-xl font-cairo mb-2">{partner.name}</CardTitle>
                  <CardDescription className="text-muted-foreground font-cairo leading-relaxed">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full font-cairo group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(partner.website, '_blank')}
                  >
                    تواصل معنا
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 font-cairo text-lg px-8 py-3"
          >
            تحدث مع مستشار تقني الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
