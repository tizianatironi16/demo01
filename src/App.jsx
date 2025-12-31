import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Instant server start and lightning-fast HMR with Vite'
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Beautiful UI with smooth animations and transitions'
    },
    {
      icon: '🚀',
      title: 'Production Ready',
      description: 'Optimized build with code splitting and tree shaking'
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo vite-logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react-logo" alt="React logo" />
          </a>
        </div>
        <h1 className="title">Welcome to React</h1>
        <p className="subtitle">Built with Vite for blazing fast development</p>
      </header>

      <main className="main">
        <div className="counter-card">
          <h2>Interactive Counter</h2>
          <button className="counter-button" onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p className="hint">
            Try clicking the button above! ✨
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="info-card">
          <p className="info-text">
            Edit <code>src/App.jsx</code> and save to see changes instantly with Hot Module Replacement
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>Built with ❤️ using React and Vite</p>
      </footer>
    </div>
  )
}

export default App
