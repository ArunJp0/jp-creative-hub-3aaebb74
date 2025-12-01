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
        <title>Hire Freelance Web Developer in Salem | Contact Arunprasath</title>
        <meta 
          name="description" 
          content="Need a website, dashboard or digital marketing support? Contact me for freelancing services in Tamil Nadu, Chennai, Salem and across India." 
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
