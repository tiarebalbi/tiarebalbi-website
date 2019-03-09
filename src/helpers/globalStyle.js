import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oxygen');
  
  ${reset}
  body {
    font-family: 'Oxygen', sans-serif;
  }
`;
