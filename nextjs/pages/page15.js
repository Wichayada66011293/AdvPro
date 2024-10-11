import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter from Next.js

export default function Test() {
  const [userChoice, setUserChoice] = useState(null); // State to track user's choice
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if submitting to the database
  const router = useRouter(); // Initialize the router

  // Function to handle user selection
  const handleChoice = async (choice) => {
    setUserChoice(choice); // Update state with the user's choice
    setIsSubmitting(true);  // Set submission state to true

    // Simulate saving the choice in the database with a delay
    setTimeout(() => {
      setIsSubmitting(false); // Stop showing submitting state after 1 second

      // Navigate to page16 after the choice is made
      setTimeout(() => {
        router.push('/page16'); // Navigate to page16
      }, 1500); // Delay navigation by 1.5 seconds
    }, 1000); // Simulate a 1 second delay before stopping the submission state
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
        นทีถามคุณว่า
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px', // Adjust font size to match page10
          color: 'black',
          mb: 4,
        }}
      >
        คุณกลัวความตายไหม?
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
              mt: 2 , mr : 2 ,
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
          {isSubmitting ? "กำลังบันทึก..." : `คุณ${userChoice}ความตาย`}
        </Typography>
      )}
    </Box>
  );
}

