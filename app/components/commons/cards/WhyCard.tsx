import React from 'react';

interface WhyCardProps {
  title: string;
  description: string;
  subdescription?: string;
  motion?: React.ReactElement;
}

const WhyCard: React.FC<WhyCardProps> = async ({ title, description, subdescription, motion }) => {
  return (
    <div className='card group why-card'>
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <div className='space-y-2 mb-4'>
          <p className='card-description'>{description}</p>
          {subdescription && <p className='card-sub-description'>{subdescription}</p>}
        </div>
      </div>
      <div className='flex grow justify-center items-center min-h-72'>
        {motion}
      </div>
    </div>
  );
};

export default WhyCard;