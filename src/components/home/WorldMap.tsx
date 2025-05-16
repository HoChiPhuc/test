import React, { useRef, useEffect, useState } from 'react';

const WorldMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
  const regions = [
    { id: 'africa', name: 'Africa', x: '48%', y: '55%', species: ['African Elephant', 'Black Rhino', 'Mountain Gorilla'] },
    { id: 'asia', name: 'Asia', x: '70%', y: '45%', species: ['Bengal Tiger', 'Giant Panda', 'Asian Elephant'] },
    { id: 'australia', name: 'Australia', x: '80%', y: '70%', species: ['Koala', 'Tasmanian Devil', 'Southern Cassowary'] },
    { id: 'northAmerica', name: 'North America', x: '25%', y: '35%', species: ['Florida Panther', 'California Condor', 'Mexican Gray Wolf'] },
    { id: 'southAmerica', name: 'South America', x: '30%', y: '65%', species: ['Amazon River Dolphin', 'Golden Lion Tamarin', 'Andean Condor'] },
    { id: 'europe', name: 'Europe', x: '50%', y: '35%', species: ['Iberian Lynx', 'European Bison', 'Mediterranean Monk Seal'] },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Endangered Species <span className="text-red-600">World Map</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore endangered species across different regions of the world.
            Click on the hotspots to learn about the vulnerable species in each area.
          </p>
        </div>
        
        <div 
          ref={mapRef}
          className={`relative w-full h-[500px] bg-blue-50 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/6538857/pexels-photo-6538857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
          >
            <div className="absolute inset-0 bg-blue-900/30"></div>
          </div>
          
          {regions.map((region, index) => (
            <div 
              key={region.id}
              className="absolute"
              style={{ left: region.x, top: region.y }}
            >
              <button
                className={`w-6 h-6 rounded-full flex items-center justify-center transform transition-all duration-500 ${
                  activeRegion === region.id 
                    ? 'bg-red-600 scale-125' 
                    : 'bg-white scale-100 hover:scale-110'
                }`}
                onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <span className={`w-3 h-3 rounded-full ${
                  activeRegion === region.id ? 'bg-white' : 'bg-red-600'
                }`}></span>
              </button>
              
              {activeRegion === region.id && (
                <div className="absolute z-10 w-64 bg-white p-4 rounded-lg shadow-lg mt-2 -translate-x-1/2 left-3 animate-fadeIn">
                  <h3 className="text-lg font-bold text-green-900 mb-2">{region.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Endangered species in this region:</p>
                  <ul className="space-y-1">
                    {region.species.map((species, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm flex items-center"
                        style={{ animationDelay: `${idx * 100 + 200}ms` }}
                      >
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {species}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;