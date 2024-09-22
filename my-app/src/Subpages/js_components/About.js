import React, { useState, useEffect } from 'react';
import HackingAnimation from '../../TextEffects/HackingAnimation';



const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={isMobile ? "mobile-container" : "container"}>
      <section id="about">
        <div className="about-content">
          <div className="about-greeting">
            <h1><HackingAnimation text="Hi There!" /></h1>
            <h1><HackingAnimation text="I'm" /></h1>
            <h1><HackingAnimation text="Darsan" /></h1>
          </div>
          <div className="about-description">
            <p>
              I am a 3rd year student studying computer engineering at the University of Toronto. I'm super passionate about embedded systems programming, firmware development, and hardware/digital electronics.
            </p>
            <p>
              I like to spend my time working on cool projects, learning new things, and exploring the world of technology.
            </p>
            <p>
              Please feel free to take a look at some of my projects! I hope you find them as interesting as I do.
            </p>
          </div>
        </div>
      </section>
      {!isMobile && <div className="about-background-image"></div>}
      {isMobile && <div className="mobile-background-image"></div>}
    </div>
  );
}

export default About;
