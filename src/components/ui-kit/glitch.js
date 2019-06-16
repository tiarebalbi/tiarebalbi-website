import React from 'react';
import styled from 'styled-components';
import { theme } from '../../helpers/globalStyle';

const Style = styled.span`
  font-size: 130px;
  line-height: 1;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-decoration: none;
  color: #fff;

  &:before,
  &:after {
    display: block;
    content: '${props => props.children}';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    color: ${theme.secondary};
    z-index: -2;
    animation: glitch 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
  &:before {
    color: ${theme.alternate};
    z-index: -1;
    animation: glitch 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-5px, 5px);
    }
    40% {
      transform: translate(-5px, -5px);
    }
    60% {
      transform: translate(5px, 5px);
    }
    80% {
      transform: translate(5px, -5px);
    }
    to {
      transform: translate(0);
    }
  }
`;

const Glitch = props => <Style>{props.children}</Style>;

export default Glitch;
