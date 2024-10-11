import React, { useEffect, useState } from "react"; // Import useEffect for timing
import { Box, Typography, TextField, Button } from "@mui/material"; // Import MUI components
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Page22() {
  const [showFirstText, setShowFirstText] = useState(true); // State to control first text visibility
  const [showSecondText, setShowSecondText] = useState(false); // State to control second text visibility
  const [answer, setAnswer] = useState(""); // State to store the user's answer
  const router = useRouter(); // Initialize router for navigation

  // Effect to handle text fade out and answer box appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstText(false); // Hide first text after 2 seconds
      setTimeout(() => {
        setShowSecondText(true); // Show second text after first text fades out
      }, 1500); // Delay for the second text appearance (adjust as needed)
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  // Function to handle navigation after form submission
  const handleSubmit = () => {
    // Process the answer (e.g., send it to the backend)
    console.log("User's answer:", answer);
    // Navigate to page23 after submission
    router.push('/page23');
  };

  return (
    <Box
      sx={{
        textAlign: 'center', // Center text
        height: '100vh', // Full viewport height
        backgroundImage: 'url("/image/BG2.png")', // Use the same background image as page10
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', // Flexbox for centering content
        justifyContent: 'center', // Horizontally center
        alignItems: 'center', // Vertically center
        flexDirection: 'column', // Stack content vertically
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font as page10
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font as page10
          fontSize: '24px', // Corrected property name to fontSize
          opacity: showFirstText ? 1 : 0, // Control opacity for fade effect
          transition: 'opacity 1s ease-in-out', // Smooth transition effect
          mb: 3,
          color: 'black', // Change text color for better contrast
          display: showFirstText ? 'block' : 'none', // Hide text when not visible
        }}
      >
        แล้วมีอะไรที่ทำให้คุณอยากใช้ชีวิตต่อไหม
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font as page10
          fontSize: '24px', // Corrected property name to fontSize
          opacity: showSecondText ? 1 : 0, // Control opacity for fade effect
          transition: 'opacity 1s ease-in-out 0.5s', // Smooth transition effect with delay
          mb: 3,
          color: 'black', // Change text color for better contrast
          display: showSecondText ? 'block' : 'none', // Hide text when not visible
        }}
      >
        แล้วมันคืออะไรหรอ
      </Typography>

      {showSecondText && ( // Show input and button only when second text is visible
        <>
          <TextField
            variant="outlined"
            value={answer} // input value bound to state
            onChange={(e) => setAnswer(e.target.value)} // update state with input
            placeholder="กรุณากรอกคำตอบ"
            sx={{ mb: 2, width: '100%', maxWidth: '400px' }} // Full width for the text field with max width
          />
          <Button 
            variant="contained" 
            onClick={handleSubmit}
            sx={{ 
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
            }} // Custom button styles
          >
            Submit
          </Button>
        </>
      )}
    </Box>
  );
}




