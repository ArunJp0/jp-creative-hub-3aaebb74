import { Mail, Phone, Github } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              AJ
            </Link>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Freelance Web Developer, Data Analyst & Digital Marketer based in Tamil Nadu, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:prasathjp95@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                prasathjp95@gmail.com
              </a>
              <a
                href="tel:+918072170740"
                className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +91 8072170740
              </a>
              <a
                href="https://github.com/ArunJp0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Arunprasath JP. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Freelance Web Developer in Salem, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
