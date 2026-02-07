import React, { useState } from 'react';
import Home from './Home';
import Tips from './Tips';
import Game from './Game';
import About from './About';
import MindMapView from './CourseMindMap';
import './index.css';
import uicLogo from './assets/UIC_Logo.png';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home': return <Home />;
      case 'Tips': return <Tips />;
      case 'Game': return <Game />;
      case 'About': return <About />;
      case 'Course Map':
        return (
          <div
            style={{
              position: 'fixed',
              top: '60px',             // navbar height
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              background: '#e2e8f0',   // outer bg
              padding: '16px'          // small margin around the map
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(15,23,42,0.18)',
                background: '#ffffff'
              }}
            >
              <MindMapView />
            </div>
          </div>
        );
      default: return <Home />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={uicLogo} alt="UIC logo" className="navbar-logo" />
        </div>

        <div className="navbar-center">
          {['Home', 'Tips', 'Game', 'About', 'Course Map'].map((tab) => (
            <button 
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'Home' ? 'Why UIC CS?' : tab}
            </button>
          ))}
        </div>

        <div className="navbar-right">{/* empty spacer */}</div>
      </nav>

      <div className="container">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;