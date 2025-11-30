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
        <title>About Arunprasath JP | Freelance Web Developer & Data Analyst in Tamil Nadu</title>
        <meta 
          name="description" 
          content="Learn about Arunprasath JP, a freelance web developer and data analyst in Salem, Tamil Nadu with 6+ years of experience. Skills, achievements, and working process." 
        />
        <meta name="keywords" content="Arunprasath JP, freelance web developer Salem, data analyst Tamil Nadu, React developer, digital marketer Chennai" />
        <link rel="canonical" href="https://arunprasathjp.com/about" />
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
