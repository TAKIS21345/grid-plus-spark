import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/sections/CtaSection';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

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
      name: 'Laura Hackford',
      date: 'May 2025',
      rating: 5,
      content: 'Sammie did great work and was very helpful through the whole process of getting our electrical panel replaced. He worked quickly and was very knowledgeable. We will definitely use him for any work we need in the future!'
    },
    {
      name: 'Sue Stryker',
      date: 'September 2024',
      rating: 5,
      content: 'Sammy, the owner/electrical contractor, installed a ceiling light/fan and ceiling LED light fixture. I had a time crunch so he got the materials (lights) from the hardware store and got them installed efficiently. He took the old fixtures out to the trash; saving me time. Price was reasonable. I would definitely use him again.'
    },
    {
      name: 'Bear Trap Stunts',
      date: 'June 2024',
      rating: 5,
      content: 'Saman is outstanding. I can’t say enough good things about this guy. Customer service is above and beyond. I had a tree take out my power and damage my old outdated box. Sam came out quoted me without trying to upsell me, told me the benefits of a 200 over a 100 set up and told me to make the choice. Which I chose to do. His work was so good when I called for scheduled the inspection the crew was already there to reattach my power due to the knowledge of the great work he does. Got the whole box replacement done in just a few hours and waited here until the inspector arrived. Was happy to answer any questions I had without making me feel like I didn’t know what I was talking about. Quality-10 out of 10. Kindness-10 out of 10. Professionalism-10 out of 10. Don’t even make the other call. Use him. You won’t regret it.'
    },
    {
      name: 'Sean Collins',
      date: 'February 2025',
      rating: 5,
      content: 'Grid Plus did an excellent job installing recessed lighting for me! Great communication, everything was clear and professional from start to finish. The craftsmanship was top notch. Everything was installed perfectly, clean, and aligned. If you\'re searching for a reliable, skilled electrician I highly recommend Grid Plus. I am very happy with their work and will use again in the future.'
    },
    {
      name: 'Ashley Mills',
      date: 'June 2024',
      rating: 5,
      content: 'I recently had the pleasure of hiring Saman for some issues at my home, and I am extremely satisfied with the service he provided. He got to my house very quickly. His efficiency and knowledge were evident as he not only repaired two faulty outlets but also took the time to educate me on the intricacies of outlets and wires. Additionally, he inspected my outdated electrical panel and offered valuable safety suggestions, demonstrating a thorough understanding of his craft. I highly recommend this electrician for anyone seeking prompt, knowledgeable, and informative electrical services.'
    },
    {
      name: 'Dan Litch',
      date: 'September 2024',
      rating: 5,
      content: 'Hired Sammy again. It’s the 4th time using him and it’s always a great experience. This project was installing my EV Charger in the garage. Install looks clean and professional as well. I highly recommend Sammy, he’s pleasant to work with and his rates are fair.'
    },
    {
      name: 'Renata G',
      date: 'May 2025',
      rating: 5,
      content: 'Fast, punctual, respectful, and professional. He explained everything in depth and even found problems I did not know existed. He came highly recommended by a friend who is also an electrician and said, “He is the best there is.” Indeed he is… 🙌'
    },
    {
      name: 'Claudio Castaneda',
      date: 'December 2024',
      rating: 5,
      content: 'Saman was referred to us and we’re so glad! Fair, professional and very knowledgeable. He was able to schedule us in last minute to replace a switch on our electrical panel when part of our power went out! He was flexible with finding a time that would work with my schedule. Looking forward to having him on our speed dial for all our electrical needs. Added bonus: our dogs loved him!'
    },
    {
      name: 'Greg Aguirre',
      date: 'February 2025',
      rating: 5,
      content: 'Amazing customer service, quick response, clear communication, transparent with pricing and I will continue to use them on all future residential and commercial projects. I had an EV charger installed at my residence and a GFCI outlet repaired. Had another EV charger installed at my office and added new recessed lights in our conference room.'
    },
    {
      name: 'Kenneth Nelson',
      date: 'June 2024',
      rating: 5,
      content: 'Sammy did a fantastic job on our electric panel replacement and new outdoor outlet. Professional, timely, and fantastic quality. He gave us an electrical panel better than I could have even imagined, all at a price so much better than anyone else quoted me. Go with Sammy, he\'s top notch. I\'m so glad he was referred to me, I\'d have been lost without him.'
    },
    {
      name: 'C. P.',
      date: 'August 2024',
      rating: 5,
      content: 'Sammy was great to work with. Showed up on time, great communication. Resolved our issue and pointed out some things that need attention. Very knowledgeable. I highly recommend Sammy for anyone\'s electrical needs.'
    },
    {
      name: 'Shahbaz sharif',
      date: 'May 2023',
      rating: 5,
      content: 'I used him to install a EV charger for a Tesla and also he did other electrical work for me such as putting in additional electrical outlets and garage lights and an outside camera surveillance system. I will definitely use him again for my next project.'
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
                Read what customers have to say about their experience with Grid Plus Electric.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <a 
                href="https://www.google.com/search?sca_esv=e2a660d80d6ce184&sxsrf=AE3TifNoLIOLl9SmNi57_LcclVegl9CsAA:1749245356279&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8CLZXKSkBBNgeJZm44qdB1SH7eWVUP1GFlNw59c7U8XdWNZxMNh5C8z4rKDNT3Hq54tQ7jKiv8wCNmj4jXVOXBJNGrdrgOHgvhbdhCNSay_WR9d0w%3D%3D&q=Grid+Plus+Electric+Inc+Reviews&sa=X&ved=2ahUKEwjT7dfg3t2NAxUeDDQIHdvHDDcQ0bkNegQIJRAD&biw=1280&bih=665&dpr=1.5" 
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
              <h2 className="text-3xl font-bold text-electric-dark mb-6">Why Customers Choose Grid Plus Electric</h2>
              <p className="text-lg text-gray-700 mb-12">
                Grid Plus Electric is committed to delivering exceptional service on every project. Here's what sets this business apart:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-electric-light p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-electric-dark mb-3">Expertise</h3>
                  <p className="text-gray-700">
                    Years of experience and continuous training in the latest electrical technologies.
                  </p>
                </div>
                
                <div className="bg-electric-light p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-electric-dark mb-3">Reliability</h3>
                  <p className="text-gray-700">
                    Shows up on time, communicates clearly, and completes projects as promised with transparent pricing.
                  </p>
                </div>
                
                <div className="bg-electric-light p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-electric-dark mb-3">Quality</h3>
                  <p className="text-gray-700">
                    Premium materials and strict quality standards ensure your electrical systems are safe and durable.
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
