import * as React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../resources/LogoIcon';

const LogoIconWrapper = styled(LogoIcon)`
  animation: slide-in-blurred-tl 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  @-webkit-keyframes slide-in-blurred-tl {
    0% {
      -webkit-transform: translate(-1000px, -1000px) skew(80deg, 10deg);
      transform: translate(-1000px, -1000px) skew(80deg, 10deg);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(0, 0) skew(0deg, 0deg);
      transform: translate(0, 0) skew(0deg, 0deg);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-blurred-tl {
    0% {
      -webkit-transform: translate(-1000px, -1000px) skew(80deg, 10deg);
      transform: translate(-1000px, -1000px) skew(80deg, 10deg);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(0, 0) skew(0deg, 0deg);
      transform: translate(0, 0) skew(0deg, 0deg);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;

const Logo = props => {
  return <LogoIconWrapper theme={props.theme} />;
};

export default Logo;
