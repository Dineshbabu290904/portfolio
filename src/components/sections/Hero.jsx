import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm Dinesh Babu Surapaneni
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AI/ML Enthusiast & Full-Stack Developer
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            Get in Touch
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </motion.div>
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="https://github.com/Dineshbabu290904" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/dinesh-babu-surapaneni" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero; 