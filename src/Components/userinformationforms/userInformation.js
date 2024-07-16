import React, { useState, useEffect } from 'react';
import './userInformation.css';
import FormTemplate from './formTemplate';
const UserInformation = () => {
  const user = [
    {
    title: "Personal Information",
    inputFields: [
      { field: "First Name", type: "text" },
      { field: "Last Name", type: "text" },
      { field: "Date of Birth", type: "date" },
      { field: "Address", type: "text" }
    ]
  },{
    title: "Login Information",
    inputFields: [
      { field: "School email", type: "email" },
      { field: "Password", type: "password" },
      { field: "Confirm password", type: "password" },
      { field: "Username", type: "text" }
    ]
  }
]
  return (
      <FormTemplate
        array= {user}
      />

  )
};

export default UserInformation;



