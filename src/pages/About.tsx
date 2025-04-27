
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/sections/CtaSection';
import { CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
  const values = [
    {
      title: 'Quality Workmanship',
      description: 'We take pride in delivering high-quality electrical work that exceeds industry standards and meets all safety regulations.'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our business practices, providing fair pricing and honest recommendations.'
    },
    {
      title: 'Customer Focus',
      description: 'We prioritize customer satisfaction by listening to your needs, respecting your property, and ensuring timely communication.'
    },
    {
      title: 'Safety First',
      description: 'Safety is our top priority in every project we undertake, protecting both our customers and our team members.'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay current with the latest electrical technologies and techniques through ongoing training and certification.'
    },
    {
      title: 'Community Involvement',
      description: 'We are committed to supporting the Orangevale community through local partnerships and charitable initiatives.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Grid Plus Electric Inc | Orangevale, CA</title>
        <meta name="description" content="Learn about Grid Plus Electric Inc, a leading electrician company in Orangevale, CA. Our experienced team provides high-quality electrical services with a customer-first approach." />
        <meta name="keywords" content="about Grid Plus Electric, electrician company Orangevale, licensed electricians CA, professional electrical contractors" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <section className="bg-electric-light py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-electric-dark mb-6">About Our Company</h1>
              <p className="text-xl text-gray-700">
                Grid Plus Electric is a trusted electrical contractor serving Orangevale and surrounding communities with quality electrical services and exceptional customer care.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-electric-dark mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2010, Grid Plus Electric began with a simple mission: to provide reliable and affordable electrical services to the Orangevale community. What started as a small operation has grown into one of the most trusted electrical contractors in the Sacramento area.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our founder, with over 20 years of experience in the electrical industry, established Grid Plus Electric with a commitment to quality workmanship and exceptional customer service. These principles continue to guide our business today.
                </p>
                <p className="text-lg text-gray-700">
                  As we've grown, we've assembled a team of skilled electricians who share our values and dedication to electrical safety and excellence. Every member of our team is fully licensed, insured, and undergoes continuous training to stay ahead of industry advancements.
                </p>
              </div>
              
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 italic">Company Image Placeholder</span>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                To provide safe, reliable, and innovative electrical solutions with unmatched customer service, enhancing the safety and comfort of homes and businesses throughout our community.
              </p>
              
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-electric-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-electric-dark mb-2">{value.title}</h3>
                        <p className="text-gray-700">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">Our Team</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Grid Plus Electric employs a team of highly trained and experienced electricians who are committed to delivering exceptional service. All our electricians are licensed, insured, and undergo background checks for your peace of mind.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <div className="bg-gray-200 h-40 w-40 mx-auto rounded-full mb-4 flex items-center justify-center">
                    <span className="text-gray-500 italic">Photo</span>
                  </div>
                  <h3 className="text-xl font-bold text-electric-dark">John Smith</h3>
                  <p className="text-electric-blue font-medium">Master Electrician</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <div className="bg-gray-200 h-40 w-40 mx-auto rounded-full mb-4 flex items-center justify-center">
                    <span className="text-gray-500 italic">Photo</span>
                  </div>
                  <h3 className="text-xl font-bold text-electric-dark">Lisa Johnson</h3>
                  <p className="text-electric-blue font-medium">Operations Manager</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <div className="bg-gray-200 h-40 w-40 mx-auto rounded-full mb-4 flex items-center justify-center">
                    <span className="text-gray-500 italic">Photo</span>
                  </div>
                  <h3 className="text-xl font-bold text-electric-dark">Michael Brown</h3>
                  <p className="text-electric-blue font-medium">Service Electrician</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">Our Credentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <h3 className="text-xl font-bold text-electric-dark mb-2">Licensed</h3>
                  <p className="text-gray-700">C-10 Electrical Contractor License #123456</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <h3 className="text-xl font-bold text-electric-dark mb-2">Insured</h3>
                  <p className="text-gray-700">Fully bonded and insured for your protection</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <h3 className="text-xl font-bold text-electric-dark mb-2">Professional</h3>
                  <p className="text-gray-700">Member of the National Electrical Contractors Association</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <h3 className="text-xl font-bold text-electric-dark mb-2">Trusted</h3>
                  <p className="text-gray-700">A+ Rating with the Better Business Bureau</p>
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

export default About;
