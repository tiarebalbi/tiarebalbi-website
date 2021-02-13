import React from 'react';

import styles from '../../styles/components/home/Projects.module.css';

const Projects = () => (
  <section id='projects'>
    <h2>Brands I've worked with.</h2>
    <div className={`row ${styles.grid}`}>
      <div>Quaer Cloud Platform</div>
      <div>Bona Petit</div>
      <div>Tropikos</div>
      <div>Grupo Fortaleza</div>
    </div>
  </section>
);

export default Projects;
