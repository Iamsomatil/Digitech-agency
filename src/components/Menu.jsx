import { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuItems = {
    starters: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with truffle and parmesan, served with garlic aioli",
        price: "$18"
      },
      {
        name: "Seared Scallops",
        description: "Pan-seared scallops with cauliflower purée and pancetta crisps",
        price: "$24"
      },
      {
        name: "Burrata Caprese",
        description: "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
        price: "$16"
      },
      {
        name: "Duck Liver Pâté",
        description: "House-made pâté with toasted brioche and fig compote",
        price: "$20"
      }
    ],
    mains: [
      {
        name: "Wagyu Ribeye",
        description: "12oz dry-aged wagyu with roasted bone marrow and seasonal vegetables",
        price: "$85"
      },
      {
        name: "Lobster Risotto",
        description: "Creamy arborio rice with fresh lobster, lemon zest, and microgreens",
        price: "$42"
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique and roasted fingerlings",
        price: "$38"
      },
      {
        name: "Halibut Provençal",
        description: "Pan-seared halibut with ratatouille and herb-crusted potatoes",
        price: "$36"
      }
    ],
    desserts: [
      {
        name: "Chocolate Soufflé",
        description: "Dark chocolate soufflé with vanilla bean ice cream and gold leaf",
        price: "$16"
      },
      {
        name: "Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar and fresh berries",
        price: "$12"
      },
      {
        name: "Tiramisu",
        description: "House-made tiramisu with espresso-soaked ladyfingers and mascarpone",
        price: "$14"
      },
      {
        name: "Lemon Tart",
        description: "Tart lemon curd with meringue and candied lemon zest",
        price: "$13"
      }
    ],
    drinks: [
      {
        name: "Sommelier's Selection",
        description: "Curated wine pairing for your meal, chosen by our expert sommelier",
        price: "$28"
      },
      {
        name: "Saveur Signature",
        description: "Bourbon, honey, lemon, and fresh thyme with smoked ice",
        price: "$16"
      },
      {
        name: "Elderflower Spritz",
        description: "Prosecco, elderflower liqueur, cucumber, and fresh mint",
        price: "$14"
      },
      {
        name: "Craft Beer Selection",
        description: "Rotating selection of local and imported craft beers",
        price: "$8-12"
      }
    ]
  };

  const categories = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🥩' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Beverages', icon: '🍷' }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and culinary expertise
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-full p-2 shadow-lg max-w-2xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  {item.name}
                </h3>
                <span className="text-xl font-bold text-primary-600 ml-4">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Chef's Tasting Menu
            </h3>
            <p className="text-gray-600 mb-6">
              Experience our signature 7-course tasting menu, featuring seasonal ingredients and wine pairings
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-3xl font-bold text-primary-600">$125</span>
              <span className="text-gray-500">per person</span>
            </div>
            <button className="mt-6 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Reserve Tasting Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;