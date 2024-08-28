import React, { useState } from 'react';
import HackingAnimation from '../../TextEffects/HackingAnimation';

const in_progress_projects = [
  {
    title: "8 bit custom CPU",
    image: '/assets/background_images/home_flower.jpg',
    description: "A custom built computer, which includes a processor, memory, built using a breadboard, and a custom operating system. The operating system is built from scratch and includes a shell, file system, and a simple text editor.",
    github: "https://github.com/DarsanQi/8-bit-custom-CPU"
  },
  {
    title: "RC Arduino",
    image: "path/to/image2.jpg",
    description: "A remote controlled car, which is controlled using an Arduino and a custom built remote control. The car is built using a 3D printer and includes a camera that streams video to the remote control.",
    github: "https://github.com/DarsanQi/RC-Arduino"
  }
];

const completed_projects = [
  {
    title: "Project Alpha - ESP32 Wireless Gyroscope Controller",
    image: "/assets/project_assets/Project_Alpha_Photo.png",
    description: "A wireless controller built for the University of Toronto Creative Computing Association's club fair display. The controller uses an ESP32 microcontroller, a gyroscope, 5 buttons, and a potentiometer to send samples via http requests to a web server, which controls the movement and display settings of a generative terrain.",
    github: "https://github.com/UTCCA/club-fair-display-24/tree/main/Firmware-https"
  },
  {
    title: "Lazy Way - GIS Mapping Application",
    image: "/assets/project_assets/LazyWay_Screenshot.png",
    description: "A GIS mapping application that tackles a trickier travelling salesman problem using a combination of the greedy algorithm, simulated annealing, 2-opt, and 3-opt. Complete with a slew of other mapping features as well as custom graphics built with CSS and GTK and EZGL libraries. Made with C++.",
    github: "https://github.com/DarsanQi/Lazy-Way"
  },
  {
    title: "FPGA Human Benchmark",
    image: "path/to/image2.jpg",
    description: "A reconstruction of the human benchmark tests implemented on an FPGA. The game includes a reaction time test, as well as a visual memory test. Made using Verilog.",
    github: "https://github.com/DarsanQi/FPGA-Human-Benchmark"
  },
  {
    title: "NIOS II Rocket Flight Path Simulator",
    image: "/assets/project_assets/Nios_Orbit_Screenshot.png",
    description: "Takes in the mass, angle, and gravity, etc and simulates the rocket's trajectory. The simulator is built using the NIOS II processor and the Altera DE1-SoC board, and coded with C and Assembly.",
    github: "https://github.com/DarsanQi/NIOS-II-Rocket-Flight-Path-Simulator"
  },
  {
    title: "Personal Portfolio Website",
    image: "/assets/background_images/contact_flower.jpg",
    description: "A personal portfolio website built using React. The creation of this website involved the self learning of React, HTML, CSS, and JavaScript, and Blender. The website is hosted on GitHub Pages.",
    github: "https://github.com/DarsanQi/NIOS-II-Rocket-Flight-Path-Simulator"
  },
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
      <h1><HackingAnimation text="{ Projects }" /></h1>
      <h4>//Click on a project and scroll to see more details</h4>
      <h2>...In Progress...</h2>
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
            </div>
          </div>
        ))}
      </div>
      <h2>Completed</h2>
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
            </div>
          </div>
        ))}
      </div>

      {expandedProject && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="expanded-project" onClick={(e) => e.stopPropagation()}>
            <img src={expandedProject.image} alt={expandedProject.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{expandedProject.title}</h3>
              <p className="project-description">{expandedProject.description}</p>
              <a className="github-button" href={expandedProject.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
