import * as React from 'react';
import styled from 'styled-components';
import { DARK_COLOR, SECONDARY_COLOR } from '../Theme';

const Wrapper = styled.a`
  background: ${props => (props.theme === 'dark' ? DARK_COLOR : SECONDARY_COLOR)};
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  border-radius: 20px;
  padding: 10px 20px;
  display: inline-block;
  text-underline: none;
  outline: none;

  &:hover,
  &:active {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  &:focus {
    outline: none !important;
  }
`;

const Button = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Button;
