// List of all alphabet letters A → Z
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Renders a clickable keyboard
function Keyboard({ guessedLetters, onGuess, disabled }) {
  return (
    <div className="keyboard">
      {LETTERS.map((letter) => {
        const lower = letter.toLowerCase();

        // Check if this letter has been guessed before
        const isUsed = guessedLetters.includes(lower);

        return (
          <button
            key={letter} // required unique key
            className="letter-btn"
            disabled={isUsed || disabled} // disable used or game-over
            onClick={() => onGuess(lower)}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
