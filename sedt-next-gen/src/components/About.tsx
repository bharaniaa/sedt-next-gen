import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users } from 'lucide-react';
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
    <section id="about" className="py-24 bg-transparent text-slate-800 border-b border-slate-100 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-[#0284c7] font-semibold text-sm uppercase tracking-widest">Pioneering Drone Excellence</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-slate-900">
                About <span className="text-gradient">Us</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Sri Eshwar Drone Tech Pvt Ltd is a premier drone technology and training organization 
              dedicated to transforming industries and individuals with cutting-edge drone solutions 
              and comprehensive training.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              With a focus on innovation, safety, and client-centric solutions, we specialize in 
              designing, developing, and deploying drones tailored for agriculture, infrastructure 
              inspection, surveillance, mapping, environmental monitoring, and more.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We are proud to be a certified Remote Pilot Training Organization (RPTO), recognized 
              by the Directorate General of Civil Aviation (DGCA). Our certification courses are 
              tailored to meet industry standards, ensuring hands-on experience in drone operations, 
              regulatory compliance, safety protocols, and airspace management.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 pt-4">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card p-5 hover-lift group border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-all duration-300">
                    <feature.icon className="h-5 w-5 text-[#0284c7]" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-base">{feature.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>

            <Button 
              onClick={handleKnowMore}
              className="gradient-primary text-white text-base px-6 py-5 hover-lift font-medium"
            >
              Know More →
            </Button>
          </div>

          {/* Image */}
          <div className="relative lg:pl-6">
            {/* Custom glowing background ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-sky-200 to-indigo-100 rounded-2xl blur-lg opacity-40 z-0"></div>
            
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-10 group">
              <img 
                src={droneImage} 
                alt="Professional Drone Training" 
                className="w-full h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-40"></div>
            </div>
            
            {/* Floating Glassmorphic Badges */}
            <Card className="absolute -bottom-6 -right-6 glass-card p-6 border-slate-200 shadow-[0_15px_35px_rgba(0,0,0,0.08)] z-20 hover-lift">
              <div className="text-xs text-[#0284c7] uppercase tracking-wider font-semibold mb-1">RPTO AUTHORIZED</div>
              <div className="text-2xl font-extrabold text-slate-900">DGCA Approved</div>
              <div className="text-xs text-slate-500 mt-1 font-light">Authorisation No: 21/2024</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;