# Whack-a-Mole

A simple browser-based Whack-a-Mole game built with HTML, CSS, and JavaScript. Choose a game length, pick a mole speed, and click the mole before it moves to score points.

## Features

- 3x3 game board with randomized mole placement
- Adjustable game length using cycle counts
- Adjustable mole speed using millisecond intervals
- Live score tracking during gameplay
- Final score screen with a return-to-home button
- Responsive layout for smaller screens
- Sound effect when the mole is clicked

## Getting Started

No build tools, package manager, or dependencies are required.

1. Clone or download this repository.
2. Open `whac.html` in a web browser.
3. Start playing.

You can also run it with any local static server if you prefer, but opening the HTML file directly is enough.

## How to Play

1. Choose the number of game cycles from the **Game Length** dropdown.
2. Choose how quickly the mole moves from the **Speed** dropdown.
3. Click **Start Game**.
4. Click the mole, or the hole containing the mole, before it disappears.
5. When the selected number of cycles finishes, the final score is displayed.
6. Click **Home** to play again.

## Project Structure

```text
.
|-- whac.html   # Page structure and game screens
|-- whac.css    # Styling, layout, animations, and responsive rules
`-- whac.js     # Game logic, scoring, screen flow, and mole movement
```

## Notes

- The game uses a Google Font imported in `whac.css`.
- The click sound is loaded from an external URL in `whac.js`.
- If you are offline, the game still works, but the font or sound may not load.
