import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
    // Add theme transition class temporarily
    document.body.classList.add('theme-transition');
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300);
  };

  if (!mounted) return null;

  return (
    <nav className={`navbar ${isDark ? 'dark' : ''}`}>
      <div className="nav-brand">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Dinesh.dev
        </motion.a>
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <motion.a
          href="#home"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.a>
        <motion.a
          href="#skills"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Skills
        </motion.a>
        <motion.a
          href="#projects"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
        <motion.button
          className="theme-toggle-nav"
          onClick={handleThemeToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
          {isDark ? 'Dark' : 'Light'} Mode
        </motion.button>
      </div>

      <div 
        className={`menu-toggle ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar; 