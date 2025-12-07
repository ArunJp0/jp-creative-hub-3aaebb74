import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const portfolioImages = [
  { id: 1, src: "/lovable-uploads/digital-marketing-results.webp", alt: "Salon client website project – web development project in salem" },
  { id: 2, src: "/lovable-uploads/ecommerce-website-project.webp", alt: "Education website project – Freelance web development in salem" },
  { id: 3, src: "/lovable-uploads/portfolio-website-react.webp", alt: "Professional react portfolio website in Tamil Nadu" },
  { id: 4, src: "/lovable-uploads/powerbi-dashboard-analysis.webp", alt: "Power BI dashboard created for international client – data analysis project" },
  { id: 5, src: "/lovable-uploads/salem-website-development-client.webp", alt: "Construction website development in salem" },
  { id: 6, src: "/lovable-uploads/web-developmet-in-salem.webp", alt: "Education website development in chennai" },
];

const HireMePortfolioGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Recent Work & Portfolio Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some websites and digital solutions built for clients across Tamil Nadu and India.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden md:flex ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden md:flex ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 md:px-10 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="w-[300px] md:w-[400px] overflow-hidden rounded-xl bg-card border border-border/50 shadow-lg hover:shadow-[0_0_30px_hsl(174_72%_56%/0.15)] transition-all duration-300 group">
                  <div className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[200px] md:h-[250px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            <span className="text-sm text-muted-foreground">← Swipe to explore →</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMePortfolioGallery;
