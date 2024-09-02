import React from 'react';
import './ContactLoader.scss'; // Ensure this path matches your file structure

const ContactLoader = () => {
  return (
    <div className="contact-loader-container">
      <div className="wrapper flex items-center justify-center">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span className='w-max'>Taking You To Contacts</span>
      </div>
    </div>
  );
};

export default ContactLoader;
