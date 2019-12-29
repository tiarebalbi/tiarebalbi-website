import * as React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { media } from '../Common/media';

const Wrapper = styled.header`
  min-height: 180px;
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
    min-height: 200px;
    margin-left: -31px;
    margin-bottom: 60px;

    &.home {
      width: 101vw;
      height: 85vh;
      margin-left: -31px;
    }
  }
`;

const Header = ({ theme, children, photo, className }) => {
  return (
    <Wrapper className={className}>
      <Menu photo={photo} theme={theme} />
      {children}
    </Wrapper>
  );
};

export default Header;
