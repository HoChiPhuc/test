import React from 'react';
import SpeciesCard from './SpeciesCard';
import { speciesData } from '../../data/speciesData';

const FeaturedSpecies: React.FC = () => {
  // Take first 4 species for featured section
  const featuredSpecies = speciesData.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Featured <span className="text-red-600">Endangered Species</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover some of the world's most vulnerable animals that need our protection.
            These species are facing serious threats and are included in the IUCN Red List.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSpecies.map((species, index) => (
            <SpeciesCard 
              key={species.id} 
              species={species} 
              index={index} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            View All Species
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpecies;