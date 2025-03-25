import React from "react";
import "./Chatbot.css";


const pimpleDetails = {
  Pustules: {
    Symptoms: "Red, inflamed pimples with white pus at the tip.",
    Causes: "Blocked pores due to bacteria and excess oil.",
    Prevention: "Wash your face twice daily and avoid touching pimples.",
    Cure: "Use salicylic acid or benzoyl peroxide-based products.",
  },
  Blackheads: {
    Symptoms: "Small, dark spots on the skin due to clogged pores.",
    Causes: "Excess oil and dead skin cells.",
    Prevention: "Regular exfoliation with BHA or AHA.",
    Cure: "Use retinoids and avoid heavy oil-based skincare products.",
  },
  Whiteheads: {
    Symptoms: "Tiny white bumps due to closed clogged pores.",
    Causes: "Oil, dead skin, and dirt trapped under the skin.",
    Prevention: "Gentle cleansing and oil-free moisturizers.",
    Cure: "Topical retinoids and salicylic acid treatments.",
  },
  Nodules: {
    Symptoms: "Large, hard, painful bumps under the skin.",
    Causes: "Severe bacterial infection deep in the pores.",
    Prevention: "Use non-comedogenic skincare products.",
    Cure: "Consult a dermatologist for oral antibiotics or isotretinoin.",
  },
};

const ChatbotComponent = ({ messages, setMessages, selectedPimple }) => {
  const handleUserChoice = (choice) => {
    if (!selectedPimple) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Please select a pimple type first!" }]);
      return;
    }

    const response = pimpleDetails[selectedPimple][choice];
    setMessages((prev) => [...prev, { sender: "bot", text: response }]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-options">
        {["Symptoms", "Causes", "Prevention", "Cure"].map((option) => (
          <button key={option} className="chat-option-button" onClick={() => handleUserChoice(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatbotComponent;
