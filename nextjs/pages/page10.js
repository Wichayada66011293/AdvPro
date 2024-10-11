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

    // Sending the user choice to the backend API
    try {
      const response = await fetch('http://localhost:3000/page10', { // Corrected URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ choice }), // Sending the selected choice as data
      });

      console.log("Response status:", response.status); // Log response status

      if (response.ok) {
        console.log("Choice saved successfully");

        // Navigate based on the user's choice
        if (choice === "เดินสำรวจ") {
          router.push('/page11ex'); // Navigate to Page11ex
        } else if (choice === "ลองกดไปชั้นอื่น") {
          router.push('/page11s'); // Navigate to Page11s
        } else if (choice === "รอ") {
          router.push('/page11w'); // Navigate to Page11w
        }
      } else {
        console.error("Error saving choice to the database");
      }
    } catch (error) {
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
        backgroundImage: 'url("/image/BG2.png")', // Use the same background image as page1
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', // Flexbox for centering content
        justifyContent: 'center', // Horizontally center
        alignItems: 'center', // Vertically center
        flexDirection: 'column', // Stack content vertically
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', // Use the same font as page1
      }}
    >
      {!userChoice ? (
        <>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', 
              fontSize: '24px', // Same font size as page1
              color: 'Black', // Ensure good contrast against the background
              mb: 2, // Add margin below the text
            }}
          >
            ลิฟต์เปิดแล้ว คุณจะทำยังไงต่อ?
          </Typography>
          
          <Button
            variant="contained"
            onClick={() => handleChoice("เดินสำรวจ")}
            sx={{
              mt: 2,
              mb: 2,
              width: '200px', // Set a fixed width for consistency
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', 
              fontSize: '18px', // Adjust font size for buttons
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }, // Change color on hover
            }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            เดินสำรวจ
          </Button>

          <Button
            variant="contained"
            onClick={() => handleChoice("ลองกดไปชั้นอื่น")}
            sx={{
              mt: 2,
              mb: 2,
              width: '200px',
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', 
              fontSize: '18px',
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' },
            }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            ลองกดไปชั้นอื่น
          </Button>

          <Button
            variant="contained"
            onClick={() => handleChoice("รอ")}
            sx={{
              mt: 2,
              mb: 2,
              width: '200px',
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', 
              fontSize: '18px',
              backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' },
            }}
            disabled={isSubmitting} // Disable buttons while submitting
          >
            รอ
          </Button>
        </>
      ) : (
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
    </Box>
  );
}



