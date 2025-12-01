import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioTestimonials from "@/components/portfolio/PortfolioTestimonials";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Websites, Dashboards, Designs – Arunprasath</title>
        <meta 
          name="description" 
          content="Explore my web development projects, data analysis dashboards, and branding designs delivered to clients in Salem, Chennai & across India." 
        />
        <meta name="keywords" content="web development portfolio, Power BI dashboard examples, React projects, digital marketing case studies, freelance developer portfolio" />
        <link rel="canonical" href="https://arunjpwork.online/portfolio" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <PortfolioHero />
        <PortfolioGrid />
        <PortfolioTestimonials />
        <PortfolioCTA />
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
