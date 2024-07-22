import React, { useState, useEffect } from 'react';
import FormTemplate from './formTemplate';
const UserInformation = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1));
  };
  const user = [
    {
    title: "Personal Information",
    saySomething:"Let us know you",
    inputFields: [
      { field: "First Name", type: "text", name:"firstName"},
      { field: "Last Name", type: "text", name:"lastName" },
      { field: "Date of Birth", type: "date" , name:"dateOfBirth"},
      { field: "Address", type: "text" , name:"address"}
    ]
  },
  {
    title: "Education",
    saySomething:"Provide your recent education",
    inputFields: [
      { field: "Major", type: "text", name:"major" },
      { field: "Year in school", type: "text", name:"yearInSchool" },
      { field: "Graduation date", type: "date" , name:"graduationDate"},
      { field: "Department associated with", type: "text" , name:"department"}
    ]
  },
  {
    title: "Research",
    saySomething:"Let's know your research experience",
    inputFields: [
      { field: "Name of research", type: "text", name:"researchName" },
      { field: "Organization associated with", type: "select", name:"organization" },
      { field: "From", type: "date" , name:"researchStartDate"},
      { field: "To", type: "date" , name:"researchEndDate"},
      { field: "Description", type: "textarea" , name:"description"},
      { field: "Is this your present research?", type: "switch", name:"isPresent"}
    ]
  }
]
  return (
      <FormTemplate
        userInfo= {user[index]} handleNext={handleNext}
      />

  )
};

export default UserInformation;



