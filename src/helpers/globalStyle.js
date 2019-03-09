import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: "Oxygen";
    src: url('https://fonts.googleapis.com/css?family=Oxygen');
    font-display: "auto";
  }
  
  body {
    font-family: 'Oxygen', sans-serif;
  }
`;
