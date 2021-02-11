import React from 'react';
import { BiEnvelope } from 'react-icons/bi';

import GoogleAnalytics from './GoogleAnalytics';
import Logo from './assets/Logo';

import style from '../styles/components/PageHader.module.css';

const PageHeader = () => (
  <>
    <GoogleAnalytics />
    <header className='container-fluid mb-5'>
      <div className={`${style.rowStyle} row`}>
        <div className={`col-4 ${style.logoStyle}`}><Logo /></div>
        <div className={`col-8 ${style.menu}`}>
          <a><span>Work</span></a>
          <a><span>Experience</span></a>
          <a><span>Blog</span></a>
          <a>
            <BiEnvelope />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  </>
);

export default PageHeader;
