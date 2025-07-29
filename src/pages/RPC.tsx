import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  FileText, 
  Calendar, 
  Users, 
  CheckCircle,
  Download,
  ExternalLink,
  Clock
} from 'lucide-react';

const RPCPage = () => {
  const rpcBenefits = [
    {
      icon: FileText,
      title: "Legal Authorization",
      description: "Official permission to operate drones commercially under DGCA regulations"
    },
    {
      icon: Award,
      title: "Professional Credibility", 
      description: "Industry-recognized certification that enhances your professional profile"
    },
    {
      icon: CheckCircle,
      title: "Extended Privileges",
      description: "Access to restricted airspace and expanded operational areas"
    },
    {
      icon: Users,
      title: "Career Opportunities",
      description: "Opens doors to various industries requiring certified drone pilots"
    }
  ];

  const certificationProcess = [
    {
      step: "1",
      title: "Eligibility Check",
      description: "Minimum 18 years age, 10th standard education",
      duration: "1 Day"
    },
    {
      step: "2", 
      title: "Ground Training",
      description: "Theory classes on regulations, meteorology, navigation",
      duration: "25 Hours"
    },
    {
      step: "3",
      title: "Flying Training", 
      description: "Practical flight training with certified instructors",
      duration: "20 Hours"
    },
    {
      step: "4",
      title: "DGCA Examination",
      description: "Written and practical examination by DGCA",
      duration: "1 Day"
    },
    {
      step: "5",
      title: "Certificate Issuance",
      description: "Receive official RPC with 10-year validity",
      duration: "7-14 Days"
    }
  ];

  const rpcHolderStats = [
    { number: "500+", label: "RPC Holders Trained" },
    { number: "100%", label: "Success Rate" },
    { number: "10", label: "Years Validity" },
    { number: "25kg", label: "Max Drone Weight" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground">
            DGCA Certified Training
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Remote Pilot <span className="text-gradient">Certificate (RPC)</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your official DGCA Remote Pilot Certificate and unlock professional drone operations
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {rpcHolderStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover-lift transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* What is RPC */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is <span className="text-gradient">RPC?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Remote Pilot Certificate is a mandatory license issued by DGCA for operating drones commercially in India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 gradient-hero text-white">
                <h3 className="text-2xl font-bold mb-4">RPC Authorization Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Authorization Number:</span>
                    <span className="font-semibold">21/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="font-semibold">Small (up to 25kg)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Validity:</span>
                    <span className="font-semibold">10 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Issuing Authority:</span>
                    <span className="font-semibold">DGCA, India</span>
                  </div>
                </div>
              </Card>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Key Requirements</h3>
                <div className="space-y-3">
                  {[
                    "Minimum 18 years of age",
                    "Class 10th pass or equivalent",
                    "Medical fitness certificate",
                    "Completion of authorized training course",
                    "Pass DGCA written and practical examination"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rpcBenefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover-lift transition-smooth">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certification Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certification <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Step-by-step journey to obtain your RPC certification
            </p>
          </div>

          <div className="space-y-6">
            {certificationProcess.map((process, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{process.title}</h3>
                      <Badge variant="outline" className="w-fit">
                        <Clock className="h-3 w-3 mr-1" />
                        {process.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Current RPC Holders */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">RPC Holders</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Proud graduates working across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { industry: "Agriculture", count: "150+", description: "Precision farming and crop monitoring" },
              { industry: "Infrastructure", count: "120+", description: "Bridge and building inspections" },
              { industry: "Surveillance", count: "100+", description: "Security and monitoring operations" },
              { industry: "Mapping", count: "80+", description: "Survey and cartography projects" },
              { industry: "Photography", count: "70+", description: "Aerial photography and videography" },
              { industry: "Emergency Services", count: "30+", description: "Search and rescue operations" }
            ].map((sector, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth text-center">
                <div className="text-3xl font-bold text-primary mb-2">{sector.count}</div>
                <h3 className="text-xl font-semibold mb-2">{sector.industry}</h3>
                <p className="text-sm text-muted-foreground">{sector.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Downloads & Resources */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resources & <span className="text-gradient">Downloads</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential documents and resources for RPC certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "RPC Application Form", type: "PDF", size: "2.1 MB" },
              { title: "Medical Certificate Format", type: "PDF", size: "1.8 MB" },
              { title: "Training Syllabus", type: "PDF", size: "3.2 MB" },
              { title: "DGCA Drone Rules 2021", type: "PDF", size: "5.1 MB" },
              { title: "Sample Question Papers", type: "PDF", size: "2.7 MB" },
              { title: "Fee Structure", type: "PDF", size: "1.2 MB" }
            ].map((resource, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{resource.type} • {resource.size}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 gradient-hero text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Your RPC?</h3>
            <p className="mb-6 opacity-90">
              Start your journey to become a certified drone pilot with our comprehensive training program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform', '_blank')}
                className="bg-white text-primary hover:bg-white/90"
              >
                Apply for RPC Training
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/20"
              >
                Download Brochure
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Next batch starts: June-11, 16 2025
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RPCPage;