import React, { useState } from 'react';
import Home from './Home';
import Tips from './Tips';
import Game from './Game';
import Classes from './Classes';
import About from './About';
import MindMapView from './CourseMindMap';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home': return <Home />;
      case 'Tips': return <Tips />;
      case 'Classes': return <Classes />;
      case 'Game': return <Game />;
      case 'About': return <About />;
      case 'Course Map':
        return (
          <div
            style={{
              position: 'fixed',
              top: '240px',             // navbar height
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
      {/* Header with Logo */}
      <header className="site-header">
        <div className="logo-container">
          <div className="uic-logo">UIC</div>
          <div>
            <h1 className="site-title">Why CS at UIC?</h1>
            <p className="site-subtitle">A student-made guide to CS at University of Illinois Chicago</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        {['Home', 'Tips', 'Classes','Game', 'About', 'Course Map'].map((tab) => (
          <button 
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''} ${tab === 'Game' ? 'jump-animation' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'Home' ? 'Why UIC CS?' : 
             tab === 'Tips' ? 'Freshman Tips' :
             tab === 'Classes' ? 'Class Guide' :
             tab === 'Game' ? 'Interactive Game' :
             tab === 'Course Map' ? 'Course Map' :
             'About Us'}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="container">
        {renderContent()}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>
          Made with love by UIC CS Students
        </p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
          Empowering the next generation of CS students at UIC
        </p>
      </footer>
    </div>
  );
}

export default App;