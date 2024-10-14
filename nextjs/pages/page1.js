// pages/page1.js
import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material"; // Import Typography for text styling
import { useRouter } from 'next/router';
import BackgroundAudio from '@/components/BackgroundAudio'; // Import the BackgroundAudio component

export default function Page1() {
  const [name, setName] = useState("");
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const [fade, setFade] = useState(false); // State for fade effect
  const router = useRouter();

  // Array of texts to display
  const texts = [
    "สวัสดีครับ ผมเฮิรท (HZ)",
    "นักศึกษา วิศวะกรรมศาสตร์ปี 4",
    "แล้วคุณชื่อ..."
  ];

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name);
    try {
      const response = await fetch('http://localhost:8000/api/playername/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      if (response.ok) {
        console.log("Data saved successfully");
        router.push('/page2');
      } else {
        console.error("Error saving data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Effect hook to handle the timing of text display
  useEffect(() => {
    if (displayedTextIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setFade(true); // Start fade out
        const nextIndex = displayedTextIndex + 1;
        setTimeout(() => {
          setDisplayedTextIndex(nextIndex); // Move to the next text
          setFade(false); // Reset fade for the next text
        }, 500); // Delay for fade out effect (0.5 seconds)
      }, 2000); // Delay of 2 seconds between texts

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [displayedTextIndex]);

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        width: '100%', // Full width
        height: '100vh', // Full height of the viewport
        textAlign: "center",
        backgroundImage: 'url("/image/BG1.png")', // Path to your background image
        backgroundSize: '70%', // Set the background image size to 70%
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent background from repeating
        fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif'
      }}
    >
      <BackgroundAudio /> {/* Include the BackgroundAudio component here */}
      <Box sx={{ 
          mt: -40, // Set margin-top to a negative value to move text up
          mb: 4, // Add margin below for spacing
          width: { xs: '90%', sm: '60%', md: '40%' }, // Responsive width
        }}
      >
        <Box sx={{ mb: 2 }}> {/* Adjust margin bottom for spacing between text lines */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', 
              fontSize: '1.5rem', 
              fontWeight: 'normal', 
              opacity: fade ? 0 : 1, // Change opacity for fade effect
              transition: 'opacity 0.5s ease-in-out' // Smooth transition effect
            }}
          >
            {texts[displayedTextIndex]} {/* Display text based on the index */}
          </Typography>
        </Box>
        <Box>
          {displayedTextIndex === 2 && (
            <>
              <TextField
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="กรุณากรอกชื่อของคุณ"
                sx={{ mt: 2 }} // Add some margin top for spacing
                fullWidth // Make the text field full width
              />
              <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2,
                backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
               }}>
                Submit
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}








