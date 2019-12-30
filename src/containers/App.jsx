import React from 'react';
import Loadable from 'react-loadable';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet/es/Helmet';
import { DARK_COLOR, darkModeTheme, GlobalStyles, lightModeTheme } from '../components/Theme';
import { useDarkMode } from '../hooks/useDarkMode';
import Routes from '../router';
import LoadingView from '../components/Common/LoadingView';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const RotateDevice = styled.div`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : DARK_COLOR)};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const ErrorHandler = Loadable({
  loader: () => import('../components/Common/ErrorHandler'),
  loading: LoadingView,
});

const App = () => {
  const [theme] = useDarkMode();

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightModeTheme : darkModeTheme}>
      <Router>
        <ErrorHandler theme={theme}>
          <GlobalStyles />
          <Helmet titleTemplate="%s ← Software Engineer ← Tiarê Balbi Bonamini" />
          <RootWrapper>
            <Routes theme={theme} />
          </RootWrapper>
          <RotateDevice theme={theme} className="rotate">
            <span>Please, rotate your phone</span>
          </RotateDevice>
        </ErrorHandler>
      </Router>
    </ThemeProvider>
  );
};

export default App;
