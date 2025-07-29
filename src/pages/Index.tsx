import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TrainingProgram from '@/components/TrainingProgram';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TrainingProgram />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
