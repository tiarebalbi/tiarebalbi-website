import React from 'react';

import Logo from '@public/images/logo.svg';

const Header = () => {
  return (
    <nav className="tb-header">
      <div className="header-content">
        <div className="logo">
          <Logo width={60} height={48} alt="Tiarê Balbi Bonamini" />
        </div>
        <div className="menu">
          <a>Home</a>
          <a>Articles</a>
          <a>Contacts</a>
        </div>
        <div className="actions">
          <button className="btn-primary">Contact Me</button>
        </div>
      </div>
      <div className="element-3 prose">
        <h1>Hey there, I'm Tiarê</h1>
        <p>
          A software engineer who can be described as a serious enthusiast of
          technology, fortunate to work with one of my biggest passions:
          software development. Finding different ways to solve different
          problems.
        </p>
        <p>
          Based in Dublin, Ireland, I have been working with software
          development since 2006, working with an extensive range of small to
          large solutions, from designing the software until getting it out the
          door.
        </p>
        <a className="btn-secondary">Get in Contact</a>
      </div>
      <div className="element-2" />
      <div className="element-1" />
    </nav>
  );
};

export default Header;
