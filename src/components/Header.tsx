import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Training Program', href: '#training' },
    { name: 'RPC Holders', href: '#rpc' },
    { name: 'DGCA', href: '#dgca' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="font-semibold">Upcoming batch: June-11, 16 2025</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+917418245899" className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
              <Phone className="h-3 w-3" />
              +91 74182 45899
            </a>
            <a href="mailto:dronetech@sece.ac.in" className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors">
              <Mail className="h-3 w-3" />
              dronetech@sece.ac.in
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Kinathukadavu, Coimbatore-641202
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-card' : 'bg-background'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button 
                className="hidden sm:flex gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform', '_blank')}
              >
                Enroll Now →
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                    <Button 
                      className="gradient-primary hover:opacity-90 transition-opacity mt-4"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform', '_blank')}
                    >
                      Enroll Now →
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;