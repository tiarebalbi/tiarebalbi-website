import * as React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { github, linkedinSquare, twitter } from 'react-icons-kit/fa';
import { DARK_COLOR } from '../Theme';

const Wrapper = styled.div`
  min-height: 20px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;

  & > div {
    width: 40%;
    text-align: center;
    margin: auto auto 20px;

    & > a {
      margin-right: 20px;
      border-radius: 100%;
      width: 50px;
      display: inline-block;
      height: 50px;
      padding-top: 13px;

      &:hover {
        i {
          color: #013884 !important;
        }
      }
    }
  }
`;

const Footer = props => {
  const color = props.theme === 'dark' ? '#FFF' : DARK_COLOR;
  const colorBg = props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <Wrapper>
      <div>
        <a
          style={{ background: colorBg }}
          href="https://github.com/tiarebalbi"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer">
          <Icon size={24} style={{ color: color }} icon={github} />
        </a>
        <a
          style={{ background: colorBg }}
          href="https://twitter.com/tiarebalbi"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer">
          <Icon size={24} style={{ color: color }} icon={twitter} />
        </a>
        <a
          style={{ background: colorBg }}
          href="https://www.linkedin.com/in/tiarebalbi/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer">
          <Icon size={24} style={{ color: color }} icon={linkedinSquare} />
        </a>
      </div>
      <p>© Tiarê Balbi Bonamini {new Date().getFullYear()}. All right reserved</p>
    </Wrapper>
  );
};

export default Footer;
