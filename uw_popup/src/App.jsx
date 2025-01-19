import { useState } from "react";
import "./App.css";

function App() {
  const [onOff, setOnoff] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  function handleClick() {
    setOnoff(!onOff);
    setFeedbackMessage(""); // Reset feedback message
  }

  function handleEmojiClick(feedback) {
    // Determine feedback message based on emoji clicked
    if (feedback === "negative") {
      setFeedbackMessage("We're sorry to hear that. We'll work on improving!");
    } else {
      setFeedbackMessage("Thank you for your feedback! Have a great day!");
    }
  }

  return (
    <>
      <div>
        <h1>Popup Demo</h1>
        <div>
          <button onClick={handleClick}>Give Feedback</button>
          {onOff ? feedbackMessage ? <ThankYou message={feedbackMessage} closePopup={() => setOnoff(false)} /> : <Popup closePopup={() => setOnoff(false)} onEmojiClick={handleEmojiClick} /> : null}
        </div>
      </div>
    </>
  );
}

function Popup({ closePopup, onEmojiClick }) {
  return (
    <>
      <div className="overlay" onClick={closePopup}></div>
      <div className="popup">
        <h2>How was your experience?</h2>
        <p>We value your feedback! Please rate us:</p>
        <div className="emoji-container">
          <span className="emoji" role="img" aria-label="very bad" onClick={() => onEmojiClick("negative")}>
            😡
          </span>
          <span className="emoji" role="img" aria-label="bad" onClick={() => onEmojiClick("negative")}>
            😞
          </span>
          <span className="emoji" role="img" aria-label="neutral" onClick={() => onEmojiClick("positive")}>
            😐
          </span>
          <span className="emoji" role="img" aria-label="good" onClick={() => onEmojiClick("positive")}>
            🙂
          </span>
          <span className="emoji" role="img" aria-label="very good" onClick={() => onEmojiClick("positive")}>
            😍
          </span>
        </div>
        <button onClick={closePopup}>Close</button>
      </div>
    </>
  );
}

function ThankYou({ message, closePopup }) {
  return (
    <>
      <div className="overlay" onClick={closePopup}></div>
      <div className="popup">
        <h2>{message}</h2>
        <button onClick={closePopup}>Close</button>
      </div>
    </>
  );
}

export default App;
