import React from "react"; 
import { Box, Typography } from "@mui/material"; 
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function YourComponent() {
  const router = useRouter(); // Initialize router for navigation

  // Function to navigate to page 25
  const handleNavigateToPage25 = () => {
    router.push('/page25'); // Navigate to page 25
  };

  return (
    <Box
      onClick={handleNavigateToPage25} 
      sx={{ 
        cursor: 'pointer', 
        height: '100vh', // Full viewport height
        display: 'flex', // Flexbox for centering
        alignItems: 'center', // Vertically center
        justifyContent: 'center', // Horizontally center
        backgroundImage: 'url("/image/BG2.png")', // Background image similar to page1
        backgroundSize: 'cover', // Cover the whole area
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent background repeat
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font
        color: 'black', // Text color for contrast
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4" sx={{ mb: 2,
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font
          fontsize : '24'
         }}>
          ไม่หรอก คุณเลือกไม่ได้
        </Typography>
        <Typography variant="h5"
          sx={{ mb: 2,
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font
          fontsize : '24'
        }}>
          จงใช้ชีวิตเพื่ออะไรก็ตามที่คุณตั้งมั่นต่อไปนะ
        </Typography>
      </Box>
    </Box>
  ); 
}

