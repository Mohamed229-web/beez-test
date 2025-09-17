import React from 'react';
import WhyCard from '@/app/components/commons/cards/WhyCard';
import GlobeMotion from '../../motions/GlobeMotion';
import StacksMotion from '../../motions/StacksMotion';
import ControlMotion from '../../motions/ControlMotion';
import ChatMotion from '../../motions/ChatMotion';

const WhySection: React.FC = () => {
  return (
    <section className='section-container'>
      <h2 className="title">Build a better website, faster.</h2>
      <div className='why-cards-grid'>
        <WhyCard
          title="100+ sections and components"
          description="All the elements you need to build a modern, responsive, and accessible landing page."
          motion={<GlobeMotion />}
        />

        <WhyCard
          title="You're in control"
          description="This is not a component library. It's a collection of re-usable components that you can copy and paste into your apps."
          motion={<ControlMotion />}
        />

        <WhyCard
          title="Fits right into your stack"
          description="Built with modern web technologies and tools that fit right into any React project."
          subdescription='No bloat, no extra dependencies, no risk of conflicts.'
          motion={<StacksMotion />}
        />

        <WhyCard
          title="Data-agnostic"
          description="All the data is separate from components so you can edit it in seconds or make it dynamic."
          subdescription="Easily connect to a CMS of your choice."
          motion={<ChatMotion />}
        />
      </div>
    </section>
  );
};

export default WhySection;