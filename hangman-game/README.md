# 🎮 Hangman Game (React)

This is an interactive **Hangman Game** built using **React** as part of the Front-End Development bootcamp.  
The game selects a random word, and the player must guess it one letter at a time before the hangman drawing is completed.

---

## 🚀 Live Demo  
👉 **View the deployed game on Heroku:**  
https://fast-beyond-56965.herokuapp.com/

---

## 📌 Features

- 🎲 Random word generation using **random-words**  
- ⌨️ On-screen interactive keyboard  
- 🖼 Progressive hangman drawing for each incorrect guess  
- 👍 “You Win / You Lose” game status  
- 🔄 Restart/Reset button  
- 📱 Responsive layout  
- 🧩 Clean, well-organised React component structure  

---

## 🛠 Technologies Used

- **React**
- **JavaScript (ES6)**
- **CSS**
- **Node.js**
- **Heroku** (deployment)

---

## 📂 Project Structure

src/
├── assets/
│ ├── state0.gif
│ ├── state1.gif
│ ├── ...
├── components/
│ ├── Header.js
│ ├── HangmanDrawing.js
│ ├── Keyboard.js
│ ├── WordDisplay.js
│ ├── GameStatus.js
│ └── HelpModal.js
├── App.js
└── index.js


---

## 🖥 Running the App Locally

To run the project on your computer:


git clone https://github.com/Jared-V0/hangman-game.git
cd hangman-game
npm install
npm start

The app will run on http://localhost:3000

## Deploying to Heroku

This project was deployed using Heroku.
Basic deployment commands:

git push heroku master
heroku open

## Author

Jared Valensky
