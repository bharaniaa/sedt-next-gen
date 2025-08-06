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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground">
            Small Category
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to start your drone pilot journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full p-3 rounded border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full p-3 rounded border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full p-3 rounded border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone (optional)"
                  value={form.phone}
                  onChange={handleChange}
                />
                <textarea
                  className="w-full p-3 rounded border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
                {success && <p className="text-green-600 mt-2">Message sent successfully!</p>}
                {error && <p className="text-red-600 mt-2">{error}</p>}
              </form>
            </Card>

            {/* Quick Response Promise */}
            <Card className="p-6 gradient-primary text-primary-foreground">
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Quick Response!</h3>
                  <p className="opacity-90">We just need a couple of hours!</p>
                  <p className="text-sm opacity-80">No more than 1 working day since receiving your request.</p>
                </div>
              </div>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="p-6 bg-green-50 border-green-200 hover-lift transition-smooth">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-green-500 text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-700">WhatsApp</h3>
                    <p className="text-green-600">Chat with us instantly</p>
                  </div>
                </div>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Chat Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Map and CTA */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <Card className="p-0 overflow-hidden hover-lift transition-smooth">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sri Eshwar Campus</h3>
                  <p className="text-muted-foreground">Kinathukadavu, Coimbatore-641202</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            </Card>

            {/* Enrollment CTA */}
            <Card className="p-8 text-center gradient-hero text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Join our next batch and become a certified drone pilot with DGCA authorization
              </p>
              <Button 
                size="lg"
                onClick={handleEnroll}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              >
                Enroll Now →
              </Button>
              <p className="text-sm opacity-75 mt-4">
                Next batch starts: June-11, 16 2025
              </p>
            </Card>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;