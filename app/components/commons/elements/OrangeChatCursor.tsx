import React from 'react';
import ToRightCursor from '../icons/ToRightCursor';

const OrangeChatCursor: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`orange-cursor ${className}`}>
      <ToRightCursor fillColor="#FDBA74" strokeColor="#FB923C" className='absolute -top-5 -right-2' />
      <span className='text-xs text-[#09090B] px-2 py-1 border-[1.5px] border-[#FB923C] bg-[#FDBA74] rounded-lg'>Sofia G.</span>
    </div>
  );
};

export default OrangeChatCursor;