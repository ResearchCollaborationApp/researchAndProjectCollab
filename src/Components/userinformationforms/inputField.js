import React from 'react'
import SearchCompany from '../searchCompany/searchCompany';
export default function InputField({inputField, handleChange}) {
 if (inputField.type ==='textarea'){
    return (
        <textarea
          name={inputField.name}
          onChange={handleChange}
          placeholder={inputField.field}
          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
        />
      );
 }
 if (inputField.type === 'switch') {
    return (
      <div >
        <label className="switch">
          <input
            type="checkbox"
            name={inputField.name}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }

  if (inputField.type === 'select') {
    return (
      <div >
        <SearchCompany/>
      </div>
    );
  }


  return (
    <input
    type={inputField.type}
    name={inputField.name}
    onChange={handleChange}
    placeholder={inputField.field}
    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
  />
);
};
