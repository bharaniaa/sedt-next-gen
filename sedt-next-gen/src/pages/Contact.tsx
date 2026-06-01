import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  User,
  FileText
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:dronetech@sece.ac.in?subject=Inquiry from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your drone pilot journey? Get in touch with us today for more information about our training programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <Input
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea
                    placeholder="Tell us about your interest in drone pilot training..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gradient-primary">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
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
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch Directly</h2>
              <p className="text-muted-foreground mb-6">
                Reach out to us through any of these convenient methods
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover-lift transition-smooth cursor-pointer group" onClick={() => handleQuickContact(info.action)}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

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

            {/* Map */}
            <Card className="p-0 overflow-hidden hover-lift transition-smooth">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sri Eshwar Campus</h3>
                  <p className="text-muted-foreground mb-4">Kinathukadavu, Coimbatore-641202</p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            </Card>

            {/* Office Hours */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mb-20">
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
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long is the training program?",
                answer: "Our comprehensive training program typically takes 3-4 weeks including theory and practical sessions."
              },
              {
                question: "What is the minimum age requirement?",
                answer: "The minimum age requirement for RPC certification is 18 years as per DGCA regulations."
              },
              {
                question: "Do you provide accommodation?",
                answer: "Yes, we provide accommodation with catering facilities at Sri Eshwar Campus for outstation students."
              },
              {
                question: "What is the success rate?",
                answer: "We maintain a 100% success rate in RPC certification with our comprehensive training program."
              },
              {
                question: "How much does the training cost?",
                answer: "Please contact us for detailed fee structure. We offer competitive pricing with flexible payment options."
              },
              {
                question: "Is the certificate valid internationally?",
                answer: "The RPC is valid in India. For international operations, additional permissions may be required."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth">
                <h4 className="font-semibold mb-3 text-lg">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;