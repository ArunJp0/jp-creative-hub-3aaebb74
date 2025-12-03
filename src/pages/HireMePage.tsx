import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, TrendingUp, Palette, BarChart3, Star, Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const HireMePage = () => {
  const services = [
    { icon: Globe, text: "Websites that convert (static, dynamic, WordPress, ecommerce)" },
    { icon: Target, text: "Basic SEO setup so customers can find you" },
    { icon: TrendingUp, text: "Digital marketing that attracts real leads" },
    { icon: Palette, text: "Brand design & visuals that build trust" },
    { icon: BarChart3, text: "Power BI dashboards & data insights to improve decisions" }
  ];

  const problems = [
    {
      problem: "Your website exists, but nobody contacts you",
      outcome: "A high-converting website that generates consistent inquiries"
    },
    {
      problem: "You don't know how to promote your business online",
      outcome: "A complete marketing system to drive traffic, engagement, and conversions"
    },
    {
      problem: "You can't measure your performance",
      outcome: "Dashboards and analytics that clearly show what's working"
    }
  ];

  const testimonials = [
    {
      quote: "Our salon website helped us increase inquiries by 65% in the first 30 days.",
      author: "Nuxe Beauty Salon"
    },
    {
      quote: "The Meta ads campaign improved conversions by 35%. We finally know what works.",
      author: "Makeup Artist Client"
    },
    {
      quote: "The dashboard helped us understand our sales patterns and make smarter decisions.",
      author: "International Power BI Client"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hire Arunprasath JP - Freelance Web Developer & Digital Marketer | Get Results</title>
        <meta name="description" content="Need a website or digital strategy that brings results? I help businesses get more leads, clients, and sales using modern websites, digital marketing, and data-driven strategies." />
        <meta name="keywords" content="hire freelance web developer, web developer Salem, digital marketing Tamil Nadu, website development India, business growth online" />
        <link rel="canonical" href="https://arunjpwork.online/hire-me" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* SECTION 1 - HERO */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.92), rgba(17, 24, 39, 0.98)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="container mx-auto px-4 py-20 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight max-w-4xl mx-auto"
              >
                Need a Website or Digital Strategy That Actually Brings Results?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto"
              >
                I help businesses get more leads, clients, and sales using modern websites, digital marketing, and data-driven online strategies.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm text-primary mb-10"
              >
                Based in Tamil Nadu | Serving clients across India & Internationally
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://calendly.com/arunprasath-jp/30min" target="_blank" rel="noopener noreferrer">
                    🚀 Book a Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:arunprasath.jp@outlook.com">
                    📩 Get a Quote
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* SECTION 2 - WHO AM I */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Who Am I?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm <span className="text-primary font-semibold">Arunprasath JP</span>, a freelance tech professional specializing in creating online solutions that help businesses grow. I develop websites, build digital marketing systems, and use data to improve performance — so you don't just look good online, <span className="text-primary">you win online</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - WHAT I DO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                What Can I Do for Your Business?
              </h2>
              <p className="text-muted-foreground text-lg">
                Not just tasks — <span className="text-primary">strategies that deliver results</span>.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto space-y-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-card-hover transition-all duration-300 border border-border/50 hover:border-primary/30 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span className="text-foreground">{service.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 - PROBLEMS I SOLVE */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                I Don't Sell Services — I Solve Problems.
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid gap-6">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-destructive text-xl">✗</span>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Problem</p>
                      <p className="text-foreground">{item.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Outcome</p>
                      <p className="text-primary">{item.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 - TESTIMONIALS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Trusted by Businesses
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 - THE OFFER */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to Scale Your Business Online?
              </h2>
              <p className="text-muted-foreground mb-6">
                Get a free 20-minute call where I'll analyze your business and give you a clear roadmap — even if you don't work with me.
              </p>
              <p className="text-primary font-medium mb-8">
                No pressure. No selling. Just value.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_hsl(174_72%_56%/0.5)]"
                asChild
              >
                <a href="https://calendly.com/arunprasath-jp/30min" target="_blank" rel="noopener noreferrer">
                  🔥 Schedule Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 - FINAL CTA */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                Let's Build Something That Works.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://calendly.com/arunprasath-jp/30min" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    🚀 Book Call
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://wa.me/919500414428" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    💬 Send Inquiry on WhatsApp
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No spam. No pushy sales. You only get honest guidance.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HireMePage;
