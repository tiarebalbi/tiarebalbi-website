import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorHandler from '../components/Common/ErrorHandler';
import { darkModeTheme, GlobalStyles, lightModeTheme } from '../components/Theme';
import { useDarkMode } from '../hooks/useDarkMode';
import Routes from '../router';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const App = () => {
  const [theme] = useDarkMode();

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightModeTheme : darkModeTheme}>
      <Router>
        <ErrorHandler>
          <GlobalStyles />
          <RootWrapper>
            <Routes theme={theme} />
          </RootWrapper>
        </ErrorHandler>
      </Router>
    </ThemeProvider>
  );
};

export default App;
