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
        <title>Arunprasath JP | Freelance Web Developer in Salem | Digital Marketer & Designer</title>
        <meta 
          name="description" 
          content="Looking for a freelance web developer in Salem or Tamil Nadu? I create fast, modern websites, data dashboards, graphic designs & digital marketing solutions for businesses across India." 
        />
        <meta name="keywords" content="freelance web developer Salem, digital marketer Tamil Nadu, React developer Chennai, web development, data analysis, Power BI dashboard" />
        <link rel="canonical" href="https://arunjpwork.online/" />
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
