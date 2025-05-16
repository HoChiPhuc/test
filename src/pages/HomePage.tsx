import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import FeaturedSpecies from '../components/species/FeaturedSpecies';
import ConservationBanner from '../components/home/ConservationBanner';
import ThreatsSection from '../components/home/ThreatsSection';
import WorldMap from '../components/home/WorldMap';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedSpecies />
        <ThreatsSection />
        <WorldMap />
        <ConservationBanner />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;