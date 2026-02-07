const About = () => {
  const members = Array(5).fill({ name: "Name", year: "Year", bg: "Background info", passion: "Passion", fun: "Fun Fact" });

  return (
    <section>
      <h2>Meet the Team</h2>
      <p>We’re CS students at UIC who wanted to make something that goes beyond words on a page.</p>
      <div className="grid-card">
        {members.map((m, i) => (
          <div key={i} className="card" style={{textAlign: 'center'}}>
            <div style={{width: '100px', height: '100px', background: '#ccc', borderRadius: '50%', margin: '0 auto 15px'}}></div>
            <h3>{m.name}</h3>
            <p><strong>Year:</strong> {m.year}</p>
            <p><strong>Background:</strong> {m.bg}</p>
            <p><strong>Passion:</strong> {m.passion}</p>
            <p><strong>Fun:</strong> {m.fun}</p>
          </div>
        ))}
      </div>
    </section>
  );
}; 
export default About;