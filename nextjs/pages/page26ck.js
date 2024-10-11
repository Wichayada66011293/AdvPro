import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Test() {
  const router = useRouter(); // Initialize router for navigation

  // Function to navigate to page27
  const navigateToPage27 = () => {
    router.push('/page27'); // Navigate to page27
  };

  return (
    <Box
      onClick={navigateToPage27} // Trigger navigation on click
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
      <Box>
        <Typography variant="h4" sx={{ 
          mb: 2,
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px',
        }}>
          นทีมอบนาฬิกาให้คุณ
        </Typography>
        <Typography variant="h5" sx={{ 
          mb: 2,
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px',
        }}>
          เขาหวังว่ามันจะเตือนคุณเสมอ ว่าคุณยังมีเวลา
        </Typography>
      </Box>
    </Box>
  );
}
