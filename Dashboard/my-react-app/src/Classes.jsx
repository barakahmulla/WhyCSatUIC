import React, { useState } from 'react';
import coursesList from './assets/courses.json'; 
import { courseReviews } from './courseReviews'; 

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allCourses = coursesList.map((course) => {
    const review = courseReviews[course.code]; 
    return {
      ...course, 
      ...review, 
      hasReview: !!review 
    };
  });

  const filteredCourses = allCourses.filter(course =>
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyBadgeClass = (difficulty) => {
    if (!difficulty) return 'difficulty-unknown';
    
    const diff = difficulty.toLowerCase();
    

    if (diff.includes('very hard') || diff.includes('5/5')) return 'difficulty-hard';
    if (diff.includes('hard') || diff.includes('4/5')) return 'difficulty-hard';
    if (diff.includes('medium') || diff.includes('3/5')) return 'difficulty-medium';
    if (diff.includes('easy') || diff.includes('2/5') || diff.includes('1/5')) return 'difficulty-easy';
    
    return 'difficulty-medium';
  };

  return (
    <section>
      <h1>CS Class Difficulty Guide</h1>
      
      {}
      <div style={{ 
        backgroundColor: '#e38a8a', 
        color: 'white', 
        padding: '10px 16px', 
        borderRadius: '8px',
        marginBottom: '2rem',
        display: 'inline-block',
        fontSize: '0.9rem',
        fontWeight: '500'
      }}>
        <strong> Data courtesy of the UIC CS Trackers Discord community </strong>
      </div>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        Real student reviews, difficulty ratings, and survival tips. 
        Courses with a <span style={{borderBottom: '2px solid #D50032'}}>Red Tip</span> have detailed advice.
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
                {course.difficulty && (
                  <span className={`difficulty-badge ${getDifficultyBadgeClass(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                )}
              </div>
              
              <div className="course-info">
                 {course.workload && (
                    <div className="info-item">
                      <span className="info-label">Workload:</span> {course.workload}
                    </div>
                 )}
                 {course.professor && (
                    <div className="info-item">
                      <span className="info-label">Professor:</span> {course.professor}
                    </div>
                 )}
                 
                 <div className="info-item" style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
                    <span className="info-label">Description:</span> {course.description}
                 </div>
              </div>

              {course.tips && (
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#555' }}>
                  <strong style={{ color: '#D50032' }}>Student Tip:</strong> {course.tips}
                </p>
              )}
            </div>
          ))
        ) : (
          <div className="callout-box">
            <p style={{ margin: 0 }}>No courses found matching "{searchTerm}".</p>
          </div>
        )}
      </div>

      <div className="callout-box" style={{ marginTop: '2rem' }}>
        <h3>Need to find an Easy Elective?</h3>
        <p>
          According to Reddit & Discord, check out: <strong>MUS 114, MUS 118, POLS 101, ECON 111, or HN 202</strong> for a lighter workload.
        </p>
      </div>
    </section>
  );
};

export default Classes;