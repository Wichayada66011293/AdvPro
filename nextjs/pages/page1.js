// pages/page1.js
import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useRouter } from 'next/router';
import BackgroundAudio from '@/components/BackgroundAudio';

export default function Page1() {
  const [name, setName] = useState("");
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const router = useRouter();

  const texts = [
    "สวัสดีครับ ผมเฮิรท (HZ)",
    "นักศึกษา วิศวะกรรมศาสตร์ปี 4",
    "แล้วคุณชื่อ..."
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name);
    
    // Immediately navigate to the next page
    router.push('/page2');

    // Optionally, you can still call the API to save the data
    try {
      const response = await fetch('http://localhost:8000/api/playername/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name })
      });

      if (!response.ok) {
        console.error("Error saving data");
      } else {
        console.log("Data saved successfully");
      }
    } catch (error) {
      console.error("Error:", error);
    }
};
  
  useEffect(() => {
    if (displayedTextIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setFade(true);
        const nextIndex = displayedTextIndex + 1;
        setTimeout(() => {
          setDisplayedTextIndex(nextIndex);
          setFade(false);
        }, 500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [displayedTextIndex]);

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        textAlign: "center",
        backgroundImage: 'url("/image/BG1.png")',
        backgroundSize: '70%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif'
      }}
    >
      <BackgroundAudio />
      <Box sx={{ 
          mt: -40,
          mb: 4,
          width: { xs: '90%', sm: '60%', md: '40%' },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontFamily: 'FC Knomphing', 
              fontSize: '1.5rem', 
              fontWeight: 'normal', 
              opacity: fade ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            {texts[displayedTextIndex]}
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
                sx={{ mt: 2 }}
                fullWidth
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








