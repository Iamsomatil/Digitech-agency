import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. A basic website typically takes 2-4 weeks, while more complex projects like e-commerce platforms or custom applications can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive support packages that include regular updates, security monitoring, backups, and technical support. Our maintenance plans start at $299/month and can be customized based on your specific needs. We also provide 1-6 months of free support depending on your chosen package."
    },
    {
      question: "Can you help with digital marketing and SEO?",
      answer: "Absolutely! We offer complete digital marketing services including SEO optimization, Google Ads management, social media marketing, content creation, and email marketing campaigns. Our marketing packages start at $2,500/month and are designed to drive qualified leads and increase your online visibility."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We use modern, industry-standard technologies including React, Node.js, Python, PHP, and various databases like MongoDB and MySQL. For mobile apps, we develop using React Native and Flutter for cross-platform compatibility. We always choose the best technology stack for your specific project requirements."
    },
    {
      question: "Do you work with businesses outside your local area?",
      answer: "Yes, we work with clients worldwide! We have experience collaborating remotely and use modern communication tools to ensure smooth project management. We've successfully completed projects for clients across different time zones and maintain regular communication throughout the development process."
    },
    {
      question: "What's included in your web development packages?",
      answer: "Our packages include responsive design, mobile optimization, basic SEO setup, contact forms, social media integration, Google Analytics, and initial support. Higher-tier packages also include e-commerce functionality, custom animations, advanced integrations, and extended support periods. We can also customize packages based on your specific needs."
    },
    {
      question: "How do you handle project communication and updates?",
      answer: "We believe in transparent communication. You'll have a dedicated project manager who will provide regular updates via email, scheduled calls, and our project management platform. We typically provide weekly progress reports and are always available for questions or concerns throughout the project."
    },
    {
      question: "What if I need changes after the project is completed?",
      answer: "We include a certain number of revisions in each package, and provide ongoing support for a specified period. After that, we offer flexible maintenance plans or can handle additional changes on an hourly basis. We're committed to ensuring your complete satisfaction with the final product."
    },
    {
      question: "Do you provide training on how to manage my website?",
      answer: "Yes! We provide comprehensive training sessions to help you manage your website content, update products (for e-commerce sites), and use any custom features we've built. We also provide documentation and video tutorials, and our support team is always available to help with any questions."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically work with a 50% deposit to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods including bank transfers, credit cards, and digital payment platforms. Payment terms are always discussed and agreed upon before project commencement."
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing
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
              Can't find the answer you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;