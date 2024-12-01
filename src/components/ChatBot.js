import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, IconButton, Avatar } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const ChatContainer = styled(Card)({
  width: '400px',
  maxHeight: '600px',
  margin: '20px auto',
  borderRadius: '16px',
  background: '#ffffff',
  position: 'fixed',
  top:'10%',
  right:'0%',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
});

const ChatHeader = styled('div')({
  backgroundColor: '#1976d2', // Use primary color
  color: 'white',
  padding: '10px',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  textAlign: 'center',
});

const MessageContainer = styled('div')({
  padding: '10px',
  height: '450px',
  overflowY: 'scroll',
});

const UserMessage = styled('div')({
  backgroundColor: '#fbc02d', // Use secondary color
  color: '#fff',
  borderRadius: '10px',
  padding: '8px 15px',
  maxWidth: '75%',
  margin: '5px 0',
  alignSelf: 'flex-end',
  display: 'inline-block',
  wordWrap: 'break-word',
});

const BotMessage = styled('div')({
  backgroundColor: '#e0e0e0',
  color: '#212121',
  borderRadius: '10px',
  padding: '8px 15px',
  maxWidth: '75%',
  margin: '5px 0',
  alignSelf: 'flex-start',
  display: 'inline-block',
  wordWrap: 'break-word',
});

const InputSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px',
  backgroundColor: '#f5f5f5',
});

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'I am a bot. How can I assist you?', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <Typography variant="h6">Chat with AI</Typography>
      </ChatHeader>

      <MessageContainer>
        {messages.map((msg, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row' }}>
            {msg.sender === 'user' ? (
              <UserMessage>{msg.text}</UserMessage>
            ) : (
              <BotMessage>{msg.text}</BotMessage>
            )}
          </div>
        ))}
      </MessageContainer>

      <InputSection>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          size="small"
          sx={{ borderRadius: '20px', backgroundColor: '#fff' }}
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </InputSection>
    </ChatContainer>
  );
};

export default Chatbot;
