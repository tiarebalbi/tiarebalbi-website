import * as React from 'react';
import AboutMe from '../components/AboutMe';
import Expertise from '../components/Expertise';
import Articles from '../components/Articles';
import { Parallax } from 'react-spring/renderprops-addons';
import { Helmet } from 'react-helmet/es/Helmet';
import { Grid } from 'react-flexbox-grid';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ResponsiveParallaxLayer } from './__styles__';
import ProfileInfo from '../components/Header/ProfileInfo';
import useArticles from '../hooks/useArticles';
import LoadingView from '../components/Common/LoadingView';

const Home = ({ theme }) => {
  const [data, loading] = useArticles(3);
  return (
    <Parallax pages={2.89} scrolling={true} vertical>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {loading && <LoadingView theme={theme} />}
      <Grid>
        <ResponsiveParallaxLayer offset={0} speed={0.4}>
          <Header photo={true} theme={theme}>
            <ProfileInfo />
          </Header>
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={0.8} speed={0.8}>
          <AboutMe theme={theme} />
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={1.0} speed={0.3}>
          <Expertise theme={theme} />
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={1.7} speed={0.8}>
          <Articles data={data?.articles || []} loading={loading} theme={theme} />
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={2.0} speed={0.4}>
          <Contact theme={theme} />
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={2.74} speed={0.2}>
          <Footer theme={theme} />
        </ResponsiveParallaxLayer>
      </Grid>
    </Parallax>
  );
};

export default Home;
