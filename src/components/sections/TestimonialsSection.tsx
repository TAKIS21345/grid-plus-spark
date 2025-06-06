import { useState } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Laura Hackford',
      rating: 5,
      content: 'Sammie did great work and was very helpful through the whole process of getting our electrical panel replaced. He worked quickly and was very knowledgeable. We will definitely use him for any work we need in the future!',
      date: 'May 2025'
    },
    {
      name: 'Sue Stryker',
      rating: 5,
      content: 'Sammy, the owner/electrical contractor, installed a ceiling light/fan and ceiling LED light fixture. I had a time crunch so he got the materials (lights) from the hardware store and got them installed efficiently. He took the old fixtures out to the trash; saving me time. Price was reasonable. I would definitely use him again.',
      date: 'September 2024'
    },
    {
      name: 'Bear Trap Stunts',
      rating: 5,
      content: 'Saman is outstanding. I can’t say enough good things about this guy. Customer service is above and beyond. I had a tree take out my power and damage my old outdated box. Sam came out quoted me without trying to upsell me, told me the benefits of a 200 over a 100 set up and told me to make the choice. Which I chose to do. His work was so good when I called for scheduled the inspection the crew was already there to reattach my power due to the knowledge of the great work he does. Got the whole box replacement done in just a few hours and waited here until the inspector arrived. Was happy to answer any questions I had without making me feel like I didn’t know what I was talking about. Quality-10 out of 10. Kindness-10 out of 10. Professionalism-10 out of 10. Don’t even make the other call. Use him. You won’t regret it.',
      date: 'June 2024'
    },
    {
      name: 'Sean Collins',
      rating: 5,
      content: 'Grid Plus did an excellent job installing recessed lighting for me! Great communication, everything was clear and professional from start to finish. The craftsmanship was top notch. Everything was installed perfectly, clean, and aligned. If you\'re searching for a reliable, skilled electrician I highly recommend Grid Plus. I am very happy with their work and will use again in the future.',
      date: 'February 2025'
    },
    {
      name: 'Ashley Mills',
      rating: 5,
      content: 'I recently had the pleasure of hiring Saman for some issues at my home, and I am extremely satisfied with the service he provided. He got to my house very quickly. His efficiency and knowledge were evident as he not only repaired two faulty outlets but also took the time to educate me on the intricacies of outlets and wires. Additionally, he inspected my outdated electrical panel and offered valuable safety suggestions, demonstrating a thorough understanding of his craft. I highly recommend this electrician for anyone seeking prompt, knowledgeable, and informative electrical services.',
      date: 'June 2024'
    },
    {
      name: 'Dan Litch',
      rating: 5,
      content: 'Hired Sammy again. It’s the 4th time using him and it’s always a great experience. This project was installing my EV Charger in the garage. Install looks clean and professional as well. I highly recommend Sammy, he’s pleasant to work with and his rates are fair.',
      date: 'September 2024'
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
          <h2 className="section-heading">What Customers Say</h2>
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
            Proud to provide high-quality workmanship and exceptional customer service as an independent electrician.
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
