const Game = () => (
  <section style={{ textAlign: 'center' }}>
    <h2>The UIC CS Experience: The Game</h2>
    <p>We built this game to recreate the chaotic and rewarding journey of a UIC student.</p>
    <div style={{ background: '#eee', padding: '50px', borderRadius: '10px' }}>
      [Interactive Game Placeholder]
    </div>
    <div style={{ marginTop: '20px' }}>
      <a href="https://unity.com" className="tab-button" style={{ background: 'var(--uic-blue)' }}>Unity for Mac</a>
      <a href="https://unity.com" className="tab-button" style={{ background: '#333', marginLeft: '10px' }}>Unity for Linux</a>
    </div>
  </section>
);
export default Game;