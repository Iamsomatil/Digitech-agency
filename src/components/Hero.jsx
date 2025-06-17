import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Free consultation & strategy session",
    "Custom solutions for your business",
    "Proven track record with 200+ clients"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-400/20 rounded-full animate-bounce-slow" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-secondary-400/20 rounded-full animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 200+ businesses worldwide
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">
              Digitally
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            We help ambitious businesses grow through strategic digital marketing, 
            stunning web design, and data-driven solutions that deliver real results.
          </p>

          {/* Benefits List */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-200">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: '200+', label: 'Happy Clients' },
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;