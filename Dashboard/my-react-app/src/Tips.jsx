import React from 'react';

const Tips = () => (
  <section>
    <h1>Tips We Wish We Had as Freshmen</h1>
    
    {/* Cute Red Accent Line */}
    <div style={{ 
      width: '80px', 
      height: '6px', 
      backgroundColor: '#D50032', 
      borderRadius: '10px',
      marginTop: '0.5rem',
      marginBottom: '2.5rem'
    }}></div>
    
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
          <p>Get your questions answered and clarify concepts before it's too late! Skipping lectures causes an inevitable snowball </p>
        </div>
        
        <div className="card">
          <h3>Build Relationships</h3>
          <p>Connect with professors and TAs, promise they're nicer than you think, these relationships matter for references and opportunities.</p>
        </div>
        
        <div className="card">
          <h3>Feel Less Lost</h3>
          <p> Office hours help you feel less lost in big lectures + a great place to trauma bond & make new friends! </p>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '2rem' }}>
      <h2>Best Places to Study</h2>
      <p>Some of our go-to spots:</p>
      <div className="grid-card">
        <div className="card">
          <h3>Library</h3>
          <p>Quiet floors when you really need to lock in. The 4th floor of the Library is especially quiet whether you neeed to lock in or nap.</p>
        </div>
        
        <div className="card">
          <h3>CS Building Collaboration Spaces</h3>
          <p>The new CDRLC lounge is perfect for group work and has all the tech you need. Booth room is OP. </p>
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
          <h3> Halal Shack </h3>
          <p>For quick meals when you're in a rush between classes. Cheeseburger is so underrated!! </p>
        </div>
        
        <div className="card">
          <h3>Taylor Street Spots</h3>
          <p> For actual good food. Jarabe fish tacos are *chefs kiss*. Gather's ofc for the best boba + matcha ever! </p>
        </div>
        
        <div className="card">
          <h3>Coffee Shops</h3>
          <p> Ground Up + Swadesi + Two Shades + Overlay + Core Coffee + Dunkin!!</p>
        </div>
      </div>
    </div>

    <div className="highlight-box">
      <h3>Pro Tip for CS 111/141</h3>
      <p style={{ margin: 0, fontSize: '1.1rem' }}>
      Don’t jump straight into coding. First, write out what the input is, what the output should be, and one small example. If you can explain the logic in plain English, the code will come way easier (and with fewer bugs).
      </p>
    </div>
  </section>
);

export default Tips;