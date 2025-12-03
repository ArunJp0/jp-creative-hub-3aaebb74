import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const struggles = [
  "You run a business but still don't have a website",
  "Your website is live but it's not getting leads",
  "You are planning to grow online but don't know where to start",
  "You are spending money on ads without strategy or results",
  "You want a modern website with marketing, branding, and analytics built in",
  "You want someone who can build and manage everything — website, ads, SEO, design, and analytics"
];

const HireMeStruggles = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Please check if any of these applies to you 👇
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-4 mb-10"
        >
          {struggles.map((struggle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/30"
            >
              <span className="text-destructive font-bold text-lg">❌</span>
              <span className="text-foreground font-medium">{struggle}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="text-center">
          <p className="text-lg text-primary font-semibold mb-6">
            👉 If any of this sounds like you — I can help.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_hsl(174_72%_56%/0.4)]"
            asChild
          >
            <a href="https://calendly.com/arunprasath-jp/30min" target="_blank" rel="noopener noreferrer">
              🔹 Book Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMeStruggles;
