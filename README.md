# Whack-a-Mole

A simple browser-based Whack-a-Mole game built with plain HTML, CSS, and JavaScript.

## Features

- 3x3 game board with random mole positions
- Adjustable game length (number of cycles)
- Adjustable mole speed (interval in milliseconds)
- Live score tracking
- Final score screen with return-to-home flow
- Responsive layout for smaller screens

## How to Run

1. Clone this repository.
2. Open `whac.html` in your browser.

No build step or dependencies are required.

## How to Play

1. On the home screen, choose:
   - **Game Length (cycles)**
   - **Speed (ms)**
2. Click **Start Game**.
3. Click the mole (or the hole containing it) before it moves.
4. When the selected number of cycles ends, your final score is shown.
5. Click **Home** to play again.

## Project Structure

- `whac.html` – game screens and UI structure
- `whac.css` – game styling and responsive rules
- `whac.js` – gameplay logic, screen flow, scoring, and mole movement
