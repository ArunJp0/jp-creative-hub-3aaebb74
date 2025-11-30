import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HomeHero from "@/components/home/HomeHero";
import HomeHighlights from "@/components/home/HomeHighlights";
import HomeIntro from "@/components/home/HomeIntro";
import HomeCTA from "@/components/home/HomeCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Arunprasath JP — Freelance Web Developer in Tamil Nadu | Data Analyst | Digital Marketer</title>
        <meta 
          name="description" 
          content="Arunprasath JP is a freelance web developer, data analyst, and digital marketer in Salem, Tamil Nadu. Transforming ideas into modern websites, smart data insights, and effective digital growth." 
        />
        <meta name="keywords" content="freelance web developer Salem, digital marketer Tamil Nadu, React developer Chennai, web development, data analysis, Power BI dashboard" />
        <link rel="canonical" href="https://arunprasathjp.com/" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <HomeHero />
        <HomeIntro />
        <HomeHighlights />
        <HomeCTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
