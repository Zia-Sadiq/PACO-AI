import { Target, Award, Users, TrendingUp } from 'lucide-react';
import React from 'react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To empower businesses through innovative IT solutions that drive growth, efficiency, and digital transformation.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We deliver the highest quality solutions with attention to detail and commitment to exceeding expectations.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description:
        'Your success is our priority. We build lasting partnerships through trust, transparency, and outstanding service.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description:
        'We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D8B8F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About PACO AI</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Leading IT Solutions Provider Based in the United Kingdom
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                PACO AI is a premier IT solutions company based in the United Kingdom,
                specializing in comprehensive technology services that transform
                businesses. With over a decade of experience, we've helped numerous
                organizations achieve their digital transformation goals.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our team of expert developers, engineers, and consultants brings
                together deep technical expertise and industry knowledge to deliver
                solutions that are not just technologically advanced, but also aligned
                with your business objectives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From custom web development and AI solutions to SCADA systems and
                industrial automation, we provide end-to-end services that help
                businesses thrive in the digital age.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#2D8B8F] to-[#257275] rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">Proven track record of successful projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">Expert team with diverse skill sets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">24/7 support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <span className="text-lg">Competitive pricing and flexible packages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-[#2D8B8F] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2D8B8F] to-[#257275] rounded-2xl p-12 md:p-16 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to take your business to the next level? Get in touch with our
              team today.
            </p>
            <a
              href="/contact"
              className="bg-white text-[#2D8B8F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
