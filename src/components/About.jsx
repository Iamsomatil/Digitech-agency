import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '15+', label: 'Awards Won', color: 'text-primary-600' },
    { icon: Users, number: '10K+', label: 'Happy Guests', color: 'text-accent-600' },
    { icon: Clock, number: '25', label: 'Years Experience', color: 'text-warm-600' },
    { icon: Heart, number: '100%', label: 'Made with Love', color: 'text-red-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey of passion, tradition, and exceptional culinary experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Where Tradition Meets Innovation
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 1998 by Chef Marco Saveur, our restaurant began as a small family bistro 
                with a simple mission: to create unforgettable dining experiences that bring people together. 
                What started as a neighborhood gem has evolved into one of the city's most celebrated culinary destinations.
              </p>
              <p>
                Our philosophy centers on the belief that exceptional food begins with exceptional ingredients. 
                We work closely with local farmers, fishermen, and artisans to source the finest seasonal produce, 
                ensuring every dish tells a story of quality, sustainability, and respect for the craft.
              </p>
              <p>
                Chef Marco's innovative approach to classical techniques has earned us recognition from food critics 
                and diners alike. Our team of passionate culinary artists continues to push boundaries while 
                honoring the timeless traditions that make dining truly special.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Experience Our Story
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Chef Marco in the kitchen"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <h4 className="font-serif font-bold text-gray-900 text-lg mb-1">Chef Marco Saveur</h4>
                <p className="text-gray-600 text-sm">Founder & Executive Chef</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  <stat.icon className="h-12 w-12" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Laurent",
                role: "Sous Chef",
                image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                description: "Bringing French culinary traditions to every dish"
              },
              {
                name: "Antonio Rodriguez",
                role: "Pastry Chef",
                image: "https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                description: "Creating sweet masterpieces that end meals perfectly"
              },
              {
                name: "Elena Chen",
                role: "Sommelier",
                image: "https://images.pexels.com/photos/3992657/pexels-photo-3992657.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                description: "Curating wine experiences to complement every flavor"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;