import React from 'react';
import { DARK_COLOR, SECONDARY_COLOR } from '../../components/Theme';

const Square = props => {
  const { theme } = props;
  const fillColor = theme === 'light' ? DARK_COLOR : SECONDARY_COLOR;
  return (
    <svg width={1318} height={1318} {...props}>
      <defs>
        <rect id="square_svg__a" x={164} y={164} width={990} height={990} rx={100} />
      </defs>
      <use fill={fillColor} transform="rotate(-45 659 659)" xlinkHref="#square_svg__a" fillRule="evenodd" />
    </svg>
  );
};

export default Square;
