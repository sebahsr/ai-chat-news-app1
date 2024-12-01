import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Button, CssBaseline } from "@mui/material";
import Header from "../components/Header";
import News from "../components/News";
import Weather from "@/components/Weather";
import FloatingChatButton from "@/components/fl";

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#fbc02d", // Yellow
    },
    background: {
      default: "#f5f5f5", // Light Gray
      paper: "#ffffff", // White for cards and chat
    },
    text: {
      primary: "#212121", // Dark Gray
    },
    error: {
      main: "#d32f2f", // Red for errors
    },
  },
});

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen(!chatOpen);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header openChat={toggleChat} />
      <Weather  />
      <News />
      <FloatingChatButton/>
    </ThemeProvider>
  );
}
