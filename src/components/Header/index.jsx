import * as React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import ProfileInfo from './ProfileInfo';

const Wrapper = styled.header`
  min-height: 770px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const Header = ({ theme, parallax }) => {
  return (
    <Wrapper>
      <Menu parallax={parallax} theme={theme} />
      <ProfileInfo />
    </Wrapper>
  );
};

export default Header;
