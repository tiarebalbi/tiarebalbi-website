import React from 'react';
import styles from '../../styles/pages/Home.module.css';
import { BiBuilding, BiCurrentLocation, BiMailSend } from 'react-icons/bi';
import { ImWarning } from 'react-icons/im';
import Image from 'next/image';
import Dots from '../assets/Dots';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';

const Banner = () => (
  <div className={`row mt-5 d-flex align-items-center justify-content-around ${styles.rowHeader}`}>
    <div className={styles.socials}>
      <a
        aria-label="Checkout my latest projects on GitHub"
        href="https://github.com/tiarebalbi"
        rel="noreferrer"
        target="_blank">
        <RiGithubFill />
      </a>
      <a
        aria-label="Checkout my latest updates on twitter"
        href="https://twitter.com/tiarebalbi"
        rel="noreferrer"
        target="_blank">
        <RiTwitterFill />
      </a>
      <a
        aria-label="Read more all my posts published on LinkedIn"
        href="https://ie.linkedin.com/in/tiarebalbi"
        rel="noreferrer"
        target="_blank">
        <RiLinkedinFill />
      </a>
    </div>
    <div className={`col-sm-12 col-md-6 mb-sm-5  ${styles.contentArea}`}>
      <h1 className={styles.title}>Hey there, I am Tiarê</h1>
      <p className={styles.slogan}>I am a highly experienced software engineer with a deep passion for technology. I am fortunate to have established a career that revolves around my love for software development. Renowned for finding innovative solutions to complex problems, I am always ready to embrace a challenge.</p>
      <p className={styles.slogan}>With over 17 years of experience in the field, I have had the privilege of working on a wide array of software projects, ranging from small to large-scale solutions. I possess a hands-on approach to my work, taking pride in every facet of the software development process, from design to successful deployment.</p>
      <p className={styles.slogan}>As a fervent enthusiast of technology, I am continually striving to keep myself updated with the latest advancements in the field. My aim is to perpetually enhance my skills and grow as a software engineer, while contributing to the creation of innovative and impactful solutions.</p>
      <ul className={styles.items}>
        <li>
          <BiMailSend />
          <span>me@tiarebalbi.com</span>
        </li>
        <li>
          <BiBuilding />
          <span>Software Engineer</span>
        </li>
      </ul>
      <p className={styles.disclaimer}>
        <ImWarning />
        Any idea or content shared in this website is on my own.
      </p>
    </div>
    <div className="col-sm-12 col-md-6 d-flex align-items-end justify-content-end">
      <Image
        alt="Tiare Balbi"
        className={styles.profile}
        height={400}
        src="/images/profile-1.jpg"
        width={400}
      />
      <Dots c={styles.bottomRight} />
    </div>
  </div>
);

export default Banner;
