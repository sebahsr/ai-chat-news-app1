import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { TextField, Button, Typography, Box } from "@mui/material";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log("Signed up:", userCredential))
      .catch((error) => console.error("Error signing up:", error));
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log("Signed in:", userCredential))
      .catch((error) => console.error("Error signing in:", error));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: "10px", width: "100%" }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "20px", width: "100%" }}
      />
      <Button variant="contained" color="primary" onClick={handleSignUp} style={{ marginBottom: "10px" }}>
        Sign Up
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleSignIn}>
        Sign In
      </Button>
    </Box>
  );
};

export default Auth;
