import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Header from '../components/Header';
import ErrorHandler from '../components/ErrorHandler';
import { darkModeTheme, GlobalStyles, lightModeTheme } from '../components/Theme';
import { useDarkMode } from '../hooks/useDarkMode';

const RootWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
            <Header theme={theme} />
            <button onClick={toggleTheme}>Toggle theme</button>
          </Grid>
        </RootWrapper>
      </ErrorHandler>
    </ThemeProvider>
  );
};

export default App;
