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
        <title>Portfolio | Web Development & Data Analysis Projects by Arunprasath JP</title>
        <meta 
          name="description" 
          content="View portfolio of websites, Power BI dashboards, and digital marketing campaigns by Arunprasath JP. Successful projects for clients in Tamil Nadu and internationally." 
        />
        <meta name="keywords" content="web development portfolio, Power BI dashboard examples, React projects, digital marketing case studies, freelance developer portfolio" />
        <link rel="canonical" href="https://arunprasathjp.com/portfolio" />
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
