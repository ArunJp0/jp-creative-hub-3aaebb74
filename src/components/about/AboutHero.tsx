import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20"></div>
              <img
                src={profileImg}
                alt="Arunprasath - Freelance Web Developer and Digital Creator"
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover object-center border-4 border-primary shadow-glow"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Me – Web Developer & Digital Creator
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a freelance web developer and digital creator from Salem, Tamil Nadu, helping businesses grow through modern development, data analysis, design, and marketing.
            </p>

            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border mb-8 text-left">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-foreground">Education</h3>
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium text-foreground">B.Tech in Information Technology</span>
                  <br />
                  RVS College of Engineering and Technology (2016)
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
              asChild
            >
              <a 
                href="/Arunprasath_JP_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download="Arunprasath_JP_Resume.pdf"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
