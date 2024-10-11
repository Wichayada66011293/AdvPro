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
    "คุณอยากเข้าห้องน้ำ...",
    "คุณเดินเข้าไปในตึกอาคารเรียนที่คุ้นเคย",
    "บรรยกาศรอบข้างเงียบสงบ",
    "มีเสียงรถไฟผ่านบ้างเป็นครั้งคราว"
  ];

  // Function to handle navigation to Page7
  const handleGoToPage6 = () => {
    router.push('/page7'); // Navigate to Page7
  };

  // Effect to handle the timing of text display
  useEffect(() => {
    if (displayedTextIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setFade(true); // Start fade out
        const nextIndex = displayedTextIndex + 1;
        setTimeout(() => {
          setDisplayedTextIndex(nextIndex); // Move to the next text
          setFade(false); // Reset fade for the next text
        }, 500); // Delay for fade out effect (0.5 seconds)
      }, 2000); // Delay of 2 seconds between texts

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [displayedTextIndex]);

  return (
    <Box 
      onClick={handleGoToPage6} 
      sx={{ 
        cursor: 'pointer', 
        textAlign: 'center',
        height: '100vh', // Full height of the viewport
        backgroundImage: 'url("/image/BG2.png")', // Corrected image path
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white', // Optional fallback color to check if the background applies

        // Flexbox styles for centering the text
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
          color: 'black', // Change text color to white for better contrast
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
