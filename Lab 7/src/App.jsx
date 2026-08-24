import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // Theme state: defaults to system preference or light
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Apply theme to document when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <div className="header-controls">
        <h1>React Counter</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      
      <div className="card">
        <p>Current Count: {count}</p>
        <div className="button-group">
          <button onClick={() => setCount((c) => c + 1)}>
            Increment
          </button>
          <button onClick={() => setCount((c) => c - 1)}>
            Decrement
          </button>
          <button onClick={() => setCount(0)} className="reset-btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
