import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';
import { 
  faExternalLink, 
  faCode, 
  faRobot,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Bone Fracture Detection",
      description: "Developed deep learning models to detect bone fractures in X-ray images using CNN architecture. Achieved 92% accuracy on test dataset.",
      tech: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
      kaggle: "https://www.kaggle.com/code/dineshbabusurapaneni/machine-learning-capstone-one-fracture",
      icon: faRobot
    },
    {
      title: "DigiMart",
      description: "E-commerce application Using HTML,CSS,Js,Servlets,JSP,JDBC,MySQL",
      tech: ["HTML/CSS", "JavaScript", "Servlets", "JSP", "JDBC", "MySQL"],
      github: "https://github.com/Dineshbabu290904/DigiMart",
      icon: faCartShopping
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.div 
          className="projects-content glass-effect"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-icon">
                  <FontAwesomeIcon icon={project.icon} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      <FontAwesomeIcon icon={faCode} />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </a>
                  )}
                  {project.kaggle && (
                    <a href={project.kaggle} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faKaggle} /> Notebook
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLink} /> Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;