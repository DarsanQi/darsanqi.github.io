import React from 'react';

const Portfolio = () => {
  return (
    <section id="projects">
      <h2>Portfolio</h2>
      <div className="projects">
        <div className="project">
          <h3>Project 1</h3>
          <p>Nios II Rocket Flight Path Simulator</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>FPGA Human Benchmark</p>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>Arduino Car</p>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>CPU simulator</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
