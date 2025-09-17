import React from 'react';

const ToRightCursor: React.FC<{ fillColor: string; strokeColor: string; className?: string }> = ({ fillColor, strokeColor, className }) => {
  return (
    <svg width="18" height="23" className={`${className}`} viewBox="0 0 18 23" stroke={strokeColor} fill={fillColor} xmlns="http://www.w3.org/2000/svg"><path d="M14.5514 1.49706L1.49701 14.5515C0.741049 15.3074 1.27645 16.6 2.34553 16.6H8.50147C9.13799 16.6 9.74844 16.8529 10.1985 17.3029L14.5514 21.6558C15.3074 22.4118 16.6 21.8764 16.6 20.8073V2.34558C16.6 1.2765 15.3074 0.741098 14.5514 1.49706Z" className="fill-brand-foreground/70 stroke-brand-foreground dark:fill-brand-foreground dark:stroke-brand stroke-1"></path></svg>
  );
};

export default ToRightCursor;