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
        <title>Web Development, Digital Marketing & Data Analytics Services – Salem, Tamil Nadu</title>
        <meta 
          name="description" 
          content="Offering website development, PowerBI dashboards, branding, SEO & digital marketing services for small businesses across Tamil Nadu and India." 
        />
        <meta name="keywords" content="web development services Salem, data analysis Tamil Nadu, digital marketing Chennai, Power BI dashboard, React development, freelance graphic designer" />
        <link rel="canonical" href="https://arunjpwork.online/services" />
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
