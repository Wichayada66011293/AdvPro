import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function Test() {
  const [name, setName] = useState(""); // State to store input value
  const router = useRouter(); // Initialize router for navigation

  // Function to handle form submission
  const handleSubmit = async () => {
    console.log(name); // Placeholder: replace with actual API call
    try {
      const response = await fetch('http://localhost:3000/page19', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }) // sending the name to your backend
      });
      if (response.ok) {
        console.log("Data saved successfully");
        router.push('/page20'); // Navigate to page20 after successful submission
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
        backgroundImage: 'url("/image/BG2.png")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
        color: 'black',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontsize : '24px' ,
          mb: 2 }}
      >
        คุณเสียดายอะไรที่สุดหรอ
      </Typography>

      <TextField
        variant="outlined"
        value={name} // input value bound to state
        onChange={(e) => setName(e.target.value)} // update state with input
        placeholder="กรุณากรอกคำตอบ"
        sx={{ mb: 2, width: '300px' }} // Adjust input width
      />

      <Button 
        variant="contained" 
        onClick={handleSubmit}
        sx={{ 
          backgroundColor: '#264E8B', color: '#fff', '&:hover': { backgroundColor: '#102E5D' }, // Add hover effect
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

