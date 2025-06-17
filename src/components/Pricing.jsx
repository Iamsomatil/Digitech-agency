import { Check, X, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,999",
      period: "one-time",
      description: "Perfect for small businesses getting started online",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Basic SEO setup",
        "Contact form integration",
        "Social media links",
        "1 month support",
        "Google Analytics setup"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Custom animations",
        "Advanced integrations",
        "Ongoing maintenance"
      ],
      popular: false,
      cta: "Get Started",
      color: "border-gray-200"
    },
    {
      name: "Professional",
      price: "4,999",
      period: "one-time",
      description: "Ideal for growing businesses that need more features",
      features: [
        "10-page responsive website",
        "Custom design & animations",
        "Advanced SEO optimization",
        "E-commerce functionality (up to 50 products)",
        "Payment gateway integration",
        "Blog/CMS integration",
        "3 months support",
        "Performance optimization",
        "Security features",
        "Email marketing setup"
      ],
      notIncluded: [
        "Custom app development",
        "Advanced analytics dashboard",
        "24/7 priority support"
      ],
      popular: true,
      cta: "Most Popular",
      color: "border-primary-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Comprehensive solutions for large businesses",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced e-commerce (unlimited products)",
        "Custom integrations & APIs",
        "Advanced analytics dashboard",
        "Multi-language support",
        "6 months support",
        "Performance monitoring",
        "Security audits",
        "Dedicated project manager",
        "Training sessions",
        "24/7 priority support"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Us",
      color: "border-accent-500"
    }
  ];

  const addOns = [
    {
      name: "Digital Marketing Package",
      price: "2,500",
      period: "monthly",
      description: "Complete digital marketing strategy and execution"
    },
    {
      name: "Mobile App Development",
      price: "8,999",
      period: "one-time",
      description: "Native iOS and Android app development"
    },
    {
      name: "Ongoing Maintenance",
      price: "299",
      period: "monthly",
      description: "Regular updates, backups, and technical support"
    },
    {
      name: "Advanced Analytics Setup",
      price: "1,499",
      period: "one-time",
      description: "Custom analytics dashboard and reporting"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up ${
                plan.popular ? 'scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  {plan.price === "Custom" ? (
                    <div className="text-4xl font-bold text-gray-900">Custom Quote</div>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start opacity-50">
                    <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-600">
              Enhance your package with these additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-display font-bold text-gray-900 mb-2">
                  {addon.name}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {addon.description}
                </p>
                <div className="text-2xl font-bold text-primary-600 mb-4">
                  ${addon.price}
                  <span className="text-sm text-gray-500 font-normal">/{addon.period}</span>
                </div>
                <button className="group flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Not Sure Which Plan is Right for You?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a free consultation and we'll help you choose the perfect solution
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;