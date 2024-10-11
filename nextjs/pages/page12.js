import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter from Next.js

export default function Test() {
  const [userChoice, setUserChoice] = useState(null); // State to track user's choice
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if submitting to the database
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const router = useRouter(); // Initialize router

  // Function to handle user selection
  const handleChoice = async (choice) => {
    setUserChoice(choice); // Update state with the user's choice
    setIsSubmitting(true); // Set submission state to true
    setErrorMessage(""); // Reset error message

    // Sending the user choice to the backend API
    try {
      const response = await fetch('http://localhost:3000/page12', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ choice }), // Sending the selected choice as data
      });

      if (response.ok) {
        console.log("Choice saved successfully");

        // Delay of 1.5 seconds before navigating to page13
        setTimeout(() => {
          router.push('/page12n');
        }, 1500);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Error saving choice to the database");
        console.error("Error saving choice to the database");
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false); // Stop showing submitting state
    }
  };

  return (
    <Box
      sx={{
        textAlign: 'center', // Center text
        height: '100vh', // Full viewport height
        backgroundImage: 'url("/image/BG2.png")', // Use the same background image as page10
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', // Flexbox for centering content
        justifyContent: 'center', // Horizontally center
        alignItems: 'center', // Vertically center
        flexDirection: 'column', // Stack content vertically
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font as page10
      }}
    >
      {!userChoice ? ( // If no choice is made yet, show the options
        <>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontSize: '24px', // Same font size as page10
              color: 'black', // Ensure good contrast against the background
              mb: 2, // Add margin below the text
            }}
          >
            มีบางคนมาสะกิดหลังคุณ
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontSize: '24px', // Same font size as page10
              color: 'black', // Ensure good contrast against the background
              mb: 4, // Add margin below the text
            }}
          >
            คุณจะทำยังไง?
          </Typography>

          <Button
            variant="contained"
            onClick={() => handleChoice("วิ่ง")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' },
              fontSize: '18px',
              mt: 2, mr: 2 }}
            
            disabled={isSubmitting} // Disable buttons while submitting
          >
            วิ่ง
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChoice("ต่อสู้")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontSize: '18px',
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' },
              mt: 2 , mr: 2 }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ต่อสู้
          </Button>

          <Button
            variant="contained"
            onClick={() => handleChoice("แกล้งตาย")}
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
              fontSize: '18px',
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' },
              mt: 2 , mr: 2}}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            แกล้งตาย
          </Button>
        </>
      ) : ( // After the choice is made, display the user's choice
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '24px',
            color: 'black',
          }}
        >
          {isSubmitting ? "กำลังบันทึก..." : `คุณเลือกที่จะ ${userChoice}`}
        </Typography>
      )}
      {errorMessage && ( // Display error message if there's an error
        <Typography
          variant="body1"
          sx={{
            color: 'red',
            mt: 2,
          }}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
}


