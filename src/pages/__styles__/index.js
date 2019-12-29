import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { DARK_COLOR } from '../../components/Theme';
import { Col } from 'react-flexbox-grid';
import { media } from '../../components/Common/media';

export const ResponsiveParallaxLayer = styled(ParallaxLayer)`
  width: inherit !important;
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => (theme === 'dark' ? DARK_COLOR : '#fff')};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000000;

  & > svg {
    margin-bottom: 50px;
  }
`;

export const MenuBar = styled.div`
  position: absolute;
  z-index: -103;
  background: ${({ theme }) => (theme === 'dark' ? '#00051A' : '#fff')};
  top: 0;
  left: 0;
  width: 200vw;
  height: 85px;
  margin-left: -100vw;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  animation: slide-in-right 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media only screen and (max-width: ${media.mobile}) {
    width: 200vw;
    height: 55px;
    margin-left: -99vw;
    z-index: 10;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -120;
  background: ${props => (props.theme === 'dark' ? '#ffd700' : 'aliceblue')};
  top: 85px;
  left: 0;
  width: 200vw;
  height: ${props => (props.size ? `${props.size}px` : '320px')};
  margin-left: -100vw;
  animation: slide-in-right 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media only screen and (max-width: ${media.mobile}) {
    z-index: 100;
    margin-left: -50vw;
    top: 55px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 60%;
  min-height: 265px;
  padding-top: 45px;
  animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  color: ${DARK_COLOR} !important;
  margin-bottom: 10px;

  @media only screen and (max-width: ${media.mobile}) {
    z-index: 120;
    width: 92%;
    margin-top: -15px;
  }

  h1 {
    margin-bottom: 20px;
    color: ${DARK_COLOR} !important;
  }
`;
export const MarkdownContent = styled(Col)`
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 140px;
  position: relative !important;

  & > p img {
    text-align: center;
    width: 100%;
  }

  blockquote {
    border-left: 3px solid ${props => (props.theme === 'dark' ? '#ccc' : '#333')};
    color: ${props => (props.theme === 'dark' ? '#fff' : DARK_COLOR)};
    font-size: 1.25em;
    font-style: italic;
    line-height: 1.8em;
    margin: 1.1em 2em;
    padding: 1em 2em;
    position: relative;
    transition: 0.2s border ease-in-out;
    z-index: 0;

    &:before,
    &:after {
      content: '';
    }
  }
`;

export const ImageArticle = styled.div`
  width: inherit;
  background: url(${props => props.image}) no-repeat top center / cover;
  height: 200px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const MobileBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/rsz_background.jpg') no-repeat top center / contain;
  z-index: -10000000;

  & > div {
    background-image: ${props =>
      props.theme === 'light'
        ? 'linear-gradient(180deg,rgba(255,255,255,.1) 0%,rgba(255,255,255,1) 60%)'
        : 'linear-gradient(180deg, rgba(0, 18, 32, 0.1) 0%, rgba(0, 18, 32, 0.9) 100%)'};
    position: absolute;
    width: 100vw;
    height: 104vh;
  }
`;
