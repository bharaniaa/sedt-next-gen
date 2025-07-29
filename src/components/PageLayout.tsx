import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
