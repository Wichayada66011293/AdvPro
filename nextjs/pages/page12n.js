import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router';

export default function Test() {
  const [visible, setVisible] = useState(false); // State to control text visibility
  const router = useRouter();

  useEffect(() => {
    // Fade-in the text
    setVisible(true);

    // Redirect to page13 after 1.5 seconds
    const timer = setTimeout(() => {
      router.push('/page13');
    }, 1500);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Box
      sx={{
        textAlign: 'center',
        height: '100vh',
        backgroundImage: 'url("/image/BG2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'FC Knomphing, Noto Sans Thai, sans-serif',
          fontSize: '24px',
          color: 'black',
          opacity: visible ? 1 : 0, // Control opacity for fade-in effect
          transition: 'opacity 1s ease-in-out', // Smooth fade-in effect
        }}
      >
        คุณก็ไม่รอดอยู่ดี {/* "You won't survive anyway." */}
      </Typography>
    </Box>
  );
}
