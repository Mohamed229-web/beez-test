import React from 'react';

const StackCard: React.FC<{ stack?: React.ReactElement }> = ({ stack }) => {
  return (
    <div className='w-[84px] h-[84px] rounded-xl p-1.5 bg-[#fffaf58c]'>
      {stack && <span className='stack-icon'>{stack}</span>}
    </div>
  );
};

export default StackCard;