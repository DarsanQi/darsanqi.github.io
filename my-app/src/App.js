import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styling/Global.css';
import './styling/Home.css';
import './styling/About.css';
import './styling/Projects.css';
import './styling/Resume.css';
import './styling/Contact.css';
import Header from './Subpages/Header';
import Footer from './Subpages/Footer';
import Home from './Subpages/Home';
import About from './Subpages/About';
import Projects from './Subpages/Projects';
import Resume from './Subpages/Resume';
import Contact from './Subpages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
