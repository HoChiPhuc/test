import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Shield, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { speciesData } from '../data/speciesData';

const SpeciesDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const species = speciesData.find(s => s.id === id);

  if (!species) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Species not found</h1>
          <button
            onClick={() => navigate('/species')}
            className="text-red-600 hover:text-red-800 font-medium flex items-center mx-auto"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Species List
          </button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/species')}
            className="text-red-600 hover:text-red-800 font-medium flex items-center mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Species List
          </button>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <img 
                src={species.imageUrl} 
                alt={species.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <span 
                  className={`${getStatusColor(species.status)} text-white text-sm font-bold px-4 py-1 rounded-full mb-4 inline-block`}
                >
                  {species.status}
                </span>
                <h1 className="text-4xl font-bold text-white mb-2">{species.name}</h1>
                <p className="text-gray-200 italic">{species.scientificName}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <AlertTriangle size={20} className="text-red-600 mr-2" />
                    <h3 className="font-bold text-gray-800">Conservation Status</h3>
                  </div>
                  <p className="text-gray-600">{species.status}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield size={20} className="text-green-600 mr-2" />
                    <h3 className="font-bold text-gray-800">Population</h3>
                  </div>
                  <p className="text-gray-600">{species.population}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MapPin size={20} className="text-blue-600 mr-2" />
                    <h3 className="font-bold text-gray-800">Habitat</h3>
                  </div>
                  <p className="text-gray-600">{species.habitat}</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-green-900 mb-4">About</h2>
                <p className="text-gray-600 mb-6">{species.description}</p>

                <h2 className="text-2xl font-bold text-green-900 mb-4">Major Threats</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  {species.threats.map((threat, index) => (
                    <li key={index}>{threat}</li>
                  ))}
                </ul>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-bold text-red-600 mb-4">Conservation Status</h2>
                  <p className="text-gray-700">
                    This species has been listed in the Red Book since {species.listedSince}. 
                    It is currently classified as {species.status}, which means it faces a very high risk of extinction in the wild.
                  </p>
                </div>

                <div className="text-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    Support Conservation Efforts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpeciesDetailPage;