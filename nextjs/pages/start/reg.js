import Head from "next/head";
import { Box, Typography, Button, Stack, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegisterClick = async () => {
    setLoading(true);
    try {
      await router.push("register"); // Navigate to the register page
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = async () => {
    setLoading(true);
    try {
      await router.push("login"); // Navigate to the login page
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGuestClick = async () => {
    setLoading(true);
    try {
      await router.push("guest"); // Navigate to the guest page
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome to the application" />
      </Head>
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center items vertically
          alignItems: 'center', // Center items horizontally
          width: '100%', // Full width
          height: '100vh', // Full height of the viewport
          textAlign: "center",
          backgroundImage: 'url("/image/BG.png")', // Path to your background image
          backgroundSize: '70%', // Set the background image size to 70%
          backgroundPosition: 'center', // Center the background image
          backgroundColor : '#CFD7E5',
          backgroundRepeat: 'no-repeat', // Prevent background from repeating
          fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif',
          color: 'black' // Text color for visibility
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Application
        </Typography>
        <Typography variant="subtitle1" component="p" gutterBottom>
          Please choose an option:
        </Typography>
        <Stack spacing={2} direction="column" alignItems="center">
          <Button 
            variant="contained"  
            sx={{
              backgroundColor: '#264E8B',
              color: '#fff',
              '&:hover': { backgroundColor: '#102E5D' }
            }}
            onClick={handleRegisterClick}
            aria-label="Register"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
          </Button>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#264E8B',
              color: '#fff',
              '&:hover': { backgroundColor: '#102E5D' }
            }}
            onClick={handleLoginClick}
            aria-label="Login"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>
          <Button 
            variant="outlined" 
            sx={{
              backgroundColor: '#264E8B',
              color: '#fff',
              '&:hover': { backgroundColor: '#102E5D' }
            }}
            onClick={handleGuestClick}
            aria-label="Login as Guest"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login as Guest"}
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
