import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Shield, Users, Leaf } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
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

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2500;
    const increment = Math.ceil(end / (duration / 16));
    let startTimestamp: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.min(Math.floor(progress * end), end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay, isVisible]);

  return (
    <div 
      ref={counterRef}
      className={`transform transition-all duration-1000 bg-white p-6 rounded-lg shadow-lg text-center h-full 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-red-100 text-red-600 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-4xl font-bold text-green-900 mb-2">{count.toLocaleString()}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
          Tình Trạng <span className="text-red-600">Khẩn Cấp</span> Cần Bảo Tồn
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem 
            icon={<AlertCircle size={24} />} 
            value={1204} 
            label="Loài Trong Sách Đỏ Việt Nam" 
            delay={0}
          />
          <StatItem 
            icon={<Shield size={24} />} 
            value={418} 
            label="Loài Nguy Cấp" 
            delay={200}
          />
          <StatItem 
            icon={<Users size={24} />} 
            value={150000} 
            label="Người Ủng Hộ Bảo Tồn" 
            delay={400}
          />
          <StatItem 
            icon={<Leaf size={24} />} 
            value={34} 
            label="Chương Trình Bảo Tồn" 
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;