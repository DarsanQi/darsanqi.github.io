import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import HackingAnimation from '../../TextEffects/HackingAnimation';

// Function to interpolate between white and pink based on the index
const getGradientColor = (index, totalElements) => {
  const startColor = { r: 255, g: 255, b: 255 }; // White (RGB: 255, 255, 255)
  const endColor = { r: 140, g: 198, b: 255 };  // Light Pink (RGB: 255, 182, 193)
  
  // Calculate the color ratio based on the index
  const ratio = index / totalElements;

  // Interpolate between start and end colors
  const r = Math.round(startColor.r + (endColor.r - startColor.r) * ratio);
  const g = Math.round(startColor.g + (endColor.g - startColor.g) * ratio);
  const b = Math.round(startColor.b + (endColor.b - startColor.b) * ratio);

  // Return the color as an RGB string
  return `rgb(${r}, ${g}, ${b})`;
};

const Background = () => {
  // Timeline data with work experience details
  const timelineData = [
    {
      date: "January 2023 - May 2023",
      title: "Hardware Lead",
      location: "University of Toronto Creative Computing Association | Toronto, Canada",
      description: `
        Oversee hardware project management efforts by coordinating and scheduling meetings to facilitate collaboration and project integration between other subteams, resulting in the timely and successful 
        completion of Project Alpha.
      `,
    },
    {
      date: "May 2024 - September 2024",
      title: "Business Applications Intern",
      location: "Pembina Pipeline | Calgary, Canada",
      description: `
        Validated facility transport data through a machine learning-driven data validation tool, improving data accuracy to approximately 97% and saving an estimated $150,000 annually in labor costs.
        Enhanced security by developing a Python-based automation tool to manage termination tickets, processing 200-300 tickets per month and saving 40 hours of work time monthly.
        Migrated local production code to a cloud-based virtual machine and assisted in developing Azure DevOps pipelines for improved scalability and maintenance.
      `,
    },
    {
      date: "May 2023 - September 2023",
      title: "Advanced Analytics Intern",
      location: "Pembina Pipeline | Calgary, Canada",
      description: `
        Contributed to the development of the ‘Peak Power Avoidance’ project, systematically reducing pipeline flow rates during high surge pricing by validating over 100,000 rows of data.
        Utilized data visualization tools and developed machine learning models (Linear Regression, Polynomial Regression, Ridge, and Lasso) to forecast flow rates, resulting in annual cost reductions of over $800,000.
        Automated manual tasks using Python and SQL scripts on Databricks, saving a projected 20 hours of company time monthly.
      `,
    },
    {
      date: "January 2023 - May 2023",
      title: "Engineering Communications Liaison",
      location: "ESP II | Toronto, Canada",
      description: `
        Fostered internal communication within a team of 5 by developing professional documents and schedules.
        Played a key role in client and stakeholder communications, ensuring requirements were met through proactive engagement.
        Innovated a knee brace support solution that was 70% cheaper than average market prices, enhancing functionality over existing solutions.
      `,
    },
  ];

  return (
    <>
      {/* Centered Education Section */}
      <div className="resume-container">
        <div className="education-section">
          <h2><HackingAnimation text="Education" /></h2>
          <div>
            <div className="uni-logo"></div>
            <p>Bachelor of Applied Science in Computer Engineering with a Minor in Mechatronics/Robotics + PEY Co-op | Expected April 2027</p>
            <h3>Relevant Courses</h3>
            <ul>
              <li>Transistor and Digital Circuit Design</li>
              <li>Operating Systems (C)</li>
              <li>Digital Systems (Verilog HDL)</li>
              <li>Computer Organization (Assembly, C)</li>
              <li>Software Design and Communication (C++)</li>
              <li>Analog Electronics</li>
              <li>Computer Fundamentals (C)</li>
              <li>Programming Fundamentals (C++)</li>
              <li>Circuit Analysis</li>
            </ul>
            <h2><HackingAnimation text="Professional Experience" /></h2>
          </div>
        </div>
      </div>

      {/* Vertical Timeline for other sections */}
      <VerticalTimeline>
        {timelineData.map((item, index) => {
          const backgroundColor = getGradientColor(index, timelineData.length - 1); // Get the gradient color based on index
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: backgroundColor, color: '#000' }}
              contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
              date={item.date}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
}

export default Background;
