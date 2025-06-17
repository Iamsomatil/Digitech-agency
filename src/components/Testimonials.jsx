import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "DigitalCraft transformed our online presence completely. Their team delivered a stunning website that not only looks amazing but also converts visitors into customers. Our sales increased by 300% within the first quarter!",
      project: "E-commerce Platform Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, HealthTech Solutions",
      company: "HealthTech Solutions",
      image: "https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "Working with DigitalCraft was an absolute pleasure. They understood our vision for the healthcare app and delivered beyond our expectations. The app now has over 10,000 active users and a 4.8-star rating!",
      project: "Mobile App Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCorp",
      company: "GrowthCorp",
      image: "https://images.pexels.com/photos/3992657/pexels-photo-3992657.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "The digital marketing campaign they created for us was phenomenal. We saw a 500% ROI increase and our brand awareness doubled. Their strategic approach and attention to detail is unmatched.",
      project: "Digital Marketing Campaign"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Owner, Restaurant Chain",
      company: "Bella Vista Restaurants",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "The restaurant management system they built for us streamlined our entire operation. We've seen a 60% increase in efficiency and our customers love the new ordering experience.",
      project: "Custom Software Development"
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Founder, FitLife App",
      company: "FitLife Technologies",
      image: "https://images.pexels.com/photos/3992658/pexels-photo-3992658.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      rating: 5,
      text: "DigitalCraft brought our fitness app idea to life with incredible precision. The app has been downloaded over 50,000 times and maintains an 80% user retention rate. Exceptional work!",
      project: "Mobile App Development"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
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
              "{testimonials[currentIndex].text}"
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
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[
              "TechStart Inc.",
              "HealthTech Solutions",
              "GrowthCorp",
              "Bella Vista",
              "FitLife Technologies"
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