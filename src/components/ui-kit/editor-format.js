import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/utils';

const Style = styled.div`
  width: calc(50vw - 145px);
  margin-left: 55vw;
  z-index: 10;
  margin-bottom: 20px;
  line-height: 25px;

  ${media.tablet`
    width: 80vw;
    margin-left: 10vw;  
    overflow: hidden;
  `}

  h1 {
    color: #111;
    font-size: 45px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1;
    text-align: left;
    margin: 0 0 20px;
  }

  h2 {
    color: #111;
    font-size: 30px;
    font-weight: 300;
    line-height: 32px;
    margin: 0 0 20px;
    text-align: left;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    margin: 0 0 12px;
    text-align: justify;
    text-justify: inter-word;
  }
  blockquote {
    padding: 30px 40px;
    font-size: 18px;
    border-left: 5px solid #666;
    margin: 20px 40px;
    color: #666;
  }
`;

const EditorFormat = props => <Style>{props.children}</Style>;

export default EditorFormat;
