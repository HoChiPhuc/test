import React, { useRef, useEffect, useState } from 'react';
import { Axe, Factory, Thermometer, TreePine } from 'lucide-react';

interface ThreatItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ThreatItem: React.FC<ThreatItemProps> = ({ icon, title, description, delay }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`flex gap-4 transition-all duration-1000 delay-${delay} transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="p-3 bg-red-100 text-red-600 rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-green-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ThreatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Major <span className="text-red-600">Threats</span> to Endangered Species
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding the key threats facing endangered species is the first step toward
            developing effective conservation strategies to protect them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ThreatItem
            icon={<Axe size={24} />}
            title="Habitat Loss"
            description="Deforestation, urban development, and agriculture expansion destroy natural habitats, leaving wildlife homeless and vulnerable."
            delay={0}
          />
          <ThreatItem
            icon={<Factory size={24} />}
            title="Pollution"
            description="Air, water, and land pollution contaminate habitats and directly harm wildlife through poisoning and reducing available resources."
            delay={200}
          />
          <ThreatItem
            icon={<Thermometer size={24} />}
            title="Climate Change"
            description="Rising temperatures and changing weather patterns disrupt ecosystems, migration routes, and breeding patterns of many species."
            delay={400}
          />
          <ThreatItem
            icon={<TreePine size={24} />}
            title="Illegal Wildlife Trade"
            description="Poaching and illegal trade of wildlife and their parts threaten many species with extinction for profit and status symbols."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreatsSection;