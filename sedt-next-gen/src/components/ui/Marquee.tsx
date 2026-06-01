import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 mt-12 border-t border-b border-white/10">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r  z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l  z-10"></div>
      
      {/* Main marquee track */}
      <div className="flex">
        {/* First marquee set */}
        <div className="flex shrink-0 items-center justify-around min-w-full animate-marquee">
          {[
            '/logo.png',
            '/dronetech.png',
            '/drone-flight.jpg',
            '/sedt-logo.png',
            '/hero-building.jpg'
          ].map((img, idx) => (
            <div key={`first-${idx}`} className="mx-8 flex items-center">
              <img 
                src={img} 
                
                className="h-[5rem] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 hover:scale-105" 
                alt={`Marquee item ${idx+1}`} 
              />
            </div>
          ))}
        </div>
        
        {/* Second marquee set (duplicate for seamless loop) */}
        <div className="flex shrink-0 items-center justify-around min-w-full animate-marquee">
          {[
            '/logo.png',
            '/dronetech.png',
            '/drone-flight.jpg',
            '/sedt-logo.png',
            '/hero-building.jpg'
          ].map((img, idx) => (
            <div key={`second-${idx}`} className="mx-8 flex items-center">
              <img 
                src={img} 
                className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 hover:scale-105" 
                alt={`Marquee item ${idx+1}`} 
              />
            </div>
          ))}
        </div>
      </div>

      <style >{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;