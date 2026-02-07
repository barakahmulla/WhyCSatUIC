const Game = () => (
  <section style={{ textAlign: 'center' }}>
    <h1>Play Our CS @ UIC Game</h1>
    <h2>The UIC CS Experience: Interactive Game</h2>
    
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 2rem' }}>
      We built an interactive game to recreate the real experience of being a CS student at UIC — from classes and stress to fun moments and wins along the way.
    </p>
    
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 2rem' }}>
      This game is our creative way of telling our stories while making the experience interactive, relatable, and fun. Whether you're a prospective student or already here, we hope it feels real.
    </p>

    <div style={{ 
      background: '#fef9f3',
      padding: '40px 20px', 
      borderRadius: '16px',
      margin: '2rem auto',
      maxWidth: '700px',
      border: '2px solid #001E62',
      boxShadow: '4px 4px 0 #D50032'
    }}>
      <h3 style={{ color: '#001E62', marginTop: 0 }}>Journey Through 4 Years</h3>
      <div style={{ textAlign: 'left', color: '#333' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#D50032' }}>Freshman Year:</strong>
          <p style={{ margin: '0.5rem 0' }}>Start forming friends in CS, practice basics</p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#D50032' }}>Sophomore Year:</strong>
          <p style={{ margin: '0.5rem 0' }}>Go to office hours, work on personal projects, start leetcoding, join Sparkhacks</p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#D50032' }}>Junior Year:</strong>
          <p style={{ margin: '0.5rem 0' }}>Start applying for internships, work on resume, go to career fairs, network</p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ color: '#D50032' }}>Senior Year:</strong>
          <p style={{ margin: '0.5rem 0' }}>Pick interesting tech electives, prepare to graduate</p>
        </div>
      </div>
    </div>

    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ color: '#001E62' }}>Download Unity Game:</h3>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#" className="game-button">
          Unity for Mac
        </a>
        
        <a href="#" className="game-button secondary">
          Unity for Linux
        </a>
      </div>
    </div>

    <p style={{ 
      marginTop: '2rem', 
      fontSize: '1.2rem', 
      fontStyle: 'italic',
      color: '#001E62',
      fontWeight: 'bold'
    }}>
      Jump in, explore, and see CS life through our eyes.
    </p>
  </section>
);

export default Game;