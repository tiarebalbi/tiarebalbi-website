import React from 'react';

const Icon01 = props => (
  <svg width="6em" height="6em" viewBox="0 0 76 78" {...props}>
    <defs>
      <path
        d="M60.652 10.232c-18-17.78-33.332-9.694-36 3.852-2.668 13.546-27.45 16.25-24.39 32.25 3.06 16 36.39 6.5 36.39 21s38.538 14 38.538-5 3.462-34.322-14.538-52.102z"
        id="icon-01_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="icon-01_svg__b" fill="#fff">
        <use xlinkHref="#icon-01_svg__a" />
      </mask>
      <use fillOpacity={0.2} fill="#FFF" xlinkHref="#icon-01_svg__a" />
      <g opacity={0.2} mask="url(#icon-01_svg__b)" fill="#013884">
        <path d="M0 0h76v78H0z" />
      </g>
      <g strokeLinecap="round" strokeLinejoin="round">
        <g strokeWidth={3}>
          <g stroke="#333">
            <path d="M10 52h56V14H10zM32 62h12V52H32z" />
            <path d="M32 62h12V52H32zM20 62h34M10 44.4h54" />
          </g>
          <path stroke="#459EFF" d="M50 24l6 2-16 8-4-6-16 8M54 32l2-6" />
        </g>
      </g>
    </g>
  </svg>
);

export default Icon01;
