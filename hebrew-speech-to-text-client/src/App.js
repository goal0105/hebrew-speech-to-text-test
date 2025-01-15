// Install necessary packages: react, axios
// npm install axios

import React, { useRef, useEffect} from "react";
import axios from "axios";

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.get("http://localhost:5000/audio/sample.wav", {
          responseType: "blob",
        });
        const audioUrl = URL.createObjectURL(response.data);
        audioRef.current.src = audioUrl;

        // Wait for the audio element to load the source
        audioRef.current.addEventListener("canplaythrough", () => {
          audioRef.current.play();
        });
        
      } catch (error) {
        console.error("Error fetching the audio file:", error);
      }
    };

    fetchAudio();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Hebrew Real Time Speech to Text Demo</h1>
      <audio ref={audioRef} controls style={{ marginTop: "20px" }} />

      <p>
        hebrew speech to text in real time from sample.wav
      </p>
    </div>        
  );
};

export default App;
