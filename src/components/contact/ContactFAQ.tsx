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
    question: "What is your typical response time?",
    answer: "I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call or WhatsApp me directly.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, I offer a free initial consultation to understand your project requirements and discuss how I can help.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept bank transfers, UPI payments, and PayPal for international clients. Payment terms are discussed after project scoping.",
  },
  {
    question: "Can we have a video call to discuss my project?",
    answer: "Absolutely! I'm happy to schedule a video call via Google Meet or Zoom to discuss your project in detail.",
  },
];

const ContactFAQ = () => {
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
              Quick Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
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

export default ContactFAQ;
