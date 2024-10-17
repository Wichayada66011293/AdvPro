// components/Test.js
import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { Box, Typography } from "@mui/material"; // Import Typography for text styling
import { useRouter } from 'next/router'; // Import useRouter from Next.js

export default function Test() {
  const router = useRouter(); // Initialize the router
  const [fade, setFade] = useState(false); // State for fade effect
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0); // Index for the displayed text

  // Array of texts to display
  const texts = [
    "บทที่ 1", // "Chapter 1" in Thai
    "ชั้น 25"   // "25th Floor" in Thai
  ];

  // Function to handle navigation to Page5
  const handleGoToPage5 = () => {
    router.push('/page5'); // Navigate to Page5
  };

  // Effect to handle the timing of text display
  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); // Start fade out
      const nextIndex = displayedTextIndex + 1;
      setTimeout(() => {
        if (nextIndex < texts.length) {
          setDisplayedTextIndex(nextIndex); // Move to the next text
          setFade(false); // Reset fade for the next text
        } else {
          // If the last text has been displayed, go to Page5
          handleGoToPage5();
        }
      }, 500); // Delay for fade out effect (0.5 seconds)
    }, 2000); // Delay of 2 seconds between texts

    // Cleanup timer if the component unmounts or if the text index changes
    return () => clearTimeout(timer); 
  }, [displayedTextIndex, texts.length]);

  return (
    <Box 
      onClick={handleGoToPage5} 
      sx={{ 
        cursor: 'pointer', 
        textAlign: 'center',
        height: '100vh', // Full height of the viewport
        backgroundColor: 'rgb(16, 46, 93)', // Set background color
        display: 'flex', 
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        flexDirection: 'column',  // Stack the text vertically
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif', // Use your desired font
          color: 'white', // Change text color to white for better contrast
          fontWeight: 'normal',
          opacity: fade ? 0 : 1, // Change opacity for fade effect
          transition: 'opacity 0.5s ease-in-out', // Smooth transition effect
          mb: 2, // Margin bottom for spacing
        }}
      >
        {texts[displayedTextIndex]} {/* Display text based on the index */}
      </Typography>
    </Box>
  );
}
