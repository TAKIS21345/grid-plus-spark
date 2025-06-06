import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/sections/CtaSection';
import { CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
  const values = [
    {
      title: 'Quality Workmanship',
      description: 'I take pride in delivering high-quality electrical work that exceeds industry standards and meets all safety regulations.'
    },
    {
      title: 'Integrity',
      description: 'I operate with honesty and transparency in all my business practices, providing fair pricing and honest recommendations.'
    },
    {
      title: 'Customer Focus',
      description: 'I prioritize customer satisfaction by listening to your needs, respecting your property, and ensuring timely communication.'
    },
    {
      title: 'Safety First',
      description: 'Safety is my top priority in every project I undertake, protecting both my customers and myself.'
    },
    {
      title: 'Continuous Learning',
      description: 'I stay current with the latest electrical technologies and techniques through ongoing training and certification.'
    },
    {
      title: 'Community Involvement',
      description: 'I am committed to supporting the Orangevale community through local partnerships and charitable initiatives.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Grid Plus Electric | Orangevale, CA</title>
        <meta name="description" content="Learn about Grid Plus Electric Inc, a leading electrician in Orangevale, CA. High-quality electrical services with a customer-first approach." />
        <meta name="keywords" content="about Grid Plus Electric, electrician Orangevale, licensed electrician CA, professional electrical contractor" />
      </Helmet>
      <Navbar />
      <main>
        <section className="bg-electric-light py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-electric-dark mb-6">About Grid Plus Electric</h1>
              <p className="text-xl text-gray-700">
                Grid Plus Electric is a trusted electrical contractor serving Orangevale and surrounding communities with quality electrical services and exceptional customer care. This is a one-man business, so you always know who is working on your project.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-electric-dark mb-6">My Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2010, Grid Plus Electric began with a simple mission: to provide reliable and affordable electrical services to the Orangevale community. What started as a small operation has grown into a trusted name in the Sacramento area.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  With over 20 years of experience in the electrical industry, I established Grid Plus Electric with a commitment to quality workmanship and exceptional customer service. These principles continue to guide my business today.
                </p>
                <p className="text-lg text-gray-700">
                  As the sole owner and operator, I am fully licensed, insured, and dedicated to electrical safety and excellence. I stay ahead of industry advancements through continuous training.
                </p>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 italic">Company Image Placeholder</span>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">My Mission</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                To provide safe, reliable, and innovative electrical solutions with unmatched customer service, enhancing the safety and comfort of homes and businesses throughout the community.
              </p>
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">My Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
                {values.map((value, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
                    <CheckCircle2 className="text-electric-blue mb-3" size={36} />
                    <h3 className="text-xl font-semibold text-electric-dark mb-2">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">About the Owner</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Grid Plus Electric is owned and operated by a highly trained and experienced electrician committed to delivering exceptional service. All work is performed by the owner, who is licensed, insured, and background checked for your peace of mind.
              </p>
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-electric-dark mb-6 text-center">Credentials</h2>
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
