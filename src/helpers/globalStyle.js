import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#013884",
  secondary: "#3eb2e0",
  alternate: "#aaede6",
  grey: "#c7d7e5",
  light: "#edeff4",
  text: {
    dark: "#25272A",
    light: "#ffffff"
  }
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oxygen');
  
  ${reset}
  body {
    font-family: 'Oxygen', sans-serif;
    font-size: 16px;
    color: ${theme.text.dark};
    background: #edeff4;
  }
  
  a {
    text-decoration: none;
    color: ${theme.text.dark};
  }
  
  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  
  @keyframes octocat-wave {
    0%,100% {
      transform: rotate(0);
    }
  
    20%,60% {
      transform: rotate(-25deg);
    }
  
    40%,80% {
      transform: rotate(10deg);
    }
  }
  
  @media (max-width:500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
  
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;
