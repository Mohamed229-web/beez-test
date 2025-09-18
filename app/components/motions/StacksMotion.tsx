import React from 'react';
import StackCard from '../commons/elements/StackCard';
import { BiLogoTypescript } from 'react-icons/bi';

const StacksMotion: React.FC = () => {
  return (
    <div>
      <StackCard />
      <StackCard stack={<BiLogoTypescript className='w-6 h-6' />} />
    </div>
  );
};

export default StacksMotion;