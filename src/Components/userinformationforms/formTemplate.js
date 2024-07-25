import React, { useState } from 'react';
import InputField from './inputField';
import { AddIcon, NextIcon } from '../Icons';
import Skills from './skills';
import Loader from './loader';
export default function FormTemplate() {
  const initialUserData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    major: '',
    yearInSchool: '',
    graduationDate: '',
    departmentAssociatedWith: '',
    research: [
      {
        nameOfResearch: '',
        organization: '',
        from: '',
        isPresent: false,
        to: '',
        description: ''
      }
    ]
  };
  const [showComponent, setShowComponent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState(initialUserData);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowComponent(true);
    }, 1000); // 1 second delay
  };

  const user = [
    {
      title: "Personal Information",
      saySomething: "Let us know you",
      inputFields: [
        { field: "First Name", type: "text", name: "firstName" },
        { field: "Last Name", type: "text", name: "lastName" },
        { field: "Date of Birth", type: "date", name: "dateOfBirth" },
        { field: "Address", type: "address", name: "address" }
      ],
      addMore: false
    },
    {
      title: "Education",
      saySomething: "Provide your recent education",
      inputFields: [
        { field: "Major", type: "text", name: "major" },
        { field: "Year in school", type: "text", name: "yearInSchool" },
        { field: "Graduation date", type: "date", name: "graduationDate" },
        { field: "Department associated with", type: "text", name: "departmentAssociatedWith" }
      ],
      addMore: false
    },
    {
      title: "Research",
      saySomething: "Let's know your research experience",
      inputFields: [
        { field: "Name of research", type: "text", name: "research.nameOfResearch" },
        { field: "Organization associated with", type: "select", name: "research.organization" },
        { field: "From", type: "date", name: "research.from" },
        { field: "Is this your present research?", type: "checkbox", name: "research.isPresent" },
        { field: "To", type: "date", name: "research.to" },
        { field: "Description", type: "textarea", name: "research.description" }
      ],
      addMore: true
    }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    const [parent, child] = name.split('.');
    
    if (child) {
      setFormData((prevState) => ({
        ...prevState,
        research: prevState.research.map((res, index) => 
          index === prevState.research.length - 1
            ? { ...res, [child]: value }
            : res
        )
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    handleNext();
  };

  const handleAddMore = (event) => {
    event.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      research: [
        ...prevState.research,
        {
          nameOfResearch: '',
          organization: '',
          from: '',
          isPresent: false,
          to: '',
          description: ''
        }
      ]
    }));
  };
  const handleSkillsSubmit = (data) => {
    setFormData({
      ...formData,
      skills: data.skills,
      interests: data.interests,
    });
    console.log('Submitted Data:', data);
  };
  const currentResearch = formData.research[formData.research.length - 1];
  const isPresent = currentResearch?.isPresent || false;
  return (
    <>
      {index < user.length ? (
        <section className="container mx-auto max-w-xl">
          <div className="items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-2xl xl:mx-auto">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                    {user[index].title}
                  </h2>
                  <p className="mt-2 text-base text-gray-600">{user[index].saySomething}</p>
                  <form action="#" className="mt-8" onSubmit={handleSubmit}>
                    <div className="space-y-5">
                      {user[index].inputFields.map((inputField, fieldIndex) => (
                        <div key={fieldIndex}>
                          <label
                            htmlFor={inputField.name}
                            className="text-base font-medium text-gray-900"
                          >
                            {inputField.field}
                          </label>
                          <div className="mt-2.5">
                            <InputField
                              inputField={inputField}
                              handleChange={handleChange}
                              value={
                                inputField.name.startsWith('research')
                                  ? formData.research[formData.research.length - 1][inputField.name.split('.')[1]] || ''
                                  : formData[inputField.name] || ''
                              }
                              isDisabled={inputField.name === 'research.to' && isPresent}
                            />
                          </div>
                        </div>
                      ))}
                      {user[index].addMore && (
                        <div>
                          <button
                            onClick={handleAddMore}
                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                          >
                            Save and add more
                            <AddIcon />
                          </button>
                        </div>
                      )}
                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          Save and continue
                          <NextIcon />
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Skills onSkillsSubmit={handleSkillsSubmit}/>
      )}
    </>
  );
}