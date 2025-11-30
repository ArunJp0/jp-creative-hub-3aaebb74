import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Work Together
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Have a project in mind? I'm here to help you bring your ideas to life. 
            Reach out and let's discuss how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:prasathjp95@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              prasathjp95@gmail.com
            </a>
            <a 
              href="tel:+918072170740"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 8072170740
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              Salem, Tamil Nadu, India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
