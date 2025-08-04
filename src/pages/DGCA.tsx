import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  FileText, 
  Globe, 
  Users, 
  CheckCircle,
  ExternalLink,
  BookOpen,
  Award,
  AlertTriangle
} from 'lucide-react';

const DGCAPage = () => {
  const dgcaServices = [
    {
      icon: Shield,
      title: "Drone Registration",
      description: "Official registration of drones with DGCA for legal compliance"
    },
    {
      icon: FileText,
      title: "RPC Certification",
      description: "Remote Pilot Certificate training and examination"
    },
    {
      icon: Globe,
      title: "Airspace Authorization",
      description: "Permissions for flying in controlled and restricted airspace"
    },
    {
      icon: Users,
      title: "Training Organization",
      description: "Authorized Remote Pilot Training Organization (RPTO) services"
    }
  ];

  const droneRules = [
    {
      category: "Nano Drones",
      weight: "Up to 250g",
      registration: "No registration required",
      license: "No license required",
      restrictions: "Below 50 feet, away from airports"
    },
    {
      category: "Micro Drones", 
      weight: "250g to 2kg",
      registration: "Required on Digital Sky",
      license: "No license required",
      restrictions: "Below 200 feet, away from airports"
    },
    {
      category: "Small Drones",
      weight: "2kg to 25kg", 
      registration: "Required on Digital Sky",
      license: "RPC Required",
      restrictions: "Below 400 feet, with permissions"
    },
    {
      category: "Medium Drones",
      weight: "25kg to 150kg",
      registration: "Required on Digital Sky", 
      license: "RPC + Type Certificate",
      restrictions: "Special permissions required"
    }
  ];

  const complianceChecklist = [
    "Drone registration on Digital Sky platform",
    "Valid Remote Pilot Certificate (RPC)",
    "Third-party insurance coverage",
    "Flight permission for controlled airspace",
    "Compliance with no-fly zone restrictions",
    "Proper drone marking and identification",
    "Maintenance of flight logs and records",
    "Regular safety inspections"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground">
            Government of India
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            DGCA <span className="text-gradient">Regulations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guide to Directorate General of Civil Aviation drone regulations and compliance requirements
          </p>
        </div>

        {/* DGCA Overview */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-gradient">DGCA</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Directorate General of Civil Aviation (DGCA) is the regulatory body in India 
                responsible for regulating civil aviation, including Unmanned Aircraft Systems (UAS) 
                or drones.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under the Drone Rules 2021, DGCA has established comprehensive guidelines for 
                drone operations, training requirements, and safety protocols to ensure safe 
                integration of drones in Indian airspace.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Key Responsibilities:</h3>
                {[
                  "Formulating drone policies and regulations",
                  "Issuing Remote Pilot Certificates (RPC)",
                  "Authorizing Training Organizations (RPTO)",
                  "Managing Digital Sky platform",
                  "Ensuring aviation safety standards"
                ].map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dgcaServices.map((service, index) => (
                <Card key={index} className="p-6 hover-lift transition-smooth">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/*  dgca license */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              DGCA <span className="text-gradient">License</span>
            </h2>
            <div className='flex justify-center gap-10 mb-8'>
              <div>
             <img src="/dgca_license_1.png" alt="DGCA License" className="mx-auto mb-6 rounded-lg shadow-lg "
             height={500} width={500} />

              </div>
              <div>
             <img src="/dgca_license_2.png" alt="DGCA License" className="mx-auto mb-6 rounded-lg shadow-lg"
              height={500} width={500} />

              </div>
            </div>
        </div>
        {/* Drone Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Drone <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Classification based on Maximum Take-off Weight (MTOW)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {droneRules.map((rule, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{rule.category}</h3>
                  <Badge className="gradient-primary text-primary-foreground">{rule.weight}</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Registration:</span>
                    <span className="font-medium">{rule.registration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span className="font-medium">{rule.license}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Restrictions:</strong> {rule.restrictions}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Requirements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance <span className="text-gradient">Checklist</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential requirements for legal drone operations in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceChecklist.map((item, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{item}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Sky Platform */}
        <div className="mb-20">
          <Card className="p-8 gradient-hero text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Digital Sky Platform
              </h2>
              <p className="text-xl opacity-90">
                India's digital platform for drone regulation and management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Registration</h3>
                <p className="opacity-90">Register your drone and get unique identification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flight Permissions</h3>
                <p className="opacity-90">Apply for airspace permissions and flight plans</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning</h3>
                <p className="opacity-90">Access training materials and regulatory updates</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://digitalsky.dgca.gov.in/', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Digital Sky
              </Button>
            </div>
          </Card>
        </div>

        {/* Important Updates */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="text-gradient">Updates</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Recent changes and announcements from DGCA
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                date: "March 2024",
                title: "New RPC Training Guidelines",
                description: "Updated training curriculum and examination procedures for Remote Pilot Certificate",
                type: "Update"
              },
              {
                date: "January 2024", 
                title: "Revised Fee Structure",
                description: "New fee structure for drone registration and RPC certification",
                type: "Important"
              },
              {
                date: "December 2023",
                title: "Extended Drone Categories",
                description: "Additional provisions for micro and nano drone operations",
                type: "New"
              }
            ].map((update, index) => (
              <Card key={index} className="p-6 hover-lift transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant={update.type === 'Important' ? 'destructive' : 'default'}>
                      {update.type}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{update.title}</h3>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                    <p className="text-muted-foreground">{update.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-muted/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need DGCA Compliance Assistance?</h3>
            <p className="text-muted-foreground mb-6">
              Our experts can help you navigate DGCA regulations and ensure full compliance for your drone operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gradient-primary hover:opacity-90"
              >
                Get Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform', '_blank')}
              >
                Start RPC Training
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DGCAPage;