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
            My Services
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From modern websites to smart data dashboards and effective marketing campaigns — 
            I offer end-to-end digital solutions to help your business grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
