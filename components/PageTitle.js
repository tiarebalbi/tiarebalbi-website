import React from 'react';
import { BiCalendar } from 'react-icons/bi';

import styles from '../styles/components/PageTitle.module.css';

const PageTitle = ({ title, slogan, date }) => (
  <section className={`${styles.pageTitle} mb-5`} id="page-title">
    {date && (
      <p className={styles.calendarLine}>
        <BiCalendar />
        <span>{date}</span>
      </p>
    )}
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.slogan}>{slogan}</p>
  </section>
);

export default PageTitle;
