import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-building.jpg';
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleEnrollClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform', '_blank');
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917418245899', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Make Your <br />
            <span className="text-gradient">Career as Drone Pilot</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up">
            Transform your future with DGCA certified drone pilot training at Sri Eshwar Drone Tech
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-4 hover-lift"
              onClick={handleEnrollClick}
            >
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 text-lg px-8 py-4 hover-lift"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover-lift">
              <div className="text-3xl font-bold mb-2">DGCA</div>
              <div className="text-sm opacity-90">Authorized Training</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover-lift">
              <div className="text-3xl font-bold mb-2">10 Years</div>
              <div className="text-sm opacity-90">Certificate Validity</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover-lift">
              <div className="text-3xl font-bold mb-2">25kg</div>
              <div className="text-sm opacity-90">Small Category Drones</div>
            </Card>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-elegant transition-all duration-300 hover:scale-110 animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;