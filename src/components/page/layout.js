import React from 'react';
import Content from './content';
import Footer from './footer';
import Logo from './logo';
import { BackgroundMask, Header, StyledLayout } from '../../styles/LayoutStyle';
import Github from './github';

const Layout = props => {
  return (
    <StyledLayout>
      <Header>
        <Logo />
        <Github />
      </Header>
      <Content style={props.style}>{props.children}</Content>
      <Footer />
      <BackgroundMask />
    </StyledLayout>
  );
};

export default Layout;
