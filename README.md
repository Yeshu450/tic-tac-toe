# 🎮 Tic Tac Toe Game - React + Vite

An interactive and animated **Tic Tac Toe** game built with **React + Vite**. Responsive design, dynamic turn-based logic, and a fun confetti animation for winners make this a polished and enjoyable web game.

🔗 [Live Demo](https://tic-tac-toe-450.netlify.app/)

---

## ✨ Features

* 🕹️ 2-Player Turn-Based Gameplay
* 🎉 Confetti Animation for Winners (using `js-confetti`)
* 📱 Fully Responsive Layout
* 🚫 Prevents Overwriting Already Clicked Cells
* 🧠 Detects All Win Conditions and Draws
* 🔄 Instant Restart Option

---

## 🛠️ Tech Stack

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [js-confetti](https://www.npmjs.com/package/js-confetti) (for animations)
* [Netlify](https://www.netlify.com/) (for deployment)

---

## 🧩 Game Logic Overview

* The game starts with Player **O**.
* Each turn, the current player's mark is placed into the selected cell.
* Once a cell is clicked, it becomes non-interactive.
* The board is checked for all 8 possible win conditions after every move.
* When a player wins:

  * The winning cells are highlighted with a `winner` class.
  * 🎊 Confetti animation is triggered using `js-confetti`.
* If all 9 cells are clicked without a winner, the game declares a **draw**.

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/yeshu450/tic-tac-toe.git

# Navigate into the folder
cd tic-tac-toe

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📁 Folder Structure

```
src/
├── components/
│   └── Board.jsx   # Main game component
│   └── Header.jsx   # Header component
│   └── Footer.jsx   # Footer component
├── App.jsx
├── App.css    # Styling including animation classes
├── main.jsx
└── index.css       
```

---

## 📸 Example Use Cases

* 🧑‍🤝‍🧑 Fun 2-player challenge
* 💻 Showcase for beginner React/Vite projects
* 🎓 Learning basic game logic and state management
* 📱 Mobile-friendly UI demo project

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👤 Author

* **Yeswanth Kumar Rallapilla**
* GitHub: [yeshu450](https://github.com/yeshu450)

Feel free to contribute or raise issues! 😊

© 2025 Yeswanth Kumar Rallapilla ™. All Rights Reserved ®.

---

Let me know if you'd like a logo, GitHub banner, or walkthrough GIF added to this README!
