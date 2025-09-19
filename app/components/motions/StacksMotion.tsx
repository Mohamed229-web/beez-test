import React from 'react';
import StackCard from '../commons/elements/StackCard';
import { BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { FaFigma } from 'react-icons/fa';
import { SiShadcnui } from 'react-icons/si';

const StacksMotion: React.FC = () => {
  return (
    <div className='stacks-motion-grid'>
      <div className='stack-col-list marquee-track marquee-track--bottom'>
        <StackCard />
        <StackCard />
        <StackCard />
        {/* repeat for animation */}
        <StackCard />
        <StackCard />
        <StackCard />
      </div>
      <div className='stack-col-list marquee-track marquee-track--top'>
        <StackCard />
        <StackCard stack={<BiLogoTailwindCss className='w-6 h-6' />} />
        <StackCard />
        {/* repeat for animation */}
        <StackCard />
        <StackCard stack={<BiLogoTailwindCss className='w-6 h-6' />} />
        <StackCard />
      </div>
      <div className='stack-col-list marquee-track marquee-track--bottom'>
        <StackCard stack={<FaFigma className='w-6 h-6' />} />
        <StackCard stack={<SiShadcnui className='w-6 h-6' />} />
        <StackCard />
        {/* repeat for animation */}
        <StackCard stack={<FaFigma className='w-6 h-6' />} />
        <StackCard stack={<SiShadcnui className='w-6 h-6' />} />
        <StackCard />
      </div>
      <div className='stack-col-list marquee-track marquee-track--top'>
        <StackCard />
        <StackCard stack={<BiLogoReact className='w-6 h-6' />} />
        <StackCard />
        {/* repeat for animation */}
        <StackCard />
        <StackCard stack={<BiLogoReact className='w-6 h-6' />} />
        <StackCard />
      </div>
      <div className='stack-col-list marquee-track marquee-track--bottom'>
        <StackCard stack={<BiLogoTypescript className='w-6 h-6' />} />
        <StackCard />
        <StackCard />
        {/* repeat for animation */}
        <StackCard stack={<BiLogoTypescript className='w-6 h-6' />} />
        <StackCard />
        <StackCard />
      </div>
    </div>
  );
};

export default StacksMotion;