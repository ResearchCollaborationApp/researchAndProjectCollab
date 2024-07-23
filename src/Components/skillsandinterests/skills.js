import React, { useState } from 'react'
import './skills.css'
import { AddIcon, CancelIcon, NextIcon } from '../Icons';

export default function Skills() {
  //this data will be generated according to the major
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
      <div className="container mx-auto max-w-xl" >
        <div className="items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Skills</h2>
            <p className="mt-2 text-base text-gray-600">Please select the skills you have</p>
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
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Interests</h2>
          <p className="mt-2 text-base text-gray-600 mb-2">Type in your interests</p>
          <div className="relative w-full ">
            <input
              type="text"
              value={interest}
              onChange={handleInputChange}
              placeholder="Enter your interest"
              className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              onKeyDown={handleKeyPress}
            />
            <button 
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={addInterest}
            >
              <AddIcon/>
            </button>
          </div>
         <div className="skills-options">
          {interests.map((item, index) => (
            <div key={index} className="interest-items">
              <button className='skill-button' style={{backgroundColor:'#0056b3'}}>{item}</button>
                <button onClick={() => removeInterest(index)} className="text-black border-none rounded cursor-pointer">
                <CancelIcon/>
              </button>
            </div>
          ))}
        </div>
       </div>
       <button
        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
        >
        Save and continue
        <NextIcon/>
      </button>
      </div>
    </div>
  )
}
