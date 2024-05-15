const in_progress_projects = [
  {
    title: "CPU from scratch",
    image: "path/to/image1.jpg",
    description: "A custom built computer, which includes a processor, memory, built using a breadboard, and a custom operating system. The operating system is built from scratch and includes a shell, file system, and a simple text editor."
  },
  {
    title: "RC Arduino",
    image: "path/to/image2.jpg",
    description: "This is a short description of project 2."
  },
  {
    title: "Project 3",
    image: "path/to/image3.jpg",
    description: "This is a short description of project 3."
  },
  {
    title: "Project 4",
    image: "path/to/image4.jpg",
    description: "This is a short description of project 4."
  }
];

const completed_projects = [
  {
    title: "Lazy Way",
    image: "path/to/image1.jpg",
    description: "This is a short description of project 1."
  },
  {
    title: "FPGA Human Benchmark",
    image: "path/to/image2.jpg",
    description: "This is a short description of project 2."
  },
  {
    title: "NIOS II Rocket Flight Path Simulator",
    image: "path/to/image3.jpg",
    description: "This is a short description of project 3."
  },
  {
    title: "Project 4",
    image: "path/to/image4.jpg",
    description: "This is a short description of project 4."
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <h2>/*In Progress...*/</h2>
      <div className="projects-container">
        {in_progress_projects.map((project, index) => (
          <div className="project-card" key={index}>
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
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
