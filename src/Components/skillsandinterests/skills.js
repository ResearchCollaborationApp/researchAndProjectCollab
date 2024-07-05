import React, { useState } from 'react'
import './skills.css'

export default function Skills() {
  const [skillNames, setSkillNames] = useState([
    { id: 1, skill: "Python", isSelected: false },
    { id: 2, skill: "Java", isSelected: false },
    { id: 3, skill: "C++", isSelected: false },
    { id: 4, skill: "JavaScript", isSelected: false },
    { id: 5, skill: "C#", isSelected: false },
    { id: 6, skill: "Ruby", isSelected: false },
    { id: 7, skill: "Swift", isSelected: false },
    { id: 8, skill: "Go", isSelected: false },
    { id: 9, skill: "PHP", isSelected: false },
    { id: 10, skill: "HTML/CSS", isSelected: false },
    { id: 11, skill: "React", isSelected: false },
    { id: 12, skill: "Angular", isSelected: false },
    { id: 13, skill: "Vue.js", isSelected: false },
    { id: 14, skill: "Node.js", isSelected: false },
    { id: 15, skill: "Express.js", isSelected: false },
    { id: 16, skill: "Git", isSelected: false },
    { id: 17, skill: "GitHub", isSelected: false },
    { id: 18, skill: "Agile", isSelected: false },
    { id: 19, skill: "Scrum", isSelected: false },
    { id: 20, skill: "Test-Driven Development", isSelected: false },
    { id: 21, skill: "Continuous Integration", isSelected: false },
    { id: 22, skill: "Data Structures", isSelected: false },
    { id: 23, skill: "Algorithms", isSelected: false },
    { id: 24, skill: "SQL", isSelected: false },
    { id: 25, skill: "NoSQL", isSelected: false },
    { id: 26, skill: "MongoDB", isSelected: false },
    { id: 27, skill: "PostgreSQL", isSelected: false },
    { id: 28, skill: "MySQL", isSelected: false },
    { id: 29, skill: "Linux", isSelected: false },
    { id: 30, skill: "Windows", isSelected: false },
    { id: 31, skill: "macOS", isSelected: false }
]);
const handleSkillButton = (id) => {
  const updatedSkills = [...skillNames];
  const skillIndex = updatedSkills.findIndex(skill => skill.id === id);
  
  if (skillIndex !== -1) {
      updatedSkills[skillIndex] = {
          ...updatedSkills[skillIndex],
          isSelected: !updatedSkills[skillIndex].isSelected
      };
      setSkillNames(updatedSkills);
      console.log(`Skill Name: ${updatedSkills[skillIndex].skill}, isSelected: ${updatedSkills[skillIndex].isSelected}`);
  }
};
  return (
    <div>
        <div className="information-forms-container">
        <h1>Skills</h1>
        <h6>Please select the skills you have</h6>
        <div className = "skills-options">
        {skillNames.map((skill) => (
                <button
                    className="skill-button"
                    key={skill.id}
                    onClick={() => handleSkillButton(skill.id)}
                    style={{ backgroundColor: skill.isSelected ? 'blue' : 'black' }}
                >
                    {skill.skill}
                </button>
            ))}
        </div>
        </div>
    </div>
  )
}
