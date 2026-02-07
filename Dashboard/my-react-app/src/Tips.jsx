const Tips = () => (
  <section>
    <h2>Tips We Wish We Had as Freshmen</h2>
    
    <div className="card" style={{marginBottom: '20px'}}>
      <h3>Classes: What We Learned the Hard Way</h3>
      <ul className="star-list">
        <li>Don’t underestimate intro classes — they set the foundation for everything.</li>
        <li>Start projects early. CS deadlines sneak up fast!</li>
        <li>Pair programming and study groups will save you.</li>
      </ul>
    </div>

    <div className="grid-card">
      <div className="card">
        <h3>📍 Where to Study</h3>
        <ul className="star-list">
          <li>Library quiet floors (Lock in!)</li>
          <li>CS building collab spaces</li>
          <li>Empty classrooms (Hidden gem)</li>
        </ul>
      </div>
      <div className="card">
        <h3>🍕 Best Food</h3>
        <ul className="star-list">
          <li>Panda Express (Quick)</li>
          <li>Taylor Street (Actually good)</li>
          <li>Coffee shops (Late night grind)</li>
        </ul>
      </div>
    </div>

    <div className="card" style={{marginTop: '25px', borderStyle: 'dashed', background: 'var(--uic-accent)'}}>
      <h3>If We Had More Time...</h3>
      <p>We'd add a class rating page for difficulty levels, workload, and professor tips. (Future update maybe?)</p>
    </div>
  </section>
);
export default Tips;