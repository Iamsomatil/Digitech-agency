import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl md:text-3xl font-display font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}>
              DigitalCraft
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-primary-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md w-full text-left transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;