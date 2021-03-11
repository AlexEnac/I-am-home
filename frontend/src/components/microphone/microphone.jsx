import React, { useEffect, useState } from "react";
import "./Microphone.module.css";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

export default Microphone = () => {
  const [initialData, setInitialData] = useState(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    micListener();
  }, [isListening]);

  const handleRequest = (data) => {
    const text = { data };
    console.log(data);
    const response = await fetch('/predict', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(text)
    });
    if(response.ok) {
      console.log("response worked");
    }
    console.log(data);
    console.log(1);
  };

  const micListener = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
        handleRequest(initialData);
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setInitialData(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <div>
      <button onClick={() => setIsListening((state) => !state)}>
        Start/Stop
      </button>
    </div>
  );
}
