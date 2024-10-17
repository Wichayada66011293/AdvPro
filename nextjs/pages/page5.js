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
    "คุณตื่นขึ้น ในแลปที่คุ้นเคย", // "You wake up in a familiar lab"
    "บรรยกาศยามค่ำคืนที่เหมือนทุกวัน", // "The evening atmosphere is like every day"
    "เพราะคุณอยู่ปี4แล้ว และธีสิสก็ใกล้ต้องส่ง", // "Because you are in your fourth year and the thesis deadline is near"
    "คุณเลยมักจะปักหลักที่แลป และไม่กลับหอ" // "So you often stay at the lab and don’t go back to the dorm"
  ];

  // Function to handle navigation to Page6
  const handleGoToPage6 = () => {
    router.push('/page6'); // Navigate to Page6
  };

  // Effect to handle the timing of text display
  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayedTextIndex < texts.length - 1) {
        setFade(true); // Start fade out
        const nextIndex = displayedTextIndex + 1;
        setTimeout(() => {
          setDisplayedTextIndex(nextIndex); // Move to the next text
          setFade(false); // Reset fade for the next text
        }, 500); // Delay for fade out effect (0.5 seconds)
      } else {
        // If the last text has been displayed, go to Page6
        handleGoToPage6();
      }
    }, 2000); // Delay of 2 seconds between texts

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer); 
  }, [displayedTextIndex]);

  return (
    <Box 
      onClick={handleGoToPage6} 
      sx={{ 
        cursor: 'pointer', 
        textAlign: 'center',
        height: '100vh', // Full height of the viewport
        backgroundImage: 'url("/image/BG2.png")', // Background image path
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white', // Fallback color to check background application

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
          fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif', // Desired font
          color: 'black', // Text color
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
