import { createGlobalStyle } from 'styled-components';

const primaryColor = '#001220';
const secondaryColor = '#172734';
const WHITE_COLOR = '#ffffff';

export const DARK_COLOR = primaryColor;
export const LIGHT_COLOR = WHITE_COLOR;
export const SECONDARY_COLOR = secondaryColor;

const defaultTheme = {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
};

export const darkModeTheme = {
  ...defaultTheme,
  backgroundColor: primaryColor,
  fontColor: 'rgba(255,255,255,0.70)',
};

export const lightModeTheme = {
  ...defaultTheme,
  backgroundColor: WHITE_COLOR,
  fontColor: primaryColor,
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    font-family: 'Oxygen', sans-serif;
  }
  
  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.fontColor} !important;
  }
  
  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
              transform: rotateX(-100deg);
      -webkit-transform-origin: top;
              transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
              transform: rotateX(0deg);
      -webkit-transform-origin: top;
              transform-origin: top;
      opacity: 1;
    }
  }
  
  @keyframes slit-in-vertical {
    0% {
      -webkit-transform: translateZ(-800px) rotateY(90deg);
              transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateY(87deg);
              transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
              transform: translateZ(0) rotateY(0);
    }
  }
  
  @keyframes roll-in-blurred-right {
    0% {
      -webkit-transform: translateX(1000px) rotate(720deg);
              transform: translateX(1000px) rotate(720deg);
      -webkit-filter: blur(50px);
              filter: blur(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) rotate(0deg);
              transform: translateX(0) rotate(0deg);
      -webkit-filter: blur(0);
              filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes flip-in-ver-right {
    0% {
      transform: rotateY(-80deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
