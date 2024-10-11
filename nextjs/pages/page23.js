import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Test() {
  const [userChoice, setUserChoice] = useState(null); // State to track user's choice
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if submitting to the database
  const router = useRouter(); // Initialize router for navigation

  // Function to handle user selection
  const handleChoice = async (choice) => {
    setUserChoice(choice); // Update state with the user's choice
    setIsSubmitting(true);  // Set submission state to true

    // Simulate a delay for saving the choice
    setTimeout(() => {
      setIsSubmitting(false); // Stop showing submitting state after 1 second

      // Navigate to page24 after a 1.5 seconds delay
      setTimeout(() => {
        router.push('/page24'); // Navigate to page24
      }, 1500); // Delay navigation by 1.5 seconds
    }, 1000); // Simulate a 1-second delay for submission
  };

  return (
    <Box
      sx={{
        textAlign: 'center', // Center text
        height: '100vh', // Full viewport height
        backgroundImage: 'url("/image/BG2.png")', // Background image similar to page1
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', // Flexbox for centering content
        justifyContent: 'center', // Horizontally center
        alignItems: 'center', // Vertically center
        flexDirection: 'column', // Stack content vertically
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font
        color: 'black', // Text color for contrast
      }}
    >
      <Typography variant="h4" sx={{ mb: 3,
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
        fontsize : '24px',
       }}>
        แล้วถ้าตอนนี้คุณเลือกได้ล่ะ
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 ,
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
        fontsize : '24px',
        }}>
        คุณอยากใช้ชีวิตต่อไหม
      </Typography>

      {!userChoice ? ( // If no choice is made yet, show the options
        <>
          <Button
            variant="contained"
            onClick={() => handleChoice("แน่นอนสิ")}
            sx={{ mt: 2, mr: 2,
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontsize : '18px',
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }}}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            แน่นอนสิ
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice("ไม่ล่ะ เหนื่อยแล้ว")}
            sx={{ mt: 2,mr: 2,
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontsize : '18px',
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }}}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ไม่ล่ะ เหนื่อยแล้ว
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice("ไม่รู้สิ")}
            sx={{ mt: 2,mr: 2,
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontsize : '18px',
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }}}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ไม่รู้สิ
          </Button>
        </>
      ) : ( // After the choice is made, display the user's choice
        <Typography variant="h6" sx={{ mt: 3,
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontsize : '24px',
          }}>
          {isSubmitting ? "กำลังบันทึก..." : `${userChoice}`}
        </Typography>
      )}
    </Box>
  );
}
