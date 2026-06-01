import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Home, 
  Shield, 
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
    <section id="training" className="py-24 bg-transparent text-slate-800 border-b border-slate-100 relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-200/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-sky-50 text-[#0284c7] border border-sky-200/50 py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm">
            DGCA Authorisation No: 21/2024
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
            Remote Pilot Training <span className="text-gradient">Organisation</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive DGCA authorized training program for aspiring drone pilots
          </p>
        </div>

        {/* Training Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card p-8 border-slate-100 hover-lift group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-lg bg-sky-50 group-hover:bg-sky-100 border border-sky-100 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-[#0284c7]" />
                </div>
                <Badge className="bg-slate-100 text-slate-600 border border-slate-200 font-semibold py-1 px-3 text-xs">{feature.badge}</Badge>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">{feature.description}</p>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-[#0284c7] hover:text-[#0369a1] hover:bg-transparent transition-colors font-semibold group-hover:translate-x-1 duration-300"
                onClick={handleKnowMore}
              >
                Know More <span className="ml-1">→</span>
              </Button>
            </Card>
          ))}
        </div>

        {/* Importance Section */}
        <div className="bg-white/55 border border-white/60 rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(31,38,135,0.06)] backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-center mb-16 relative z-10">
            <span className="text-[#0284c7] font-semibold text-xs uppercase tracking-widest">Crucial Legal Requirements</span>
            <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-900">
              Importance of Remote Pilot <span className="text-gradient">Certificate(RPC)</span>
            </h3>
            <p className="text-base text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Why obtaining your RPC is essential for professional drone operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {importancePoints.map((point, index) => (
              <Card key={index} className="glass-card p-6 border-slate-100 hover-lift flex flex-col justify-between">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] font-extrabold text-sm shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CheckCircle className="h-5 w-5 text-green-500 mb-3" />
                    <p className="text-sm text-slate-700 leading-relaxed font-light">{point}</p>
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