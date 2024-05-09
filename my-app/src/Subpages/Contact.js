import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Let's Get In Touch.</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:your-email@example.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+1234567890">
          <i className="fas fa-phone"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
