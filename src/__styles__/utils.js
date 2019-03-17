import { css } from 'styled-components';

const setMaxMedia = size => (...args) => css`
  @media (max-width: ${size}px) {
    ${css(...args)};
  }
`;

export const media = {
  giant: setMaxMedia(1199),
  desktop: setMaxMedia(991),
  tablet: setMaxMedia(768),
  phone: setMaxMedia(575),
};
