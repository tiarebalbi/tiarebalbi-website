import React from 'react';

const Oval = props => {
  const color = props.color ? props.color : '#fff';

  return (
    <svg width="9em" height="9em" viewBox="0 0 170 170" {...props}>
      <defs>
        <filter filterUnits="objectBoundingBox" id="Oval_svg__a">
          <feMorphology radius={2} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
          <feOffset dx={40} dy={2} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feMorphology radius={2} in="SourceAlpha" result="shadowInner" />
          <feOffset dx={40} dy={2} in="shadowInner" result="shadowInner" />
          <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation={40} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
        </filter>
        <circle id="Oval_svg__b" cx={436} cy={826} r={12} />
      </defs>
      <g transform="translate(-391 -743)" fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#Oval_svg__a)" xlinkHref="#Oval_svg__b" />
        <use stroke={color} strokeWidth={4} xlinkHref="#Oval_svg__b" />
      </g>
    </svg>
  );
};

export default Oval;
