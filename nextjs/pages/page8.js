import React, { useState, useEffect } from "react"; 
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router';

export default function Test() {
  const router = useRouter(); 
  const [currentTextIndex, setCurrentTextIndex] = useState(0); 
  const [fade, setFade] = useState(false); // State for fade effect
  const texts = [
    "เป็นความคิดที่ดี", 
    "ลิฟต์เลยไปขึ้นไปชั้น 25", 
    "ตึกมี 12 ชั้น!!"
  ]; 

  const handleScreenClick = () => {
    console.log("Navigating to Page10"); 
    router.push('/page10'); 
  };

  useEffect(() => {
    const displayDuration = 2000; // Duration to display each text (2 seconds)
    const fadeDuration = 500; // Duration for fade effect (0.5 seconds)

    const displayText = () => {
      setFade(true); // Start fade out

      const fadeOutTimer = setTimeout(() => {
        // Change the text after fade out is complete
        setCurrentTextIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= texts.length) {
            handleScreenClick(); // Navigate to Page10 after displaying all texts
            return prevIndex; // Return the previous index to avoid going out of bounds
          }
          return nextIndex; // Move to the next text
        });

        setFade(false); // Start fade in after changing text
      }, fadeDuration); // Wait for fade out to finish before changing text

      return () => clearTimeout(fadeOutTimer); // Cleanup timeout
    };

    const interval = setInterval(displayText, displayDuration + fadeDuration); // Change text every 2 seconds + fade duration

    return () => clearInterval(interval); 
  }, [texts.length]);

  // Define the transition style separately
  const transitionStyle = {
    fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', 
    fontSize: '24px',
    opacity: fade ? 0 : 1, // Change opacity for fade effect
    transition: `opacity ${500}ms ease-in-out`, // Smooth transition effect
    marginBottom: 2, // Space below the text
  };

  return (
    <Box 
      onClick={handleScreenClick} 
      sx={{ 
        cursor: 'pointer', 
        textAlign: 'center', 
        height: '100vh', 
        backgroundImage: 'url("/image/BG2.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', // Stack texts vertically if needed
      }}
    >
      <Typography 
        variant="h5" 
        sx={transitionStyle} // Use the defined transition style
      >
        {texts[currentTextIndex]} 
      </Typography>
    </Box>
  );
}






