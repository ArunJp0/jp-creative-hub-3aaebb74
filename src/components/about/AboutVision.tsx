import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Handshake } from "lucide-react";

const visionItems = [
  {
    icon: Eye,
    title: "My Vision",
    description: "To help businesses grow with clean, modern websites, smart digital marketing, data-driven insights, and AI-powered solutions.",
  },
  {
    icon: Target,
    title: "My Goal",
    description: "Deliver simple, effective, and scalable digital services for clients in Tamil Nadu, Chennai, Salem, and across the world.",
  },
  {
    icon: Handshake,
    title: "My Promise",
    description: "Building long-term partnerships by creating real results — not just completing projects.",
  },
];

const AboutVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {visionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVision;
