import React, { useEffect, useState } from 'react';
import './Work.css';

const Work = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  // Sample work experience data
  const workExperience = [
    {
      company: 'Extreme Networks',
      position: 'Wireless Software Engineer',
      duration: 'August 2023 - Present',
      responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
        {
      company: 'Freelancer',
      position: 'Web Developer',
      duration: 'April 2023 - Present',
      responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    // Add more work experience objects
  ];

  return (
    <div className="work-container">
      <h1 className="work-title">Work Experience</h1>
      {workExperience.map((exp, index) => (
        <div
          key={index}
          className={`work-card ${isActive ? 'active' : ''}`}
          style={{ transitionDelay: `${index * 0.2}s` }}
        >
          <h2 className="company-name">{exp.company}</h2>
          <h3 className="position">{exp.position}</h3>
          <p className="duration">{exp.duration}</p>
          <p className="responsibilities">{exp.responsibilities}</p>
        </div>
      ))}
    </div>
  );
};

export default Work;
