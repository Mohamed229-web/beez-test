import React from 'react';
import GlobeSVG from "@/app/assets/globe.svg"

const GlobeMotion = () => {
  return (
    <div className='relative flex justify-center items-center h-full w-full'>
      <div className='absolute -bottom-7'>
        <img className='object-cover' src={GlobeSVG.src} alt="logo" />
      </div>
    </div>
  );
};

export default GlobeMotion;