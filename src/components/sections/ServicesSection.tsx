import ServiceCard from '@/components/ui/ServiceCard';
import { Lightbulb, Home, Building2, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Outlets and Switches',
      description: 'Installation, repair, and replacement of electrical outlets and switches to ensure safe and reliable operation.',
      icon: Home
    },
    {
      title: 'Wiring and Circuit Breakers',
      description: 'Comprehensive wiring solutions and circuit breaker panel upgrades or repairs to meet modern electrical demands.',
      icon: Building2
    },
    {
      title: 'Lighting Solutions',
      description: 'Interior and exterior lighting design, installation, and repair for energy-efficient and aesthetic lighting.',
      icon: Lightbulb
    },
    {
      title: 'Ceiling Fan Installation',
      description: 'Professional installation and repair of ceiling fans to enhance comfort and air circulation in your space.',
      icon: Zap
    },
    {
      title: 'EV Charger Installation',
      description: 'Setup and installation of electric vehicle chargers to support your transition to sustainable transportation.',
      icon: Shield
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Electrical Services</h2>
          <p className="section-subheading">
            From simple repairs to complex installations, our expert electricians provide comprehensive electrical services for residential and commercial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-electric-blue hover:bg-electric-dark text-white px-8">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
