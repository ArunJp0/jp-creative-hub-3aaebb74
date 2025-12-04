import { Mail, Phone, Github, Instagram } from "lucide-react";

const HireMeFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
            AJ
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a
              href="mailto:prasathjp95@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              prasathjp95@gmail.com
            </a>
            <a
              href="tel:+918072170740"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              +91 80721 70740
            </a>
            <a
              href="https://github.com/ArunJp0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.instagram.com/aruni_digital9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Arunprasath JP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HireMeFooter;
