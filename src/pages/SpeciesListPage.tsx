import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpeciesCard from '../components/species/SpeciesCard';
import { speciesData } from '../data/speciesData';

const SpeciesListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
                Endangered <span className="text-red-600">Species</span>
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover and learn about the world's most vulnerable animals that need our protection.
                These species are facing serious threats and are included in the IUCN Red List.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {speciesData.map((species, index) => (
                <SpeciesCard 
                  key={species.id} 
                  species={species} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpeciesListPage;