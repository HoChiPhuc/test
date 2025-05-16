import React, { useRef, useEffect, useState } from 'react';
import { Heart, Share2 } from 'lucide-react';

const ConservationBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={bannerRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-75"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`text-white transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Action Today for a Better Tomorrow
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Every small action can make a difference in protecting endangered species.
              From spreading awareness to supporting conservation efforts, you can be part
              of the global movement to preserve our planet's biodiversity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center transition-all duration-300 transform hover:scale-105">
                <Heart size={20} className="mr-2" />
                Donate Now
              </button>
              <button className="bg-white text-green-900 hover:bg-gray-100 px-6 py-3 rounded-full flex items-center transition-all duration-300 transform hover:scale-105">
                <Share2 size={20} className="mr-2" />
                Share
              </button>
            </div>
          </div>
          
          <div 
            className={`bg-white rounded-lg p-6 shadow-lg transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-green-900 mb-4">Join Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Stay updated on conservation efforts, success stories, and ways to get involved
              in protecting endangered species.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  I agree to receive newsletter and communications
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConservationBanner;