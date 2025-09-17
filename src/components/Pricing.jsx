import { Check, X, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,999",
      period: "USD",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO optimization",
        "Contact form with payment integration",
        "Social media integration",
        "1 month support (business hours)",
        "Google Analytics & Search Console setup",
        "Basic security setup"
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
      name: "Business",
      price: "4,999",
      period: "USD",
      description: "Ideal for growing businesses with specific needs",
      features: [
        "10-15 page responsive website",
        "Custom design & animations",
        "Advanced SEO optimization",
        "E-commerce (up to 100 products)",
        "Payment gateway integration",
        "Multilingual support",
        "3 months support",
        "Performance optimization",
        "Enhanced security features",
        "Basic digital marketing setup"
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
      description: "Tailored solutions for large businesses and corporations",
      features: [
        "Custom web/mobile application",
        "Advanced e-commerce solutions",
        "Multi-language support",
        "Custom integrations",
        "Advanced analytics & reporting",
        "6 months support with SLA",
        "Performance monitoring",
        "Security audits & compliance",
        "Dedicated project manager",
        "Staff training",
        "24/7 priority support"
      ],
      notIncluded: [],
      popular: false,
      cta: "Get Custom Quote",
      color: "border-accent-500"
    }
  ];

  const addOns = [
    {
      name: "Digital Marketing Package",
      price: "999",
      period: "monthly (USD)",
      description: "Complete digital marketing strategy and implementation"
    },
    {
      name: "Mobile App Development",
      price: "15,000",
      period: "starting from (USD)",
      description: "Cross-platform mobile applications for iOS and Android"
    },
    {
      name: "Ongoing Maintenance",
      price: "499",
      period: "monthly (USD)",
      description: "Regular updates, security patches, and technical support"
    },
    {
      name: "African Market Expansion",
      price: "Custom",
      period: "project-based",
      description: "Localization and expansion services across African markets"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Tailored Solutions for Global Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Competitive pricing designed for businesses of all sizes. All prices in USD.
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
              Value-Added Services
            </h3>
            <p className="text-lg text-gray-600">
              Custom solutions to help your African business grow
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
              Schedule a free consultation and we&apos;ll help you choose the perfect solution
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