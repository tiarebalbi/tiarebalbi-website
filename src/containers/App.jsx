import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import ErrorHandler from '../components/Common/ErrorHandler';
import { darkModeTheme, GlobalStyles, lightModeTheme } from '../components/Theme';
import { useDarkMode } from '../hooks/useDarkMode';
import Expertise from '../components/Expertise';

const RootWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightModeTheme : darkModeTheme}>
      <ErrorHandler>
        <GlobalStyles />
        <RootWrapper>
          <Grid>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Header theme={theme} />
            <AboutMe theme={theme} />
            <Expertise theme={theme} />
          </Grid>
        </RootWrapper>
      </ErrorHandler>
    </ThemeProvider>
  );
};

export default App;
