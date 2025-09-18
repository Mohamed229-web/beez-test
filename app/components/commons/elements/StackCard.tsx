import React from 'react';

const StackCard: React.FC<{ stack?: React.ReactElement }> = ({ stack }) => {
  return (
    <div className='w-[84px] h-[84px] rounded-xl p-1.5 bg-[#fdf6ee]'>
      {stack && <span className='stackIcon'>{stack}</span>}
    </div>
  );
};

export default StackCard;