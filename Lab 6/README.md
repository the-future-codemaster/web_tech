# Amrut's Phoenix Uni Navigation System

A modern, responsive React-based navigation system and university website scaffold built with Vite, React Router, and standard CSS.

## How to Run

1. Make sure you have Node.js installed on your system.
2. Clone this repository or download the source code.
3. Open your terminal in the project directory.
4. Install the dependencies by running:
   ```bash
   npm install
   ```
5. Start the development server by running:
   ```bash
   npm run dev
   ```
   *(Note: If you encounter script execution policy errors in PowerShell, try using `cmd /c npm run dev` instead).*
6. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
university-nav/
├── index.html             # Main HTML entry point
├── package.json           # Project metadata and dependencies
├── src/
│   ├── App.jsx            # Main app component containing Routes and Page Content
│   ├── index.css          # Global stylesheet (Custom CSS, Glassmorphism, Theme logic)
│   ├── main.jsx           # React root rendering file
│   └── components/
│       └── Navigation.jsx # The responsive navigation bar and dropdown menu logic
```

## Dependencies

- **React & React DOM**: The core UI framework.
- **React Router DOM**: Used for client-side routing, navigation, and nested layouts.
- **Lucide React**: A lightweight icon library providing crisp vector icons for pages and menus.
- **Vite**: The blazing-fast frontend build tool used to scaffold and bundle the project.

## What I Learned

Building this project provided hands-on experience with several core concepts in modern web development:

1. **Client-Side Routing**: Mastered `react-router-dom` to map a complex hierarchical menu (About Us, Academics, Admissions, etc.) into distinct navigable paths using `<Routes>`, `<Route>`, and nested `<Outlet>` layouts.
2. **Component Reusability**: Learned to design reusable React components, such as the `PageContent` module, which dynamically renders unique pages by passing `title`, `icon`, and `features` via React props.
3. **Modern CSS & Glassmorphism**: Gained proficiency in building responsive interfaces without heavy UI frameworks. This involved utilizing CSS Flexbox and Grid, along with modern aesthetic properties like `backdrop-filter: blur()` for frosted glass navigation bars.
4. **Theming & Accessibility**: Implemented CSS custom properties (variables) paired with `@media (prefers-color-scheme: dark)` to seamlessly support dynamic light and dark modes based on user system preferences.
5. **State Management**: Used React's `useState` hook to control interactive UI elements, specifically managing the expanded/collapsed states of the mobile hamburger menu and its submenus.
6. **Vite Tooling**: Experienced the performance benefits of setting up and compiling a React application using Vite over older bundlers.
