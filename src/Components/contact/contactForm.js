import React from 'react';

const ContactForm = () => {
  return (
    <div className="container form-content shadow-lg bg-white rounded">
      <div className="col-12 form-content-items mx-auto">
        <div className="sendMessage aboutMe">
          <p id="sendMessage" className='text-info'>Send us a Message</p>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="form-name" placeholder="Your Name" />
          <input type="email" className="form-control" id="form-email" placeholder="Your email" required />
          <input type="text" className="form-control" placeholder="Message" id="form-message" />
          <button type="button" className="btn btn-primary btn-lg btn-block">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
