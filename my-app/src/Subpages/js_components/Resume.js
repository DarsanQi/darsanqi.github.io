import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Resume = () => {
  return (
    <>
      {/* Centered Education Section */}
      <div className="resume-container">
        <div className="education-section">
          <h2>Education</h2>
          <div>
            <div className="uni-logo"></div>
            <h3>University of Toronto</h3>
            <p>Bachelor of Applied Science in Computer/Electrical Engineering with a Minor in Mechatronics | PEY Co-op</p>
            <p>Expected April 2027</p>
            <ul>
              <li>Relevant Courses: Computer Organization, Software Design and Communication, Electronics, Digital Systems (Verilog HDL), Computer Fundamentals (C), Programming Fundamentals (C++), Circuit Analysis, Engineering Strategies And Practices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vertical Timeline for other sections */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #ffb6c1, #fff)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #ffb6c1' }}
          date="May 2023 - September 2023"
        >
          <h3 className="vertical-timeline-element-title">Advanced Analytics Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Pembina Pipeline | Calgary, Canada</h4>
          <p>
            Contributed to the development of the ‘Peak Power Avoidance’ project, systematically reducing pipeline flow rates during high surge pricing by validating over 100,000 rows of data.<br/>
            Utilized data visualization tools and developed machine learning models (Linear Regression, Polynomial Regression, Ridge, and Lasso) to forecast flow rates, resulting in annual cost reductions of over $800,000.<br/>
            Automated manual tasks using Python and SQL scripts on Databricks, saving a projected 20 hours of company time monthly.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #ffb6c1, #fff)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #ffb6c1' }}
          date="May 2024 - September 2024"
        >
          <h3 className="vertical-timeline-element-title">Business Applications Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Pembina Pipeline | Calgary, Canada</h4>
          <p>
            Validated facility transport data through a machine learning-driven data validation tool, improving data accuracy to approximately 97% and saving an estimated $150,000 annually in labor costs.<br/>
            Enhanced security by developing a Python-based automation tool to manage termination tickets, processing 200-300 tickets per month and saving 40 hours of work time monthly.<br/>
            Migrated local production code to a cloud-based virtual machine and assisted in developing Azure DevOps pipelines for improved scalability and maintenance.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #ffb6c1, #fff)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #ffb6c1' }}
          date="January 2023 - May 2023"
        >
          <h3 className="vertical-timeline-element-title">Engineering Communications Liaison</h3>
          <h4 className="vertical-timeline-element-subtitle">ESP II | Toronto, Canada</h4>
          <p>
            Fostered internal communication within a team of 5 by developing professional documents and schedules.<br/>
            Played a key role in client and stakeholder communications, ensuring requirements were met through proactive engagement.<br/>
            Innovated a knee brace support solution that was 70% cheaper than average market prices, enhancing functionality over existing solutions.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #ffb6c1, #fff)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #ffb6c1' }}
          date="June 2024 - Present"
        >
          <h3 className="vertical-timeline-element-title">Hardware Lead</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Toronto Creative Computing Association | Toronto, Canada</h4>
          <p>
            Led firmware development and embedded systems design using the ESP32 microcontroller, completing the hardware controller for Project Alpha.<br/>
            Coordinated project management efforts, resulting in the timely and successful completion of Project Alpha.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #ffb6c1, #fff)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #ffb6c1' }}
          date="October 2023 - December 2023"
        >
          <h3 className="vertical-timeline-element-title">FPGA Human Benchmark</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Toronto | Toronto, Canada</h4>
          <p>
            Drafted block diagrams, ran logic simulations, and used Verilog to code various IO devices on the Altera De1-SoC FPGA chip, creating interactive skill-based tests inspired by Human Benchmark games.<br/>
            Developed modules to display user scores on the FPGA chip in real time, interfacing with PS/2 mouse and keyboard protocols.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #ffb6c1, #fff)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #ffb6c1' }}
          date="March 2024 - April 2024"
        >
          <h3 className="vertical-timeline-element-title">Nios Orbit - Rocket Flight Path Simulator</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Toronto | Toronto, Canada</h4>
          <p>
            Developed a rocket flight path simulator on the Altera De1-SoC board using C and Assembly, accurately visualizing the rocket trajectory based on various parameters.<br/>
            Designed and implemented comprehensive state logic, ensuring seamless transitions between simulation stages.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #ffb6c1, #fff)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #ffb6c1' }}
          date="May 2024 - Present"
        >
          <h3 className="vertical-timeline-element-title">8-bit Central Processing Unit</h3>
          <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
          <p>
            Designed and built a fully functional 8-bit CPU from scratch using 7400 series chips on breadboards, featuring an arithmetic logic unit, memory block, register file, and custom-encoded operation codes.<br/>
            Designed digital circuits using truth tables, block diagrams, and schematics, validating functionality through Logisim simulations.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #ffb6c1, #fff)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #ffb6c1' }}
          date="May 2024 - Present"
        >
          <h3 className="vertical-timeline-element-title">ESP32 Remote Controlled Vehicle</h3>
          <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
          <p>
            Engineered a remote-controlled vehicle using the ESP32 microcontroller, featuring a custom-designed chassis created with Fusion 360.<br/>
            Developed a control interface using an Xbox One controller and a custom Python script, controlling the vehicle via WiFi and integrating a camera system for live video feedback.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </>
  );
}

export default Resume;
