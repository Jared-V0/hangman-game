# Hangman Game (React)

This is a fully interactive Hangman game built using **React** as part of the HyperionDev Front-End Development Bootcamp.  
The game randomly selects an English word using the `random-words` library, and the player must guess the word before the hangman drawing is completed.

---

## How the Game Works

- A random word is selected automatically when the game starts.
- The player guesses the hidden word one letter at a time.
- Each incorrect guess reveals the next stage of the hangman drawing.
- If the player guesses all letters correctly → **You win!**
- If the hangman drawing reaches the final stage → **You lose!**
- The game includes a restart button and help/instructions panel.

---

## Features

### Built using React  
Created using **Create React App**, with full component-based structure.

###  Multiple Components  
The project includes:
- `Header`
- `HangmanDrawing`
- `WordDisplay`
- `Keyboard`
- `GameStatus`
- `HelpModal`

###  State Management  
The game uses React Hooks (`useState`, `useEffect`) to manage:
- The random word  
- Guessed letters  
- Wrong guesses  
- Game state (playing / won / lost)  
- Help modal visibility  

### ✔ External Word Generator  
Words are generated from the **random-words** package.

### ✔ Dynamic Hangman Drawing  
The hangman updates based on the number of wrong guesses.  
This version includes **11 GIF images** for smooth animation/progression.

### ✔ Restart Functionality  
Players can reset the game at any time.

### ✔ Help / Rules Modal  
Provides instructions on how to play the game.

---

## Project Structure



src/
components/
Header.js
HangmanDrawing.js
WordDisplay.js
Keyboard.js
GameStatus.js
HelpModal.js
assets/
state1.gif
state2.gif
...
state11.gif

App.js
App.css
index.js


---

##  How to Run the Project

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
npm install

This should start the Development Server

npm start

The app should then automatically open in your browser at: 
http://localhost:3000

##  Dependencies

Package      --  Purpose

react        --  UI Library
react-dom    --  DOM rendering
random-words --  Generate random words
react-scripts--  CRA build + tooling

## Author

Jared Valensky
GitHub: Jared-V0
