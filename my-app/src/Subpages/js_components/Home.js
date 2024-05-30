import TypingAnimation from '../../TextEffects/TypingAnimation';
import HackingAnimation from '../../TextEffects/HackingAnimation';


const Home = () => {
  return (
    <section id="home">
        <div className="home-background-image"></div>
        <name>Darsan Qi</name>
        <description>Computer Engineering @UofT</description>
        <typing-animation>
          <TypingAnimation />
        </typing-animation>
        <div className="home-hacking-animation">
          <HackingAnimation text="<=========== { Q } ==========>" />
        </div>
        <div className="contact-icons">
        <a href="https://www.linkedin.com/in/darsan-qi-44613920b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/DarsanQi" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:darsan.qi@mail.utoronto.ca">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+18255616521">
          <i className="fas fa-phone"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;
