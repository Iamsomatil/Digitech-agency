import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: ["300% increase in sales", "50% faster load times", "95% user satisfaction"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      description: "Patient management system with appointment scheduling and telemedicine features.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
      results: ["10,000+ active users", "4.8 app store rating", "40% reduction in wait times"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      category: "marketing",
      description: "Comprehensive digital marketing strategy for a SaaS startup.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Google Ads", "Facebook Ads", "SEO", "Content Marketing"],
      results: ["500% ROI increase", "200% lead generation", "150% brand awareness"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      category: "web",
      description: "Complete restaurant management solution with POS integration and analytics.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Payment Gateway"],
      results: ["60% efficiency increase", "35% cost reduction", "99.9% uptime"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Comprehensive fitness app with workout tracking and social features.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Flutter", "Firebase", "Machine Learning", "Wearable Integration"],
      results: ["50,000+ downloads", "4.7 app rating", "80% user retention"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand redesign for a tech startup including logo and guidelines.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Print Design"],
      results: ["400% brand recognition", "250% social engagement", "180% website traffic"],
      link: "#",
      github: "#"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'design', name: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-full p-2 max-w-2xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-white'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.link}
                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.github}
                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {result}
                    </div>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="group/btn flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                  <span>View Project</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can bring your vision to life
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;