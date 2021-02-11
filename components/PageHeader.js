import React from 'react';

import GoogleAnalytics from './GoogleAnalytics';
import Logo from './assets/Logo';

import style from '../styles/components/PageHader.module.css';

const PageHeader = () => (
  <>
    <GoogleAnalytics />
    <header className='container mt-4 mb-5'>
      <div className='row'>
        <div className='col-4'><Logo /></div>
        <div className={`col-8 ${style.menu}`}>
          <a>Home</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>
      </div>
    </header>
  </>
);

export default PageHeader;
