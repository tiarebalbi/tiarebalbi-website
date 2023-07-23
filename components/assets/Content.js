import React from 'react';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';

import styles from '../../styles/components/assets/Content.module.css';
import codeStyle from '../../lib/codeStyle';
import {AiOutlineDoubleLeft} from "react-icons/ai";

const Content = ({ details }) => {
  return (
    <>
      {details.type === 'paragraph' && <p className={styles.paragraph}>{details.text}</p>}
      {details.type === 'preformatted' && (
        <SyntaxHighlighter style={codeStyle}>{details.text}</SyntaxHighlighter>
      )}
      {details.type === 'image' && (
        <div className={styles.image}>
          <Image
            alt="Page Reference"
            src={details.url}
            width={details.dimensions.width}
            height={details.dimensions.height}
          />
        </div>
      )}
      {details.type === 'heading1' && <h1>{details.text}</h1>}
      {details.type === 'heading2' && <h2>{details.text}</h2>}
      {details.type === 'heading3' && <h3>{details.text}</h3>}
      {details.type === 'heading4' && <h4>{details.text}</h4>}
      {details.type === 'heading5' && <h5>{details.text}</h5>}
      {details.type === 'heading6' && <h6>{details.text}</h6>}
      {details.type === 'list-item' && (
        <p className={styles.listItem}>
          <AiOutlineDoubleLeft />
          <span>{details.text}</span>
        </p>
      )}
    </>
  );
};
export default Content;
