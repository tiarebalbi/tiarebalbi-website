import * as React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Wrapper = styled.header`
  min-height: 380px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
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
