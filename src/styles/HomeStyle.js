import styled from 'styled-components';
import { theme } from '../helpers/globalStyle';
import dots from '../views/images/dots-pattern.png';
import { media } from './utils';

export const StyledImageContent = styled.img`
  box-shadow: -10px 10px 30px -10px rgba(0, 0, 0, 0.5);
`;

export const homeStyle = {
  display: 'flex',
  alignItems: 'center',
};

export const ImageContainer = styled.div`
  width: calc(50vw + 30px);
  text-align: right;
  ${media.tablet`
    display: none;
  `}
`;

export const ContentContainer = styled.div`
  width: calc(50vw - 145px);
  z-index: 10;
  ${media.tablet`
    width: 80vw;
    margin: auto;
  `}

  h1 {
    font-size: calc(100vw / 10);
    color: ${theme.primary};
    font-weight: bold;
    margin-left: -3vw;
    margin-top: 10%;
    margin-bottom: 30px;
    ${media.tablet`
      margin-left: 45px;  
    `}
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    color: ${theme.text.dark};
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 30px;
  }

  p {
    font-weight: normal;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-right: 50px;
    text-align: justify;
    line-height: 25px;

    b {
      font-weight: bold;
      border-bottom: #333 dotted 1.5px;
      padding-bottom: 1px;
      cursor: n-resize;
    }
  }
`;

export const PatternPage = styled.div`
  width: 115px;
  background: url(${dots}) no-repeat;
  background-position: center center;
  height: 644px;
  ${media.tablet`
    display: none;
  `}
`;