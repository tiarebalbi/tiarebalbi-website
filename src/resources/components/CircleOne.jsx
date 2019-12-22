import React from 'react';

const CircleOne = props => {
  const color = props.color ? props.color : '#fff';
  const opacity = props.opacity ? props.opacity : 1;

  return (
    <svg width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        opacity={opacity}
        fill={color}
        d="M12 0C5.383 0 0 5.383 0 12h4c0-4.411 3.589-8 8-8V0z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default CircleOne;
