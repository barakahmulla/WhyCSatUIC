const Home = () => (
  <section>
    <h1>About UIC: Why Consider CS?</h1>
    <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>Choosing a good CS program is a big worry for many but UIC hits that sweet spot between opportunity, community, and growth.</p>
    
    <div className="grid-card">
      <div className="card">
        <img src="https://engineering.uic.edu/wp-content/uploads/sites/243/2023/07/CDRLC-hero.jpg" alt="UIC CS Building" />
        <h3>World-Class Learning</h3>
        <p>Learn from professors who actually care about teaching. With a brand new CS building and modern resources, innovation is everywhere.</p>
      </div>

      <div className="card">
        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=500" alt="Chicago Skyline" />
        <h3>In the City</h3>
        <p>Surrounded by tech companies and startups, internships and networking events are right at your doorstep.</p>
      </div>

      <div className="card">
        <img src="https://v6-api.uic.edu/wp-content/uploads/2022/10/Break-Through-Tech.jpg" alt="Tech Diversity" />
        <h3>Diversity & Inclusivity</h3>
        <p>Programs like Chicago Tech Circle empower women and underrepresented students to thrive in a supportive space.</p>
      </div>
    </div>
    <p style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}>In short: UIC CS is where strong academics meet real world experience, community, and impact.</p>
  </section>
);
export default Home;