import React, { useState } from "react";
import "./App.css";
import girlFace from "./assets/girl_face.png";
import pimple1 from "./assets/pimple1.png";
import pimple2 from "./assets/pimple2.png";
import pimple3 from "./assets/pimple3.png";
import pimple4 from "./assets/pimple4.png";
import ChatbotComponent from "./chatbot/ChatbotComponent";

const pimples = [
  { name: "Pustules", image: pimple1 },
  { name: "Blackheads", image: pimple2 },
  { name: "Whiteheads", image: pimple3 },
  { name: "Nodules", image: pimple4 },
];

const App = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedPimple, setSelectedPimple] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hello! Select a facial area and choose a skin issue." },
  ]);

  const facialAreas = ["Forehead", "Cheeks", "Chin"];

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setChatMessages((prev) => [...prev, { sender: "bot", text: `You selected ${area}. Now choose a skin issue.` }]);
  };

  const handlePimpleClick = (pimple) => {
    if (!selectedArea) {
      setChatMessages((prev) => [...prev, { sender: "bot", text: "Please select a facial area first!" }]);
      return;
    }

    setSelectedPimple(pimple);
    setChatMessages((prev) => [
      ...prev,
      { sender: "bot", text: `You selected ${pimple} on your ${selectedArea}. Here's what you need to know...` },
      { sender: "bot", text: "Do you want to know Symptoms, Causes, Prevention, or Cure?" },
    ]);
  };

  return (
    <div className="container">
      <h1>Skin Analysis</h1>
      <div className="content">
        
        {/* Left - Face Section */}
        <div className="face-section">
          <img src={girlFace} alt="Face" className="face-image" />
          {facialAreas.map((area) => (
            <button key={area} className={`area-button ${selectedArea === area ? "selected" : ""}`} onClick={() => handleAreaClick(area)}>
              {area}
            </button>
          ))}
        </div>

        {/* Middle - Pimple Selection */}
        <div className="pimple-selection">
          {pimples.map((pimple) => (
            <button key={pimple.name} className="pimple-button" onClick={() => handlePimpleClick(pimple.name)}>
              <img src={pimple.image} alt={pimple.name} />
              <span>{pimple.name}</span>
            </button>
          ))}
        </div>

        {/* Right - Chatbot */}
        <ChatbotComponent messages={chatMessages} setMessages={setChatMessages} selectedPimple={selectedPimple} />
      </div>
    </div>
  );
};

export default App;

