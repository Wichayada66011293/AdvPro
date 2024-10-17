import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography, TextField, Button, Stack, Snackbar, Alert } from "@mui/material";

export default function AuthPage() {
  const router = useRouter(); // Initialize useRouter for navigation
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/users/login', { // Correct endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: usernameOrEmail, // Using usernameOrEmail here
          password_hash: password, // Using password here
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      const data = await response.json();
      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      // Handle successful login (e.g., redirect)
      router.push("/page1"); // Example navigation on successful login
    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        textAlign: "center",
        backgroundImage: 'url("/image/BG.png")',
        backgroundSize: '70%',
        backgroundPosition: 'center',
        backgroundColor : '#CFD7E5',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif',
        color: 'black'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login Page
      </Typography>

      {/* Login Form */}
      <form onSubmit={handleLoginSubmit} style={{ marginTop: "20px" }}>
        <Stack spacing={2} sx={{ maxWidth: 400, mx: "auto" }}>
          <TextField
            label="Email"
            variant="outlined"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
            sx={{ backgroundColor: '#fff' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ backgroundColor: '#fff' }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            sx={{
              backgroundColor: '#264E8B',
              '&:hover': { backgroundColor: '#102E5D' }
            }}
          >
            Login
          </Button>
        </Stack>
      </form>

      {/* Snackbar for alerts */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
