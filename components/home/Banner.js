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
        aria-label="Read more all my posts publised on LinkedIn"
        href="https://ie.linkedin.com/in/tiarebalbi"
        rel="noreferrer"
        target="_blank">
        <RiLinkedinFill />
      </a>
    </div>
    <div className={`col-sm-12 col-md-6 mb-sm-5  ${styles.contentArea}`}>
      <h1 className={styles.title}>Hey there, I'm Tiarê</h1>
      <p className={styles.slogan}>
        I am a software engineer who can be described as a serious enthusiast of technology,
        fortunate to work with one of my biggest passions: software development. Finding different
        ways to solve different problems.
      </p>
      <p className={styles.slogan}>
        Based in Dublin, Ireland, I have been working with software development since 2006, working
        with an extensive range of small to large solutions, from designing the software until
        getting it out the door.
      </p>
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
          <span>Software Engineer @ Workday</span>
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
