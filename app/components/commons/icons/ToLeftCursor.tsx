import React from 'react';

const ToLeftCursor: React.FC<{ fillColor: string; strokeColor: string; className?: string }> = ({ fillColor, strokeColor, className }) => {
  return (
    <svg width="18" height="23" viewBox="0 0 18 23" className={`${className}`} stroke={strokeColor} fill={fillColor} xmlns="http://www.w3.org/2000/svg"><path d="M2.64853 1.49706L15.7029 14.5515C16.4589 15.3074 15.9235 16.6 14.8544 16.6H8.69848C8.06196 16.6 7.45151 16.8529 7.00143 17.3029L2.64853 21.6558C1.89257 22.4118 0.6 21.8764 0.6 20.8073V2.34558C0.6 1.2765 1.89257 0.741098 2.64853 1.49706Z" className="fill-foreground stroke-border/80 stroke-1"></path></svg>
  );
};

export default ToLeftCursor;