import React, { useState } from 'react';

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample CS courses with difficulty ratings
  const courses = [
    {
      code: 'CS 111',
      name: 'Program Design I',
      difficulty: 'easy',
      workload: 'Light - Medium',
      avgGrade: 'B+',
      tips: 'Great intro to programming. Start projects early and go to office hours!',
      professor: 'Multiple instructors available'
    },
    {
      code: 'CS 141',
      name: 'Program Design II',
      difficulty: 'medium',
      workload: 'Medium',
      avgGrade: 'B',
      tips: 'Object-oriented programming gets challenging. Practice whiteboarding before coding.',
      professor: 'Multiple instructors available'
    },
    {
      code: 'CS 151',
      name: 'Mathematical Foundations of Computing',
      difficulty: 'medium',
      workload: 'Medium - Heavy',
      avgGrade: 'B-',
      tips: 'Discrete math and proofs. Form study groups and practice proof techniques.',
      professor: 'Piotr Gmytrasiewicz recommended'
    },
    {
      code: 'CS 251',
      name: 'Data Structures',
      difficulty: 'hard',
      workload: 'Heavy',
      avgGrade: 'B-',
      tips: 'One of the most important classes. Master Big O notation and practice implementations.',
      professor: 'Pat Troy highly recommended'
    },
    {
      code: 'CS 261',
      name: 'Machine Organization',
      difficulty: 'hard',
      workload: 'Heavy',
      avgGrade: 'C+',
      tips: 'Assembly and low-level programming. Start labs early and understand memory concepts.',
      professor: 'Joe Hummel is excellent'
    },
    {
      code: 'CS 341',
      name: 'Programming Language Design and Implementation',
      difficulty: 'medium',
      workload: 'Medium - Heavy',
      avgGrade: 'B',
      tips: 'Learn functional programming and language paradigms. Projects build on each other.',
      professor: 'Multiple instructors available'
    },
    {
      code: 'CS 342',
      name: 'Software Design',
      difficulty: 'medium',
      workload: 'Medium',
      avgGrade: 'B+',
      tips: 'Group project-based. Communication and Git skills are key.',
      professor: 'Ugo Buy recommended'
    },
    {
      code: 'CS 361',
      name: 'Systems Programming',
      difficulty: 'hard',
      workload: 'Heavy',
      avgGrade: 'B-',
      tips: 'C programming and Unix. Challenging but incredibly useful. Use office hours.',
      professor: 'Multiple instructors available'
    },
    {
      code: 'CS 377',
      name: 'Communication and Ethical Issues in Computing',
      difficulty: 'easy',
      workload: 'Light',
      avgGrade: 'A-',
      tips: 'Writing and ethics. Good break from heavy coding classes.',
      professor: 'Multiple instructors available'
    },
    {
      code: 'CS 401',
      name: 'Computer Algorithms I',
      difficulty: 'hard',
      workload: 'Heavy',
      avgGrade: 'B-',
      tips: 'Core algorithms class. LeetCode practice helps. Attend every lecture.',
      professor: 'Lev Reyzin highly recommended'
    },
    {
      code: 'CS 411',
      name: 'Artificial Intelligence I',
      difficulty: 'medium',
      workload: 'Medium - Heavy',
      avgGrade: 'B',
      tips: 'Interesting projects. Math background helps with probability and statistics.',
      professor: 'Multiple instructors available'
    },
    {
      code: 'CS 440',
      name: 'Software Engineering I',
      difficulty: 'easy',
      workload: 'Medium',
      avgGrade: 'B+',
      tips: 'Group project throughout semester. Start forming teams early.',
      professor: 'Multiple instructors available'
    },
    {
      code: 'CS 454',
      name: 'Open Source Software Development',
      difficulty: 'easy',
      workload: 'Light - Medium',
      avgGrade: 'A-',
      tips: 'Contribute to real projects. Great for building your portfolio.',
      professor: 'Dale Reed is amazing'
    },
    {
      code: 'CS 466',
      name: 'Introduction to Bioinformatics',
      difficulty: 'medium',
      workload: 'Medium',
      avgGrade: 'B+',
      tips: 'Interesting elective. Good mix of biology and CS.',
      professor: 'Tanya Berger-Wolf recommended'
    },
    {
      code: 'CS 474',
      name: 'Object-Oriented Languages and Environments',
      difficulty: 'medium',
      workload: 'Medium',
      avgGrade: 'B+',
      tips: 'Deep dive into OOP concepts. Lots of reading and projects.',
      professor: 'Multiple instructors available'
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyBadgeClass = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
      default: return 'difficulty-medium';
    }
  };

  return (
    <section>
      <h1>CS Class Difficulty Guide</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        Student reviews and tips for UIC CS courses. This is based on our experiences and may vary by professor and semester.
        For official grade distributions, check out{' '}
        <a href="https://uicgrades.com/gradeDistributions.html" target="_blank" rel="noopener noreferrer">
          UIC Grades
        </a>.
      </p>

      <div className="search-box">
        <label htmlFor="course-search" style={{ fontWeight: '600', color: '#001E62' }}>
          Search for a course:
        </label>
        <input
          id="course-search"
          type="text"
          className="search-input"
          placeholder="e.g., CS 251 or Data Structures"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header">
                <h3 className="course-title">{course.code}: {course.name}</h3>
                <span className={`difficulty-badge ${getDifficultyBadgeClass(course.difficulty)}`}>
                  {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                </span>
              </div>
              <div className="course-info">
                <div className="info-item">
                  <span className="info-label">Workload:</span> {course.workload}
                </div>
                <div className="info-item">
                  <span className="info-label">Avg Grade:</span> {course.avgGrade}
                </div>
                <div className="info-item">
                  <span className="info-label">Professor Rec:</span> {course.professor}
                </div>
              </div>
              <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#555' }}>
                <strong style={{ color: '#D50032' }}>Student Tip:</strong> {course.tips}
              </p>
            </div>
          ))
        ) : (
          <div className="callout-box">
            <p style={{ margin: 0 }}>No courses found matching "{searchTerm}". Try searching for a course code like "CS 251" or course name like "Data Structures".</p>
          </div>
        )}
      </div>

      <div className="highlight-box" style={{ marginTop: '2rem' }}>
        <h3 style={{ color: 'white', marginTop: 0 }}>General Tips</h3>
        <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
          <li>Check Rate My Professor before registering</li>
          <li>Balance hard classes with easier electives</li>
          <li>Don't take CS 251, 261, and 341 in the same semester</li>
          <li>Join study groups early in the semester</li>
          <li>Visit UIC Grades for historical grade distributions</li>
        </ul>
      </div>

      <div className="callout-box" style={{ marginTop: '2rem' }}>
        <h3>Want to add your review?</h3>
        <p>
          This is a work in progress! We'd love to hear your experiences with UIC CS classes.
          Your insights help future students make better decisions.
        </p>
      </div>
    </section>
  );
};

export default Classes;