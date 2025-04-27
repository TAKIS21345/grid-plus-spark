
import { useState } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Jennifer M.',
      rating: 5,
      content: 'Grid Plus Electric was professional, efficient, and knowledgeable. They arrived on time and completed the job faster than expected. Highly recommend!',
      date: 'March 2025'
    },
    {
      name: 'Robert S.',
      rating: 5,
      content: 'I had several electrical issues that other companies couldn\'t fix. The team at Grid Plus diagnosed the problems quickly and resolved everything in one visit.',
      date: 'February 2025'
    },
    {
      name: 'Sarah T.',
      rating: 5,
      content: 'Outstanding service! They installed recessed lighting throughout our home and the results are beautiful. Fair pricing and excellent attention to detail.',
      date: 'January 2025'
    },
    {
      name: 'David P.',
      rating: 5,
      content: 'I\'ve used Grid Plus Electric for both my home and business. Their electricians are skilled, courteous, and always clean up after themselves.',
      date: 'December 2024'
    },
    {
      name: 'Michelle K.',
      rating: 5,
      content: 'Called for an emergency repair on a Sunday evening and they responded within an hour. Fantastic service when you really need it!',
      date: 'November 2024'
    },
    {
      name: 'Thomas W.',
      rating: 5,
      content: 'Grid Plus Electric upgraded our panel and rewired several rooms. Everything was done to code and they helped us understand the work being done.',
      date: 'October 2024'
    }
  ];

  // For mobile testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-electric-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="text-electric-yellow fill-electric-yellow"
              />
            ))}
          </div>
          <p className="text-xl mb-2">5.0 Rating from 90+ Reviews</p>
          <p className="section-subheading">
            We take pride in our high-quality workmanship and exceptional customer service.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              content={testimonial.content}
              date={testimonial.date}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <TestimonialCard
              name={testimonials[currentTestimonial].name}
              rating={testimonials[currentTestimonial].rating}
              content={testimonials[currentTestimonial].content}
              date={testimonials[currentTestimonial].date}
            />
            
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <Button 
                variant="ghost"
                size="icon" 
                className="rounded-full bg-white shadow-md" 
                onClick={prevTestimonial}
              >
                <ChevronLeft size={20} />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full bg-white shadow-md" 
                onClick={nextTestimonial}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentTestimonial === idx ? 'bg-electric-blue' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="bg-electric-blue hover:bg-electric-dark text-white px-8">
            <Link to="/testimonials">Read More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
