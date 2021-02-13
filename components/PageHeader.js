import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { BiEnvelope, BiRightArrow } from 'react-icons/bi';
import { RiMenuLine } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';

import GoogleAnalytics from './GoogleAnalytics';
import Logo from './assets/Logo';

import styles from '../styles/components/PageHader.module.css';

const PageHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();
  return (
    <>
      <GoogleAnalytics />
      <header className='container-fluid mb-5'>
        <div className={`${styles.rowStyle} row`}>
          <div className={`col-4 ${styles.logoStyle}`}>
            <Link href='/'>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className={`col-8 ${styles.menu}`}>
            <a href='/articles' className={pathname === '/articles' ? styles.selected : ''} aria-label='All blog posts'><span>Blog</span></a>
            <a href='mailto:me@tiarebalbi.com?subject=GetInTouchV3' aria-label='Getting in Touch'>
              <BiEnvelope />
              <span>Get in Touch</span>
            </a>
          </div>
          <div className={`col-8 ${styles.mobileMenu}`}>
            <a onClick={() => setShowMenu(!showMenu)} aria-label='Menu'>
              <RiMenuLine />
            </a>
          </div>
        </div>
        {showMenu && <div className={styles.menuNav}>
          <a onClick={() => setShowMenu(!showMenu)} className={styles.closeMobileMenu} aria-label='Menu'>
            <CgClose />
          </a>
          <ul>
            <li>
              <a href='/'>
                <BiRightArrow />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href='/articles'>
                <BiRightArrow />
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href='mailto:me@tiarebalbi.com?subject=GetInTouchV3'>
                <BiRightArrow />
                <span>Get in Touch</span>
              </a>
            </li>
          </ul>
        </div>}
      </header>
    </>
  );
};

export default PageHeader;
