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
        <title>About Me | Freelance Web Developer & Digital Creator in Tamil Nadu</title>
        <meta 
          name="description" 
          content="Learn about my expertise in web development, data analysis, digital marketing & design. Based in Salem, Tamil Nadu, helping businesses grow with modern digital solutions." 
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
