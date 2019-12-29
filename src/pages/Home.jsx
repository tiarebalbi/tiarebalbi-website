import * as React from 'react';
import AboutMe from '../components/AboutMe';
import Expertise from '../components/Expertise';
import Articles from '../components/Articles';
import { Parallax } from 'react-spring/renderprops-addons';
import { Helmet } from 'react-helmet/es/Helmet';
import { Grid } from 'react-flexbox-grid';
import Header from '../components/Header';
import Contact from '../components/Contact';
import ProfileInfo from '../components/Header/ProfileInfo';
import LoadingView from '../components/Common/LoadingView';
import useArticles from '../hooks/useArticles';
import useWindowSize from '../hooks/useWindowSize';
import { MobileBackground, ResponsiveParallaxLayer } from './__styles__';
import { mediaNumber } from '../components/Common/media';

const Home = ({ theme }) => {
  const [data, loading] = useArticles(3);
  const size = useWindowSize();

  const desktopParallax = {
    total: 2.91,
    header: 0,
    aboutMe: 0.8,
    expertise: 1,
    articles: 1.7,
    contact: 2,
  };
  const mobileTabletParallax = {
    total: 5,
    header: 0,
    aboutMe: 1,
    expertise: 2,
    articles: 3,
    contact: 4,
  };
  const parallaxPages = size.height < 1000 || size.width < 1000 ? mobileTabletParallax : desktopParallax;
  const isNotMobile = size.width > mediaNumber.mobile;

  return (
    <Parallax pages={parallaxPages.total} scrolling={true} vertical>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {loading && <LoadingView theme={theme} />}
      <Grid>
        <ResponsiveParallaxLayer offset={parallaxPages.header} speed={0.2}>
          <Header className="home" photo={true} theme={theme}>
            <ProfileInfo />
          </Header>
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={parallaxPages.aboutMe} speed={0.8}>
          <AboutMe theme={theme} />
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={parallaxPages.expertise} speed={0.9}>
          <Expertise theme={theme} />
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={parallaxPages.articles} speed={0.8}>
          <Articles data={data?.articles || []} loading={loading} theme={theme} />
        </ResponsiveParallaxLayer>
        <ResponsiveParallaxLayer offset={parallaxPages.contact} speed={0.7}>
          <Contact theme={theme} />
        </ResponsiveParallaxLayer>
      </Grid>
      {!isNotMobile && (
        <MobileBackground theme={theme}>
          <div />
        </MobileBackground>
      )}
    </Parallax>
  );
};

export default Home;
