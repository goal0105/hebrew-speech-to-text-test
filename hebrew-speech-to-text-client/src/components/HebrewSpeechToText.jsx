import React, { useEffect, useState, useRef } from "react";

const HebrewSpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const audioRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Initialize Speech Recognition
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      console.error("Speech Recognition API is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Set recognition settings
    recognition.lang = "en-US"; // Hebrew language
    recognition.continuous = true; // Keep recognizing continuously
    recognition.interimResults = true; // Get partial results

    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + event.results[i][0].transcript);
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognitionRef.current = recognition;

    // Cleanup: Stop recognition when component unmounts
    return () => {
      if (recognition) recognition.stop();
    };
  }, []);

  const handlePlay = () => {
    console.log("Speech Recognition API is not supported in this browser.");
    if (recognitionRef.current) {
      recognitionRef.current.start();
      console.log("Speech recognition started...");
    }
  };

  const handlePause = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      console.log("Speech recognition stopped...");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hebrew Speech-to-Text</h1>
      <audio
        ref={audioRef}
        src="sample.wav"
        controls
        onPlay={handlePlay}
        onPause={handlePause}
      />
      <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h3>Transcript:</h3>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default HebrewSpeechToText;
