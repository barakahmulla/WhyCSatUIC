import { useState } from 'react'
import reactLogo from './assets/react.svg'
import uicLogo from './assets/UIC_Logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tab, setTab] = useState("home")

  return (
    <>
      {/* Top header bar with logo */}
      <header className="top-bar">
        <div className="top-bar-inner">
          <img src={uicLogo} className="UIC-logo" alt="UIC logo"/>
          <span className="top-bar-title">WELCOME TO UIC!!</span>
        </div>
      </header>

      <nav className="tabs-bar">
        <div className="tabs-inner">
          <button
            className={tab === "home" ? "tab-btn active" : "tab-btn"}
            onClick={() => setTab("home")}
          >
            Home
          </button>

          <button
            className={tab === "tips" ? "tab-btn active" : "tab-btn"}
            onClick={() => setTab("tips")}
          >
            Tips &amp; Tricks
          </button>

          <button
            className={tab === "game" ? "tab-btn active" : "tab-btn"}
            onClick={() => setTab("game")}
          >
            The game
          </button>

          <button
            className={tab === "about" ? "tab-btn active" : "tab-btn"}
            onClick={() => setTab("about")}
          >
            About ME
          </button>
        </div>
      </nav>



      <div className="content">
        {tab === "home" && (
          <>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>

            <h1>Vite + React</h1>

            <div className="card">
              <button onClick={() => setCount(count => count + 1)}>
                count is {count}
              </button>
              <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
            </div>

            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        )}

        {tab === "about" && <h2>About section</h2>}
        {tab === "contact" && <h2>Contact section</h2>}
      </div>
    </>
  )
}

export default App