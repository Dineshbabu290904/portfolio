import React, { Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './styles/App.css';

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <main>
          <Suspense fallback={
            <div className="loading">
              <div className="loading-spinner">Loading...</div>
            </div>
          }>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
