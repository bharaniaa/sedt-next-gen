import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InteractiveDrone from '@/components/InteractiveDrone';
import React from 'react';

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] relative overflow-x-hidden">
    {/* Global 3D Floating Interactive Drone Background */}
    <InteractiveDrone />
    
    <Header />
    <main className="flex-1 relative z-10">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
