import React from 'react';

const CircleTwo = props => {
  const color = props.color ? props.color : '#fff';
  const opacity = props.opacity ? props.opacity : 1;

  return (
    <svg width="2em" height="2em" viewBox="0 0 24 12" {...props}>
      <path
        d="M12 4c4.411 0 8 3.589 8 8h4c0-6.617-5.383-12-12-12S0 5.383 0 12h4c0-4.411 3.589-8 8-8"
        fill={color}
        opacity={opacity}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default CircleTwo;
