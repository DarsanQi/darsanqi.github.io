import HackingAnimation from '../../TextEffects/HackingAnimation';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-background-image"></div>
      <div className="contact-container">
        <div className="contact-form-container">
          <h1><HackingAnimation text="Let's Connect!" /></h1>
          <p>
            Please feel free to leave your contact info below, and I'll get back to you as soon as possible. I'm excited to hear from you!
          </p>
          <form>
            <input type="text" placeholder="Full Name" name="name" required />
            <input type="email" placeholder="Email Address" name="email" required />
            <textarea placeholder="Message" name="message" required></textarea>
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
}

export default Contact;
