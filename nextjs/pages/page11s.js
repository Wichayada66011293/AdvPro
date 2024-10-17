import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter from Next.js

export default function Test() {
  const [currentText, setCurrentText] = useState(0); // Track which text to display
  const [visibleText, setVisibleText] = useState(0); // Track which text is visible (fading in and out)
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const timers = [
      // Fade-in the first text
      setTimeout(() => {
        setCurrentText(1);
        setVisibleText(1);
      }, 0), // Start immediately
      setTimeout(() => setVisibleText(0), 2000), // Fade out after 2 seconds

      // Fade-in the second text
      setTimeout(() => {
        setCurrentText(2);
        setVisibleText(2);
      }, 3000), // Start 3 seconds after
      setTimeout(() => setVisibleText(0), 5000), // Fade out after 2 seconds

      // Fade-in the third text
      setTimeout(() => {
        setCurrentText(3);
        setVisibleText(3);
      }, 6000), // Start 3 seconds after
      setTimeout(() => setVisibleText(0), 8000), // Fade out after 2 seconds

      // Fade-in the fourth text
      setTimeout(() => {
        setCurrentText(4);
        setVisibleText(4);
      }, 9000), // Start 3 seconds after
      setTimeout(() => {
        setVisibleText(0);
      }, 11000), // Fade out after 2 seconds

      // Navigate to the next page
      setTimeout(() => {
        router.push('/page11ex'); // Navigate to page11ex after the last text
      }, 13000), // Navigate after 13 seconds
    ];

    // Cleanup timers when the component unmounts
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [router]);

  return (
    <Box
      sx={{
        cursor: 'pointer',
        height: '100vh', // Full height
        backgroundImage: 'url("/image/BG2.png")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', // Flexbox for centering
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        flexDirection: 'column', // Stack texts vertically
        textAlign: 'center', // Center text
      }}
      onClick={() => router.push('/page11ex')} // Navigate to next page on click
    >
      {currentText === 1 && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            opacity: visibleText === 1 ? 1 : 0,
            transition: 'opacity 1s ease-in-out', // Smooth fade-in/fade-out
            mb: 2,
          }}
        >
          คุณลองกดชั้นมั่วๆ {/* "You try pressing the floor randomly." */}
        </Typography>
      )}
      {currentText === 2 && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            opacity: visibleText === 2 ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            mb: 2,
          }}
        >
          ..... {/* Placeholder text */}
        </Typography>
      )}
      {currentText === 3 && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            opacity: visibleText === 3 ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            mb: 2,
          }}
        >
          ลิฟต์ไม่ขยับ {/* "The elevator doesn't move." */}
        </Typography>
      )}
      {currentText === 4 && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            opacity: visibleText === 4 ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          คุณจึงตัดสินใจ ออกเดินสำรวจ {/* "So you decide to go out and explore." */}
        </Typography>
      )}
    </Box>
  );
}
