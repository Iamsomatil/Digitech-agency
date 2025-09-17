import { 
  Globe, 
  Search, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom, responsive websites and web applications built with cutting-edge technologies for optimal performance and user engagement.",
      features: ["Responsive Design", "SEO Optimized", "Blazing Fast", "Mobile-First"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Digital Strategy",
      description: "Data-driven digital marketing strategies that increase your online presence and convert visitors into customers.",
      features: ["SEO & Content Strategy", "Social Media Management", "PPC Campaigns", "Analytics & Reporting"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications designed to provide seamless user experiences across all devices.",
      features: ["iOS & Android", "React Native", "UI/UX Design", "App Store Optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "E-commerce Development",
      description: "Scalable e-commerce solutions that drive sales and provide exceptional shopping experiences.",
      features: ["Shopify & WooCommerce", "Payment Integration", "Inventory Management", "Performance Optimization"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user engagement and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business with custom digital solutions that drive efficiency and growth.",
      features: ["Process Automation", "Cloud Solutions", "System Integration", "Digital Consulting"],
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Digital Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="group/btn flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Elevate Your Digital Presence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's collaborate to turn your vision into a powerful digital reality
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;