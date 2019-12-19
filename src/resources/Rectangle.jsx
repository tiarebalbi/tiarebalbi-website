import React from 'react';

const Rectangle = props => {
  const color = props.color ? props.color : '#fff';
  const opacity = props.opacity ? props.opacity : 1;

  return (
    <svg width="2em" height="2em" viewBox="0 0 34 34" {...props}>
      <path
        d="M17 2.858L31.142 17 17 31.142 2.858 17z"
        opacity={opacity}
        stroke={color}
        strokeWidth={4}
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Rectangle;
