// Import React, state hooks, and styling
import React, { useState, useEffect } from "react";
import "./App.css";

// Import the 'generate' function from random-words
// (This library gives us random English words)
import { generate } from "random-words";

// Import all components used by the game
import Header from "./components/Header";
import HangmanDrawing from "./components/HangmanDrawing";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import HelpModal from "./components/HelpModal";

// Total number of wrong guesses allowed (you have 11 images = 0–10 wrong guesses)
const MAX_WRONG = 10;

function App() {
  // === GAME STATE ===

  // The word the user must guess
  const [wordToGuess, setWordToGuess] = useState("");

  // Letters the user has already clicked
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Number of incorrect guesses the user has made
  const [wrongGuessCount, setWrongGuessCount] = useState(0);

  // Game status: "playing", "won", or "lost"
  const [gameStatus, setGameStatus] = useState("playing");

  // Controls whether the help modal is visible
  const [showHelp, setShowHelp] = useState(false);

  // Start a new game when the page first loads
  useEffect(() => {
    startNewGame();
  }, []);

  // === FUNCTION: Start a brand new game ===
  const startNewGame = () => {
    // Generate a random word with a max length of 10
    let newWord = generate({ exactly: 1, maxLength: 10 })[0];

    // Make sure the word contains letters only (no hyphens/spaces)
    while (!/^[a-zA-Z]+$/.test(newWord)) {
      newWord = generate({ exactly: 1, maxLength: 10 })[0];
    }

    // Set the new game state
    setWordToGuess(newWord.toLowerCase());
    setGuessedLetters([]);
    setWrongGuessCount(0);
    setGameStatus("playing");
  };

  // === FUNCTION: Handle a guessed letter ===
  const handleGuess = (letter) => {
    // Ignore inputs if the game is already over
    if (gameStatus !== "playing") return;

    // Don't let the user guess the same letter twice
    if (guessedLetters.includes(letter)) return;

    // Add the guessed letter to the array
    const updatedGuessed = [...guessedLetters, letter];
    setGuessedLetters(updatedGuessed);

    // If the letter is NOT in the word:
    if (!wordToGuess.includes(letter)) {
      const newWrongCount = wrongGuessCount + 1;
      setWrongGuessCount(newWrongCount);

      // If wrong guesses reach the limit, user loses
      if (newWrongCount >= MAX_WRONG) {
        setGameStatus("lost");
      }
    } else {
      // Check if ALL letters in the word have been guessed
      const allCorrect = wordToGuess
        .split("")
        .every((char) => updatedGuessed.includes(char));

      if (allCorrect) {
        setGameStatus("won");
      }
    }
  };

  // === RENDER THE FULL GAME ===
  return (
    <div className="app-container">
      {/* Header with Help button */}
      <Header onShowHelp={() => setShowHelp(true)} />

      <main className="game-layout">
        {/* Image of the hangman based on wrong guesses */}
        <HangmanDrawing wrongGuessCount={wrongGuessCount} />

        <div className="right-panel">
          {/* Shows the hidden word with _ for missing letters */}
          <WordDisplay word={wordToGuess} guessedLetters={guessedLetters} />

          {/* On-screen letter keyboard */}
          <Keyboard
            guessedLetters={guessedLetters}
            onGuess={handleGuess}
            disabled={gameStatus !== "playing"} // disable when game is over
          />

          {/* Win/Lose messages and Restart button */}
          <GameStatus
            status={gameStatus}
            wrongGuessCount={wrongGuessCount}
            maxWrong={MAX_WRONG}
            word={wordToGuess}
            onRestart={startNewGame}
          />
        </div>
      </main>

      {/* Popup showing game instructions */}
      <HelpModal open={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}

export default App;
