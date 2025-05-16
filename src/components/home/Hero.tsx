import React, { useEffect, useRef } from 'react';
import { Link } from '../ui/Link';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.remove('opacity-0', 'translate-y-10');
    }, 300);
    
    setTimeout(() => {
      if (subtitleRef.current) subtitleRef.current.classList.remove('opacity-0', 'translate-y-10');
    }, 600);
    
    setTimeout(() => {
      if (buttonRef.current) buttonRef.current.classList.remove('opacity-0', 'translate-y-10');
    }, 900);
    
    setTimeout(() => {
      if (imageRef.current) imageRef.current.classList.remove('opacity-0', 'translate-x-10');
    }, 1200);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4577791/pexels-photo-4577791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              Bảo Vệ Động Vật
              <span className="text-red-500"> Sách Đỏ Việt Nam</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl text-gray-200 transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              Hãy cùng chung tay bảo vệ và nâng cao nhận thức về các loài động vật quý hiếm đang đứng trước nguy cơ tuyệt chủng tại Việt Nam.
            </p>
            
            <Link 
              to="/species"
              ref={buttonRef}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-500 transform opacity-0 translate-y-10 hover:scale-105"
            >
              Khám Phá Các Loài
            </Link>
          </div>
          
          <div 
            ref={imageRef}
            className="relative transition-all duration-1000 transform opacity-0 translate-x-10"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/1670413/pexels-photo-1670413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Voọc Chà Vá Chân Nâu" 
                className="w-full h-auto rounded"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Cực Kỳ Nguy Cấp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;