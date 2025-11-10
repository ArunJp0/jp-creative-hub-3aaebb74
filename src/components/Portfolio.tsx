import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Code2, BarChart3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioProjects = {
  web: [
    {
      title: "Nuxe Beauty Salon",
      description: "Modern salon website with booking system and service showcase",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Code2,
    },
    {
      title: "Adyar Academy",
      description: "Educational platform with course management and student portal",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Code2,
    },
    {
      title: "Personal Portfolio",
      description: "Interactive portfolio with smooth animations and modern design",
      tech: ["React JS", "Tailwind CSS"],
      icon: Code2,
    },
    {
      title: "Sree Vijayalaxme Silk Sarees",
      description: "Full-featured eCommerce platform for traditional silk sarees",
      tech: ["WordPress", "WooCommerce"],
      icon: Code2,
    },
  ],
  data: [
    {
      title: "Zomato Food Delivery Analysis",
      description: "Comprehensive analysis of food delivery patterns and customer behavior",
      tech: ["Excel", "SQL", "Power BI"],
      icon: BarChart3,
    },
    {
      title: "Vehicle Insurance Analysis",
      description: "Insurance claims analysis with predictive insights dashboard",
      tech: ["Power BI", "SQL"],
      icon: BarChart3,
    },
    {
      title: "Ecommerce Sales Analysis",
      description: "Sales performance tracking and optimization recommendations",
      tech: ["SQL", "Python", "Power BI"],
      icon: BarChart3,
    },
    {
      title: "Policy Sales Analysis",
      description: "Insurance policy trends and sales forecasting dashboard",
      tech: ["Power BI", "Excel"],
      icon: BarChart3,
    },
  ],
  marketing: [
    {
      title: "Makeup Artist Campaign",
      description: "Meta Ads campaign achieving 35% conversion rate boost",
      tech: ["Meta Ads", "Analytics"],
      icon: TrendingUp,
    },
    {
      title: "Multi-Domain Marketing",
      description: "Integrated marketing campaigns across multiple business verticals",
      tech: ["Meta Ads", "A/B Testing"],
      icon: TrendingUp,
    },
  ],
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Portfolio
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <Tabs defaultValue="web" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card">
              <TabsTrigger value="web" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Web Projects
              </TabsTrigger>
              <TabsTrigger value="data" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Data Analysis
              </TabsTrigger>
              <TabsTrigger value="marketing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Marketing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioProjects.web.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="data">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioProjects.data.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioProjects.marketing.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isInView }: any) => {
  const Icon = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="w-5 h-5 text-primary" />
          </Button>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
