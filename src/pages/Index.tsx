import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Grid Plus Electric Inc | Licensed Electrician in Orangevale, CA</title>
        <meta name="description" content="Professional electrical services in Orangevale, CA. Residential and commercial electrician with 5-star ratings. Contact the owner for free quotes and emergency services." />
        <meta name="keywords" content="electrician Orangevale, licensed electrician CA, emergency electrician services Orangevale, residential electrician, commercial electrician, Grid Plus Electric" />
      </Helmet>
      
      <Navbar />
      
      <main className="bg-white min-h-screen">
        <HeroSection />
        <div className="max-w-7xl mx-auto">
          <ServicesSection />
          <TestimonialsSection />
          <CtaSection />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
