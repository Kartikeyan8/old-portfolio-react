import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    if (formValues.name && formValues.email && formValues.message) {
      setSuccessMessage('Message sent successfully!');
      setErrorMessage('');
      setFormValues({ name: '', email: '', message: '' });
      emailjs.sendForm('service_5qftj5r', 'template_8zo6rjt', event.target, 'ewX1klxZ6PENNWx6C')
    } else {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          className="contact-input"
        />
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-submit">Submit</button>
</form>
{successMessage && <div className="contact-success">{successMessage}</div>}
{errorMessage && <div className="contact-error">{errorMessage}</div>}
</div>
);
};

export default Contact;