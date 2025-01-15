import React from 'react';
import HebrewSpeechToText from "./components/HebrewSpeechToText";
import AudioPlayer from "./components/AudioPlayer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AudioPlayer />
    </div>
  );
}

export default App;