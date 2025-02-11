import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>AI/ML Enthusiast & Full-Stack Developer passionate about creating innovative solutions and learning new technologies.</p>
          <div className="footer-social">
            <a href="https://github.com/Dineshbabu290904" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/dinesh-babu-surapaneni" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="#home">
              <FontAwesomeIcon icon={faArrowRight} />
              Home
            </a>
            <a href="#about">
              <FontAwesomeIcon icon={faArrowRight} />
              About
            </a>
            <a href="#skills">
              <FontAwesomeIcon icon={faArrowRight} />
              Skills
            </a>
            <a href="#projects">
              <FontAwesomeIcon icon={faArrowRight} />
              Projects
            </a>
            <a href="#contact">
              <FontAwesomeIcon icon={faArrowRight} />
              Contact
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="footer-contact">
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              Vijayawada, India
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              +91 6300575551
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              dineshbabusurapaneni@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="footer-newsletter" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Dinesh Babu Surapaneni. All rights reserved. Built with{' '}
          <a 
            href="https://reactjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            React
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 
