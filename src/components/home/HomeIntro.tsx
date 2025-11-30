import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HomeIntro = () => {
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
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Your Digital Partner
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a full-time freelancer passionate about creating websites, analyzing data, 
            designing visuals, and enhancing digital visibility — powered by AI tools for 
            smarter automation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a strong foundation in technology and creative problem-solving, 
            I help businesses in Tamil Nadu, Chennai, Salem, and across the world 
            transform their digital presence and make data-driven decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeIntro;
