import React from 'react';
import ContactItem from './contactItem';

const ContactInfo = () => {
  return (
    <div className="contacts">
      <ContactItem
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="55" fill="#711997" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        }
        title="Location"
      >
        <p className="text-dark">Highland Heights, KY</p>
      </ContactItem>
      <ContactItem
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="55" fill="#711997" className="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        }
        title="Phone"
      >
        <a className="text-primary" href="tel:+18597864579">+1-859-786-4579</a>
      </ContactItem>
      <ContactItem
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="55" fill="#711997" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        }
        title="Email Address"
      >
        <a className="text-primary" href="mailto:acharyab2@mymail.nku.edu">acharyab2@nku.edu</a>
      </ContactItem>
    </div>
  );
};

export default ContactInfo;
