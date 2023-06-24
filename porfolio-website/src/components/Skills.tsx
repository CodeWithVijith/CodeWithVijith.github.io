import React from 'react'
import skillsData from '../data/skillsData';

const Skills = () => {
  const SkillsContainer = () => {
    return (
      <div className="skills-container">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-card">
            <img src={item.image} alt={item.name} className="skill-icon" />
            <h3 className="skill-name">{item.name}</h3>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="skills-section" id="skills">
      <h2>Skills Section</h2>
      <SkillsContainer />
    </section>
  );
}

export default Skills