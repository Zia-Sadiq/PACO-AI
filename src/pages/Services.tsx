import {
  Globe,
  Database,
  Brain,
  Settings,
  Smartphone,
  Cloud,
  Monitor,
  Cpu,
  Code2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks and technologies. Responsive, scalable, and user-friendly solutions tailored to your business needs.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'CMS Development',
        'API Integration',
      ],
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description:
        'Leverage the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions that propel your business forward.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
      ],
    },
    {
      icon: Database,
      title: 'Custom ERP Systems',
      description:
        'Enterprise Resource Planning solutions designed specifically for your business processes, integrating all aspects of your operations.',
      features: [
        'Process Automation',
        'Inventory Management',
        'Financial Management',
        'HR Management',
        'Supply Chain Integration',
      ],
    },
    {
      icon: Settings,
      title: 'SCADA Systems',
      description:
        'Supervisory Control and Data Acquisition systems for real-time monitoring and control of industrial processes.',
      features: [
        'Real-time Monitoring',
        'Process Control',
        'Data Acquisition',
        'Alarm Management',
        'Historical Data Analysis',
      ],
    },
    {
      icon: Cpu,
      title: 'Industrial Automation',
      description:
        'Complete automation solutions including PLC programming, HMI design, and system integration for manufacturing excellence.',
      features: [
        'PLC Programming',
        'HMI Development',
        'System Integration',
        'Process Optimization',
        'IoT Integration',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-platform Apps',
        'UI/UX Design',
        'App Maintenance',
      ],
    },
    {
      icon: Monitor,
      title: 'Desktop Applications',
      description:
        'Powerful desktop software solutions for Windows, macOS, and Linux that meet your specific business requirements.',
      features: [
        'Windows Applications',
        'Cross-platform Desktop Apps',
        'Legacy System Modernization',
        'Database Integration',
        'Custom Business Software',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Comprehensive cloud services including migration, deployment, and management to enhance scalability and reduce costs.',
      features: [
        'Cloud Migration',
        'Cloud Infrastructure',
        'DevOps Services',
        'Cloud Security',
        'Serverless Architecture',
      ],
    },
    {
      icon: Code2,
      title: 'Web Applications',
      description:
        'Complex web-based applications with advanced functionality, real-time features, and seamless user experiences.',
      features: [
        'SaaS Applications',
        'Real-time Applications',
        'Dashboard Development',
        'API Development',
        'Microservices Architecture',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D8B8F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive IT solutions to transform and elevate your business
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="bg-gradient-to-r from-[#2D8B8F] to-[#257275] p-8">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-[#2D8B8F]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#2D8B8F] mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2D8B8F] to-[#257275] rounded-2xl p-12 md:p-16 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business grow and succeed
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#2D8B8F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
