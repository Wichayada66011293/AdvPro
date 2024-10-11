import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router';

export default function Test() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page13 after 1.5 seconds
    const timer = setTimeout(() => {
      router.push('/page13');
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
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
          mb: 2,
        }}
      >
        คุณก็ไม่รอดอยู่ดี
      </Typography>
    </Box>
  );
}
