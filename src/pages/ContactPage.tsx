import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Arunprasath JP | Hire Freelance Web Developer in Tamil Nadu</title>
        <meta 
          name="description" 
          content="Contact Arunprasath JP for web development, data analysis, and digital marketing services. Freelance web developer in Salem, Chennai, Tamil Nadu. Get a free consultation." 
        />
        <meta name="keywords" content="hire freelance web developer, contact web developer Salem, freelancer Tamil Nadu, web development quote, digital marketing consultation" />
        <link rel="canonical" href="https://arunprasathjp.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <ContactHero />
        <ContactForm />
        <ContactFAQ />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
