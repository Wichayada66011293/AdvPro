// components/page7.js 
import React, { useState, useEffect } from "react"; // Import useEffect for the transition effect
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useRouter } from 'next/router';

export default function Test() {
  const [floor, setFloor] = useState(""); // State to store selected floor
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0); // State for text display
  const [fade, setFade] = useState(false); // State for fade effect
  const [showChoice, setShowChoice] = useState(false); // State to control showing the floor choice
  const [choiceFade, setChoiceFade] = useState(false); // State for fade effect on choice display
  const [showSubmitButton, setShowSubmitButton] = useState(false); // State to control showing the submit button
  const router = useRouter(); // Initialize the router

  // Array of texts to display
  const texts = [
    "ห้องน้ำชั้นล่างปิดซ่อม",
    "คุณอยากขึ้นไปเข้าห้องน้ำชั้นไหน?",
  ];

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
    } else if (displayedTextIndex === texts.length - 1) {
      // Show the choice after the last text is displayed
      const choiceTimer = setTimeout(() => {
        setShowChoice(true); // Show the choice after the last text
      }, 500); // Delay for showing the choice (0.5 seconds)

      return () => clearTimeout(choiceTimer); // Cleanup timeout on component unmount
    }
  }, [displayedTextIndex]);

  // Effect hook to handle showing the floor choice with delay
  useEffect(() => {
    if (floor) {
      const timer = setTimeout(() => {
        setChoiceFade(true); // Start fade for choice display
        setShowSubmitButton(true); // Show the submit button after floor selection
      }, 500); // Delay for showing the choice (0.5 seconds)

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    } else {
      setShowSubmitButton(false); // Hide submit button if no floor is selected
    }
  }, [floor]);

  // Handle floor selection
  const handleChange = (event) => {
    setFloor(event.target.value);
    setChoiceFade(false); // Reset fade for choice display
    setShowSubmitButton(false); // Hide submit button until a new selection is made
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (floor) {
      console.log(floor); // Replace with API call to save the selected floor
      try {
        const response = await fetch('http://localhost:3000/page7', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ floor }) // sending the selected floor to the backend
        });
        if (response.ok) {
          console.log("Floor choice saved successfully");
          router.push('/page8'); // Navigate to Page8 after successful submission
        } else {
          console.error("Error saving data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Please select a floor before submitting");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("/image/BG2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        textAlign: 'center',
      }}
    >
      {/* Transition effect for the displayed texts */}
      <Typography variant="h5" sx={{ 
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', 
        fontSize: '24px', 
        mb: 2, 
        opacity: fade ? 0 : 1, // Change opacity for fade effect
        transition: 'opacity 0.5s ease-in-out' // Smooth transition effect
      }}>
        {texts[displayedTextIndex]} {/* Display text based on the index */}
      </Typography>

      {showChoice && ( // Render choice only if showChoice is true
        <FormControl fullWidth sx={{ width: '200px', mt: 2 }}> {/* Set a specific width for the FormControl */}
          <InputLabel id="floor-select-label">เลือกชั้น</InputLabel>
          <Select
            labelId="floor-select-label"
            id="floor-select"
            value={floor}
            label="เลือกชั้น"
            onChange={handleChange}
            sx={{
              fontSize: '16px',
              '& .MuiSelect-select': {
                fontSize: '16px',
              },
            }}
          >
            {[...Array(12)].map((_, i) => (
              <MenuItem key={i + 1} value={i + 1} sx={{ fontSize: '16px' }}>
                ชั้น {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {floor && (
        <Typography variant="h6" sx={{ 
          mt: 2, 
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif', 
          fontSize: '20px',
          opacity: choiceFade ? 1 : 0, // Change opacity for fade effect
          transition: 'opacity 0.5s ease-in-out' // Smooth transition effect
        }}>
          คุณเลือกชั้น: {floor}
        </Typography>
      )}

      {showSubmitButton && ( // Render submit button only if showSubmitButton is true
        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2,
          backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
        }}>
          Submit
        </Button>
      )}
    </Box>
  );
}



