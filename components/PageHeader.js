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
      <header className={`container-fluid ${styles.spaceHeader}`}>
        <div className={`${styles.rowStyle} row`}>
          <div className={`col-4 ${styles.logoStyle}`}>
            <Link href="/">
              <a aria-label="Home Page">
                <Logo />
              </a>
            </Link>
          </div>
          <div className={`col-8 ${styles.menu}`}>
            <Link
              aria-label="All blog posts"
              className={pathname === '/articles' ? styles.selected : ''}
              href="/articles">
              <span>Blog</span>
            </Link>
            <Link aria-label="Getting in Touch" href="mailto:me@tiarebalbi.com?subject=GetInTouchV3">
              <BiEnvelope />
              <span>Get in Touch</span>
            </Link>
          </div>
          <div className={`col-8 ${styles.mobileMenu}`}>
            <button aria-label="Menu" onClick={() => setShowMenu(!showMenu)}>
              <RiMenuLine />
            </button>
          </div>
        </div>
        {showMenu && (
          <div className={styles.menuNav}>
            <a
              aria-label="Menu"
              className={styles.closeMobileMenu}
              onClick={() => setShowMenu(!showMenu)}>
              <CgClose />
            </a>
            <ul>
              <li>
                <Link href="/">
                  <BiRightArrow />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <BiRightArrow />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:me@tiarebalbi.com?subject=GetInTouchV3">
                  <BiRightArrow />
                  <span>Get in Touch</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default PageHeader;
