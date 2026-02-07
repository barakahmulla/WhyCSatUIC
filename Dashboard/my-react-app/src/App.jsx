import React, { useState } from 'react';
import Home from './Home';
import Tips from './Tips';
import Game from './Game';
import About from './About';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home': return <Home />;
      case 'Tips': return <Tips />;
      case 'Game': return <Game />;
      case 'About': return <About />;
      default: return <Home />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <button className={`tab-button ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => setActiveTab('Home')}>Why UIC CS?</button>
        <button className={`tab-button ${activeTab === 'Tips' ? 'active' : ''}`} onClick={() => setActiveTab('Tips')}>Freshmen Tips</button>
        <button className={`tab-button ${activeTab === 'Game' ? 'active' : ''}`} onClick={() => setActiveTab('Game')}>The Game</button>
        <button className={`tab-button ${activeTab === 'About' ? 'active' : ''}`} onClick={() => setActiveTab('About')}>About Us</button>
      </nav>
      <main className="container">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;