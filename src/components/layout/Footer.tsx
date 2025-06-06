import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-electric-dark text-white">
      <div className="container mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Grid<span className="text-electric-yellow">+</span>Electric Inc</h3>
            <p className="mb-2">Your trusted electrical service provider in Orangevale and surrounding areas.</p>
            <p className="flex items-center gap-2 mt-4">
              <MapPin size={18} className="text-electric-yellow" />
              <span>6220 Pecan Ave, Orangevale, CA</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <Phone size={18} className="text-electric-yellow" />
              <span>+1 916-662-1394</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <Mail size={18} className="text-electric-yellow" />
              <span>info@gridpluselectric.com</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-electric-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-electric-yellow transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-electric-yellow transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-electric-yellow transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-electric-yellow transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>Orangevale</li>
              <li>Folsom</li>
              <li>Roseville</li>
              <li>Sacramento</li>
              <li>Fair Oaks</li>
              <li>Citrus Heights</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-electric-yellow" />
                <span>Monday - Friday: 8am - 6pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-electric-yellow" />
                <span>Saturday: 9am - 4pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-electric-yellow" />
                <span>Sunday: Closed</span>
              </li>
              <li className="mt-4 font-semibold text-electric-yellow">
                24/7 Emergency Service Available
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="https://maps.app.goo.gl/RRydMFXLhvDGLBQm6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-electric-yellow hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {year} Grid Plus Electric Inc. All rights reserved. Owner-operated. Licensed & Insured.</p>
            <div className="mt-4 md:mt-0">
              <p>License #: C-10 123456</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
