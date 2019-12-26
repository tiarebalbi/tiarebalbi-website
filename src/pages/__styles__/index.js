import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { DARK_COLOR } from '../../components/Theme';
import { Col } from 'react-flexbox-grid';

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
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  animation: slide-in-right 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -120;
  background: ${props => (props.theme === 'dark' ? '#ffd700' : 'aliceblue')};
  top: 80px;
  left: 0;
  width: 200vw;
  height: 300px;
  margin-left: -100vw;
  animation: slide-in-right 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 60%;
  height: 265px;
  padding-top: 45px;
  animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  color: ${props => (props.theme === 'dark' ? '#001220' : '#ffffff')} !important;

  h1 {
    margin-bottom: 20px;
    color: ${props => (props.theme === 'dark' ? '#001220' : '#ffffff')} !important;
  }
`;
export const MarkdownContent = styled(Col)`
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 140px;

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
