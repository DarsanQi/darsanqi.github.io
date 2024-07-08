import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import HackingAnimation from '../../TextEffects/HackingAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form data being sent:', formData);
  
    emailjs.send('service_bdgja1x', 'template_nnjvkqv', formData, 'K0T7B5qVNSvatOof-')
      .then((result) => {
        console.log('EmailJS Success:', result);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message, please try again.');
      });
  };
  

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background-image"></div>
      <div className="contact-container">
        <div className="contact-form-container">
          <h1><HackingAnimation text="Let's Connect!" /></h1>
          <p>
            Please feel free to leave your contact info below, and I'll get back to you as soon as possible. I'm excited to hear from you!
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="form-buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
          <contact-buttons>
            <a href="https://www.linkedin.com/in/darsan-qi-44613920b/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/DarsanQi" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:darsan.qi@mail.utoronto.ca">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+1234567890">
              <i className="fas fa-phone"></i>
            </a>
          </contact-buttons>
        </div>
      </div>
    </section>
  );
};

export default Contact;



