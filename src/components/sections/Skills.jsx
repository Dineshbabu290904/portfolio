import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faJs, 
  faReact, 
  faNode,
  faAws,
  faDocker
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCloud, 
  faBrain,
  faCode,
  faServer
} from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: faCode,
      skills: [
        { name: "React.js", icon: faReact, level: 90 },
        { name: "JavaScript", icon: faJs, level: 85 },
        { name: "HTML/CSS", icon: faCode, level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: faServer,
      skills: [
        { name: "Node.js", icon: faNode, level: 85 },
        { name: "Python", icon: faPython, level: 80 },
        { name: "Databases", icon: faDatabase, level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: faCloud,
      skills: [
        { name: "AWS", icon: faAws, level: 70 },
        { name: "Docker", icon: faDocker, level: 75 }
      ]
    },
    {
      title: "Machine Learning",
      icon: faBrain,
      skills: [
        { name: "TensorFlow", icon: faPython, level: 80 },
        { name: "PyTorch", icon: faPython, level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category glass-effect"
              variants={itemVariants}
            >
              <div className="category-header">
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-info">
                      <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                      <span>{skill.name}</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div 
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills; 