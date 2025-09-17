import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '200+', label: 'Projects Delivered', color: 'text-primary-600' },
    { icon: Users, number: '150+', label: 'Happy Clients', color: 'text-accent-600' },
    { icon: Clock, number: '5+', label: 'Years Experience', color: 'text-warm-600' },
    { icon: Heart, number: '100%', label: 'Client Satisfaction', color: 'text-red-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where innovative design meets cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Where Vision Becomes Reality
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in Lagos, Pixelforge was born from a shared vision to redefine digital experiences. 
                What started as a small team of passionate designers and developers has grown into a full-service 
                digital agency helping businesses across Nigeria and beyond transform their digital presence.
              </p>
              <p>
                Our philosophy is simple: exceptional digital solutions start with understanding our clients' 
                unique challenges and goals. We combine creative thinking with technical expertise to deliver 
                websites, applications, and digital strategies that drive real business results.
              </p>
              <p>
                At Pixelforge, we believe in the power of collaboration, innovation, and continuous learning. 
                Our team stays ahead of industry trends and technologies to ensure our clients receive 
                cutting-edge solutions that stand out in today's competitive digital landscape.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Pixelforge team collaborating"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <h4 className="font-display font-bold text-gray-900 text-lg mb-1">Samson Akinsanya</h4>
                <p className="text-gray-600 text-sm">Founder & Lead Developer</p>
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
          <h3 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Meet The Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Adeola Williams",
                role: "UI/UX Designer",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                description: "Transforming ideas into beautiful, intuitive interfaces"
              },
              {
                name: "Emeka Okafor",
                role: "Full-stack Developer",
                image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                description: "Building robust and scalable digital solutions"
              },
              {
                name: "Chioma Eze",
                role: "Digital Marketer",
                image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                description: "Driving growth through strategic digital campaigns"
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
                <h4 className="text-xl font-display font-bold text-gray-900 mb-2">
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