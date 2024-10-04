import React, { useState } from 'react';
import HackingAnimation from '../../TextEffects/HackingAnimation';

const in_progress_projects = [
  {
    title: "8 bit custom CPU",
    image: '/assets/project_assets/8bitcpu.png',
    description: (
      <>
        <p>Currently designing and constructing a fully functional 8-bit central processing unit (CPU) from scratch using 7400 series chips on breadboards. The CPU is composed of a comprehensive arithmetic logic unit (ALU) capable of performing eight operations, a 128-bit memory block, a register file with four registers, and custom-encoded operation codes. A self-assembled 10MHz clock is used to regulate the CPU’s operations, and the entire system is housed in a custom-designed, 3D-printed casing and storage unit, modeled using Fusion 360. The CPU is controlled by a comprehensive state machine to handle instruction execution.</p>
        <p>All necessary components were independently sourced, and the digital circuits are meticulously designed using truth tables, block diagrams, and schematics. Functionality is validated through extensive simulations in Logisim before physical implementation on breadboards to ensure proper operation.</p>
      </>
    ),
    github: "https://github.com/DarsanQi/8-bit-custom-CPU"
  },
  {
    title: "ESP32 RC Vehicle",
    image: "/assets/project_assets/workinprogress.png",
    description: (
      <>
        <p>A remote-controlled vehicle developed utilizing an Xbox One controller for precise wireless control. Inputs from the controller are captured and processed via a custom Python script, converting the data into byte arrays for communication over WiFi with the ESP32 microcontroller. The ESP32 processes the incoming signals in real-time, ensuring highly accurate and responsive control of the vehicle.</p>
        <p>The vehicle's chassis is custom-designed, starting from a detailed sketch that is recreated and optimized in Fusion 360 for 3D printing. The chassis design is engineered to house all components—ESP32, motors, battery, and additional circuitry—efficiently, balancing space constraints with structural integrity.</p>
        <p>Motor control circuitry is implemented using fundamental voltage division techniques and MOSFET transistors to regulate power delivery to the motors. The design ensures precise speed and directional control while optimizing energy efficiency and thermal performance. This integration of MOSFET transistors allows for robust power management and reliable operation in various driving conditions.</p>
      </>
    ),
    github: "https://github.com/DarsanQi/RC-Arduino"
  }
  
  
  
];

const completed_projects = [
  {
    title: "Project Alpha - ESP32 Wireless Gyroscope Controller",
    image: "/assets/project_assets/Project_Alpha_Photo.png",
    description: "A wireless controller built for the University of Toronto Creative Computing Association's club fair display. The controller uses an ESP32 microcontroller, which polls for inputs from a gyroscope, 5 buttons, and a potentiometer and send samples via http requests to a web server. This effectively controls the movement and various display settings of a generative terrain.",
    github: "https://github.com/UTCCA/club-fair-display-24/tree/main/Firmware-https"
  },
  {
    title: "Lazy Way - GIS Mapping Application",
    image: "/assets/project_assets/LazyWay_Screenshot.png",
    description: (
      <>
        <p>A GIS mapping application that tackles a trickier travelling salesman problem using a combination of the greedy algorithm, simulated annealing, 2-opt, and 3-opt.</p>
        <p>Complete with a slew of other mapping features, including but not limited to: destination searching, intersection searching, a dynamic distance scale, camera panning, direction details and visuals, as well as custom graphics built with CSS and GTK and EZGL libraries.</p>
        <p>Made with C++.</p>
      </>
    ),
    github: "https://github.com/DarsanQi/Lazy-Way"
  },
  {
    title: "FPGA Human Benchmark",
    image: "/assets/project_assets/workinprogress.png",
    description: "A reconstruction of the human benchmark tests implemented on an FPGA. The game includes a reaction time test, as well as a visual memory test. Made using Verilog.",
    github: "https://github.com/DarsanQi/FPGA-Human-Benchmark"
  },
  {
    title: "NIOS II Rocket Flight Path Simulator",
    image: "/assets/project_assets/Nios_Orbit_Screenshot.png",
    description: "A rocket flight path simulator built using the NIOS II processor and the Altera DE1-SoC board, and coded with C and Assembly.Takes in the mass, angle, and gravity, etc and simulates the rocket's trajectory. The simulator is ",
    github: "https://github.com/DarsanQi/NIOS-II-Rocket-Flight-Path-Simulator"
  },
  {
    title: "Personal Portfolio Website",
    image: "/assets/background_images/contact_flower.jpg",
    description: "My personal portfolio website built using React. Hosted on GitHub Pages.",
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
      <h2>✔️   Completed   ✔️</h2>
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
              <div className="arrow-down bounce-arrow">&darr;</div>
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
