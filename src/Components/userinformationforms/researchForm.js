import React, { useState } from 'react';
import Switch from 'react-switch';
import './userInformation.css';
import RichTextEditor from '../texteditor/textEditor';
import SearchCompany from '../searchCompany/searchCompany';
export default function ResearchForm() {
    const [checked, setChecked] = useState(false);

    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    const [text, setText] = useState('');

    const handleTextAreaChange = (event) => {
      setText(event.target.value);
    };
    const [isVisible, setIsVisible] = useState(false);
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
          <input type="text" className="form-input" name="research-name" placeholder=""></input>
          <label className ="form-label">Institution</label>
          <SearchCompany />
          <label className ="form-label">Department</label>
          <input type="text" className="form-input" name="department-name" placeholder=""></input>
          <div className='form-group'>
              <label className ="form-label"> Description</label>
              <RichTextEditor/>
            </div>
          <label className ="form-label"> Are you involved in this research at present?</label>
            <div>
                <Switch
                    onChange={handleChange}
                    checked={checked}
                    offColor="#888"
                    onColor="#1f1"
                />
                <p>{checked ? "Yes" : "No"}</p>
            </div>
            <div className = "button-group">
              <button className = "delete-button btn btn-danger">Delete</button>
              <button className = "save-button btn btn-primary">Save</button>
            </div>
        </div>)
        }
    </form>
    <button className = "add-button btn btn-primary " onClick = {handleAddButton}>Add Research</button>
    </div>
  )
}
