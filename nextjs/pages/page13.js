import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from 'next/router';

export default function Test() {
  const [userChoice, setUserChoice] = useState(null); // State to track user's choice
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if submitting to the database
  const router = useRouter(); // Initialize the router

  // Function to handle user selection
  const handleChoice = async (choice) => {
    setUserChoice(choice); // Update state with the user's choice
    setIsSubmitting(true); // Set submission state to true

    // Simulate a delay (if you want to add a backend request, you can do it here)
    setTimeout(() => {
      setIsSubmitting(false); // Stop showing submitting state after 1 second

      // After 1.5 seconds, navigate to page14
      setTimeout(() => {
        router.push('/page14'); // Navigate to page14
      }, 1500); // 1.5 seconds delay before navigation
    }, 1000); // Simulate backend request time
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        height: '100vh',
        backgroundImage: 'url("/image/BG2.png")', // Use the same background image as page10
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px', // Adjust font size to match page10
          color: 'black',
          mb: 2,
        }}
      >
        เค้าแนะนำตัวว่าชื่อ "นที"
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px', // Adjust font size to match page10
          color: 'black',
          mb: 4, // Added more margin to separate from buttons
        }}
      >
        เป็นผีคุณกลัวผีไหม?
      </Typography>

      {!userChoice ? ( // If no choice is made yet, show the options
        <>
          <Button
            variant="contained"
            onClick={() => handleChoice("กลัว")}
            sx={{
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontSize: '18px', // Adjust button font size to match page10
              mt: 2, 
              mr: 2 ,
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
            }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            กลัว
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice("ไม่กลัว")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontSize: '18px', // Adjust button font size to match page10
              mt: 2 , 
              mr: 2 ,
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
            }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ไม่กลัว
          </Button>
        </>
      ) : ( // After the choice is made, display the user's choice
        <Typography
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px', // Set font size for user choice display
            color: 'black',
            mt: 2,
          }}
        >
          {isSubmitting ? "กำลังบันทึก..." : `คุณ${userChoice}ผี`}
        </Typography>
      )}
    </Box>
  );
}




