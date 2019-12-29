import React from 'react';
import { DARK_COLOR } from '../../components/Theme';

const FullCircle = props => {
  const color = props.color ? props.color : DARK_COLOR;
  const size = '40em';

  return (
    <svg width={size} height={size} viewBox="0 0 528 527" {...props}>
      <defs>
        <circle id="circle_svg__a" cx={263.555} cy={263.5} r={263.5} />
      </defs>
      <use fill={color} xlinkHref="#circle_svg__a" fillRule="evenodd" />
    </svg>
  );
};

export default FullCircle;
