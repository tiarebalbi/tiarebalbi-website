import React from 'react';
import styles from '../../styles/pages/Home.module.css';
import { BiBuilding, BiCurrentLocation, BiMailSend } from 'react-icons/bi';
import { ImWarning } from 'react-icons/im';
import Image from 'next/image';
import Dots from '../assets/Dots';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';

const Banner = () => (
  <div className={`row d-flex align-items-center justify-content-around ${styles.rowHeader}`}>
    <div className={styles.socials}>
      <a target='_blank' rel='noreferrer' href='https://github.com/tiarebalbi'>
        <RiGithubFill />
      </a>
      <a target='_blank' rel='noreferrer' href='https://twitter.com/tiarebalbi'>
        <RiTwitterFill />
      </a>
      <a target='_blank' rel='noreferrer' href='https://ie.linkedin.com/in/tiarebalbi'>
        <RiLinkedinFill />
      </a>
    </div>
    <div className={`col-sm-12 col-md-6 mb-sm-5  ${styles.contentArea}`}>
      <h1 className={styles.title}>Hey there, I'm Tiarê</h1>
      <p className={styles.slogan}>
        Software Engineer that can be described as a serious enthusiast of technology, fortuned to work with one
        of my biggest passion, software development. Finding different ways to solve different problems.
      </p>
      <p className={styles.slogan}>
        Based in Dublin, Ireland, I have been working with software development since 2006, working with an extensive
        range of solutions for small to large companies from designing the software until
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
    <div className='col-sm-12 col-md-6 d-flex align-items-end justify-content-end'>
      <Image
        className={styles.profile}
        src='/images/profile-1.jpg'
        alt='Tiare Balbi'
        width={400}
        height={400}
      />
      <Dots c={styles.bottomRight} />
    </div>
  </div>
);

export default Banner;
