import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './Statics/Global.css';
import './Subpages/styling/Home.css';
import './Subpages/styling/About.css';
import './Subpages/styling/Projects.css';
import './Subpages/styling/Background.css';
import './Subpages/styling/Contact.css';
import Header from './Statics/Header';
import Footer from './Statics/Footer';
import Home from './Subpages/js_components/Home';
import About from './Subpages/js_components/About';
import Projects from './Subpages/js_components/Projects';
import Background from './Subpages/js_components/Background';
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
          <Route path="/background" element={<Background />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
