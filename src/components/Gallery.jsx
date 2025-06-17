import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Elegant dining room interior',
      title: 'Elegant Dining Experience'
    },
    {
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Gourmet pasta dish',
      title: 'Handcrafted Pasta'
    },
    {
      src: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Premium steak presentation',
      title: 'Premium Cuts'
    },
    {
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Chef preparing dishes',
      title: 'Culinary Artistry'
    },
    {
      src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Wine cellar selection',
      title: 'Wine Collection'
    },
    {
      src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Dessert presentation',
      title: 'Sweet Endings'
    },
    {
      src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Restaurant atmosphere',
      title: 'Warm Atmosphere'
    },
    {
      src: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Fresh ingredients',
      title: 'Fresh Ingredients'
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const goToNext = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through our culinary world and dining experience
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg animate-zoom-in"
              />

              {/* Image Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-sm mt-1 opacity-80">
                  {currentIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;