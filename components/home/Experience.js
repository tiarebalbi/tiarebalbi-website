import React from 'react';

import styles from '../../styles/components/home/Projects.module.css';

const Projects = () => (
  <section id='my-work'>
    <h2>Brands I've worked with.</h2>
    <div className={styles.grid}>
      <div>Quaer Cloud Platform</div>
      <div>Bona Petit</div>
      <div>Tropikos</div>
      <div>Grupo Fortaleza</div>
      <div>Linus</div>
    </div>
  </section>
);

export default Projects;
