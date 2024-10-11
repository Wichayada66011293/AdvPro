import Head from "next/head";
import { Box, Typography, Button, TextField, Stack } from "@mui/material";
import { useRouter } from 'next/router';

function Registration() {
  const router = useRouter();

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here

    // After successful registration, navigate to the login page
    router.push('./login'); // Redirecting to the login page
  };

  return (
    <>
      <Head>
        <title>Registration</title>
        <meta name="description" content="User registration page" />
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
          backgroundColor : '#CFD7E5',
          backgroundPosition: 'center', // Center the background image
          backgroundRepeat: 'no-repeat', // Prevent background from repeating
          fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif',
          color: '#fff' // Text color for visibility
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>

        <Box sx={{ maxWidth: 400, mx: "auto", mt: 2 }}>
          <form onSubmit={handleRegistrationSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                margin="normal"
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                required
                sx={{ backgroundColor: '#fff' }} // Set background color for input
              />
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                required
                sx={{ backgroundColor: '#fff' }} // Set background color for input
              />
              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                required
                sx={{ backgroundColor: '#fff' }} // Set background color for input
              />
              <Button 
                variant="contained" 
                color="primary" 
                type="submit" 
                fullWidth
                sx={{
                  backgroundColor: '#264E8B',
                  '&:hover': { backgroundColor: '#102E5D' }
                }}
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Registration;
