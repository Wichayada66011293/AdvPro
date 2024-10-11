// components/BackgroundAudio.js
import React, { useEffect, useRef } from 'react';

const BackgroundAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = async () => {
      if (audio) {
        audio.muted = true; // Start muted to bypass autoplay restrictions

        audio.oncanplay = async () => {
          try {
            await audio.play();
            console.log("Background audio is playing.");
          } catch (error) {
            console.error("Error playing audio:", error);
          }
        };
      }
    };

    playAudio();

    // Cleanup audio on component unmount
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset audio
      }
    };
  }, []);

  const handleUnmute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false; // Unmute when the user interacts with the page
      console.log("Audio unmuted.");
    }
  };

  return (
    <div onClick={handleUnmute} style={{ cursor: 'pointer' }}>
      <audio ref={audioRef} loop>
        <source src="/sound/BGsound1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* Optional: Add a visual indicator to prompt user interaction */}
    </div>
  );
};

export default BackgroundAudio;

