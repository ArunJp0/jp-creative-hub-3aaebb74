import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  LayoutDashboard,
  ShoppingCart,
  Package,
  Factory,
  FileText,
  Users,
  Wallet,
  FileMinus,
  Banknote,
  ListChecks,
  Mail,
  BookOpen,
  Receipt,
  TrendingUp,
  Rocket,
  BarChart3,
  Boxes,
  DollarSign,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const PHONE = "+918072170740";
const PHONE_DISPLAY = "+91 80721 70740";
const WHATSAPP = "https://wa.me/918072170740";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const screenshots = [
  { src: "/lovable-uploads/erp/erpsoftware-1.png", alt: "ERP Dashboard for textile shop" },
  { src: "/lovable-uploads/erp/erpsoftware-2.png", alt: "Sales entry screen for saree store" },
  { src: "/lovable-uploads/erp/erpsoftware-3.png", alt: "Payment voucher and finance module" },
  { src: "/lovable-uploads/erp/erpsoftware-4.png", alt: "Account balance view and ledger" },
  { src: "/lovable-uploads/erp/erpsoftware-5.png", alt: "Envelope cover printing tool" },
  { src: "/lovable-uploads/erp/erpsoftware-6.png", alt: "Daybook and finance reports" },
  { src: "/lovable-uploads/erp/erpsoftware-7.png", alt: "GST invoice bill print format" },
];

const painPoints = [
  "Stock mismatch",
  "Manual billing takes too much time",
  "Difficulty tracking purchases",
  "GST filing confusion",
  "Sales reports are not clear",
  "Missing customer records",
  "No centralized system",
  "Too much dependency on staff",
];

const features = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: ShoppingCart, label: "Sales Entry" },
  { icon: Package, label: "Purchase Entry" },
  { icon: Factory, label: "Jobwork Entry" },
  { icon: FileText, label: "Invoice Bills" },
  { icon: Users, label: "User Management" },
  { icon: Wallet, label: "Payment & Receipt Vouchers" },
  { icon: FileMinus, label: "Credit & Debit Notes" },
  { icon: Banknote, label: "Account Balance View" },
  { icon: ListChecks, label: "Outstanding Balance View" },
  { icon: Mail, label: "Envelope Cover Print" },
  { icon: BookOpen, label: "Daybook" },
  { icon: Receipt, label: "GST Daybook" },
  { icon: TrendingUp, label: "Turnover Reports" },
];

const benefits = [
  { icon: Rocket, label: "Faster Billing" },
  { icon: BarChart3, label: "Better Business Decisions" },
  { icon: Boxes, label: "Accurate Inventory" },
  { icon: DollarSign, label: "Increased Profit Visibility" },
  { icon: Receipt, label: "Easier GST Management" },
  { icon: Users, label: "Better Customer Tracking" },
  { icon: Clock, label: "Save Hours Every Week" },
  { icon: TrendingUp, label: "Real-Time Reports" },
];

const whyUs = [
  "Easy To Use",
  "Minimal Training Required",
  "Affordable Pricing",
  "Fast Support",
  "Custom Features Available",
  "Built For Indian Retail Businesses",
  "Designed For Textile & Saree Shops",
  "Future Ready",
];

const testimonials = [
  {
    name: "Naga Silks, Salem",
    quote:
      "Billing time reduced from 10 minutes to under a minute per invoice. Our counter never holds up customers anymore.",
  },
  {
    name: "Sri Lakshmi Textiles",
    quote:
      "Stock tracking is finally accurate. We immediately know what's selling and what's sitting in the godown.",
  },
  {
    name: "Jaisri Silks, Salem",
    quote:
      "Mistakes in bills and ledger entries have dropped to almost zero. GST filing is no longer a headache.",
  },
  {
    name: "JRR Silks",
    quote:
      "Daily sales, purchase and outstanding reports are now one click away. Our business visibility improved 10x.",
  },
];

const achievements = [
  { value: "1000+", label: "Bills Processed" },
  { value: "99%", label: "Billing Accuracy" },
  { value: "24/7", label: "Business Visibility" },
  { value: "100%", label: "Digital Record Keeping" },
];

const faqs = [
  { q: "Is this software suitable for textile shops?", a: "Yes. The ERP is specifically designed for textile shops, saree stores, garment shops and retail businesses, with workflows that match how Indian retail operates." },
  { q: "Can I manage GST billing?", a: "Yes. GST-compliant invoices, CGST/SGST breakdown, HSN codes, GST daybook and tax reports are all built in." },
  { q: "Can I access reports anytime?", a: "Yes. Since it is a web-based ERP, you can view reports anytime from office, shop, home or mobile." },
  { q: "Can multiple staff use the software?", a: "Yes. The software supports multi-user access with role-based permissions for owners, billing staff, accountants and more." },
  { q: "Is training provided?", a: "Yes. Basic training and onboarding is provided so your team can start using the software confidently from day one." },
  { q: "Can custom features be added?", a: "Yes. Custom modules and features can be developed based on your business workflow." },
  { q: "Is support available after deployment?", a: "Yes. We provide ongoing support to resolve queries and assist with software usage." },
  { q: "Can the software be customized based on our business requirements?", a: "Yes. Basic customizations such as colors, branding, invoice formats and reports can be provided. Advanced or highly complex customizations can also be developed based on your requirements and will be quoted separately." },
  { q: "We are a manufacturer. Can inventory management features be added?", a: "Yes. Additional modules such as Inventory Management, Stock Tracking, Production Tracking and other business-specific features can be added based on your requirements." },
  { q: "Can new features be added in the future?", a: "Absolutely. The ERP software is scalable and new modules or enhancements can be added whenever your business grows." },
];

const Counter = ({ value }: { value: string }) => {
  // Simple display; animation handled by parent fade
  return <span>{value}</span>;
};

const CTAButtons = ({ showQuote = false }: { showQuote?: boolean }) => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_hsl(174_72%_56%/0.4)]"
      asChild
    >
      <a href={`tel:${PHONE}`}>
        <Phone className="mr-2 h-5 w-5" />
        Book Free Demo
      </a>
    </Button>
    <Button
      size="lg"
      variant="outline"
      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
      asChild
    >
      <a href={`tel:${PHONE}`}>
        <Phone className="mr-2 h-5 w-5" />
        Call Now
      </a>
    </Button>
    {showQuote && (
      <Button
        size="lg"
        variant="outline"
        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
        asChild
      >
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 h-5 w-5" />
          Request Pricing
        </a>
      </Button>
    )}
  </div>
);

const ErpSoftwarePage = () => {
  const { toast } = useToast();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", business: "", city: "", message: "" });
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (dir: "left" | "right") => {
    if (!galleryRef.current) return;
    const amount = galleryRef.current.clientWidth * 0.8;
    galleryRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.mobile.trim().length < 10 || !form.business.trim()) {
      toast({ title: "Please fill required fields", description: "Name, valid mobile and business name are required.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Thank you!", description: "We will contact you shortly." });
  };

  return (
    <>
      <Helmet>
        <title>ERP Software For Textile Shops in Salem | Billing, Inventory & GST Management</title>
        <meta name="description" content="ERP Software for Textile Shops, Saree Stores and Retail Businesses. Manage Billing, Inventory, GST, Sales and Reports in one powerful system." />
        <link rel="canonical" href="https://arunjpwork.online/erp-software" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-6">
                <Sparkles className="w-4 h-4" /> Web-Based ERP for Retail Businesses
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
                Stop Managing Your Textile Shop in Excel & Paper Bills
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Manage Billing, Inventory, GST, Purchases, Sales, Customers, Reports, and Stock in One Simple ERP Software.
              </p>
              <CTAButtons />

              {/* Dashboard mockup area */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-16">
                <div className="relative mx-auto max-w-5xl rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm p-2 shadow-[0_0_60px_hsl(174_72%_56%/0.2)]">
                  <img src="/lovable-uploads/erp/erpsoftware-1.png" alt="ERP software dashboard preview for textile shop" className="w-full rounded-xl" loading="eager" />
                </div>
                <p className="mt-6 text-sm text-primary font-medium">
                  Trusted Solution for Textile Shops, Saree Stores & Retail Businesses
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Are You Facing These Problems?</h2>
            </motion.div>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {painPoints.map((p, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.05, duration: 0.5 }} className="p-5 rounded-xl bg-card border border-border/50 hover:border-destructive/40 transition-all duration-300 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{p}</span>
                </motion.div>
              ))}
            </div>
            <motion.p {...fadeInUp} className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
              If these problems sound familiar, our ERP software is built exactly for businesses like yours.
            </motion.p>
            <div className="mt-10"><CTAButtons /></div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Everything You Need To Run Your Business Efficiently</h2>
            </motion.div>
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.04, duration: 0.5 }} className="p-5 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:bg-card-hover transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-3 transition-all">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{f.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.p {...fadeInUp} className="text-center text-muted-foreground mt-10">
              Manage your entire business from a single web-based ERP platform.
            </motion.p>
          </div>
        </section>

        {/* WEB VS DESKTOP */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Choose Web-Based ERP Over Traditional Desktop Software?</h2>
            </motion.div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-card border border-destructive/30">
                <h3 className="text-xl font-bold mb-6 text-foreground">Traditional Desktop Software</h3>
                <ul className="space-y-3">
                  {["Works only on one system", "Difficult remote access", "Manual backups", "Limited accessibility", "Difficult multi-user management"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" /> {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-card border border-primary/40 shadow-[0_0_40px_hsl(174_72%_56%/0.15)]">
                <h3 className="text-xl font-bold mb-6 text-primary">Web-Based ERP</h3>
                <ul className="space-y-3">
                  {["Access from anywhere", "Multi-user support", "Secure cloud-based data", "Real-time updates", "Easy access from office, shop or home", "Better scalability for growing businesses"].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.p {...fadeInUp} className="text-center text-primary font-medium mt-10">
              Run your business anytime, anywhere with a modern web-based ERP solution.
            </motion.p>
          </div>
        </section>

        {/* SCREENSHOT GALLERY */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">See The Software In Action</h2>
              <p className="text-muted-foreground">Real Screens. Real Business Operations.</p>
            </motion.div>
            <div className="relative max-w-6xl mx-auto">
              <button onClick={() => scrollGallery("left")} aria-label="Previous" className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border hover:border-primary items-center justify-center text-primary transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollGallery("right")} aria-label="Next" className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border hover:border-primary items-center justify-center text-primary transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div ref={galleryRef} className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {screenshots.map((s, i) => (
                  <motion.button key={i} onClick={() => setLightbox(i)} {...fadeInUp} transition={{ delay: i * 0.05 }} className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] snap-center rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <div className="overflow-hidden">
                      <img src={s.src} alt={s.alt} loading="lazy" className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3 text-left">
                      <p className="text-xs text-muted-foreground">{s.alt}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO DEMO */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Watch ERP Demo</h2>
            </motion.div>
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_60px_hsl(174_72%_56%/0.15)] bg-card">
              <video src="/lovable-uploads/erp/erpsoftware-video.mp4" controls playsInline preload="metadata" className="w-full aspect-video bg-black" />
            </motion.div>
            <motion.p {...fadeInUp} className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
              In just 60 seconds, see how our ERP software simplifies billing, stock management and business reporting.
            </motion.p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105" asChild>
                <a href={`tel:${PHONE}`}>
                  <Play className="mr-2 h-5 w-5" /> Request Full Demo
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">What You Gain</h2>
            </motion.div>
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((b, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.05, duration: 0.5 }} className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-3 transition-all">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{b.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Businesses Choose Our ERP</h2>
            </motion.div>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
              {whyUs.map((w, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.05, duration: 0.5 }} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{w}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-12"><CTAButtons /></div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">What Business Owners Say</h2>
            </motion.div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.08, duration: 0.5 }} className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                  <p className="text-foreground italic mb-4">"{t.quote}"</p>
                  <p className="text-sm text-primary font-medium">— {t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Built To Simplify Retail Business Operations</h2>
            </motion.div>
            <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((a, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-primary/20">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2"><Counter value={a.value} /></div>
                  <p className="text-muted-foreground text-sm">{a.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border/50 bg-card px-5 data-[state=open]:border-primary/40">
                    <AccordionTrigger className="text-left text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* PRICING QUOTE */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-4">Get Your ERP Pricing Quote</motion.h2>
            <motion.p {...fadeInUp} className="text-muted-foreground mb-8">
              Every business operates differently. Get a personalized ERP quotation based on your business size, users and feature requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105" asChild>
                <a href={`tel:${PHONE}`}><Phone className="mr-2 h-5 w-5" /> Call For Pricing</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105" asChild>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" /> Request Quote</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">No hidden charges. Transparent pricing based on your requirements.</p>
          </div>
        </section>

        {/* TRUST NOTE */}
        <section className="py-16 bg-background">
          <motion.div {...fadeInUp} className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-5">
              <ShieldCheck className="w-4 h-4" /> Trusted by growing businesses
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Built For Businesses That Want To Grow</h2>
            <p className="text-muted-foreground">
              Whether you run a textile shop, saree store, wholesale business or manufacturing unit, our ERP software can be tailored to support your business operations and future growth.
            </p>
          </motion.div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Request a Free Demo</h2>
                <p className="text-muted-foreground">Fill the form and we'll get in touch with a personalized walkthrough.</p>
              </div>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-10 rounded-2xl bg-card border border-primary/40">
                  <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground">Thank you. We will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 p-6 md:p-8 rounded-2xl bg-card border border-border/50">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
                    <Input placeholder="Mobile Number *" type="tel" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} maxLength={15} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Business Name *" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} maxLength={120} />
                    <Input placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} maxLength={80} />
                  </div>
                  <Textarea placeholder="Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-[1.02]">
                    Request Free Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-14 bg-background border-t border-border/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="text-xl font-bold text-foreground">Arunprasath JP</h3>
            <p className="text-primary text-sm mb-6">ERP Software Solutions</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground mb-6">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="w-4 h-4" /> {PHONE_DISPLAY}</a>
              <a href="mailto:prasathjp95@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="w-4 h-4" /> prasathjp95@gmail.com</a>
              <a href="https://arunjpwork.online" className="hover:text-primary transition-colors">arunjpwork.online</a>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Helping Textile Shops & Retail Businesses Manage Operations Smarter.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-6">© {new Date().getFullYear()} Arunprasath JP. All rights reserved.</p>
          </div>
        </footer>

        {/* LIGHTBOX */}
        <Dialog open={lightbox !== null} onOpenChange={(o) => !o && setLightbox(null)}>
          <DialogContent className="max-w-5xl bg-card border-primary/30 p-2">
            {lightbox !== null && (
              <div className="relative">
                <img src={screenshots[lightbox].src} alt={screenshots[lightbox].alt} className="w-full max-h-[80vh] object-contain rounded-lg" />
                <div className="flex justify-between items-center mt-3 px-2">
                  <button onClick={() => setLightbox((lightbox - 1 + screenshots.length) % screenshots.length)} className="p-2 rounded-full hover:bg-primary/10 text-primary"><ChevronLeft className="w-5 h-5" /></button>
                  <p className="text-sm text-muted-foreground">{screenshots[lightbox].alt}</p>
                  <button onClick={() => setLightbox((lightbox + 1) % screenshots.length)} className="p-2 rounded-full hover:bg-primary/10 text-primary"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Floating mobile CTA */}
        <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 md:hidden">
          <a href={`tel:${PHONE}`} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-glow">
            <Phone className="w-4 h-4" /> Call
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-card border border-primary text-primary font-medium">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </main>
    </>
  );
};

export default ErpSoftwarePage;
