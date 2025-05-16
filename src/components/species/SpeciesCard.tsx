import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { Link } from '../ui/Link';
import { Species } from '../../types/species';

interface SpeciesCardProps {
  species: Species;
  index: number;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ species, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'critically endangered':
        return 'bg-red-600';
      case 'endangered':
        return 'bg-orange-600';
      case 'vulnerable':
        return 'bg-yellow-600';
      case 'near threatened':
        return 'bg-yellow-400';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div 
      className={`group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl
        opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={species.imageUrl} 
          alt={species.name} 
          className="w-full h-64 object-cover transition-transform duration-700 transform group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <span 
            className={`${getStatusColor(species.status)} text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {species.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-green-900">{species.name}</h3>
          <span className="text-gray-500 text-sm italic">{species.scientificName}</span>
        </div>
        
        <p className="text-gray-600 mb-4 h-12 overflow-hidden">
          {species.description.substring(0, 100)}...
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-100 p-2 rounded">
            <span className="text-xs text-gray-500">Habitat</span>
            <p className="text-sm font-medium text-gray-800">{species.habitat}</p>
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <span className="text-xs text-gray-500">Population</span>
            <p className="text-sm font-medium text-gray-800">{species.population}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/species/${species.id}`}
            className="text-red-600 hover:text-red-800 font-medium flex items-center transition-colors duration-300"
          >
            Learn More <ExternalLink size={16} className="ml-1" />
          </Link>
          <div className="relative group">
            <button className="p-2 text-gray-400 hover:text-green-600 transition-colors duration-300">
              <Info size={18} />
            </button>
            <div className="absolute right-0 bottom-full mb-2 w-48 bg-green-900 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Listed in Red Book since {species.listedSince}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesCard;