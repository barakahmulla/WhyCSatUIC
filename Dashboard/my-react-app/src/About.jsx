import React from 'react';
import barakahImg from './images/barakah-profile.jpg';
import SheenaImg from './images/sheena.jpeg'; 
import AtulyaImg from './images/atulya.jpeg';
import DeeyaImg from './images/deeya.jpg';
import NourImg from  './images/nour.png';
//import HeaderImg from './images/header_banner_uic.png';

const About = () => (
  <section>
    <h1>About Us</h1>
    <h2>Meet the Team</h2>
    
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
      We're CS students at UIC who wanted to create something that goes beyond just words on a page. 
      Each of us brings a unique background, passion, and perspective, but we all share the goal of 
      making CS feel more approachable, inclusive, and innovative.
    </p>
    
    {/* SHEENA */}
    <div className="about-person">
      {<img src={SheenaImg} alt="Sheena" className="profile-photo" />}
      
      <div className="about-content">
        <h3>Sheena</h3>
        <p><strong>Year:</strong> Junior, December 2026</p>
        <p><strong>My UIC Story:</strong> I chose UIC because of its diversity and the resources it offers. So far, my experience here has been great, and I feel like I’ve gone through a really positive transformation since I first started. I used to be very introverted, and while I still am in some ways, I’ve learned how to find like minded people who are passionate about what they do. </p>
        <p><strong>Why Our Game? </strong> I was motivated to create this game because it felt like a fun and interactive way to showcase what the CS experience at UIC is like. I know choosing the right college can be a tough decision, but at UIC there are many different communities and opportunities where you can find your place. </p>
        <p><strong>Passion:</strong> Interested in AI/ML and product management </p>
        <p><strong>Fun Fact:</strong> I have pet budgies </p>
      </div>
    </div>

    {/* ATULYA */}
    <div className="about-person">
      {<img src={AtulyaImg} alt="Atulya" className="profile-photo" />}

      <div className="about-content">
      <h3>Atulya</h3>
        <p><strong>Year:</strong> Junior, May 2027 </p>
        <p><strong>My UIC Story:</strong> I wanted to be in the city, and I wanted a university that not only teaches real skills but also gives you chances to apply them. My first experience at UIC was CS 111 through Break Through Tech, and it set the tone for everything that followed. My biggest challenge was navigating a major change in my junior year. UIC’s advisors and academic support made that transition smooth and kept me on track to graduate without delays. My advice for freshmen is to put yourself out there. Meet new people, talk to professors, and connect with companies that visit campus. You’re never too early in your journey to start building skills and relationships.</p>
        <p><strong>Why Our Game? </strong> My purpose with this website is to encourage new students to choose UIC and to give a fun snapshot of what life here is like.</p>
        <p><strong>Passion:</strong> Baking and Legos</p>
        <p><strong>Fun Fact:</strong> I know 3 languages and learning two more.</p>
      </div>
    </div>

    {/* BARAKAH */}
    <div className="about-person">
      <img src={barakahImg} alt="Barakah" className="profile-photo" />
      <div className="about-content">
        <h3>Barakah</h3>
        <p><strong>Year:</strong> Junior, December 2026</p>
        <p><strong>My UIC Story:</strong> Honestly speaking, at first I picked UIC due to financial constraints and needing to stay home to fufill family responsibilties. As a daughter of immigrant parents the value of education has always been instilled in me. At first CS/Tech wasn't even a career that I considered, but UIC's CS program opened my eyes to so many opportunities and introduced me to lifelong friends, making my college experience worth everything.</p>
        <p><strong>Why Our Game? </strong> The college experience is always glorified and glamorized in movies and TV shows which can bring a lot of high expectation or feelings of dissatisfaction. Not having a large friend group, struggling making friends, living independently, and learning to be alone are things no one really talks about, topics that are hard to navigate. Creating the website and game gives an insight to what life is like at UIC, the good and bad, the wins and failures. </p>
        <p><strong>Passion:</strong> Increasing opportunities for women in technology</p>
        <p><strong>Fun Fact:</strong> Born in Kentucky</p>
      </div>
    </div>

    {/* DEEYA */}
    <div className="about-person">
      <img src={DeeyaImg} alt="Deeya" className="profile-photo" />
      <div className="about-content">
        <h3>Deeya</h3>
        <p><strong>Year:</strong> Junior, May 2027</p>
        <p><strong>My UIC Story:</strong> I chose CS because I’ve always been good at math and science and wanted to challenge myself with something I was initially intimidated by. My favorite experiences have been collaborating on projects and serving as the Fundraising Chair of WiCys.</p>
        <p><strong>Why Our Game? </strong> As a first-generation college student, picking a major was stressful, and I would have loved an interactive site like this to guide me. I wanted to showcase that UIC CS is an underrated program full of amazing opportunities. The game captures my favorite parts of being a student here! </p>
        <p><strong>Passion:</strong> Creative writing and poetry</p>
        <p><strong>Fun Fact:</strong> I once won a poetry writing contest!</p>
      </div>
    </div>

    {/* NOUR */}
    <div className="about-person">
      <img src={NourImg} alt="Nour" className="profile-photo" />
      <div className="about-content">
        <h3>Nour</h3>
        <p><strong>Year:</strong> Junior, May 2027</p>
        <p><strong>My UIC Story:</strong> I chose UIC because of how diverse it seemed, Growing up I always felt as the odd one out so coming to UIC has definitely helped me find my people. When it comes to studying Computer science, I had a fear that I would be behind freshman year because I came in with zero knowledge on programming, Three years later, I couldn’t be more wrong. The lessons UIC has given me both inside and outside the classroom are things I will carry with me not only in my career but my whole life. </p>
        <p><strong>Why Our Game? </strong> What made me want to make this website and game was to show incoming freshman an insider scoop on what life is like at UIC, whether their only a 30 minute commute from the suburbs or out of state. My overall goal with this website and game is to make sure incoming students feel a sense of belonging and to know they are welcome here!</p>
        <p><strong>Passion:</strong> Crocheting</p>
        <p><strong>Fun Fact:</strong> I can move my ears!</p>
      </div>
    </div>

    <div className="highlight-box">
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>
        We hope this site helps you feel excited, informed, and maybe a little less nervous about starting your CS journey here at UIC, the best place to ignite your passion 🔥
      </p>
    </div>
  </section>
);

export default About;