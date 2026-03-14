import { ExternalLink } from 'lucide-react';
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Enterprise ERP System',
      category: 'Custom ERP',
      description:
        'Complete enterprise resource planning solution for a manufacturing company with 500+ employees.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      title: 'AI-Powered Analytics Platform',
      category: 'AI Solutions',
      description:
        'Machine learning platform for predictive analytics and business intelligence.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    },
    {
      title: 'Industrial SCADA System',
      category: 'SCADA & Automation',
      description:
        'Real-time monitoring and control system for water treatment facility.',
      technologies: ['LabVIEW', 'SQL Server', 'OPC UA'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description:
        'Full-featured online shopping platform with payment integration and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    },
    {
      title: 'Mobile Banking App',
      category: 'App Development',
      description:
        'Secure mobile banking application for iOS and Android with biometric authentication.',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg',
    },
    {
      title: 'Cloud Migration Project',
      category: 'Cloud Solutions',
      description:
        'Complete infrastructure migration from on-premise to AWS cloud for a financial services company.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D8B8F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Showcasing our successful projects and innovative solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#2D8B8F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-[#2D8B8F] font-semibold flex items-center hover:text-[#257275] transition-colors group">
                    View Details
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="text-5xl font-bold text-[#2D8B8F] mb-4">98%</div>
                <div className="text-xl text-gray-900 font-semibold mb-2">
                  Client Satisfaction
                </div>
                <p className="text-gray-600">
                  Consistently exceeding client expectations
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="text-5xl font-bold text-[#2D8B8F] mb-4">150+</div>
                <div className="text-xl text-gray-900 font-semibold mb-2">
                  Projects Delivered
                </div>
                <p className="text-gray-600">
                  Successfully completed across various industries
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="text-5xl font-bold text-[#2D8B8F] mb-4">24/7</div>
                <div className="text-xl text-gray-900 font-semibold mb-2">
                  Support Available
                </div>
                <p className="text-gray-600">
                  Round-the-clock assistance for our clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2D8B8F] to-[#257275] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing
          </p>
          <a
            href="/contact"
            className="bg-white text-[#2D8B8F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
