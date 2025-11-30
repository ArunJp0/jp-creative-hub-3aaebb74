import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Code2, RefreshCw, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Requirement Discussion",
    description: "I understand your needs, goals, and the problem you want to solve.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Planning & Strategy",
    description: "I prepare the best approach for your website, design, data analysis, or marketing project.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Design & Development",
    description: "I start building clean, user-friendly solutions using the right tools and tech.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Review & Feedback",
    description: "You check the work, and I make revisions if needed.",
  },
  {
    icon: CheckCircle2,
    step: "05",
    title: "Final Delivery",
    description: "Smooth handover with support and guidance after project completion.",
  },
];

const AboutProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              How I Work
            </h2>
            <p className="text-muted-foreground">Simple, clear, and always transparent.</p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative flex items-start gap-6 mb-8 last:mb-0"
              >
                {/* Timeline line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-7 top-14 w-0.5 h-full bg-border"></div>
                )}
                
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors">
                  <div className="text-sm text-primary font-medium mb-1">Step {item.step}</div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProcess;
