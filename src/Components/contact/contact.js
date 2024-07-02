import React from 'react';
import ContactInfo from './contactInfo';
import ContactForm from './contactForm';
import Footer from '../footer/footer';
import './contact.css'; 

const Contact = () => {
  return (
    <div>
        <div className="container-fluid contact" id="contact">
            <div className="row">
                <div className="col-12">
                <div className="row text-center">
                    <div className="col-12 aboutMe mt-4">
                    <p className="sectionsHeading display-4 text-info">Contact Us</p>
                        <ContactInfo />
                    </div>
                </div>
                </div>
                <ContactForm />
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Contact;
