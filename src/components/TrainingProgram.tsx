import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Home, 
  Shield, 
  Clock,
  CheckCircle 
} from 'lucide-react';

const TrainingProgram = () => {
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
    }
  ];

  const importancePoints = [
    "Legal compliance and adherence to regulations to avoid penalties",
    "Operational and public safety through proper training", 
    "Special permissions to access restricted airspace and expanded operational areas",
    "Setting a benchmark with best practices for industry standards",
    "Enhances the credibility and professionalism of the drone industry"
  ];

  const handleKnowMore = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="training" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground">
            DGCA Authorisation No: 21/2024
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Remote Pilot Training <span className="text-gradient">Organisation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive DGCA authorized training program for aspiring drone pilots
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
              <Button 
                variant="ghost" 
                className="mt-4 p-0 h-auto text-primary hover:text-primary-dark"
                onClick={handleKnowMore}
              >
                Know More →
              </Button>
            </Card>
          ))}
        </div>

        {/* Importance Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Importance of Remote Pilot <span className="text-gradient">Certificate(RPC)</span>
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
      </div>
    </section>
  );
};

export default TrainingProgram;