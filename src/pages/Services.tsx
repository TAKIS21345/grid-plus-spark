
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/sections/CtaSection';
import { Lightbulb, Home, Building2, Zap, Shield, Clock, Wifi, Power, Activity, Plug } from 'lucide-react';
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
      title: 'Residential Electrical Services',
      description: 'Complete electrical solutions for homes of all sizes in Orangevale and surrounding areas.',
      features: [
        'Electrical panel upgrades and replacements',
        'Whole-house rewiring and circuit installation',
        'Outlet and switch installation/replacement',
        'Ceiling fan installation',
        'Smoke and carbon monoxide detector installation',
        'Home electrical safety inspections'
      ]
    },
    {
      icon: <Building2 className="h-6 w-6 text-electric-blue" />,
      title: 'Commercial Electrical Services',
      description: 'Reliable electrical solutions for businesses, designed to minimize downtime and maximize productivity.',
      features: [
        'Office and retail space electrical design',
        'Commercial lighting installation',
        'Power distribution systems',
        'Backup generator installation',
        'Code compliance upgrades',
        'Electrical maintenance programs'
      ]
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-electric-blue" />,
      title: 'Lighting Services',
      description: 'Enhance your space with professional lighting solutions that improve aesthetics and energy efficiency.',
      features: [
        'LED lighting upgrades',
        'Recessed lighting installation',
        'Landscape and outdoor lighting',
        'Security lighting systems',
        'Smart lighting controls',
        'Lighting design consultation'
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-electric-blue" />,
      title: 'Emergency Electrical Services',
      description: '24/7 response for urgent electrical problems to keep your home or business safe.',
      features: [
        'Power outage troubleshooting',
        'Circuit breaker failures',
        'Electrical fire safety',
        'Surge protection installation',
        'Storm damage electrical repairs',
        'Emergency wiring repairs'
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-electric-blue" />,
      title: 'Electrical Safety & Inspections',
      description: 'Proactive solutions to identify and address potential electrical hazards before they become problems.',
      features: [
        'Comprehensive electrical safety audits',
        'GFCI and AFCI protection installation',
        'Child safety outlet solutions',
        'Electrical code compliance inspections',
        'Insurance requirement certifications',
        'Safety upgrades for older homes'
      ]
    },
    {
      icon: <Wifi className="h-6 w-6 text-electric-blue" />,
      title: 'Smart Home Electrical',
      description: 'Modern electrical solutions to make your home more connected, efficient, and convenient.',
      features: [
        'Smart switch and outlet installation',
        'Home automation system wiring',
        'Structured wiring for networks',
        'Smart thermostat installation',
        'Video doorbell and security camera wiring',
        'Voice-controlled lighting setup'
      ]
    },
    {
      icon: <Power className="h-6 w-6 text-electric-blue" />,
      title: 'Electrical Upgrades',
      description: 'Modernize your electrical system to meet current demands and improve safety.',
      features: [
        '100-200 amp service upgrades',
        'Dedicated circuits for appliances',
        'Garage and workshop electrical upgrades',
        'Kitchen and bathroom electrical remodels',
        'Whole-house surge protection',
        'EV charger installations'
      ]
    },
    {
      icon: <Activity className="h-6 w-6 text-electric-blue" />,
      title: 'Troubleshooting & Repairs',
      description: 'Expert diagnosis and repair of electrical issues, from simple fixes to complex problems.',
      features: [
        'Circuit overload resolution',
        'Outlet and switch repairs',
        'Flickering light diagnosis',
        'Appliance wiring issues',
        'Electrical noise problems',
        'Hot panel and wire investigations'
      ]
    },
    {
      icon: <Plug className="h-6 w-6 text-electric-blue" />,
      title: 'Specialty Electrical Services',
      description: 'Custom electrical solutions for unique needs and specialized applications.',
      features: [
        'Pool and spa electrical systems',
        'Home theater and media room wiring',
        'Basement and attic electrical additions',
        'Workshop power solutions',
        'Electric vehicle charging stations',
        'Backup generator systems'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Services | Grid Plus Electric Inc | Orangevale, CA</title>
        <meta name="description" content="Comprehensive electrical services for residential and commercial properties in Orangevale, CA. 24/7 emergency repairs, installations, and maintenance." />
        <meta name="keywords" content="electrician services Orangevale, residential electrician, commercial electrical services, emergency electrical repairs, lighting installation Orangevale" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <section className="bg-electric-light py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-electric-dark mb-6">Our Electrical Services</h1>
              <p className="text-xl text-gray-700">
                Grid Plus Electric offers a complete range of electrical services for residential and commercial customers in Orangevale and surrounding areas. Our licensed electricians deliver quality workmanship with a focus on safety and customer satisfaction.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <ServiceDetail
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Services;
