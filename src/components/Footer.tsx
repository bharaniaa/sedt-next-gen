
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, Twitter, ArrowUp } from "lucide-react";
import Logo from '@/components/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Training Program', href: '#training' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="h-12" />
            <p className="text-background/80 leading-relaxed">
              Premier drone technology and training organization dedicated to transforming
              industries with cutting-edge drone solutions.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-background/80">DGCA Authorized RPTO</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:+917418245899"
                className="flex items-center space-x-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 74182 45899</span>
              </a>
              <a
                href="mailto:dronetech@sece.ac.in"
                className="flex items-center space-x-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>dronetech@sece.ac.in</span>
              </a>
              <div className="flex items-start space-x-3 text-background/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Kinathukadavu,<br />
                  Coimbatore-641202
                </span>
              </div>

              {/* Social Media Icons */}
              <div className=" items-center space-x-4 pt-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Training Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Training Info</h3>
            <div className="space-y-3">
              <Card className="bg-primary text-primary-foreground p-3">
                <div className="text-sm font-medium">Next Batch</div>
                <div className="text-lg font-bold">June-11, 16 2025</div>
              </Card>
              <div className="text-background/80">
                <div className="text-sm">Category: Small (up to 25kg)</div>
                <div className="text-sm">Duration: Comprehensive Program</div>
                <div className="text-sm">Certificate: 10 Years Validity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Sri Eshwar Drone Tech. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-background/60 text-sm">DGCA Authorisation No: 21/2024</span>
              <Button
                size="sm"
                variant="outline"
                onClick={scrollToTop}
                className="border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;