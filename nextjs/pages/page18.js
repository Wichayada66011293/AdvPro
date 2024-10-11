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
    setIsSubmitting(true); // Set submission state to true

    // Simulate saving the choice in the database with a delay
    setTimeout(() => {
      setIsSubmitting(false); // Stop showing submitting state after 1 second

      // Navigate to page19 after the choice is made
      setTimeout(() => {
        router.push('/page19'); // Navigate to page19
      }, 1500); // Delay navigation by 1.5 seconds
    }, 1000); // Simulate a 1-second delay before stopping the submission state
  };

  return (
    <Box
      sx={{
        height: '100vh', // Full height to cover the viewport
        backgroundImage: 'url("/image/BG2.png")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Font styling
        textAlign: 'center', // Center text
        color: 'black', // Text color
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Font styling
          fontSize: '24px', // Adjust font size for the question
          mb: 4, // Margin bottom for spacing
        }}
      >
        แล้วคุณเสียดายชีวิตไหม
      </Typography>

      {!userChoice ? ( // If no choice is made yet, show the options
        <>
          <Button
            variant="contained"
            onClick={() => handleChoice("เสียดาย")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontSize: '18px', // Font styling
              mt: 2, mr: 2,
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' } }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            เสียดายสิ
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice("ไม่เสียดายเลย")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Font styling
              fontSize: '18px',
              mt: 2, mr: 2 ,
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }}}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ไม่เสียดาย
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice("ไม่แน่ใจ")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Font styling
              fontSize: '18px',
              mt: 2 , mr : 2 ,
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }}}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ไม่แน่ใจ
          </Button>
        </>
      ) : ( // After the choice is made, display the user's choice
        <Typography
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px', // Adjust font size for the response
            mt: 4, // Margin top for spacing
          }}
        >
          {isSubmitting ? "กำลังบันทึก..." : `คุณรู้สึก${userChoice}`}
        </Typography>
      )}
    </Box>
  );
}
