import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you work with clients outside India?",
    answer: "Yes, I work with clients globally including UK, UAE, Singapore, and more. Communication is handled through email, video calls, and messaging platforms.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "A simple website takes 5–7 days. Dynamic or eCommerce websites take 10–20 days depending on the complexity and features required.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, I provide maintenance, updates, and marketing support after the project is delivered. Support packages can be customized based on your needs.",
  },
  {
    question: "Can you manage Meta Ads for my business?",
    answer: "Of course. I run targeted Meta Ads campaigns to increase leads and conversions. This includes audience research, ad creation, and performance optimization.",
  },
  {
    question: "Do you build dashboards for businesses?",
    answer: "Yes, I create Power BI and Excel dashboards with clear charts and insights. These help you track performance and make data-driven decisions.",
  },
  {
    question: "What tools do you use?",
    answer: "React.js, JavaScript, Python, SQL, Power BI, Photoshop, Canva, Meta Ads Manager, and various AI tools for automation and efficiency.",
  },
  {
    question: "How do I contact you?",
    answer: "Through email, WhatsApp, call, or the contact form on this website. I typically respond within 24 hours.",
  },
];

const ServicesFAQ = () => {
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
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
