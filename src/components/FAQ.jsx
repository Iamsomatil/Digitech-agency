import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes Pixelforge different from other digital agencies?",
      answer: "At Pixelforge, we combine deep technical expertise with a user-centric approach to create digital experiences that deliver real business results. Our team has successfully delivered over 500 projects worldwide, giving us unique insights into diverse market needs and user behaviors. We're not just developers; we're strategic partners in your digital transformation journey."
    },
    {
      question: "How do you ensure our website will perform well globally?",
      answer: "We build all our solutions with performance as a core principle. Our sites use modern optimization techniques including code splitting, lazy loading, and responsive images to ensure fast load times across all devices and network conditions. We conduct thorough testing across different devices, browsers, and network speeds to guarantee optimal performance for your global audience."
    },
    {
      question: "What payment solutions do you integrate?",
      answer: "We integrate a wide range of global and regional payment solutions including Stripe, PayPal, Adyen, and various local payment processors. Our team will help you select the best payment mix based on your target markets, ensuring secure transactions while maximizing conversion rates. We stay updated with the latest payment trends and compliance requirements worldwide."
    },
    {
      question: "Can you help with international digital marketing?",
      answer: "Absolutely! Our digital marketing services are designed to reach global audiences effectively. We develop data-driven strategies that consider cultural nuances, language localization, and regional platform preferences. Our services include international SEO, paid advertising, content marketing, and social media management tailored to your target markets."
    },
    {
      question: "What is your approach to mobile-first development?",
      answer: "With mobile devices accounting for the majority of global internet traffic, we prioritize mobile-first development. We create responsive, performant applications that work seamlessly across all device types. Our solutions are built with accessibility in mind, ensuring an optimal experience for all users regardless of their device or connection speed."
    },
    {
      question: "What security measures do you implement?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, DDoS protection, and compliance with global data protection regulations like GDPR and CCPA. Our team stays ahead of emerging security threats and implements industry best practices to protect your business and customer data."
    },
    {
      question: "How do you handle international hosting and domains?",
      answer: "We help you choose the optimal hosting solution based on your target audience's location, whether that is a global CDN, regional hosting, or a multi-cloud setup. For domains, we assist with registering the most effective TLDs for your international presence and can manage the entire setup process to ensure optimal performance worldwide."
    },
    {
      question: "What support do you offer after launch?",
      answer: "Our comprehensive post-launch support includes 24/7 monitoring, regular updates, security patches, and performance optimization. We offer flexible support packages tailored to your needs, from basic maintenance to full-service management. Our team provides training and documentation to ensure your team is equipped to manage the platform effectively."
    },
    {
      question: "Can you help with digital transformation for traditional businesses?",
      answer: "Yes, we specialize in guiding traditional businesses through digital transformation. Our approach combines strategic consulting with technical implementation, helping you modernize operations, improve customer experiences, and unlock new digital revenue streams. We focus on creating sustainable digital solutions that align with your business goals."
    },
    {
      question: "How do you ensure our solution works across different regions?",
      answer: "We take a global-first approach to development, considering internationalization (i18n) and localization (l10n) from the start. Our team includes professionals from diverse backgrounds who understand cultural nuances. We conduct thorough market research and user testing to ensure your solution resonates with audiences worldwide while maintaining a consistent brand experience."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Your Questions, Answered
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with Pixelforge in the African digital landscape
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
              <a
                href="https://wa.me/2348168829686"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;