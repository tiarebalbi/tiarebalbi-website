import React from 'react';

import styles from '../styles/components/Footer.module.css';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => (
  <footer className="mb-5 mt-5 container-fluid">
    <div className={`mt-5 mb-3 d-flex align-items-center justify-content-center ${styles.social}`}>
      <a target="_blank" rel="noreferrer" href="https://github.com/tiarebalbi">
        <RiGithubFill />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/tiarebalbi">
        <RiTwitterFill />
      </a>
      <a target="_blank" rel="noreferrer" href="https://ie.linkedin.com/in/tiarebalbi">
        <RiLinkedinFill />
      </a>
    </div>
    <div className={`row ${styles.footerStyle}`}>
      <div className={`col-12 ${styles.footerMobileSupport}`}>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="mailto:me@tiarebalbi.com?subject=Site">
          © {new Date().getFullYear()} Tiarê Balbi Bonamini,
        </a>
        All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
