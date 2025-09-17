import React from 'react';
import OrangeChatCursor from '../commons/elements/OrangeChatCursor';
import BlackChatCursor from '../commons/elements/BlackChatCurso';
import ChatMessage from '../commons/elements/ChatMessage';

const ChatMotion: React.FC = () => {
  return (
    <div className='relative min-h-72 w-full'>
      <ChatMessage className='absolute top-3' message="We need to update this heading before launch" />
      <OrangeChatCursor className='group-hover:animate-hover-reverse' />
      <ChatMessage className='absolute bottom-[40%] right-0' message="Let me quickly jump into Sanity and fix it" />
      <ChatMessage className='absolute bottom-[25%] right-0' message="Done!" />
      <BlackChatCursor className='group-hover:animate-hover' />
    </div>
  );
};

export default ChatMotion;