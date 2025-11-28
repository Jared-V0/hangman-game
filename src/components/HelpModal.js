// Popup modal explaining how the game works
function HelpModal({ open, onClose }) {
  // If modal is not open, render nothing
  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="help-modal">
        <h2>How to Play</h2>

        <ul>
          <li>A random word is chosen for you.</li>
          <li>Click the letters to guess the hidden word.</li>
          <li>Each wrong guess draws more of the hangman.</li>
          <li>You win by guessing all letters correctly.</li>
          <li>You will lose when the hangman is fully drawn.</li>
        </ul>

        {/* Close the modal */}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default HelpModal;
