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
      <h1 className={styles.title}>Hey there, I'm Tiarê</h1>
      <p className={styles.slogan}>I am a software engineer based in Dublin, Ireland, with a deep passion for technology. I am grateful to have found a career that allows me to work with what I love the most: software development. I have a knack for finding innovative solutions to complex problems, and I am always up for a challenge.</p>
      <p className={styles.slogan}>With over 17 years of experience in the field, I have had the privilege of working with an extensive range of software projects, from small to large-scale solutions. I have a hands-on approach to my work, and I take pride in every aspect of the software development process, from designing the software to ensuring its successful deployment.</p>
      <p className={styles.slogan}>I am a serious enthusiast of technology, always striving to stay updated on the latest advancements in the field. My goal is to continue to improve my skills and grow as a software engineer while contributing to the development of innovative and impactful solutions.</p>
      <ul className={styles.items}>
        <li>
          <BiMailSend />
          <span>me@tiarebalbi.com</span>
        </li>
        <li>
          <BiCurrentLocation />
          <span>Dublin, Ireland</span>
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
