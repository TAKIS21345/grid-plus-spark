
import ServiceCard from '@/components/ui/ServiceCard';
import { Lightbulb, Home, Building2, Zap, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Residential Wiring',
      description: 'Complete home electrical solutions including panel upgrades, rewiring, outlet installation, and troubleshooting electrical issues.',
      icon: Home
    },
    {
      title: 'Commercial Installation',
      description: 'Electrical systems for businesses, offices, and retail spaces. Code-compliant installations and preventative maintenance.',
      icon: Building2
    },
    {
      title: 'Lighting Services',
      description: 'Interior and exterior lighting design, installation, and repair. Energy-efficient lighting solutions to reduce costs.',
      icon: Lightbulb
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 emergency electrical services to address urgent issues quickly and safely, restoring your power when you need it most.',
      icon: Zap
    },
    {
      title: 'Electrical Safety',
      description: 'Comprehensive safety inspections, GFCI protection, smoke detector installation, and electrical hazard prevention.',
      icon: Shield
    },
    {
      title: 'Scheduled Maintenance',
      description: 'Regular electrical system maintenance to prevent failures and ensure optimal operation of your electrical systems.',
      icon: Clock
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
