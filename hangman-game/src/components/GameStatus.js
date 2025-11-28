// Shows current game status + restart button
function GameStatus({ status, wrongGuessCount, maxWrong, word, onRestart }) {
  return (
    <div className="game-status">
      {/* Normal playing status */}
      {status === "playing" && (
        <p>
          Wrong guesses: {wrongGuessCount} / {maxWrong}
        </p>
      )}

      {/* Win message */}
      {status === "won" && (
        <p className="win">🎉 You won! The word was "{word}".</p>
      )}

      {/* Lose message */}
      {status === "lost" && (
        <p className="lose">😢 You lost! The word was "{word}".</p>
      )}

      {/* Restart game */}
      <button onClick={onRestart} className="restart-btn">
        Restart Game
      </button>
    </div>
  );
}

export default GameStatus;
