import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import './userInformation.css';
import RichTextEditor from '../texteditor/textEditor.js';


export default function ResearchForm() {
  const initialFormState = {researchName: '', institution: '', department: ''};
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [addButtonIsVisible, setAddButtonIsVisible] = useState(true);
  //when add button is clicked setFormIsVisible to true to show the form.
  const handleAddButton = () =>{
    setFormIsVisible(true);
    setAddButtonIsVisible(false);
  };
  const [divData, setDivData] = useState([]);
  const [description, setDescription] = useState('');
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [clicked, setClicked] = useState(false);

  const handleChange = (nextChecked) => {
      setChecked(nextChecked);
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  //need to handle delete function
  //once when backend is encorporated
  const handleDelete = () =>{

  }

  const handleDescriptionChange = (newDescription) =>{
  setDescription(newDescription);
  }

  const handleClickingDone = (isClicked) =>{
      setClicked(isClicked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data saved successfully");
    setFormData(initialFormState);
    setChecked(false);
    setClicked(false);
    let form = e.target;
    let dataForm= new FormData(form);
    let dataToBackend = Object.fromEntries(dataForm.entries());
    dataToBackend.presentResearch = checked ? "Yes":"No";
    dataToBackend.description = description;
    dataForm.id = divData.length+1;
    setDivData([...divData, dataToBackend])
    setFormIsVisible(false);
    setAddButtonIsVisible(true);
  }
  useEffect(() => {
    console.log(divData);
  }, [divData]);
  return (
    <div className="information-forms-container">
      <h1>Your Research Work</h1>
      <h6>Add your reseach works to strenghen your profile</h6>
      {formIsVisible && (
        <form onSubmit={handleSubmit} className = "form-content hidden-forms ">
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
              <RichTextEditor onDescriptionChange={handleDescriptionChange} onClickingDone = {handleClickingDone}/>
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
            { clicked && (<div className = "button-group">
              <button className = "delete-button btn btn-danger" onClick = {handleDelete}>Delete</button>
              <button className = "save-button btn btn-success" type = "submit" >Save this research</button>
            </div>)}
    </form>
  )
  }
  {(divData.length > 0 && addButtonIsVisible)&& divData.map((item, index) => (
        <ResearchDiv key={index} dataToDiv={item} />
      ))}
  {addButtonIsVisible &&( <button className = "add-button btn btn-primary " onClick = {handleAddButton}>Add Research</button>
    )}
    </div>
  )
}

const ResearchDiv = ({dataToDiv})=> {
  //console.log(dataToDiv);
  console.log(dataToDiv.description);
  return (
        <div className = "research-div">
          <h2>{dataToDiv.researchName}</h2>
          <div className = "institution-info">
            <span>
            <img src = "https://media.licdn.com/dms/image/C4E0BAQG2b6zKIshR8w/company-logo_100_100/0/1657741942559/northern_kentucky_university_logo?e=1727913600&v=beta&t=0FZ3iYCgNSU68ayylfKBmhimvBOqwlMIYI7kzX97PVU"/>
            </span>
            <div className ="institution-and-department">
              <h3>{dataToDiv.institution}</h3>
              <h5>{dataToDiv.department}</h5>
            </div>
          </div>
          <h3>Major Roles:</h3>
          <div>{dataToDiv.description}</div>
          <div>Current Research? {dataToDiv.presentResearch}</div>
          <div className="button-group">
            <button className="btn btn-secondary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
  )
}