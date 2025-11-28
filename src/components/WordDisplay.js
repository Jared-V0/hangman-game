// Shows the word as _ _ _ and reveals letters when guessed
function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word-display">
      {word.split("").map((char, index) => {
        // Check whether this letter has been guessed
        const isRevealed = guessedLetters.includes(char);

        return (
          <span key={index} className="word-letter">
            {/* Show letter if guessed, otherwise show "_" */}
            {isRevealed ? char.toUpperCase() : "_"}
          </span>
        );
      })}
    </div>
  );
}

export default WordDisplay;
