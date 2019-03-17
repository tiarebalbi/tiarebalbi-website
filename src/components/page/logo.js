import React from 'react';
import styled from 'styled-components';

const LogoPlaceholder = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const Logo = () => {
  return (
    <LogoPlaceholder>
      Tiarê Balbi
      <br /> Bonamini.
    </LogoPlaceholder>
  );
};

export default Logo;
