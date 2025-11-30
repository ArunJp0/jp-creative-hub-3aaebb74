import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "WordPress", "Node.js", "Python"],
  },
  {
    title: "Data Analysis",
    skills: ["SQL", "Power BI", "Excel", "Python", "Data Visualization", "Dashboard Design"],
  },
  {
    title: "Digital Marketing",
    skills: ["Meta Ads", "Google Analytics", "SEO", "Content Strategy", "A/B Testing", "Lead Generation"],
  },
  {
    title: "Design & Tools",
    skills: ["Photoshop", "Illustrator", "Canva", "Figma", "AI Tools", "Automation"],
  },
];

const AboutSkills = () => {
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
              Skills Overview
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSkills;
