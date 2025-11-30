import { motion } from "framer-motion";

const PortfolioHero = () => {
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
            My Portfolio
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A showcase of my work across web development, data analysis, and digital marketing. 
            Each project represents real results delivered to clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
