import {
  Building2,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Factory,
  Banknote,
  Plane,
  Truck,
} from 'lucide-react';
import React from 'react';
const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description:
        'Advanced automation solutions, SCADA systems, and ERP implementations for efficient production management.',
      solutions: [
        'Production Line Automation',
        'Quality Control Systems',
        'Inventory Management',
        'Supply Chain Integration',
      ],
    },
    {
      icon: HeartPulse,
      title: 'Healthcare',
      description:
        'HIPAA-compliant software solutions, patient management systems, and healthcare analytics platforms.',
      solutions: [
        'Patient Management Systems',
        'Telemedicine Platforms',
        'Medical Records Management',
        'Healthcare Analytics',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-Commerce',
      description:
        'Custom e-commerce platforms, inventory management, and omnichannel retail solutions.',
      solutions: [
        'E-Commerce Platforms',
        'Point of Sale Systems',
        'Customer Analytics',
        'Inventory Management',
      ],
    },
    {
      icon: Banknote,
      title: 'Financial Services',
      description:
        'Secure banking applications, payment gateways, and financial management systems.',
      solutions: [
        'Mobile Banking Apps',
        'Payment Processing',
        'Risk Management Systems',
        'Financial Analytics',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description:
        'Learning management systems, virtual classrooms, and educational technology solutions.',
      solutions: [
        'Learning Management Systems',
        'Virtual Classrooms',
        'Student Information Systems',
        'Educational Apps',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics & Transportation',
      description:
        'Fleet management, route optimization, and supply chain management solutions.',
      solutions: [
        'Fleet Management',
        'Route Optimization',
        'Warehouse Management',
        'Tracking Systems',
      ],
    },
    {
      icon: Plane,
      title: 'Travel & Hospitality',
      description:
        'Booking systems, property management, and customer experience platforms.',
      solutions: [
        'Booking Systems',
        'Property Management',
        'Customer Portals',
        'Revenue Management',
      ],
    },
    {
      icon: Building2,
      title: 'Real Estate',
      description:
        'Property management systems, CRM solutions, and real estate marketplaces.',
      solutions: [
        'Property Management',
        'Real Estate Portals',
        'CRM Systems',
        'Virtual Tours',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D8B8F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Delivering specialized IT solutions across diverse sectors
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We understand that each industry has unique challenges and requirements.
              Our team brings deep domain expertise and technical excellence to deliver
              solutions tailored to your industry's specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-[#2D8B8F] to-[#257275] p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-[#2D8B8F]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {industry.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Solutions:
                    </h4>
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-[#2D8B8F] mr-2">•</span>
                        <span className="text-gray-600 text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose PACO AI?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Industry Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team has extensive experience across multiple industries,
                understanding the unique challenges and regulatory requirements of
                each sector.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Proven Track Record
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We've successfully delivered complex projects for businesses of all
                sizes, from startups to large enterprises, across various industries.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Scalable Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our solutions are designed to grow with your business, ensuring
                long-term value and adaptability to changing industry dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2D8B8F] to-[#257275] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can help your business
            thrive
          </p>
          <a
            href="/contact"
            className="bg-white text-[#2D8B8F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;
