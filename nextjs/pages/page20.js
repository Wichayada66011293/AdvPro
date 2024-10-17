import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Test() {
  const router = useRouter(); // Initialize router for navigation

  // Function to handle click event
  const handleClick = () => {
    router.push('/page21'); // Navigate to page21 on click
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        cursor: 'pointer', // Add cursor style
        textAlign: 'center',
        height: '100vh',
        backgroundImage: 'url("/image/BG2.png")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
        color: 'black',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px', // Font size for the text
        }}
      >
        คุณทำเต็มที่แล้วนะ เก่งมากเลย
      </Typography>
    </Box>
  );
}
