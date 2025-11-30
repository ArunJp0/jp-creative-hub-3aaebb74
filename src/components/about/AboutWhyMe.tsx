import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Cpu, Search, DollarSign, HeadphonesIcon, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Multi-Skilled Freelancer",
    description: "Web development, digital marketing, data analysis, and graphic design in one place",
  },
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    description: "Smart chatbots, automations, and data-driven workflows",
  },
  {
    icon: Search,
    title: "SEO-Friendly Websites",
    description: "Optimized for ranking in Tamil Nadu, Chennai, and Salem",
  },
  {
    icon: DollarSign,
    title: "Affordable & Professional",
    description: "Quality work without agency-level pricing",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    description: "From idea to launch + after-delivery assistance",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Regular updates, honest timelines, and clean project flow",
  },
];

const AboutWhyMe = () => {
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
              Why Choose Me
            </h2>
            <p className="text-muted-foreground">You get a full digital partner — not just a service.</p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWhyMe;
