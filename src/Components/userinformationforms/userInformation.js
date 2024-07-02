import React, { useState, useEffect } from 'react';
import './userInformation.css';
import {pageInformation} from './formData(page1-4).js';
console.log(pageInformation);
const UserInformation = () => {
  const [pageNum, setPageNum] = useState(0);
  const [pageData, setPageData] = useState(pageInformation[pageNum]);
  const [formData, setFormData] = useState(pageInformation[pageNum].formData);

  useEffect(() => {
    setPageData(pageInformation[pageNum]);
    setFormData(pageInformation[pageNum].formData);
  }, [pageNum]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  // Add form submission logic here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    if (pageNum < pageInformation.length - 1) {
      setPageNum(pageNum + 1);
    }
  
  };
  const handlePrevious = (e) =>{
    e.preventDefault();
    if (pageNum >0) {
      setPageNum(pageNum - 1);
    }
  }
  return (
    <div className="information-forms-container">
    <h1>{pageData.title}</h1>
    <h6>{pageData.message}</h6>
    <form onSubmit={handleSubmit} className = "form-content">
      {pageData.assets.map(asset => (
        <div key={asset.fieldName} className='form-group'>
            <label className ="form-label"> {asset.fieldName}</label>
              <input
                type={asset.type}
                name={asset.fieldName.toLowerCase().replace(/\s+/g, '')}
                value={formData[asset.fieldName.toLowerCase().replace(/\s+/g, '')] || ''}
                onChange={handleChange}
                className="form-input"
              />
          </div>
      ))}
       <div className='button-group'>
        {pageNum!==0 && ( 
          <button className = "button-design" onClick={handlePrevious}>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
           </svg>
           </span>
            <span>Previous page</span>
          </button>)}
          {pageNum <pageInformation.length-1 &&(
            <button type="submit" className = "button-design"><span>Next page</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
           </svg>
           </span>
          </button>)}
        </div>
    </form>
    </div>
  );
};

export default UserInformation;



