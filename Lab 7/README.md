# Lab 7: React Counter App

A simple, student-friendly React application demonstrating state management using the `useState` hook.

## Project Structure

```
Lab 7/
├── index.html       # Main HTML entry point
├── package.json     # Project metadata and dependencies
└── src/
    ├── App.jsx      # Main app component containing the counter logic
    ├── App.css      # Component-specific styles for the counter card
    ├── index.css    # Global stylesheet (Base CSS, Dark/Light theme logic)
    └── main.jsx     # React root rendering file
```

## Dependencies

*   **React & React DOM**: The core UI framework.
*   **Vite**: The blazing-fast frontend build tool used to scaffold and bundle the project.

## What I Learned

Building this project provided hands-on experience with several core concepts in modern React development:

1.  **State Management**: Used React's `useState` hook to manage the `count` state.
2.  **Event Handling**: Learned how to bind functions to button `onClick` events to trigger state updates (increment, decrement, reset).
3.  **Component Styling**: Applied CSS to create a clean, centralized card layout for the counter interface.
4.  **Theme Toggling**: Implemented dynamic dark and light mode switching by updating the DOM's `data-theme` attribute via React state.

## How to Run

1.  Install dependencies: `npm install`
2.  Start development server: `npm run dev`
