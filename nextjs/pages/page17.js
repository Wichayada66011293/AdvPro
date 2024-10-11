import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Test() {
  const router = useRouter(); // Initialize router for navigation

  // Function to handle click event
  const handleClick = () => {
    router.push('/page18'); // Navigate to page18 on click
  };

  return (
    <Box
      onClick={handleClick} // Add onClick handler
      sx={{
        cursor: 'pointer', // Cursor style for clickable area
        height: '100vh', // Full height to cover the viewport
        backgroundImage: 'url("/image/BG2.png")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Font styling
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px', // Font size for the text
          color: 'black', // Text color
          textAlign: 'center', // Center text
        }}
      >
        เป็นคำตอบที่น่าสนใจนะ
      </Typography>
    </Box>
  );
}
