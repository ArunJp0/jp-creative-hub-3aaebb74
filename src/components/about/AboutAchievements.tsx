import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Rocket, BarChart3, Globe, Star, Zap } from "lucide-react";

const achievements = [
  { icon: Target, value: "10+", label: "Projects Delivered", description: "Across websites, dashboards, designs, and marketing campaigns" },
  { icon: Rocket, value: "35%", label: "Conversion Boost", description: "For clients through Meta Ads" },
  { icon: BarChart3, value: "25+", label: "Power BI Dashboards", description: "& SQL Reports built for international clients" },
  { icon: Globe, value: "10+", label: "Modern Websites", description: "Using HTML, CSS, JavaScript, React, and WordPress" },
  { icon: Star, value: "6+", label: "Years Experience", description: "Working with clients from India and International" },
  { icon: Zap, value: "100%", label: "On-Time Delivery", description: "With clear communication and structured workflow" },
];

const AboutAchievements = () => {
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
              Experience & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                    <div className="text-foreground font-medium mb-1">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAchievements;
