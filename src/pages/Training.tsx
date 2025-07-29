import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Home, 
  Shield, 
  Clock,
  CheckCircle,
  BookOpen,
  Plane,
  FileText
} from 'lucide-react';

const TrainingPage = () => {
  const features = [
    {
      icon: Award,
      title: "DGCA Authorisation",
      description: "We offer DGCA authorized Remote pilot Certificate Training under Drone Rules - 2021",
      badge: "Authorized"
    },
    {
      icon: Shield,
      title: "Category",
      description: "Small upto 25kg.",
      badge: "Small Category"
    },
    {
      icon: Users,
      title: "Instructors", 
      description: "DGCA-approved, highly qualified instructors with extensive teaching experience offer personalized one-on-one flying lessons for focused individual attention.",
      badge: "Expert"
    },
    {
      icon: Home,
      title: "Accommodation",
      description: "Accommodation with catering facilities is conveniently located next to the training site at Sri Eshwar Campus.",
      badge: "On-Campus"
    },
    {
      icon: Award,
      title: "Remote Pilot Certificate",
      description: "DGCA Approved Remote Pilot Certificate with Validity of 10 years, as per Drone Rules – 2021.",
      badge: "10 Years Valid"
    },
    {
      icon: BookOpen,
      title: "Theory Classes",
      description: "Comprehensive theoretical knowledge covering regulations, meteorology, navigation, and safety protocols.",
      badge: "Complete Curriculum"
    }
  ];

  const courseModules = [
    {
      title: "Regulations & Legal Framework",
      duration: "8 Hours",
      topics: ["Drone Rules 2021", "DGCA Guidelines", "Airspace Classification", "No-Fly Zones"]
    },
    {
      title: "Meteorology & Navigation",
      duration: "6 Hours", 
      topics: ["Weather Patterns", "Wind Analysis", "GPS Navigation", "Flight Planning"]
    },
    {
      title: "Aircraft Systems & Operations",
      duration: "10 Hours",
      topics: ["Drone Components", "Battery Management", "Pre-flight Checks", "Emergency Procedures"]
    },
    {
      title: "Practical Flight Training",
      duration: "20 Hours",
      topics: ["Manual Flying", "Autonomous Modes", "Precision Landing", "Real-world Scenarios"]
    }
  ];

  const importancePoints = [
    "Legal compliance and adherence to regulations to avoid penalties",
    "Operational and public safety through proper training", 
    "Special permissions to access restricted airspace and expanded operational areas",
    "Setting a benchmark with best practices for industry standards",
    "Enhances the credibility and professionalism of the drone industry"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground">
            DGCA Authorisation No: 21/2024
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Remote Pilot Training <span className="text-gradient">Programme</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive DGCA authorized training program for aspiring drone pilots with hands-on experience
          </p>
        </div>

        {/* Training Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-lift transition-smooth group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary">{feature.badge}</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Course Curriculum */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Course <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive training modules designed by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{module.title}</h3>
                  <Badge className="gradient-primary text-primary-foreground">{module.duration}</Badge>
                </div>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Training <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Step-by-step journey to become a certified drone pilot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "Registration", desc: "Complete enrollment and documentation" },
              { icon: BookOpen, title: "Theory Classes", desc: "Comprehensive classroom training" },
              { icon: Plane, title: "Practical Training", desc: "Hands-on flight experience" },
              { icon: Award, title: "Certification", desc: "DGCA Remote Pilot Certificate" }
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center hover-lift transition-smooth">
                <div className="mx-auto w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                <div className="mt-4 text-primary font-bold">Step {index + 1}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Importance Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Importance of Remote Pilot <span className="text-gradient">Certificate (RPC)</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Why obtaining your RPC is essential for professional drone operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importancePoints.map((point, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="p-8 gradient-hero text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Training?</h3>
            <p className="mb-6 opacity-90">
              Join our comprehensive drone pilot training program and get DGCA certified
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform', '_blank')}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
            >
              Enroll Now →
            </Button>
            <p className="text-sm opacity-75 mt-4">
              Next batch starts: June-11, 16 2025
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;