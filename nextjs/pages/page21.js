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
    setIsSubmitting(true); // Set submission state to true

    // Simulate a delay for saving the choice
    setTimeout(() => {
      setIsSubmitting(false); // Stop showing submitting state after 1 second

      // Navigate to page22 after 1.5 seconds delay
      setTimeout(() => {
        router.push('/page22'); // Navigate to page22
      }, 1500); // Delay navigation by 1.5 seconds
    }, 1000); // Simulate a 1-second delay for submission
  };

  return (
    <Box
      sx={{
        height: '100vh', // Full viewport height
        backgroundImage: 'url("/image/BG2.png")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Set font family
        color: 'white', // Set text color for contrast
      }}
    >
      <Typography variant="h4" sx={{
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Set font family
        fontSize: '24px', // Corrected fontSize property
        color: 'black',
        mb: 3
      }}>
        คุณภูมิใจในตัวเองไหม
      </Typography>

      {!userChoice ? ( // If no choice is made yet, show the options
        <>
          <Button
            variant="contained"
            onClick={() => handleChoice("แน่นอนสิ")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Set font family
              fontSize: '18px', // Corrected fontSize property
              mt: 2, mr: 2 ,
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
            }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            แน่นอนสิ
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice("ไม่เลย")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Set font family
              fontSize: '18px', // Corrected fontSize property
              mt: 2, mr: 2 ,
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
            }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ไม่เลย
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice("ไม่รู้สิ")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Set font family
              fontSize: '18px', // Corrected fontSize property
              mt: 2, mr: 2 ,
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
            }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ไม่รู้สิ
          </Button>
        </>
      ) : ( // After the choice is made, display the user's choice
        <Box>
          <Typography variant="h6" sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Set font family
            fontSize: '24px', // Corrected fontSize property
            color: 'black',
            mb: 3 
          }}>
            {isSubmitting ? "กำลังบันทึก..." : `คุณเลือก: ${userChoice}`}
          </Typography>
        </Box>
      )}
    </Box>
  );
}


