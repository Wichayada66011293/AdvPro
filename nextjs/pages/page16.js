import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Test() {
  const [name, setName] = useState(""); // State to store input value
  const router = useRouter(); // Initialize router for navigation

  // Function to handle form submission
  const handleSubmit = async () => {
    // Here, you would send the `name` data to your backend/database.
    console.log(name); // Placeholder: replace with actual API call
    try {
      const response = await fetch('http://localhost:3000/page16', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }) // sending the name to your backend
      });
      if (response.ok) {
        console.log("Data saved successfully");
        router.push('/page17'); // Navigate to page17 after successful submission
      } else {
        console.error("Error saving data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        height: '100vh',
        backgroundImage: 'url("/image/BG2.png")', // Use a background image like page1
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
        color: 'black',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px', // Font size for title
          mb: 4,
        }}
      >
        นทีบอกว่าคนที่มาที่นี่ได้แปลว่าใกล้ตายแล้ว
      </Typography>

      {/* Text Input */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
            fontSize: '20px', // Font size for prompt
            mb: 1,
          }}
        >
          คุณรู้สึกยังไง ...
        </Typography>
        <TextField
          variant="outlined"
          value={name} // input value bound to state
          onChange={(e) => setName(e.target.value)} // update state with input
          placeholder="กรุณากรอกคำตอบ"
          sx={{ width: '300px', mb: 2 }} // Width and margin for the text field
        />
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '18px', // Adjust button font size to match page1
          backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }
        }}
      >
        Submit
      </Button>
    </Box>
  );
}


