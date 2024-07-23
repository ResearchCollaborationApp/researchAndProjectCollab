import React, { useState } from 'react'
import SearchCompany from '../searchCompany/searchCompany';
import AddressAutocomplete from './addressAutocomplete';
import Switch from 'react-switch';
import { Autocomplete } from '@react-google-maps/api';
import { CompanyAutocomplete } from '../searchCompany/autocomplete';

export default function InputField({inputField, handleChange, value}) {
 const handleAddressChange = (newAddress) => {
  handleChange({ target: { name: inputField.name, value: newAddress } });
};

const handleAutocompleteSubmit = (data) => {
  handleChange({ target: { name: inputField.name, value: data.value} });
};

 if (inputField.type ==='textarea'){
    return (
        <textarea
          name={inputField.name}
          onChange={handleChange}
          value = {value}
          placeholder={inputField.field}
          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
        />
      );
 }
 if (inputField.type === 'checkbox') {
    return (
      <div>
        <div className="space-y-2">
          <label htmlFor="Yes" className="flex cursor-pointer items-start gap-4">
            <div className="flex items-center">
              &#8203;
              <input 
                type={inputField.type} 
                className="size-4 rounded border-gray-300"
                value = {value} 
                name = {inputField.name} 
                onChange={handleChange}
              />
            </div>
            <div>
              <strong className="font-medium text-gray-900">Yes</strong>
            </div>
          </label>
        </div>
      </div>
    );
  }

  if (inputField.type === 'select') {
    return (
      <div >
        <CompanyAutocomplete onSubmitSearch={handleAutocompleteSubmit} placeholder="Enter organization name" value = {value}/>
      </div>
    );
  }
  if (inputField.type === 'address') {
    return (
      <div >
        <AddressAutocomplete onAddressChange={handleAddressChange}/>
      </div>
    );
  }
  return (
    <input
    type={inputField.type}
    name={inputField.name}
    onChange={handleChange}
    value = {value}
    placeholder={inputField.field}
    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
  />
);
};
