import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import ErrorHandler from '../components/Common/ErrorHandler';
import { darkModeTheme, GlobalStyles, lightModeTheme } from '../components/Theme';
import { useDarkMode } from '../hooks/useDarkMode';
import Expertise from '../components/Expertise';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const RootWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

const ResponsiveParallaxLayer = styled(ParallaxLayer)`
  width: inherit !important;
`;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [parallax, setParallax] = useState({});

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightModeTheme : darkModeTheme}>
      <ErrorHandler>
        <GlobalStyles />
        <Parallax pages={3} scrolling={true} vertical ref={ref => setParallax(ref)}>
          <RootWrapper>
            <Grid>
              <ResponsiveParallaxLayer offset={0} speed={0.4}>
                <button onClick={() => toggleTheme()}>Toggle theme</button>
                <Header parallax={parallax} theme={theme} />
              </ResponsiveParallaxLayer>
              <ResponsiveParallaxLayer offset={0.8} speed={0.8}>
                <AboutMe theme={theme} />
              </ResponsiveParallaxLayer>
              <ResponsiveParallaxLayer offset={1.0} speed={0.3}>
                <Expertise theme={theme} />
              </ResponsiveParallaxLayer>
              <ResponsiveParallaxLayer offset={1.7} speed={0.8}>
                <Articles theme={theme} />
              </ResponsiveParallaxLayer>
              <ResponsiveParallaxLayer offset={2.0} speed={0.6}>
                <Contact theme={theme} />
              </ResponsiveParallaxLayer>
              <ResponsiveParallaxLayer offset={2.8} speed={0.5}>
                <Footer theme={theme} />
              </ResponsiveParallaxLayer>
            </Grid>
          </RootWrapper>
        </Parallax>
      </ErrorHandler>
    </ThemeProvider>
  );
};

export default App;
