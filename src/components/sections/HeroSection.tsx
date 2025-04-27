
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-electric-light animate-fade-in">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-electric-dark mb-4">
          Professional Electrical Services in Orangevale
        </h1>
        
        <p className="text-xl text-gray-700 max-w-2xl mb-4">
          Licensed electricians providing residential and commercial electrical solutions with quality workmanship and excellent customer service.
        </p>
        
        <div className="flex items-center justify-center mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="text-electric-yellow fill-electric-yellow"
              />
            ))}
          </div>
          <span className="ml-2 text-lg font-medium">5-Star Rated (90+ Reviews)</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button asChild className="bg-electric-blue hover:bg-electric-dark text-white px-8 py-6 text-lg">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-light px-8 py-6 text-lg">
            <Link to="/contact">Schedule Service</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-electric-blue mb-1">Licensed & Insured</h3>
            <p className="text-sm text-gray-600">Fully licensed electrical contractors</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-electric-blue mb-1">24/7 Emergency Service</h3>
            <p className="text-sm text-gray-600">Always available when you need us</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-electric-blue mb-1">Satisfaction Guaranteed</h3>
            <p className="text-sm text-gray-600">We stand behind our work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
