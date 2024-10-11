import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material"; // Import Typography for text styling
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import BackgroundAudio from '@/components/BackgroundAudio'; // Ensure this path is correct

export default function Test() {
  const router = useRouter(); // Initialize the router
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0); // State for the index of the displayed text
  const [fade, setFade] = useState(false); // State for fade effect
  const text = [
    "ยินดีที่ได้รู้จักครับ",
    "วันนี้ผมจะมาเล่าเรื่องของผมเอง",
    "แต่ก่อนอื่น เรามาปรับมุมมองกันก่อน"
  ];

  // Function to handle navigation to Page3
  const handleGoToPage3 = () => {
    router.push('/page3'); // Navigate to Page3
  };

  // Effect to handle delay for showing text
  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); // Start fade out
      const nextIndex = displayedTextIndex + 1;
      setTimeout(() => {
        if (nextIndex < text.length) {
          setDisplayedTextIndex(nextIndex); // Move to the next text
          setFade(false); // Reset fade for the next text
        }
      }, 500); // Delay for fade out effect (0.5 seconds)
    }, 2000); // Delay of 2 seconds between texts

    if (displayedTextIndex < text.length - 1) {
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [displayedTextIndex, text.length]);

  return (
    <Box
      onClick={handleGoToPage3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        width: '100%', // Full width
        height: '100vh', // Full height of the viewport
        textAlign: "center",
        backgroundImage: 'url("/image/BG1.png")', // Path to your background image
        backgroundSize: '70%', // Set the background image size to 70%
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent background from repeating
      }}
    >
      <BackgroundAudio /> {/* Include the BackgroundAudio component here */}
      <Box 
        sx={{ 
          mt: -40, // Set margin-top to a negative value to move text up
          mb: 4, // Add margin below for spacing
          width: { xs: '90%', sm: '60%', md: '40%' }, // Responsive width
        }}
      >
        <Typography
          variant="h5" // You can change the variant according to your preference
          sx={{
            fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif', // Change the font family
            color: 'black', // Change text color to black
            textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)', // Optional: Add a text shadow for better readability
            fontWeight: 'normal',
            mb: 2, // Margin bottom for spacing
            opacity: fade ? 0 : 1, // Change opacity for fade effect
            transition: 'opacity 0.5s ease-in-out', // Smooth transition effect
          }}
        >
          {text[displayedTextIndex]} {/* Display text based on the index */}
        </Typography>
      </Box>
    </Box>
  );
}

