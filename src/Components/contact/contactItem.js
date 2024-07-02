import React from "react";

// children is used to display any additional information for the contact item. It be could be test, an image, or another component.
const ContactItem = ({ icon, title, children }) => {
    return (
      <div className="contacts-items">
        <div className="bg-light contacts-items-icons shadow-lg bg-white rounded">
          {icon}
          <div className="contacts-items-text">
            <p className={title.toLowerCase()}>{title}</p>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactItem;