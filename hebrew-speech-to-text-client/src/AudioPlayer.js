import React, { useRef } from "react";

const AudioPlayer = () => {
    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Audio Streaming Platform</h1>
            <audio ref={audioRef} controls>
                <source src="http://localhost:3001/stream-audio" type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={playAudio} style={{ marginTop: "20px", padding: "10px 20px" }}>
                Play
            </button>
        </div>
    );
};

export default AudioPlayer;

