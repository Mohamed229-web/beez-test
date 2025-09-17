import React from 'react';
import ToLeftCursor from '../icons/ToLeftCursor';

const BlackChatCursor: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`black-cursor ${className}`}>
      <ToLeftCursor fillColor="#18181B" strokeColor="#09090B" className='absolute -top-5 -left-2' />
      <span className='text-xs text-white px-2 py-1 border-[1.5px] border-[#09090B] bg-[#18181B] rounded-lg'>Erik D.</span>
    </div>
  );
};

export default BlackChatCursor;