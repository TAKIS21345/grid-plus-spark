import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/sections/CtaSection';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

interface TestimonialProps {
  name: string;
  date: string;
  rating: number;
  content: string;
}

const TestimonialItem = ({ name, date, rating, content }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? 'text-electric-yellow fill-electric-yellow' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const allTestimonials = [
    {
      name: 'Jennifer M.',
      date: 'March 2025',
      rating: 5,
      content: 'Grid Plus Electric was professional, efficient, and knowledgeable. They arrived on time and completed the job faster than expected. The electrician took time to explain everything and made sure I was satisfied before leaving. Highly recommend!'
    },
    {
      name: 'Robert S.',
      date: 'February 2025',
      rating: 5,
      content: 'I had several electrical issues that other companies couldn\'t fix. The team at Grid Plus diagnosed the problems quickly and resolved everything in one visit. Their pricing was fair and transparent. I\'ll definitely use them again for any electrical needs.'
    },
    {
      name: 'Sarah T.',
      date: 'January 2025',
      rating: 5,
      content: 'Outstanding service! They installed recessed lighting throughout our home and the results are beautiful. The electricians were careful with our home, cleaned up after themselves, and completed the work on schedule. Fair pricing and excellent attention to detail.'
    },
    {
      name: 'David P.',
      date: 'December 2024',
      rating: 5,
      content: 'I\'ve used Grid Plus Electric for both my home and business. Their electricians are skilled, courteous, and always clean up after themselves. They\'re my go-to for any electrical work I need done. Highly recommended!'
    },
    {
      name: 'Michelle K.',
      date: 'November 2024',
      rating: 5,
      content: 'Called for an emergency repair on a Sunday evening and they responded within an hour. The electrician quickly identified the issue with our circuit breaker and had it fixed before bedtime. Fantastic service when you really need it!'
    },
    {
      name: 'Thomas W.',
      date: 'October 2024',
      rating: 5,
      content: 'Grid Plus Electric upgraded our panel and rewired several rooms. Everything was done to code and they helped us understand the work being done. The crew was respectful of our home and cleaned up thoroughly each day. Great experience overall.'
    },
    {
      name: 'Patricia L.',
      date: 'September 2024',
      rating: 5,
      content: 'I needed several ceiling fans installed in my new home. The team at Grid Plus was professional, efficient, and did a fantastic job. They even helped me choose the right mounting hardware for my specific ceilings. Very pleased with their work!'
    },
    {
      name: 'Michael R.',
      date: 'August 2024',
      rating: 5,
      content: 'Had a complete electrical inspection done on an older home we purchased. The electrician was thorough and identified several safety concerns that needed addressing. They provided a detailed report and reasonable quote for the repairs. Very professional service.'
    },
    {
      name: 'Linda B.',
      date: 'July 2024',
      rating: 5,
      content: 'We had outdoor landscape lighting installed and couldn\'t be happier with the results! The electrician had creative suggestions that really enhanced our yard. The installation was clean and all wiring was properly hidden. Our yard looks amazing at night now!'
    },
    {
      name: 'Kevin J.',
      date: 'June 2024',
      rating: 5,
      content: 'Grid Plus installed GFCI outlets throughout our kitchen and bathrooms. The work was completed efficiently and the electrician explained the safety benefits clearly. They were on time, courteous, and left no mess. Will use them again for future projects.'
    },
    {
      name: 'Elizabeth N.',
      date: 'May 2024',
      rating: 5,
      content: 'We had Grid Plus Electric add outlets and lighting to our garage workshop. They understood exactly what we needed and made helpful suggestions. The work was completed on schedule and the results exceeded our expectations. Reasonable pricing and excellent craftsmanship.'
    },
    {
      name: 'William G.',
      date: 'April 2024',
      rating: 5,
      content: 'Called Grid Plus for a flickering light issue that was driving me crazy. The electrician found the problem quickly and fixed it on the spot. Fair price, friendly service, and the problem is completely resolved. I\'ll definitely call them for any future electrical needs.'
    }
  ];
  
  const [visibleTestimonials, setVisibleTestimonials] = useState(6);
  
  const loadMore = () => {
    setVisibleTestimonials(prev => Math.min(prev + 6, allTestimonials.length));
  };

  return (
    <>
      <Helmet>
        <title>Customer Testimonials | Grid Plus Electric Inc | Orangevale, CA</title>
        <meta name="description" content="Read reviews and testimonials from satisfied customers of Grid Plus Electric in Orangevale, CA. See why we maintain a 5-star rating across 90+ reviews." />
        <meta name="keywords" content="electrician reviews Orangevale, Grid Plus Electric testimonials, 5-star electrician, Orangevale electrical contractor reviews" />
      </Helmet>
      
      <Navbar />
      
      <main className="bg-white min-h-screen">
        <section className="bg-electric-light py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-electric-dark mb-6">Customer Testimonials</h1>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-electric-yellow fill-electric-yellow"
                  />
                ))}
              </div>
              <p className="text-xl mb-4">5.0 Rating from 90+ Verified Reviews</p>
              <p className="text-lg text-gray-700">
                Read what our customers have to say about their experience with Grid Plus Electric.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <a 
                href="https://www.google.com/search?q=grid+plus+electric+orangevale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-gray-300 rounded-lg py-3 px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-google text-lg font-semibold">
                  See all reviews on <span className="text-blue-600">G</span><span className="text-red-600">o</span><span className="text-yellow-500">o</span><span className="text-blue-600">g</span><span className="text-green-600">l</span><span className="text-red-600">e</span>
                </span>
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
                <TestimonialItem
                  key={index}
                  name={testimonial.name}
                  date={testimonial.date}
                  rating={testimonial.rating}
                  content={testimonial.content}
                />
              ))}
            </div>
            
            {visibleTestimonials < allTestimonials.length && (
              <div className="mt-12 text-center">
                <Button 
                  onClick={loadMore} 
                  className="bg-electric-blue hover:bg-electric-dark"
                >
                  Load More Reviews
                </Button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-electric-dark mb-6">Why Our Customers Choose Us</h2>
              <p className="text-lg text-gray-700 mb-12">
                At Grid Plus Electric, we strive to deliver exceptional service on every project. Here's what sets us apart:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-electric-light p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-electric-dark mb-3">Expertise</h3>
                  <p className="text-gray-700">
                    Our licensed electricians have years of experience and continuous training in the latest electrical technologies.
                  </p>
                </div>
                
                <div className="bg-electric-light p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-electric-dark mb-3">Reliability</h3>
                  <p className="text-gray-700">
                    We show up on time, communicate clearly, and complete projects as promised with transparent pricing.
                  </p>
                </div>
                
                <div className="bg-electric-light p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-electric-dark mb-3">Quality</h3>
                  <p className="text-gray-700">
                    We use premium materials and follow strict quality standards to ensure your electrical systems are safe and durable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Testimonials;
