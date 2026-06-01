import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Award, Users, Calendar, MapPin } from 'lucide-react';
import droneImage from '@/assets/drone-flight.jpg';

const AboutPage = () => {
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

  const achievements = [
    "Premier drone technology and training organization",
    "DGCA certified Remote Pilot Training Organization (RPTO)",
    "Specialized in agriculture, infrastructure, surveillance & mapping",
    "10+ years of industry experience",
    "100% success rate in certification"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground">
            About Sri Eshwar Drone Tech
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Industries with <span className="text-gradient">Drone Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the future of drone education and technology solutions across multiple industries
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our <span className="text-gradient">Mission</span>
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

            {/* Achievements */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-semibold">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-lift transition-smooth text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-3 text-xl">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Impact</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Making a difference in the drone industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">25kg</div>
              <div className="text-sm text-muted-foreground">Max Drone Weight</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;