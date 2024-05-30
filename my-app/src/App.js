import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Statics/Global.css';
import './Subpages/styling/Home.css';
import './Subpages/styling/About.css';
import './Subpages/styling/Projects.css';
import './Subpages/styling/Resume.css';
import './Subpages/styling/Contact.css';
import Header from './Statics/Header';
import Footer from './Statics/Footer';
import Home from './Subpages/js_components/Home';
import About from './Subpages/js_components/About';
import Projects from './Subpages/js_components/Projects';
import Resume from './Subpages/js_components/Resume';
import Contact from './Subpages/js_components/Contact';


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
