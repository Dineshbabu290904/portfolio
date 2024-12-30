import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a BTech student at Prasad V Potluri Siddhartha Institute of Technology,
              specializing in Computer Science and Data Science. Passionate about AI/ML
              and data-driven solutions, I focus on creating innovative applications
              that solve real-world problems.
            </p>
            <div className="education">
              <h3>Education</h3>
              <p>Bachelor of Technology in Computer Science and Data Science</p>
              <p>PVP Siddhartha Institute of Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 