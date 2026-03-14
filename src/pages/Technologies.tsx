import React from "react";
const Technologies = () => {
  const techCategories = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'React', description: 'Modern UI library for web applications' },
        { name: 'Vue.js', description: 'Progressive JavaScript framework' },
        { name: 'Angular', description: 'Enterprise-grade framework' },
        { name: 'TypeScript', description: 'Typed JavaScript for better code' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      ],
    },
    {
      category: 'Backend Development',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime for server-side' },
        { name: 'Python', description: 'Versatile programming language' },
        { name: '.NET Core', description: 'Cross-platform framework' },
        { name: 'Java Spring', description: 'Enterprise Java framework' },
        { name: 'PHP Laravel', description: 'Elegant PHP framework' },
      ],
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'PostgreSQL', description: 'Advanced relational database' },
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'MySQL', description: 'Popular relational database' },
        { name: 'Redis', description: 'In-memory data store' },
        { name: 'SQL Server', description: 'Microsoft database platform' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', description: 'Amazon Web Services cloud platform' },
        { name: 'Azure', description: 'Microsoft cloud services' },
        { name: 'Docker', description: 'Container platform' },
        { name: 'Kubernetes', description: 'Container orchestration' },
        { name: 'Jenkins', description: 'Automation server' },
      ],
    },
    {
      category: 'Mobile Development',
      technologies: [
        { name: 'React Native', description: 'Cross-platform mobile apps' },
        { name: 'Flutter', description: 'Google UI toolkit' },
        { name: 'Swift', description: 'iOS development language' },
        { name: 'Kotlin', description: 'Android development language' },
        { name: 'Ionic', description: 'Hybrid mobile framework' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      technologies: [
        { name: 'TensorFlow', description: 'ML framework by Google' },
        { name: 'PyTorch', description: 'Deep learning framework' },
        { name: 'Scikit-learn', description: 'ML library for Python' },
        { name: 'OpenCV', description: 'Computer vision library' },
        { name: 'NLP Tools', description: 'Natural language processing' },
      ],
    },
    {
      category: 'Industrial Automation',
      technologies: [
        { name: 'Siemens PLC', description: 'Industrial automation controllers' },
        { name: 'Allen Bradley', description: 'Rockwell Automation products' },
        { name: 'LabVIEW', description: 'System design platform' },
        { name: 'OPC UA', description: 'Industrial communication protocol' },
        { name: 'Modbus', description: 'Serial communication protocol' },
      ],
    },
    {
      category: 'SCADA Systems',
      technologies: [
        { name: 'Wonderware', description: 'SCADA software platform' },
        { name: 'Ignition', description: 'Industrial application platform' },
        { name: 'WinCC', description: 'Siemens SCADA system' },
        { name: 'FactoryTalk', description: 'Rockwell SCADA solution' },
        { name: 'Citect', description: 'Schneider Electric SCADA' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D8B8F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technologies We Use
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build robust solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {category.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#2D8B8F]"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  ))}
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
              Our Technology Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We select the best technology stack for each project based on your
              specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-[#2D8B8F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Best Practices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We follow industry best practices and coding standards to ensure
                maintainable, scalable code
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-[#2D8B8F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Future-Proof
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We choose technologies that are actively maintained and have strong
                community support
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-[#2D8B8F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Performance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize performance optimization to deliver fast, responsive
                applications
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2D8B8F] to-[#257275] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Help Choosing the Right Technology?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts can help you select the perfect tech stack for your project
          </p>
          <a
            href="/contact"
            className="bg-white text-[#2D8B8F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105"
          >
            Consult Our Experts
          </a>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
