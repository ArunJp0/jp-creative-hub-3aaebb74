import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Arun built our website exactly the way we imagined. Clean design, fast loading, and very professional communication. He handled everything from layout to mobile optimisation. One of the best website freelancers in Tamil Nadu.",
    author: "Meera R.",
    role: "Salon Owner",
    category: "Website Development",
  },
  {
    quote: "His Meta Ads management improved our lead flow by 35%. The ad creatives were beautiful and the audience targeting was perfect. If you need a digital marketer in Chennai, he's the right choice.",
    author: "Sahana Beauty Studio",
    role: "Beauty & Wellness",
    category: "Digital Marketing",
  },
  {
    quote: "Arun delivered a detailed Power BI dashboard for our sales team. Clear charts, logical structure, and fast delivery. His data analysis skills helped us understand trends we never saw before. Great experience working with him.",
    author: "Shan C.",
    role: "UK-based Client",
    category: "Data Analysis",
  },
  {
    quote: "He helped us with a full website setup, branding, and graphics. Everything was smooth and stress-free. Highly recommended for anyone looking for a reliable freelance web developer in Salem.",
    author: "Vijay S.",
    role: "Retail Business Owner",
    category: "Website + Branding",
  },
];

const PortfolioTestimonials = () => {
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
              Client Testimonials
            </h2>
            <p className="text-muted-foreground">What my clients say about working with me</p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioTestimonials;
