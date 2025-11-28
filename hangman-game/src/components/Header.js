// Simple header with title + help button
function Header({ onShowHelp }) {
  return (
    <header className="header">
      <h1>Hangman Game</h1>

      {/* Button opens the Help/Rules modal */}
      <button className="help-btn" onClick={onShowHelp}>
        Help / Rules
      </button>
    </header>
  );
}

export default Header;
