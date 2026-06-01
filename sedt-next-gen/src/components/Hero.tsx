import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, MessageCircle } from 'lucide-react';
import Marquee from './ui/Marquee';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-16">
      {/* Futuristic Grid blueprint background pattern in light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Soft Light Mode Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-gradient-to-tr from-sky-200/30 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-bl from-indigo-200/30 to-transparent rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-slate-900">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
            Make Your <br />
            <span className="relative inline-block mt-4 px-6 py-2 rounded-2xl border border-sky-200/60 bg-white/60 backdrop-blur-md shadow-[0_8px_32px_rgba(14,165,233,0.06)]">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#0369a1] tracking-tight">
                Career as Drone Pilot
              </span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-slate-600 max-w-2xl mx-auto animate-slide-up leading-relaxed font-light">
            Transform your future with <span className="text-[#0284c7] font-semibold">DGCA certified</span> drone pilot training at Sri Eshwar Drone Tech. Elevate your skills to the skies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
            <Button 
              size="lg" 
              className="gradient-primary text-white text-lg px-8 py-4 hover-lift font-semibold shadow-[0_4px_20px_rgba(14,165,233,0.3)]"
              onClick={handleEnrollClick}
            >
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-button text-lg px-8 py-4 hover-lift font-semibold"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>

          {/* Frosted Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">
            <Card className="glass-card p-6 hover-lift">
              <div className="text-3xl font-extrabold text-[#0284c7] mb-1">DGCA</div>
              <div className="text-sm font-semibold text-slate-600">Authorized Training</div>
            </Card>
            <Card className="glass-card p-6 hover-lift">
              <div className="text-3xl font-extrabold text-[#0284c7] mb-1">10 Years</div>
              <div className="text-sm font-semibold text-slate-600">Certificate Validity</div>
            </Card>
            <Card className="glass-card p-6 hover-lift">
              <div className="text-3xl font-extrabold text-[#0284c7] mb-1">25kg</div>
              <div className="text-sm font-semibold text-slate-600">Small Category Drones</div>
            </Card>
          </div>
          <Marquee />
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-110 animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;