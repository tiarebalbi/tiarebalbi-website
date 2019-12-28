import * as React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { media } from '../Common/media';

const Wrapper = styled.header`
  min-height: 380px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media only screen and (max-width: ${media.desktopXS}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media only screen and (max-width: ${media.mobile}) {
    width: 101vw;
    height: 100vh;
    margin-left: -31px;
  }
`;

const Header = ({ theme, children, photo }) => {
  return (
    <Wrapper>
      <Menu photo={photo} theme={theme} />
      {children}
    </Wrapper>
  );
};

export default Header;
