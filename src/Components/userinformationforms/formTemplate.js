import React, { useState, useEffect } from 'react';
import InputField from './inputField';
import { AddIcon, NextIcon } from '../Icons';
export default function FormTemplate({ userInfo, handleNext }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    handleNext();
  }
  const handleAddMore = (event)=>{
    event.preventDefault();
    setFormData({})
    console.log('Form submitted:', formData);
  }
  return (
      <section className="container mx-auto max-w-xl">
        <div className="items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w- 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              {userInfo.title}
            </h2>
            <p className="mt-2 text-base text-gray-600">{userInfo.saySomething}</p>
            <form action="#" className="mt-8" onSubmit={handleSubmit}>
               <div className="space-y-5">
                  {userInfo.inputFields.map((inputField, fieldIndex) => (
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
                          value={formData[inputField.name] || ''}/>
                        </div>
                      </div>
                      ))}
                      {
                      userInfo.addMore && 
                       <div>
                       <button
                         onClick = {handleAddMore}
                         className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                       >
                         Save and add more
                        <AddIcon/>
                       </button>
                     </div>
                     }
                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          Save and continue
                         <NextIcon/>
                        </button>
                      </div>
                    </div>
                </form>
            </div>
          </div>
      </section>
)};