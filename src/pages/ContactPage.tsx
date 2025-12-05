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
        <title>Contact Arunprasath | Freelance Web Developer in Salem</title>
        <meta 
          name="description" 
          content="Contact me for website development, marketing and digital solutions. Available for businesses in Salem, Chennai, Tamil Nadu and across India." 
        />
        <meta name="keywords" content="hire freelance web developer, contact web developer Salem, freelancer Tamil Nadu, web development quote, digital marketing consultation" />
        <link rel="canonical" href="https://arunjpwork.online/contact" />
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
