import React from 'react';

import styles from '../styles/components/Footer.module.css';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => (
  <footer className="mb-5 mt-5 container-fluid">
    <div className={`mt-5 mb-3 d-flex align-items-center justify-content-center ${styles.social}`}>
      <a href="https://github.com/tiarebalbi" rel="noreferrer" target="_blank">
        <RiGithubFill />
      </a>
      <a href="https://twitter.com/tiarebalbi" rel="noreferrer" target="_blank">
        <RiTwitterFill />
      </a>
      <a href="https://ie.linkedin.com/in/tiarebalbi" rel="noreferrer" target="_blank">
        <RiLinkedinFill />
      </a>
    </div>
    <div className={`row ${styles.footerStyle}`}>
      <div className={`col-12 ${styles.footerMobileSupport}`}>
        <a
          href="mailto:me@tiarebalbi.com?subject=Site"
          rel="nofollow noopener noreferrer"
          target="_blank">
          © 
{' '}
{new Date().getFullYear()} Tiarê Balbi Bonamini,
        </a>
        All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
