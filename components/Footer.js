import React from 'react';

import styles from '../styles/components/Footer.module.css';

const Footer = () => (
  <footer className="mt-5 mb-5 container-fluid">
    <div className={`row ${styles.footerStyle}`}>
      <div className="col-12">
        <a rel='nofollow noopener noreferrer' target='_blank' href="mailto:me@tiarebalbi.com?subject=Site">© {new Date().getFullYear()} Tiarê Balbi Bonamini,</a>
        All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
