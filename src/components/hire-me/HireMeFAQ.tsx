import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 1-2 weeks depending on complexity. Simple landing pages can be ready in 3-5 days, while larger projects with custom features may take 2-3 weeks. I'll give you a clear timeline before we start."
  },
  {
    question: "Do I need technical knowledge?",
    answer: "Not at all! I handle all the technical work. You just need to share your business goals, content, and preferences. I'll guide you through every step in simple, non-technical language."
  },
  {
    question: "Do you help after the project is completed?",
    answer: "Yes! I provide post-launch support to fix any issues and make small adjustments. For ongoing maintenance, I offer affordable monthly packages. Your success is my priority even after delivery."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! In fact, small businesses are my specialty. I understand budget constraints and offer flexible pricing. Whether you're a startup or an established local business, I can create solutions that fit your needs."
  },
  {
    question: "Is there a fixed price or custom pricing?",
    answer: "I offer both options. Simple projects have fixed packages, while custom projects are quoted based on your specific requirements. I always provide a detailed quote upfront with no hidden costs."
  }
];

const HireMeFAQ = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Quick answers to common questions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-foreground font-medium text-left hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMeFAQ;
