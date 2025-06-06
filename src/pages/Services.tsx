import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/sections/CtaSection';
import { Lightbulb, Home, Building2, Zap, Shield, Wifi, Power, Activity, Plug } from 'lucide-react';
import { Helmet } from 'react-helmet';

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceDetail = ({ icon, title, description, features }: ServiceDetailProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-electric-light rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-electric-dark mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-electric-blue font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Home className="h-6 w-6 text-electric-blue" />, 
      title: 'Outlets and Switches',
      description: 'Installation, repair, and replacement of electrical outlets and switches to ensure safe and reliable operation.',
      features: [
        'Electrical outlet installation and repair',
        'Switch replacement and upgrades',
        'Child safety outlet solutions'
      ]
    },
    {
      icon: <Building2 className="h-6 w-6 text-electric-blue" />, 
      title: 'Wiring and Circuit Breakers',
      description: 'Comprehensive wiring solutions and circuit breaker panel upgrades or repairs to meet modern electrical demands.',
      features: [
        'Whole-house rewiring',
        'Circuit breaker panel upgrades',
        'Dedicated circuits for appliances'
      ]
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-electric-blue" />, 
      title: 'Lighting Solutions',
      description: 'Interior and exterior lighting design, installation, and repair for energy-efficient and aesthetic lighting.',
      features: [
        'LED lighting upgrades',
        'Recessed lighting installation',
        'Landscape and outdoor lighting'
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-electric-blue" />, 
      title: 'Ceiling Fan Installation',
      description: 'Professional installation and repair of ceiling fans to enhance comfort and air circulation in your space.',
      features: [
        'Ceiling fan installation',
        'Ceiling fan balancing and repair'
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-electric-blue" />, 
      title: 'EV Charger Installation',
      description: 'Setup and installation of electric vehicle chargers to support your transition to sustainable transportation.',
      features: [
        'Home EV charger installation',
        'Commercial EV charging stations',
        'Dedicated circuits for EV chargers'
      ]
    }
  ];
  return (
    <>
      <Helmet>
        <title>Our Services | Grid Plus Electric Inc | Orangevale, CA</title>
        <meta name="description" content="Explore the full range of electrical services offered by Grid Plus Electric in Orangevale, CA. Residential, commercial, EV charging, lighting, and more." />
        <meta name="keywords" content="electrical services Orangevale, electrician services, EV charger installation, lighting installation, panel upgrades, Grid Plus Electric" />
      </Helmet>
      <Navbar />
      <main className="bg-white min-h-screen">
        <section className="bg-electric-light py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-electric-dark mb-6">Our Services</h1>
              <p className="text-xl text-gray-700">
                Comprehensive electrical solutions for homes and businesses in Orangevale and the Sacramento area. Quality, safety, and customer satisfaction are our top priorities.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {services.map((service, idx) => (
              <ServiceDetail key={idx} {...service} />
            ))}
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Services;
