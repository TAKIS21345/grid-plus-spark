import { useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';

declare global {
  interface Window {
    google?: any;
    initMap?: () => void;
  }
}

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  // Function to initialize Google Maps
  useEffect(() => {
    // Use the precise coordinates for 6220 Pecan Ave, Orangevale, CA 95662
    const latLng = { lat: 38.679466, lng: -121.220650 };
    function initializeMap() {
      if (window.google && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: latLng,
          zoom: 17,
          mapTypeId: 'roadmap',
          disableDefaultUI: true
        });
        new window.google.maps.Marker({
          position: latLng,
          map,
          title: 'Grid Plus Electric Inc',
        });
      }
    }

    if (!window.google && mapRef.current) {
      window.initMap = initializeMap;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD2X7r037asQ_2yeCKLdxUekrUTxexM2jM&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && mapRef.current) {
      initializeMap();
    }
    // Clean up script and global callback on unmount
    return () => {
      window.initMap = undefined;
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Grid Plus Electric Inc | Orangevale, CA</title>
        <meta name="description" content="Contact Grid Plus Electric in Orangevale, CA for electrical services. Request quotes, schedule appointments, or get emergency electrical help at 916-662-1394." />
        <meta name="keywords" content="contact electrician Orangevale, electrical contractor phone number, Grid Plus Electric contact, Orangevale electrician quote" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <section className="bg-electric-light py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-electric-dark mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700">
                Need electrical services? Reach out to Grid Plus Electric today for expert assistance and free quotes.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-electric-dark mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Whether you need to schedule a service, request a quote, or have questions about our electrical services, we're here to help. Fill out the form and we'll get back to you promptly.
                </p>
                
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-electric-dark mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-electric-blue flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Phone</h3>
                      <p className="text-lg">+1 916-662-1394</p>
                      <p className="text-gray-600">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-electric-blue flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <p className="text-lg">info@gridpluselectric.com</p>
                      <p className="text-gray-600">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-electric-blue flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Address</h3>
                      <p className="text-lg">6220 Pecan Ave</p>
                      <p className="text-lg">Orangevale, CA 95662</p>
                      <a 
                        href="https://maps.google.com/?q=6220+Pecan+Ave,+Orangevale,+CA+95662" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-electric-blue hover:underline mt-1"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-electric-blue flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                      <p className="text-lg">Monday - Friday: 8am - 6pm</p>
                      <p className="text-lg">Saturday: 9am - 4pm</p>
                      <p className="text-lg">Sunday: Closed</p>
                      <p className="font-semibold text-electric-blue mt-1">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                  <div className="bg-gray-200 h-72 rounded-lg flex items-center justify-center border border-gray-300 overflow-hidden shadow-md">
                    <div ref={mapRef} className="w-full h-full rounded-lg" style={{ minHeight: '18rem' }} />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-semibold text-electric-dark">Grid Plus Electric Inc</p>
                    <p className="text-gray-700">6220 Pecan Ave, Orangevale, CA 95662</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">Service Areas</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                We proudly serve Orangevale and surrounding communities in Sacramento County with reliable electrical services.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="font-semibold">Orangevale</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="font-semibold">Folsom</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="font-semibold">Fair Oaks</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="font-semibold">Citrus Heights</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="font-semibold">Roseville</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="font-semibold">Sacramento</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
