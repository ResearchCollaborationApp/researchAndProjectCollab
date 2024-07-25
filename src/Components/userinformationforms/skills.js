import React, { useState, useEffect } from 'react';
import './skills.css';
import { AddIcon, CancelIcon, NextIcon } from '../Icons';

export default function Skills({ onSkillsSubmit }) {
  const [skillsSuggestion, setSkillsSuggestion] = useState([]);

const fetchData = async () => {
  try {
      const response = await fetch('/getResearch/api/skills');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSkillsSuggestion(data.map(item => item.skillName));
  } catch (error) {
      console.error('Fetch error:', error);
  }
};
useEffect(() => {
  fetchData();
}, []);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

  // Function to fetch suggestions based on user input
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : skillsSuggestion.filter(skill =>
      skill.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const onChange = event => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue.trim()) {
      setSuggestions(getSuggestions(newValue));
      setIsSuggestionsVisible(true);
    } else {
      setSuggestions([]);
      setIsSuggestionsVisible(false);
    }
  };

  const onClickSuggestion = suggestion => {
    addItem(suggestion);
    setIsSuggestionsVisible(false);
  };

  const addItem = skillToAdd => {
    if (skillToAdd.trim() !== '' && !skills.includes(skillToAdd)) {
      setSkills(prevSkills => [...prevSkills, skillToAdd]);
      setValue('');
    }
  };

  const removeItem = index => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const data = { skills: skills };
    onSkillsSubmit(data);
    
  };

  return (
    <div className="container mx-auto max-w-xl">
      <div className="items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Skills and interests</h2>
          <p className="mt-2 text-base text-gray-600 mb-2">Type in your skills and interests</p>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for skills and interests"
              value={value}
              onChange={onChange}
              className="block w-full p-4 text-black placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:bg-white caret-blue-600"
            />
            {/* Conditionally render the suggestions box */}
            {isSuggestionsVisible && suggestions.length > 0 && (
              <div className="absolute w-full mt-1 border border-gray-300 rounded-md max-h-52 overflow-y-auto z-10 bg-white">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className='py-2 px-4 hover:bg-gray-200 cursor-pointer'
                    onClick={() => onClickSuggestion(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
            {suggestions.length ===0 &&
            <button
            className='absolute inset-y-0 right-0 flex items-center pr-3 transition-opacity duration-300 '
            onClick={() => addItem(value)}
          >
            <AddIcon />
          </button>}
          </div>
          <div className="skills-options mb-12"> {/* Adjust the bottom margin to create space for the button */}
            {skills.map((item, index) => (
              <div key={index} className="interest-items">
                <button className='skill-button' style={{ backgroundColor: '#0056b3' }}>{item}</button>
                <button onClick={() => removeItem(index)} className="text-black border-none rounded cursor-pointer">
                  <CancelIcon />
                </button>
              </div>
            ))}
          </div>
          <button
            className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700'
            onClick={handleSubmit}
          >
            Save and continue
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

