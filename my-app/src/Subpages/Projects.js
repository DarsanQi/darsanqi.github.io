const in_progress_projects = [
  {
    title: "Project 1",
    image: "path/to/image1.jpg",
    description: "This is a short description of project 1."
  },
  {
    title: "Project 2",
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
    title: "Project 1",
    image: "path/to/image1.jpg",
    description: "This is a short description of project 1."
  },
  {
    title: "Project 2",
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
              <h2 className="project-title">{project.title}</h2>
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
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
