import React, { useState } from 'react';

const in_progress_projects = [
  {
    title: "8 bit custom CPU",
    image: "path/to/image1.jpg",
    description: "A custom built computer, which includes a processor, memory, built using a breadboard, and a custom operating system. The operating system is built from scratch and includes a shell, file system, and a simple text editor."
  },
  {
    title: "RC Arduino",
    image: "path/to/image2.jpg",
    description: "A remote controlled car, which is controlled using an Arduino and a custom built remote control. The car is built using a 3D printer and includes a camera that streams video to the remote control."
  }
];

const completed_projects = [
  {
    title: "Lazy Way",
    image: "path/to/image1.jpg",
    description: "A GIS mapping application that tackles a trickier travelling salesman problem using a combination of the greedy algorithm, simulated annealing, 2-opt, and 3-opt. Complete with a slew of other mapping features as well as custom graphics built with CSS and GTK and EZGL libraries. Made with C++."
  },
  {
    title: "FPGA Human Benchmark",
    image: "path/to/image2.jpg",
    description: "A reconstruction of the human benchmark tests implemented on an FPGA. The game includes a reaction time test, as well as a visual memory test. Made using Verilog."
  },
  {
    title: "NIOS II Rocket Flight Path Simulator",
    image: "path/to/image3.jpg",
    description: "Takes in the mass, angle, and gravity, etc and simulates the rocket's trajectory. The simulator is built using the NIOS II processor and the Altera DE1-SoC board, and coded with C and Assembly."
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleCardClick = (project) => {
    setExpandedProject(project);
  };

  const handleCloseClick = () => {
    setExpandedProject(null);
  };

  return (
    <section id="projects">
      <h1>{'{ Projects }'}</h1>
      <h2>/*...In Progress...*/</h2>
      <div className="projects-container">
        {in_progress_projects.map((project, index) => (
          <div
            className={`project-card ${expandedProject === project ? 'expanded' : ''}`}
            key={index}
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>/*Completed*/</h2>
      <div className="projects-container">
        {completed_projects.map((project, index) => (
          <div
            className={`project-card ${expandedProject === project ? 'expanded' : ''}`}
            key={index}
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {expandedProject && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="expanded-project" onClick={(e) => e.stopPropagation()}>
            <img src={expandedProject.image} alt={expandedProject.title} className="project-image" />
            <div className="project-details">
              <h2 className="project-title">{expandedProject.title}</h2>
              <p className="project-description">{expandedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
