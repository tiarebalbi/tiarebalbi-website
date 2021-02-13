import React from 'react';

import Link from 'next/link';
import { BiEnvelope } from 'react-icons/bi';
import { RiMenuLine } from 'react-icons/ri';

import GoogleAnalytics from './GoogleAnalytics';
import Logo from './assets/Logo';

import styles from '../styles/components/PageHader.module.css';

const PageHeader = () => (
  <>
    <GoogleAnalytics />
    <header className='container-fluid mb-5'>
      <div className={`${styles.rowStyle} row`}>
        <div className={`col-4 ${styles.logoStyle}`}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={`col-8 ${styles.menu}`}>
          <a><span>Blog</span></a>
          <a>
            <BiEnvelope />
            <span>Get in Touch</span>
          </a>
        </div>
        <div className={`col-8 ${styles.mobileMenu}`}>
          <a>
            <RiMenuLine />
          </a>
        </div>
      </div>
    </header>
  </>
);

export default PageHeader;
