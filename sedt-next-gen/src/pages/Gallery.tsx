import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Image as ImageIcon, 
  Video, 
  Camera, 
  Plane, 
  Users, 
  Award,
  Play,
  ExternalLink
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryCategories = [
    { id: 'all', name: 'All', icon: ImageIcon },
    { id: 'training', name: 'Training', icon: Users },
    { id: 'drones', name: 'Drones', icon: Plane },
    { id: 'events', name: 'Events', icon: Camera },
    { id: 'certificates', name: 'Certificates', icon: Award }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'training',
      title: 'Practical Flight Training Session',
      description: 'Students learning hands-on drone operations',
      src: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      type: 'image', 
      category: 'drones',
      title: 'Professional Drone Equipment',
      description: 'State-of-the-art training drones',
      src: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      type: 'video',
      category: 'training',
      title: 'Ground School Training',
      description: 'Comprehensive theory classes',
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/watch?v=JCQQJVfJpSE'
    },
    {
      id: 4,
      type: 'image',
      category: 'events',
      title: 'Certification Ceremony',
      description: 'RPC certificate distribution event',
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop'
    },
    {
      id: 5,
      type: 'image',
      category: 'training',
      title: 'Instructor Demonstration',
      description: 'Expert instructor guiding students',
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop'
    },
    {
      id: 6,
      type: 'image',
      category: 'drones',
      title: 'Drone in Action',
      description: 'Professional drone during flight training',
      src: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop'
    },
    {
      id: 7,
      type: 'image',
      category: 'events',
      title: 'Campus Facilities',
      description: 'Modern training facilities at Sri Eshwar Campus',
      src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=500&h=300&fit=crop'
    },
    {
      id: 8,
      type: 'image',
      category: 'certificates',
      title: 'DGCA Certificate',
      description: 'Official Remote Pilot Certificate',
      src: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop'
    },
    {
      id: 9,
      type: 'video',
      category: 'training',
      title: 'Advanced Maneuvers',
      description: 'Students practicing complex flight patterns',
      src: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/watch?v=JCQQJVfJpSE'
    },
    {
      id: 10,
      type: 'image',
      category: 'events',
      title: 'Industry Workshop',
      description: 'Professional development session',
      src: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=500&h=300&fit=crop'
    },
    {
      id: 11,
      type: 'image',
      category: 'training',
      title: 'Safety Briefing',
      description: 'Pre-flight safety instructions',
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=300&fit=crop'
    },
    {
      id: 12,
      type: 'image',
      category: 'drones',
      title: 'Drone Maintenance',
      description: 'Learning drone maintenance and care',
      src: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=300&fit=crop'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleVideoPlay = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground">
            Visual Journey
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Training <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive drone training programs through images and videos of our facilities, equipment, and training sessions
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto h-auto p-2">
              {galleryCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="flex flex-col items-center space-y-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <category.icon className="h-5 w-5" />
                  <span className="text-sm">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredItems.map((item) => (
            <Card key={item.id} className={`group overflow-hidden hover-lift transition-smooth ${
              item.featured ? 'md:col-span-2 md:row-span-2' : ''
            }`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Type Indicator */}
                <div className="absolute top-3 right-3">
                  <Badge className={`${
                    item.type === 'video' ? 'bg-red-500' : 'bg-blue-500'
                  } text-white`}>
                    {item.type === 'video' ? (
                      <><Video className="h-3 w-3 mr-1" /> Video</>
                    ) : (
                      <><ImageIcon className="h-3 w-3 mr-1" /> Photo</>
                    )}
                  </Badge>
                </div>

                {/* Play Button for Videos */}
                {item.type === 'video' && (
                  <button
                    onClick={() => handleVideoPlay(item.videoUrl!)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </button>
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Training <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that showcase our training excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Students Trained", icon: Users },
              { number: "50+", label: "Training Hours", icon: Camera },
              { number: "25+", label: "Professional Drones", icon: Plane },
              { number: "100%", label: "Success Rate", icon: Award }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center hover-lift transition-smooth">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <Card className="p-8 gradient-hero text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Watch Our Training in Action
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Get a glimpse of our comprehensive drone pilot training program
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4">
                  <button 
                    onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=JCQQJVfJpSE')}
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold mb-2">Training Overview</h3>
                <p className="opacity-90 mb-4">Complete overview of our drone pilot training program</p>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/20"
                  onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=JCQQJVfJpSE')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch on YouTube
                </Button>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4">
                  <button 
                    onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=JCQQJVfJpSE')}
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Testimonials</h3>
                <p className="opacity-90 mb-4">Hear from our successful RPC holders</p>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/20"
                  onClick={() => handleVideoPlay('https://www.youtube.com/watch?v=JCQQJVfJpSE')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch Stories
                </Button>
              </Card>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-muted/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Training Program?</h3>
            <p className="text-muted-foreground mb-6">
              Be part of our next success story and become a certified drone pilot
            </p>
            <Button 
              size="lg"
              className="gradient-primary hover:opacity-90"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdn-nYChP2cwu4UBoUvDLw4DjCcmD1INi0miLejTlu3V6zHgw/viewform', '_blank')}
            >
              Enroll Now →
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Next batch starts: June-11, 16 2025
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;