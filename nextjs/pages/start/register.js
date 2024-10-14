import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Snackbar, Alert,CircularProgress } from '@mui/material';
import { useRouter } from "next/router";
import Head from "next/head";




export default function AuthPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerPassword !== registerConfirmPassword) {
      setSnackbarMessage('Passwords do not match');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: registerName,
          email: registerEmail,
          password_hash: registerPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        let errorMessage = 'Registration failed';

        // Check if errorData contains any meaningful message
        if (errorData && errorData.detail) {
          errorMessage = errorData.detail;

          // Check for specific error about existing username
          if (errorData.detail === 'Username already exists') {
            errorMessage = 'This username already exists';
          }
        } else if (errorData && typeof errorData === 'object') {
          errorMessage = JSON.stringify(errorData);
        }

        throw new Error(errorMessage);

        
      }

      const data = await response.json();
      setSnackbarMessage('Registration successful!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      // Handle successful registration (e.g., redirect)
    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  
  };

  const handleBack  = async () => {
    setLoading(true);
    try {
      await router.push("reg"); // Navigate to the register page
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        textAlign: 'center',
        backgroundImage: 'url("/image/BG.png")',
        backgroundSize: 'cover',
        backgroundColor: '#CFD7E5',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif',
        color: 'black',
        padding: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>Register</Typography>
      <Box
        component="form"
        onSubmit={handleRegisterSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: 400,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          padding: 3,
        }}
      >
        <TextField
          label="Username"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
          required
          variant="outlined"
        />
        <TextField
          label="Email"
          type="email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          required
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          required
          variant="outlined"
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={registerConfirmPassword}
          onChange={(e) => setRegisterConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="#264E8B"
          sx={{ mt: 2 ,
            backgroundColor: '#264E8B',
            color: '#fff',
          }}
        >
          Register
        </Button>

        <Button
        onClick={handleBack}
          variant="contained"
          color="#264E8B"
          sx={{ mt: 2,
            backgroundColor: '#264E8B',
            color: '#fff',
          }}
        >
          Back to menu
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}


