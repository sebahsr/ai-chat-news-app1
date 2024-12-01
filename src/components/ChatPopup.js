import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

const Chat = ({ open, onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Chat</DialogTitle>
      <DialogContent>
        {messages.map((msg, index) => (
          <Typography key={index} style={{ marginBottom: "10px" }}>
            {msg}
          </Typography>
        ))}
        <TextField
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Chat;
