import React, { useState } from 'react';
export default function FormTemplate({ array }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    const response = await fetch('api/getResearch', {
      method: 'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const json = await response.json()
    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setError(null)
      setFormData({})
      console.log("New user added")
    }
  };

  return (
    <div className='information-forms-container'>
      <form onSubmit={handleSubmit}>
        {array.map((section, sectionIndex) => (
          <div key={sectionIndex} className='form-section'>
            <h1>{section.title}</h1>
            {section.inputFields.map((field, fieldIndex) => (
              <div key={fieldIndex}>
                <label className="form-label">
                  {field.field}:
                  <input
                    type={field.type}
                    name={field.field.toLowerCase().replace(/ /g, '')}
                    value={formData[field.field.toLowerCase().replace(/ /g, '')] || ''}
                    onChange={handleChange}
                    className='form-input'
                  />
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className='btn btn-primary'>Save</button>
      </form>
      {error&& <div>{error}</div>}
    </div>
  );
}
