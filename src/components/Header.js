import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { useState } from "react";

const Header = ({ openChat }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state to manage login

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    // Trigger login logic
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AI-Driven Chat and News App
        </Typography>
        {isLoggedIn ? (
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
        ) : (
          <Button color="secondary" onClick={handleLoginClick}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
