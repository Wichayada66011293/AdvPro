import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router"; // Import useRouter for navigation

const Guest = () => {
  const router = useRouter(); // Initialize the router

  const handleContinueAsGuest = () => {
    // Navigate to page1 when the button is clicked
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
        backgroundColor:'#CFD7E5',
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent background from repeating
        fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif',
        color: 'black' // Text color for visibility
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, Guest
      </Typography>
      <Typography variant="subtitle1" component="p" sx={{ mt: 2 }}>
        You are logged in as a guest. Certain features may be limited.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleContinueAsGuest} 
        sx={{ 
          mt: 4,
          backgroundColor: '#264E8B',
          '&:hover': { backgroundColor: '#102E5D' }
        }}>
        Continue as Guest
      </Button>
    </Box>
  );
};

export default Guest;


