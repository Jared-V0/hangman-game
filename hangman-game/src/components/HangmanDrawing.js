// Import all 11 image states
import state1 from "../assets/state1.gif";
import state2 from "../assets/state2.gif";
import state3 from "../assets/state3.gif";
import state4 from "../assets/state4.gif";
import state5 from "../assets/state5.gif";
import state6 from "../assets/state6.gif";
import state7 from "../assets/state7.gif";
import state8 from "../assets/state8.gif";
import state9 from "../assets/state9.gif";
import state10 from "../assets/state10.gif";
import state11 from "../assets/state11.gif";

// Ordered list of hangman images
const steps = [
  state1,
  state2,
  state3,
  state4,
  state5,
  state6,
  state7,
  state8,
  state9,
  state10,
  state11,
];

// Component shows the correct hangman image based on wrong guesses
function HangmanDrawing({ wrongGuessCount }) {
  // Prevent crashes if wrongGuessCount goes out of range
  const index = Math.min(wrongGuessCount, steps.length - 1);

  return (
    <div className="hangman">
      <img src={steps[index]} alt={`Hangman stage ${index + 1}`} />
    </div>
  );
}

export default HangmanDrawing;
