# Rock Paper Scissors

A browser-based Rock Paper Scissors game built with **vanilla JavaScript**, HTML, and CSS.

> **⚠️ Live preview is currently down** — the GitHub Pages deployment was not displaying properly in some browsers due to MIME type issues with images. It may be re-hosted on Firebase at a later date.

Here is a general functionality breakdown:

- **Play** — Choose Rock, Paper, or Scissors; the machine picks randomly and the result is shown instantly.
- **Score tracking** — Wins, losses, and ties are tracked and persisted via `localStorage`.
- **Reset score** — Resets all counters and disables the button until the next round.
- **Auto Play** — Plays a random move every second automatically; toggle to stop.

## Structure

```
├── index.html    # Game UI and logic entry point
├── script.js     # Game logic (play, score, autoplay)
├── style.css     # Styling
└── img/          # Rock, Paper, Scissors emoji images
```

## Tech Stack

Vanilla JS · HTML5 · CSS3 · localStorage · GitHub Pages
