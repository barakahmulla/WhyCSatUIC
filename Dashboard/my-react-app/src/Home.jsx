const Home = () => (
  <section>
    <h1>Why Consider CS at UIC?</h1>
    
    {/* Header Image - Replace src with actual photo */}
    <img 
      src="https://mscs.uic.edu/wp-content/uploads/sites/247/2024/01/mscs-header-cropped.jpg" 
      alt="UIC Campus" 
      className="header-image"
    />
    
    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
      Choosing a good CS program is a worry for many but UIC hits that sweet spot between opportunity, community, and growth.
    </p>
    
    <div className="grid-card">
      <div className="card">
        <h3>Professors Who Care</h3>
        <p>At UIC, you'll learn from professors who actually care about teaching and want to see you succeed, whether that's through research, internships, or industry roles.</p>
      </div>
      
      <div className="card">
        <h3>New CS Building</h3>
        <p>The CS department is constantly evolving, with a brand new CS building and modern resources designed for collaboration and innovation.</p>
      </div>
      
      <div className="card">
        <h3>Heart of Chicago</h3>
        <p>Being right in the heart of Chicago is a huge plus. You're surrounded by tech companies, startups, and networking events, which means early career opportunities are everywhere.</p>
      </div>
      
      <div className="card">
        <h3>Diversity & Inclusion</h3>
        <p>UIC is known for its diversity and inclusivity. Programs like Chicago Tech Circle actively support and empower women and underrepresented students in tech.</p>
      </div>
      
      <div className="card">
        <h3>Networking Opportunities</h3>
        <p>Lots of networking opportunities through career fairs, tech meetups, and student organizations that connect you directly with industry professionals.</p>
      </div>
      
      <div className="card">
        <h3>Early Career Opportunities</h3>
        <p>The location provides unparalleled access to internships, co-ops, and entry-level positions at tech companies throughout Chicago.</p>
      </div>
    </div>
    
    {/* Image Gallery - Replace with actual campus photos */}
    <h2>Life at UIC</h2>
    <div className="image-gallery">
      <div className="gallery-item">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/6734bf417fe8a856e4e9a3b2/381ed316-4b09-46a1-bb72-77db5e9a25c2/1972_004.jpg" 
          alt="CS Building" 
          className="gallery-image"
        />
        <p className="gallery-caption">CS Building</p>
      </div>
      <div className="gallery-item">
        <img 
          src="https://pspm.uic.edu/wp-content/uploads/sites/874/2022/06/191001_003-1090x595.jpg" 
          alt="Study Space" 
          className="gallery-image"
        />
        <p className="gallery-caption">Study Space</p>
      </div>
      <div className="gallery-item">
        <img 
          src="https://life.uic.edu/wp-content/uploads/sites/178/2025/07/P2500120-LIFE_UICLife-Blog-FY25_7.18.25_1090x595_web-post-Large-1090x595.jpeg" 
          alt="Campus Life" 
          className="gallery-image"
        />
        <p className="gallery-caption">Campus Life</p>
      </div>
      <div className="gallery-item">
        <img 
          src="https://engineering.uic.edu/wp-content/uploads/sites/217/2025/07/Student-Organizations-2.jpg" 
          alt="Student Organizations" 
          className="gallery-image"
        />
        <p className="gallery-caption">Student Organizations</p>
      </div>
      <div className="gallery-item">
        <img 
          src="https://www.dewberry.com/images/default-source/old/university-of-illinois-at-chicago---east-campus-recreation-center/slideshow/4.jpg?sfvrsn=4783bf28_0" 
          alt="Student Recreation" 
          className="gallery-image"
        /> 
        <p className="gallery-caption">Student Recreation</p>
      </div>
      <div className="gallery-item">
        <img 
          src="https://lh6.ggpht.com/0vYgFZT4dKY9TBQgsuW9COi8KYDjYohoHuS_uGbp7j0rBnOk17tshDnJLADK3R7EdP4fHHZAxY7LqkqO9Qd9=s700" 
          alt="Food & Drinks" 
          className="gallery-image"
        />
        <p className="gallery-caption">Food & Drinks</p>
      </div>
    </div>
    
    <div className="highlight-box">
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>
        In short: UIC CS is where strong academics meet real world experience, community, and impact.
      </p>
    </div>
  </section>
);

export default Home;