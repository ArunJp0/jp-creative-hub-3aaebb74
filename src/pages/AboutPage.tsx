import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutVision from "@/components/about/AboutVision";
import AboutSkills from "@/components/about/AboutSkills";
import AboutAchievements from "@/components/about/AboutAchievements";
import AboutProcess from "@/components/about/AboutProcess";
import AboutWhyMe from "@/components/about/AboutWhyMe";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Arunprasath JP | Best Freelance Web Developer in Salem & Tamil Nadu</title>
        <meta 
          name="description" 
          content="Learn about my journey as a freelance web developer in Salem helping businesses with modern websites, branding and digital transformation across Tamil Nadu." 
        />
        <meta name="keywords" content="Arunprasath JP, freelance web developer Salem, data analyst Tamil Nadu, React developer, digital marketer Chennai" />
        <link rel="canonical" href="https://arunjpwork.online/about" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <AboutHero />
        <AboutVision />
        <AboutSkills />
        <AboutAchievements />
        <AboutProcess />
        <AboutWhyMe />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
