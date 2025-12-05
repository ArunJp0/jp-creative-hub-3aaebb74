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
        <title>Freelance Web Developer in Salem | Best Freelance Web Developer in Salem | Arunprasath JP</title>
        <meta name="description" content="Professional freelance web developer in Salem delivering modern websites, branding, SEO and digital solutions for businesses in Tamil Nadu and across India." />
        <link rel="canonical" href="https://arunjpwork.online" />
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
