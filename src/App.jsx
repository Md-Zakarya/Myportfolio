// src/App.js
import React from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-black">
      <Navigation />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
};

export default App;
