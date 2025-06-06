
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Clock } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-electric-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an Electrician?</h2>
          <p className="text-xl mb-8">
            Whether it's an emergency repair or a planned installation, our team of licensed electricians is ready to help with all your electrical needs.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Button asChild className="bg-electric-yellow hover:bg-yellow-600 text-electric-dark flex items-center gap-2 px-8 py-6 text-lg">
              <a href="tel:+19166621394">
                <Phone size={20} />
                <span>Call Now: 916-662-1394</span>
              </a>
            </Button>
            
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2 px-8 py-6 text-lg">
              <Link to="/contact">
                <Calendar size={20} />
                <span>Schedule Appointment</span>
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-electric-yellow">
            <Clock size={20} />
            <p className="font-semibold">24/7 Emergency Services Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
