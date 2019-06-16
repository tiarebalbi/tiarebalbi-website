import React from 'react';
import styled from 'styled-components';
import { theme } from '../../helpers/globalStyle';
import { media } from '../../styles/utils';

const Style = styled.h1`
  font-size: 40px;
  color: ${theme.primary};
  font-weight: bold;
  margin-bottom: 30px;
  margin-left: 55vw;
  border-bottom: 1px ${theme.secondary} dotted;
  padding-bottom: 30px;
  ${media.tablet`
    width: 80vw;
    margin-left: 10vw;  
    overflow: hidden;
  `}
`;

const BlogTitle = props => <Style>{props.children}</Style>;

export default BlogTitle;
