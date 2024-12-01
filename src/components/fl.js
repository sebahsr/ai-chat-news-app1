import React, { useState } from 'react';
import { Fab } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import Chatbot from './ChatBot';

const FloatingChatButton = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const handleToggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={handleToggleChat}
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <ChatIcon />
      </Fab>
      {isChatOpen && <Chatbot />}
    </div>
  );
};

export default FloatingChatButton;
