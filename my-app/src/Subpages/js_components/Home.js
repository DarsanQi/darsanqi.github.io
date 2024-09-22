import TypingAnimation from '../../TextEffects/TypingAnimation';
import HackingAnimation from '../../TextEffects/HackingAnimation';

const Home = () => {
  return (
    <section id="home">
      <div className="home-background-image"></div>
      <h1 className="home-name"><HackingAnimation text="Darsan Qi" /></h1>
      <p className="home-description"><HackingAnimation text="Computer Engineering + Mechatronics @ UofT" /></p>
      <div className="home-typing-animation">
        <TypingAnimation />
      </div>

      {/* Button to scroll to Projects section */}
      <div className="home-project-button">
        <div className="arrow-down bounce-arrow">&darr;</div> {/* Arrow pointing down */}
        <a href="projects" className="btn-projects">View My Projects</a>
        <div className="arrow-up bounce-arrow">&uarr;</div> {/* Arrow pointing up */}
      </div>


      <div className="home-contact-icons">
        <a href="https://www.linkedin.com/in/darsan-qi-44613920b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/DarsanQi" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:darsan.qi@mail.utoronto.ca">
          <i className="fas fa-envelope"></i>
        </a>

      </div>
    </section>
  );
}

export default Home;
