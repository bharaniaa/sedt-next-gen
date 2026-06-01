import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { submitContact } from '@/lib/api';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call us Now!",
      details: ["+91 7418245899", "+91 9500635060"],
      action: "tel:+917418245899"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["dronetech@sece.ac.in"],
      action: "mailto:dronetech@sece.ac.in"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kinathukadavu", "Coimbatore-641202"],
      action: "https://maps.google.com"
    }
  ];

  const handleQuickContact = (action: string) => {
    if (action.startsWith('tel:') || action.startsWith('mailto:')) {
      window.location.href = action;
    } else {
      window.open(action, '_blank');
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917418245899?text=Hello! I would like to know more about the drone pilot training program.', '_blank');
  };

  const handleEnroll = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform', '_blank');
  };

  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await submitContact(form);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-slate-800 border-t border-slate-100 relative overflow-hidden">
      {/* Soft light glows in background */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-sky-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-sky-50 text-[#0284c7] border border-sky-200/50 py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm">
            Small Category Training
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Get in touch with us to start your drone pilot journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="glass-card p-8 border-slate-100 shadow-[0_20px_50px_rgba(31,38,135,0.06)]">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-wide">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  className="w-full p-4 rounded-lg glass-input focus:outline-none focus:ring-0 text-sm placeholder:text-slate-400"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full p-4 rounded-lg glass-input focus:outline-none focus:ring-0 text-sm placeholder:text-slate-400"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full p-4 rounded-lg glass-input focus:outline-none focus:ring-0 text-sm placeholder:text-slate-400"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone (optional)"
                  value={form.phone}
                  onChange={handleChange}
                />
                <textarea
                  className="w-full p-4 rounded-lg glass-input focus:outline-none focus:ring-0 text-sm placeholder:text-slate-400"
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
                <Button 
                  type="submit" 
                  className="w-full gradient-primary hover:opacity-90 transition-opacity font-semibold py-4 text-white text-base hover-lift shadow-[0_4px_20px_rgba(14,165,233,0.3)]" 
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
                {success && <p className="text-green-600 font-medium text-sm mt-3 animate-pulse">Message sent successfully!</p>}
                {error && <p className="text-red-600 font-medium text-sm mt-3 animate-pulse">{error}</p>}
              </form>
            </Card>

            {/* Quick Response Promise */}
            <Card className="glass-card p-6 border-sky-100 shadow-[0_8px_32px_rgba(31,38,135,0.05)]">
              <div className="flex items-center space-x-5">
                <div className="p-3 rounded-full bg-sky-50 border border-sky-100 text-[#0284c7] shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Quick Response!</h3>
                  <p className="text-sm text-slate-600">We just need a couple of hours!</p>
                  <p className="text-xs text-slate-400 font-light mt-1">No more than 1 working day since receiving your request.</p>
                </div>
              </div>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="bg-green-50/70 border border-green-200 shadow-sm p-6 hover-lift rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-xl bg-green-500 text-white border border-green-400/30 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-800">WhatsApp Support</h3>
                    <p className="text-sm text-green-600 font-light">Chat with us instantly for queries</p>
                  </div>
                </div>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover-lift shadow-[0_4px_15px_rgba(34,197,94,0.2)] w-full sm:w-auto"
                >
                  Chat Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Map and CTA */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <Card className="p-0 overflow-hidden hover-lift border-slate-100 shadow-[0_20px_50px_rgba(31,38,135,0.06)] bg-white/40 rounded-2xl">
              <div className="h-72 bg-gradient-to-br from-sky-50 via-white to-[#f8fafc] flex items-center justify-center relative">
                {/* Visual tech lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                
                <div className="text-center relative z-10 p-6">
                  <div className="w-14 h-14 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(14,165,233,0.1)] animate-bounce">
                    <MapPin className="h-7 w-7 text-[#0284c7]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Sri Eshwar Campus</h3>
                  <p className="text-sm text-slate-500 font-light max-w-xs mx-auto">Kinathukadavu, Coimbatore-641202, Tamil Nadu</p>
                  <Button 
                    variant="outline" 
                    className="glass-button mt-5 px-6"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            </Card>

            {/* Enrollment CTA */}
            <Card className="p-8 text-center bg-gradient-to-tr from-slate-50 via-sky-50 to-slate-50 border border-slate-200 rounded-2xl shadow-[0_20px_50px_rgba(14,165,233,0.06)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to Get Started?</h3>
                <p className="mb-6 text-sm text-slate-600 font-light max-w-sm mx-auto leading-relaxed">
                  Join our next batch and become a certified drone pilot with official DGCA authorization
                </p>
                <Button 
                  size="lg"
                  onClick={handleEnroll}
                  className="gradient-primary text-white font-bold text-base px-8 py-4 shadow-[0_4px_25px_rgba(14,165,233,0.35)] hover-lift"
                >
                  Enroll Now →
                </Button>
                <p className="text-xs text-[#0284c7] mt-4 font-semibold tracking-wider">
                  Next batch starts: June-11, 16 2025
                </p>
              </div>
            </Card>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card p-5 text-center border-slate-100">
                <div className="text-3xl font-extrabold text-[#0284c7] mb-1">24/7</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Support Available</div>
              </Card>
              <Card className="glass-card p-5 text-center border-slate-100">
                <div className="text-3xl font-extrabold text-[#0284c7] mb-1">100%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Success Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;