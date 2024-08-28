const Resume = () => {
  return (
    <section id="resume">
      <div className="resume-container">
        <h2>Experience</h2>
        <div className="resume-section">
          <h3>Advanced Analytics Intern</h3>
          <p>Pembina Pipeline | Calgary, Canada</p>
          <p>May 2023 - September 2023</p>
          <ul>
            <li>Contributed to the development of the ‘Peak Power Avoidance’ project, systematically reducing pipeline flow rates during high surge pricing by validating over 100,000 rows of data.</li>
            <li>Utilized data visualization tools and developed machine learning models (Linear Regression, Polynomial Regression, Ridge, and Lasso) to forecast flow rates, resulting in annual cost reductions of over $800,000.</li>
            <li>Automated manual tasks using Python and SQL scripts on Databricks, saving a projected 20 hours of company time monthly.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h3>Business Applications Intern</h3>
          <p>Pembina Pipeline | Calgary, Canada</p>
          <p>May 2024 - September 2024</p>
          <ul>
            <li>Validated facility transport data through a machine learning-driven data validation tool, improving data accuracy to approximately 97% and saving an estimated $150,000 annually in labor costs.</li>
            <li>Enhanced security by developing a Python-based automation tool to manage termination tickets, processing 200-300 tickets per month and saving 40 hours of work time monthly.</li>
            <li>Migrated local production code to a cloud-based virtual machine and assisted in developing Azure DevOps pipelines for improved scalability and maintenance.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h3>Engineering Communications Liaison</h3>
          <p>ESP II | Toronto, Canada</p>
          <p>January 2023 - May 2023</p>
          <ul>
            <li>Fostered internal communication within a team of 5 by developing professional documents and schedules.</li>
            <li>Played a key role in client and stakeholder communications, ensuring requirements were met through proactive engagement.</li>
            <li>Innovated a knee brace support solution that was 70% cheaper than average market prices, enhancing functionality over existing solutions.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h3>Hardware Lead</h3>
          <p>University of Toronto Creative Computing Association | Toronto, Canada</p>
          <p>June 2024 - Present</p>
          <ul>
            <li>Led firmware development and embedded systems design using the ESP32 microcontroller, completing the hardware controller for Project Alpha.</li>
            <li>Coordinated project management efforts, resulting in the timely and successful completion of Project Alpha.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h3>FPGA Human Benchmark</h3>
          <p>University of Toronto | Toronto, Canada</p>
          <p>October 2023 - December 2023</p>
          <ul>
            <li>Drafted block diagrams, ran logic simulations, and used Verilog to code various IO devices on the Altera De1-SoC FPGA chip, creating interactive skill-based tests inspired by Human Benchmark games.</li>
            <li>Developed modules to display user scores on the FPGA chip in real time, interfacing with PS/2 mouse and keyboard protocols.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h3>Nios Orbit - Rocket Flight Path Simulator</h3>
          <p>University of Toronto | Toronto, Canada</p>
          <p>March 2024 - April 2024</p>
          <ul>
            <li>Developed a rocket flight path simulator on the Altera De1-SoC board using C and Assembly, accurately visualizing the rocket trajectory based on various parameters.</li>
            <li>Designed and implemented comprehensive state logic, ensuring seamless transitions between simulation stages.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h3>8-bit Central Processing Unit</h3>
          <p>Personal Project</p>
          <p>May 2024 - Present</p>
          <ul>
            <li>Designed and built a fully functional 8-bit CPU from scratch using 7400 series chips on breadboards, featuring an arithmetic logic unit, memory block, register file, and custom-encoded operation codes.</li>
            <li>Designed digital circuits using truth tables, block diagrams, and schematics, validating functionality through Logisim simulations.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h3>ESP32 Remote Controlled Vehicle</h3>
          <p>Personal Project</p>
          <p>May 2024 - Present</p>
          <ul>
            <li>Engineered a remote-controlled vehicle using the ESP32 microcontroller, featuring a custom-designed chassis created with Fusion 360.</li>
            <li>Developed a control interface using an Xbox One controller and a custom Python script, controlling the vehicle via WiFi and integrating a camera system for live video feedback.</li>
          </ul>
        </div>

        <h2>Skills</h2>
        <div className="resume-section">
          <p>Python, C, C++, Java, Assembly, HTML, Javascript, CSS, FPGA, SQL, Verilog, JSON, Excel VBA, MATLAB, Palantir Foundry, Databricks, Azure DevOps, Logisim, Firmware Development, Embedded Systems Design, hardware assembly, hardware debugging, digital circuit design, Fusion 360, Arduino, ESP32</p>
        </div>

        <h2>Education</h2>
        <div className="resume-section">
          <h3>University of Toronto</h3>
          <p>Bachelor of Applied Science in Computer/Electrical Engineering with a Minor in Mechatronics | PEY Co-op</p>
          <p>Expected April 2027</p>
          <p>GPA: 3.0/4.0</p>
          <ul>
            <li>Relevant Courses: Computer Organization, Software Design and Communication, Electronics, Digital Systems (Verilog HDL), Computer Fundamentals (C), Programming Fundamentals (C++), Circuit Analysis, Engineering Strategies And Practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
