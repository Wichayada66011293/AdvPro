import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter to handle routing
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

const Login = () => {
  const router = useRouter(); // Initialize the router
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Handle login logic here
    console.log("Username/Email:", usernameOrEmail);
    console.log("Password:", password);
    // Add your authentication logic here (API call, etc.)
    
    // After successful login, redirect to page1
    router.push('/page1'); // Replace '/page1' with the correct path to your page1
  };

  return (
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
        backgroundColor : '#CFD7E5' ,
        backgroundRepeat: 'no-repeat', // Prevent background from repeating
        fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif',
        color: 'black' // Text color for visibility
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login Page
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <Stack spacing={2} sx={{ maxWidth: 400, mx: "auto" }}>
          <TextField
            label="Username or Email"
            variant="outlined"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
            sx={{ backgroundColor: '#fff' }} // Set background color for input
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ backgroundColor: '#fff' }} // Set background color for input
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
    </Box>
  );
};

export default Login;


