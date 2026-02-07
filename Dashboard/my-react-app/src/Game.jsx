const Game = () => (
  <section style={{textAlign: 'center'}}>
    <h2>Play Our CS @ UIC Game 🎮</h2>
    <p>We built an interactive game to recreate the real experience of being a CS student at UIC — from classes and stress to fun moments and wins.</p>
    
    <div style={{background: '#eee', height: '300px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0'}}>
       <p>[ Your Unity Game Build Goes Here ]</p>
    </div>

    <h3>Download the Experience:</h3>
    <a href="#" className="btn-download" style={{background: 'var(--uic-blue)'}}>Unity for Mac</a>
    <a href="#" className="btn-download" style={{background: '#333'}}>Unity for Windows</a>
    <p style={{marginTop: '20px'}}>Jump in, explore, and see CS life through our eyes.</p>
  </section>
);
export default Game;