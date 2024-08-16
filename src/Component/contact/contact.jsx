import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Contact = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    
    setFormData({ ...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o03sovc', 'template_ua9dxnc', e.target, 'IUOo7IltlxgHeH911')
      .then((result) => {
        alert("Email sent successfully!");
        setFormData({ name: '', email: '', message: '' }); 
      }, (error) => {
        alert("Failed to send email. Please try again.");
        console.error("Email sending error:", error);
      });

      setFormData({
        name:'',
        email:'',
        message:'',

      });
  };

  return (
    <section id='contactpage'> 
      <div id="contact-container">
        <div id="contact">
          <h1 className='contactpagetitle'>Contact me</h1>
          <span className='contactdesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form  onSubmit={handleSubmit} className='contactform'>
            <input
              type='text'
              name='name'
              className='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              className='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              className='msg'
              rows='5'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea> 
            <button type='submit' className='submitbtn'>Submit</button>
          </form>
        </div>

        <div className='links'>
          <div className='link-item'>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className='link-item'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
