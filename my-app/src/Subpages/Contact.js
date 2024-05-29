
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Looks like you need some help</h2>
          <h1>Reach Out!</h1>
          <p>
            I usually respond within an hour, but designers do sleep two to three hours a night, so it might take a bit longer.
            Thank you and I am looking to hearing from you.
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
          </contact-buttons>
          
        </div>
        <div className="contact-image">
          <img src="/assets/background_images/contact_line.jpg" alt="Contact Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
