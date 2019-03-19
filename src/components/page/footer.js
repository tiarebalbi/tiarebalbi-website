import React from 'react';
import styled from 'styled-components';
import { theme } from '../../helpers/globalStyle';
import { media } from '../../styles/utils';

const StyledFooter = styled.div`
  color: ${theme.primary};
  font-size: 12px;
  padding-left: 35px;
  padding-bottom: 35px;
  height: 35px;
  line-height: 35px;
  filter: invert(100%);

  ${media.tablet`
    filter: invert(0%);
    color: ${theme.text.dark};
    width: 70vw;
    margin: auto;
    display: none;
  `}
`;

const Footer = () => {
  return <StyledFooter>Copyright © 2019 Tiarê Balbi Bonamini. All rights reserved.</StyledFooter>;
};

export default Footer;
