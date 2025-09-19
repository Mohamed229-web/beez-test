import React from 'react';
import ControlSVG from '@/app/assets/control.svg';

const ControlMotion: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center h-full w-full">
      <div className="absolute bottom-[10%] flex justify-center items-center">
        {/* Anneaux pulse */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-72 h-72 rounded-full border border-gray-800 animate-[pulseRing_12s_linear_infinite]"
            style={{ animationDelay: `-${i * 1}s` }}
          />
        ))}
        {/* Cercle central */}
        <div className="overflow-hidden rounded-full w-56 h-56 flex justify-center items-center">
          <img className="object-cover w-60 h-60" src={ControlSVG.src} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default ControlMotion;