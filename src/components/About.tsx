import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Award, Users } from 'lucide-react';
import droneImage from '@/assets/drone-flight.jpg';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "DGCA Certified",
      description: "Authorized Remote Pilot Training Organization recognized by DGCA"
    },
    {
      icon: Award,
      title: "Expert Instructors", 
      description: "Highly qualified DGCA-approved instructors with extensive experience"
    },
    {
      icon: Users,
      title: "Comprehensive Training",
      description: "Complete training program covering theory, practical, and safety protocols"
    }
  ];

  const handleKnowMore = () => {
    const element = document.querySelector('#training');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                About <span className="text-gradient">Us</span>
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sri Eshwar Drone Tech Pvt Ltd is a premier drone technology and training organization 
              dedicated to transforming industries and individuals with cutting-edge drone solutions 
              and comprehensive training.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a focus on innovation, safety, and client-centric solutions, we specialize in 
              designing, developing, and deploying drones tailored for agriculture, infrastructure 
              inspection, surveillance, mapping, environmental monitoring, and more.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We are proud to be a certified Remote Pilot Training Organization (RPTO), recognized 
              by the Directorate General of Civil Aviation (DGCA). Our certification courses are 
              tailored to meet industry standards, ensuring hands-on experience in drone operations, 
              regulatory compliance, safety protocols, and airspace management.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 hover-lift transition-smooth">
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>

            <Button 
              onClick={handleKnowMore}
              className="gradient-primary hover:opacity-90 transition-opacity"
            >
              Know More →
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={droneImage} 
                alt="Professional Drone Training" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-20"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 hover-lift">
              <div className="text-2xl font-bold">RPTO</div>
              <div className="text-sm opacity-90">DGCA Authorized</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;