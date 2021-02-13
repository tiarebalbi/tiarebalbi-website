import React from 'react';

import styles from '../styles/components/PageTitle.module.css';

const PageTitle = ({ title, slogan }) => (
  <section id='page-title' className={`${styles.pageTitle} mb-5`}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.slogan}>{slogan}</p>
  </section>
);

export default PageTitle;
