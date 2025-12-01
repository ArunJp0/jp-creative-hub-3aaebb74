import { motion } from "framer-motion";

const ServicesHero = () => {
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
            Web Development, Digital Marketing & Data Analytics Services
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I provide website development, SEO, branding, Power BI dashboards, and digital marketing services for small businesses across Tamil Nadu and India.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
