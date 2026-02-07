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
        {['Home', 'Tips', 'Game', 'About'].map((tab) => (
          <button 
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'Home' ? 'Why UIC CS?' : tab}
          </button>
        ))}
      </nav>
      <div className="container">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;