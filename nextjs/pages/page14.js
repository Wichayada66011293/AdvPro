import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router';

export default function Test() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // State to track the current text index
  const [fadeOut, setFadeOut] = useState(false); // State to manage fade out effect
  const texts = [
    "นทีเป็นนักศึกษาปี 4 คณะเดียวกับคุณ",
    "เขาเป็นคนโชคร้าย ที่ผลัดตกตึกที่นี่",
    "เป็นผีที่น่าสงสารจริงๆ",
  ]; // Array of texts to display

  const router = useRouter(); // Initialize the router

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      // Set a timeout to change the current text index
      const timer = setTimeout(() => {
        setFadeOut(true); // Start fade out before changing text
      }, 2000); // Delay before fade out

      // Cleanup timeout on component unmount or when currentTextIndex changes
      return () => clearTimeout(timer);
    } else {
      // After the last text, navigate to page15
      const timer = setTimeout(() => {
        router.push('/page15'); // Navigate to page15
      }, 2000); // Wait 2 seconds after the last text before navigating

      // Cleanup timeout on component unmount
      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, router]);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1); // Move to the next text
        setFadeOut(false); // Reset fade out state
      }, 500); // Duration of fade out effect

      // Cleanup timeout on component unmount
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  return (
    <Box
      sx={{
        textAlign: 'center',
        height: '100vh', // Full height of the viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: 'url("/image/BG3.png")', // Background image similar to page10
        backgroundSize: '70%', // Set the background image size to 70%
        backgroundPosition: 'center',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
      }}
    >
      {currentTextIndex < texts.length && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            color: 'black',
            fontSize: '24px', // Adjust font size to match page10
            transition: 'opacity 0.5s ease-in-out', // Add transition effect for fading in/out
            opacity: fadeOut ? 0 : 1, // Set opacity to 0 during fade out
            marginBottom: '20vh', // Adjust this value to move text upward
          }}
        >
          {texts[currentTextIndex]} {/* Display the current text */}
        </Typography>
      )}
    </Box>
  );
}
