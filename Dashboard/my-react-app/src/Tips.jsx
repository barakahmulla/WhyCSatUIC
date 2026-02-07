const Tips = () => (
  <section>
    <h1>Tips We Wish We Had as Freshmen</h1>
    
    <div style={{ marginBottom: '2rem' }}>
      <h2>Classes: What We Learned the Hard Way</h2>
      <div className="grid-card">
        <div className="card">
          <h3>Don't Underestimate Intro Classes</h3>
          <p>They set the foundation for everything later so pay attention and don't slack.</p>
        </div>
        
        <div className="card">
          <h3>Start Projects Early</h3>
          <p>CS deadlines sneak up fast and office hours get cramped right before the deadline.</p>
        </div>
        
        <div className="card">
          <h3>Pair Programming Saves Lives</h3>
          <p>Study groups and pair programming will save you. Seriously.</p>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '2rem' }}>
      <h2>Go to Office Hours</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        <strong>Go early. Go often. Even if you think you understand the material.</strong>
      </p>
      <div className="grid-card">
        <div className="card">
          <h3>Catch Mistakes Before Exams</h3>
          <p>Get your questions answered and clarify concepts before it's too late.</p>
        </div>
        
        <div className="card">
          <h3>Build Relationships</h3>
          <p>Connect with professors and TAs — these relationships matter for references and opportunities.</p>
        </div>
        
        <div className="card">
          <h3>Feel Less Lost</h3>
          <p>Office hours help you feel way less lost in big lectures.</p>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '2rem' }}>
      <h2>Best Places to Study</h2>
      <p>Some of our go-to spots:</p>
      <div className="grid-card">
        <div className="card">
          <h3>Library</h3>
          <p>Quiet floors when you really need to lock in. The 3rd floor of the Library of the Health Sciences is especially quiet.</p>
        </div>
        
        <div className="card">
          <h3>CS Building Collaboration Spaces</h3>
          <p>The new CDRLC lounge is perfect for group work and has all the tech you need.</p>
        </div>
        
        <div className="card">
          <h3>Student Center East</h3>
          <p>For casual study plus snacks. Great atmosphere for less intense study sessions.</p>
        </div>
        
        <div className="card">
          <h3>Empty Classrooms</h3>
          <p>Elite hidden gem. Perfect for group projects or when you need a whiteboard.</p>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '2rem' }}>
      <h2>Food Spots Near Campus</h2>
      <p>Studying runs on fuel. Some favorites:</p>
      <div className="grid-card">
        <div className="card">
          <h3>Panda Express</h3>
          <p>For quick meals when you're in a rush between classes.</p>
        </div>
        
        <div className="card">
          <h3>Taylor Street Spots</h3>
          <p>For actual good food. Jim's Original for a quick polish, or Joy Yee for bubble tea.</p>
        </div>
        
        <div className="card">
          <h3>Coffee Shops</h3>
          <p>For late-night grind sessions. Argo Tea is a favorite.</p>
        </div>
      </div>
    </div>

    {/* <div className="callout-box">
      <h3>If We Had More Time...</h3>
      <p>We'd totally add a <strong>class rating page</strong> where students share:</p>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Difficulty level</li>
        <li>Workload</li>
        <li>Best professors</li>
        <li>Survival tips</li>
      </ul>
      <p style={{ fontStyle: 'italic', color: '#666' }}>(future update maybe?)</p>
    </div> */}

    <div className="highlight-box">
      <h3>Pro Tip for CS 111/141</h3>
      <p style={{ margin: 0, fontSize: '1.1rem' }}>
        Practice your logic on a whiteboard before you start typing code. It helps you think through the problem before diving in.
      </p>
    </div>
  </section>
);

export default Tips;