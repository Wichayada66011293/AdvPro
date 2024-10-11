import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('start/reg'); // Navigate to the registration page when clicked
  };

  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome to the application" />
      </Head>
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center items vertically
          alignItems: 'center', // Center items horizontally
          width: 'cover', // Full width
          height: '100vh', // Full height of the viewport
          textAlign: "center",
          backgroundImage: 'url("/image/BG.png")', // Path to your background image
          backgroundSize: '70%', // Set the background image size to 70%
          backgroundColor : '#CFD7E5',
          backgroundPosition: 'center', // Center the background image
          backgroundRepeat: 'no-repeat', // Prevent background from repeating
          fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif'
        }}
      >
        <main>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontFamily: 'FC Knomphing Regular, Noto Sans Thai, sans-serif', 
                fontSize: '24px'
              }} 
            >
              Welcome to Phi Sadut
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartClick}
              sx={{
                backgroundColor: '#264E8B',
                color: '#fff',
                '&:hover': { backgroundColor: '#102E5D' }
              }}
            >
              Get Started
            </Button>
          </Box>
        </main>
      </Box>
    </>
  );
}

export default Home;








