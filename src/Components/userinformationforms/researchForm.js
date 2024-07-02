import React, { useState } from 'react';
import Switch from 'react-switch';
import './userInformation.css';
import RichTextEditor from '../texteditor/textEditor.js';

export default function ResearchForm() {
    const [description, setDescription] = useState('');
    const [checked, setChecked] = useState(false);
  
    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let sendToBackend = {"researchName": formData.researchName,"institution":formData.institution, "department": formData.department, "description": description, "checked": checked ? "Yes":"No" }
        const researchName = formData.researchName;
        const institution = formData.institution;
        const department = formData.department;
        console.log(researchName, institution, department, description, checked);
    }

    const [formData, setFormData] = useState(
      {researchName: '', institution: '', department: ''}
    );

    const handleFormData = (e) => {
      const { name, value } = e.target;
      setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const [isVisible, setIsVisible] = useState(false);

    const handleDelete = () =>{

    }
    const handleDescriptionChange = (newDescription) =>{
     setDescription(newDescription);
    }
    
    const handleAddButton = () =>{
      setIsVisible(!isVisible);
    };
  
  return (
    <div className="information-forms-container">
        <h1>Research Work</h1>
        <h6>Let us know your research work</h6>
      <form onSubmit={handleSubmit} className = "form-content">
      {isVisible && (< div className = "hidden-forms ">
          <label className ="form-label">Name of Research</label>
          <input 
            type="text" 
            className="form-input" 
            name="researchName" 
            placeholder="" 
            value = {formData.researchName}
            onChange = {handleFormData}
          />
          <label className ="form-label">Institution</label>
          <input 
            type="text" 
            className="form-input" 
            name="institution" 
            placeholder=""
            value = {formData.institution}
            onChange = {handleFormData}
          />
          <label className ="form-label">Department</label>
          <input 
            type="text" 
            className="form-input" 
            name="department" 
            placeholder=""
            value = {formData.department}
            onChange = {handleFormData}
          />
           <div className='form-group'>
              <label className ="form-label"> Description</label>
              <RichTextEditor onDescriptionChange={handleDescriptionChange}/>
            </div>

          <label className ="form-label"> Are you involved in this research at present?</label>
            <div>
                <Switch
                    onChange={handleChange}
                    checked={checked}
                    offColor="#888"
                    onColor="#2E8B57"
                />
                <p>{checked ? "Yes" : "No"}</p>
            </div>
            <div className = "button-group">
              <button className = "delete-button btn btn-danger" onClick = {handleDelete}>Delete</button>
              <button className = "save-button btn btn-success" >Save this research</button>
            </div>
        </div>
        )
        }
    </form>
    <button className = "add-button btn btn-primary " onClick = {handleAddButton}>Add Research</button>
    </div>
  )
}
