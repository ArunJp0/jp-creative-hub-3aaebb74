import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BarChart3, Palette, TrendingUp, Bot } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Python", "Node.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    skills: ["Power BI", "SQL", "Python", "MS Excel"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    skills: ["Photoshop", "Illustrator", "Canva"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    skills: ["Meta Ads", "Campaign Optimization", "A/B Testing"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Bot,
    title: "AI Tools",
    skills: ["Chatbot Development", "Process Automation"],
    color: "from-teal-500 to-cyan-500",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
