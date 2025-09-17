import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      position: "CEO, GlobalPay",
      company: "GlobalPay",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "Pixelforge transformed our digital banking platform with exceptional attention to detail. Their team delivered a secure, user-friendly interface that increased our customer engagement by 75% and reduced support tickets by 40%.",
      project: "Digital Banking Platform"
    },
    {
      id: 2,
      name: "Sophia Chen",
      position: "CMO, ShopGlobal",
      company: "ShopGlobal",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "Working with Pixelforge was a game-changer for our e-commerce platform. Their digital marketing strategy increased our conversion rate by 200% and our average order value by 35%. Truly outstanding results!",
      project: "E-commerce Marketing Strategy"
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      position: "Founder, HealthConnect",
      company: "HealthConnect",
      image: "https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "Pixelforge's mobile app development team created a telemedicine solution that's now used by over 100,000 patients worldwide. Their technical expertise and understanding of global healthcare needs is unparalleled.",
      project: "Telemedicine Mobile App"
    },
    {
      id: 4,
      name: "Elena Petrov",
      position: "Director, EduGlobal",
      company: "EduGlobal",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "The learning management system developed by Pixelforge has been instrumental in our mission to provide quality education worldwide. Their solution is robust, scalable, and user-friendly for both students and educators.",
      project: "E-learning Platform"
    },
    {
      id: 5,
      name: "David Kim",
      position: "CTO, LogistixNG",
      company: "LogistixNG",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "Pixelforge's logistics management system optimized our entire operation, reducing delivery times by 45% and increasing customer satisfaction to 98%. Their technical expertise and problem-solving approach are exceptional.",
      project: "Logistics Management System"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses across Africa that have transformed their digital presence with Pixelforge
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary-100">
              <Quote className="h-16 w-16" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-primary-600 font-semibold">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Project Tag */}
            <div className="text-center mt-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {testimonials[currentIndex].project}
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8 font-medium">
            Trusted by innovative businesses across Africa
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[
              "PayAfrik",
              "AfriShop",
              "MedAccess",
              "EduTech",
              "LogistixNG"
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 h-12 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;