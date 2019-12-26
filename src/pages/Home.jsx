import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe';
import Expertise from '../components/Expertise';
import Articles from '../components/Articles';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Grid } from 'react-flexbox-grid';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ResponsiveParallaxLayer = styled(ParallaxLayer)`
  width: inherit !important;
`;
const Home = ({ theme }) => {
  const [parallax, setParallax] = useState({});
  return (
    <Parallax pages={2.89} scrolling={true} vertical ref={ref => setParallax(ref)}>
      <Grid>
        <ResponsiveParallaxLayer offset={0} speed={0.4}>
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
        <ResponsiveParallaxLayer offset={2.0} speed={0.4}>
          <Contact theme={theme} />
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={2.71} speed={0.2}>
          <Footer theme={theme} />
        </ResponsiveParallaxLayer>
      </Grid>
    </Parallax>
  );
};

export default Home;
