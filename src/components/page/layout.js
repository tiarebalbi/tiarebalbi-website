import React from 'react';
import Content from './content';
import Footer from './footer';
import Logo from './logo';
import Github from './github';
import Menu from './menu';
import { BackgroundMask, Header, StyledLayout } from '../../styles/LayoutStyle';

const Layout = props => {
  return (
    <StyledLayout>
      <Header>
        <Logo />
        <Menu />
        <Github />
      </Header>
      <Content style={props.style}>{props.children}</Content>
      <Footer />
      <BackgroundMask />
    </StyledLayout>
  );
};

export default Layout;
