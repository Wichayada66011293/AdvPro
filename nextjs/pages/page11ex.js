import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router';

export default function Test() {
  const [currentText, setCurrentText] = useState(0); // Track which text to display
  const [visibleText, setVisibleText] = useState(0); // Track which text is visible (fading in and out)
  const router = useRouter();

  useEffect(() => {
    const timers = [
      // Fade-in the first text and fade it out
      setTimeout(() => {
        setCurrentText(1);
        setVisibleText(1);
      }, 0), // Start immediately
      setTimeout(() => setVisibleText(0), 2000), // Fade out after 2 seconds

      // Fade-in the second text and fade it out
      setTimeout(() => {
        setCurrentText(2);
        setVisibleText(2);
      }, 3000), // Start 3 seconds after
      setTimeout(() => setVisibleText(0), 5000), // Fade out after 2 seconds

      // Fade-in the third text and fade it out
      setTimeout(() => {
        setCurrentText(3);
        setVisibleText(3);
      }, 6000), // Start 6 seconds after
      setTimeout(() => setVisibleText(0), 8000), // Fade out after 2 seconds

      // Navigate to the next page
      setTimeout(() => {
        router.push('/page12'); // Navigate to page12 after the last text
      }, 10000),
    ];

    // Cleanup timers when the component unmounts
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [router]);

  const handleScreenClick = () => {
    router.push('/page12'); // Option to navigate on screen click
  };

  return (
    <Box
      onClick={handleScreenClick}
      sx={{
        cursor: 'pointer',
        textAlign: 'center',
        height: '100vh', // Full height of the viewport
        backgroundImage: 'url("/image/BG2.png")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', // Flexbox for centering
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        flexDirection: 'column', // Stack text vertically
      }}
    >
      {currentText === 1 && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            opacity: visibleText === 1 ? 1 : 0, // Fade in and fade out
            transition: 'opacity 1s ease-in-out', // Smooth fade-in and fade-out effect
            mb: 2,
          }}
        >
          คุณเดินไปจนสุดทาง {/* "You walk to the end" */}
        </Typography>
      )}
      {currentText === 2 && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            opacity: visibleText === 2 ? 1 : 0, // Fade in and fade out
            transition: 'opacity 1s ease-in-out',
            mb: 2,
          }}
        >
          .... {/* Placeholder text */}
        </Typography>
      )}
      {currentText === 3 && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            opacity: visibleText === 3 ? 1 : 0, // Fade in and fade out
            transition: 'opacity 1s ease-in-out',
          }}
        >
          ไม่มีใคร {/* "No one" */}
        </Typography>
      )}
    </Box>
  );
}

