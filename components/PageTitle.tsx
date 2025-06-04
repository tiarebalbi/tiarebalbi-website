import React from 'react';
import { BiCalendar } from 'react-icons/bi';

import styles from '../styles/components/PageTitle.module.css';

export interface PageTitleProps {
  title: string;
  slogan: string;
  date?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, slogan, date }) => (
  <section className={`${styles.pageTitle} mb-5`} id="page-title">
    {date && (
      <p className={styles.calendarLine}>
        <BiCalendar />
        <span>{date}</span>
      </p>
    )}
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.slogan}>{slogan}</p>
  </section>
);

export default PageTitle;
