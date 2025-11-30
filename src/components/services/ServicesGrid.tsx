import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, TrendingUp, BarChart3, Palette, Cpu, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building static, dynamic, and eCommerce websites with AI integrations. SEO-friendly and mobile-responsive designs.",
    features: [
      "HTML, CSS, JavaScript websites",
      "React.js & WordPress development",
      "eCommerce with WooCommerce",
      "Landing pages & portfolios",
      "Website maintenance & updates",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights with interactive dashboards and comprehensive reports.",
    features: [
      "Power BI dashboards",
      "SQL queries & database analysis",
      "Excel automation & reports",
      "Sales & performance tracking",
      "Data visualization",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Create stunning visuals that capture attention and communicate your brand message effectively.",
    features: [
      "Ad creatives & banners",
      "Social media graphics",
      "Brand identity design",
      "Marketing collaterals",
      "UI/UX design",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Grow your business visibility and generate leads with targeted marketing campaigns.",
    features: [
      "Meta Ads management",
      "Campaign optimization",
      "Audience targeting",
      "A/B testing",
      "Conversion tracking",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Solutions",
    description: "Leverage AI tools for smarter automation, chatbots, and data-driven workflows.",
    features: [
      "AI chatbot integration",
      "Process automation",
      "AI content generation",
      "Smart analytics",
      "Workflow optimization",
    ],
    gradient: "from-indigo-500 to-violet-500",
  },
];

const ServicesGrid = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow h-full flex flex-col">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 self-start group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
