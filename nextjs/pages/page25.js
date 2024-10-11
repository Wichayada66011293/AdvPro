import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material"; 
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Test() {
  const router = useRouter(); // Initialize router for navigation
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Track which text is currently visible
  const texts = [
    "คุณตื่นขึ้น",
    "ทุกอย่างเป็นเช่นเดิม คอมพิวเตอร์ตัวเดิม แลปเดิมๆ",
    "พร้อมของขวัญเล็กๆน้อยๆจากนที"
  ]; // Array of texts

  // Effect to handle text transitions
  useEffect(() => {
    if (currentTextIndex < texts.length - 1) { // Only change text if not at the last index
      const timer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1); // Move to the next text
      }, 3000); // Show each text for 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    } else {
      // Optional: Navigate to a new page after the last text is displayed
      const timer = setTimeout(() => {
        router.push('/page25'); // Adjust the page you want to navigate to
      }, 3000); // Delay navigation after last text

      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, router]);

  // Function to randomly select one of the pages
  const navigateRandomPage = () => {
    const pages = ['/page26c', '/page26ck', '/page26f']; // List of possible pages
    const randomPage = pages[Math.floor(Math.random() * pages.length)]; // Select a random page
    router.push(randomPage); // Navigate to the selected page
  };

  return (
    <Box
      onClick={navigateRandomPage} // Trigger navigation on click
      sx={{ 
        cursor: 'pointer', // Add a pointer cursor to indicate clickability
        height: '100vh', // Full viewport height
        display: 'flex', // Flexbox for centering
        alignItems: 'center', // Vertically center
        justifyContent: 'center', // Horizontally center
        backgroundImage: 'url("/image/BG2.png")', // Use the same background image as page1
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent background repeat
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font as page1
        color: 'black', // Set text color for contrast
        textAlign: 'center', // Center the text
        padding: '20px', // Add some padding
      }}
    >
      {texts.map((text, index) => (
        <Typography
          key={index}
          variant={index === 0 ? "h4" : "h5"} // Use h4 for the first line and h5 for the others
          sx={{
            mb: 2,
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            opacity: index === currentTextIndex ? 1 : 0, // Control opacity for fade effect
            transition: 'opacity 1s ease-in-out', // Smooth transition effect
            position: 'absolute', // Ensure text overlaps correctly
          }}
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
}

