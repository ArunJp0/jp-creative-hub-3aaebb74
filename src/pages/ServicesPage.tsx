import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | Web Development, Data Analysis & Digital Marketing in Tamil Nadu</title>
        <meta 
          name="description" 
          content="Professional web development, data analysis, graphic design, digital marketing, and AI solutions by Arunprasath JP. Affordable freelance services in Salem, Chennai, Tamil Nadu." 
        />
        <meta name="keywords" content="web development services Salem, data analysis Tamil Nadu, digital marketing Chennai, Power BI dashboard, React development, freelance graphic designer" />
        <link rel="canonical" href="https://arunprasathjp.com/services" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <ServicesHero />
        <ServicesGrid />
        <ServicesFAQ />
        <ServicesCTA />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
