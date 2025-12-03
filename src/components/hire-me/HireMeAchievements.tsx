import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const achievements = [
  "6+ years experience working with clients in India and international",
  "Completed 20+ web and digital projects",
  "Worked with businesses in beauty, education, ecommerce, and tech",
  "Website + Ads + Analytics combined approach",
  "Simple communication — no technical confusion"
];

const HireMeAchievements = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Why People Trust Me 👇
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{achievement}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HireMeAchievements;
