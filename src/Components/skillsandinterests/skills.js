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
    // State to hold the current input and the list of interests
    const [interest, setInterest] = useState('');
    const [interests, setInterests] = useState([]);
  
    // Function to handle input change
    const handleInputChange = (e) => {
      setInterest(e.target.value);
    };
  
    // Function to add interest to the list
    const addInterest = () => {
      if (interest.trim() !== '') {
        setInterests([...interests, interest]);
        setInterest(''); // Clear the input field
      }
    };
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        addInterest();
      }
    };
  
    // Function to remove an interest from the list
    const removeInterest = (index) => {
      setInterests(interests.filter((_, i) => i !== index));
    };
  return (
    <div>
        <div className="information-forms-container">
          <div>
            <h1>Skills</h1>
            <h6>Please select the skills you have</h6>
            <div className = "skills-options">
            {skillNames.map((skill) => (
                    <button
                        className="skill-button"
                        key={skill.id}
                        onClick={() => handleSkillButton(skill.id)}
                        style={{ backgroundColor: skill.isSelected ? '#0056b3' : 'black' }}
                    >
                        {skill.skill}
                    </button>
                ))}
            </div>
         </div>
         <div>
          <h1>Interests</h1>
          <h6>Type in your interests</h6>
          <div className = "enter-interest">
            <input
            type="text"
            value={interest}
            onChange={handleInputChange}
            placeholder="Enter your interest"
            onKeyDown={handleKeyPress}
            />
          <button onClick={addInterest}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
          </button>
         </div>
         <div className="skills-options">
          {interests.map((item, index) => (
            <div key={index} className="interest-item">
              <button className='skill-button' style={{backgroundColor:'#0056b3'}}>{item}</button>
              <button onClick={() => removeInterest(index)} className='remove-button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
              </button>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  )
}
