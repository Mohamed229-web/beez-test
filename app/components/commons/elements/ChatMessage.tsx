import React from 'react';

const ChatMessage: React.FC<{ message: string; className?: string }> = ({ message, className }) => {
  return (
    <div className={`chat-message ${className}`}>
      <p className='text-xs text-gray-700'>{message}</p>
    </div>
  );
};

export default ChatMessage;