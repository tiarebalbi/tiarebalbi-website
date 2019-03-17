import React from 'react';
import Layout from '../components/page/layout';
import image from './images/image-home.png';

import {
  StyledImageContent,
  homeStyle,
  ImageContainer,
  ContentContainer,
  PatternPage,
} from '../__styles__/HomeStyle';
import { theme } from '../helpers/globalStyle';
import { Tag } from '../components/ui-kit';
import { animated, useSpring } from 'react-spring';

const Home = () => {
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
  const trans = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;

  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <Layout style={homeStyle}>
      <ImageContainer onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div className="card1" style={{ transform: springProps.xy.interpolate(trans) }}>
          <StyledImageContent data-sizes="auto" className="lazyload" data-src={image} alt="Profile Tiarê Balbi" />
        </animated.div>
      </ImageContainer>
      <ContentContainer onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <h1>Hello.</h1>
        <p>
          My name is <b>Tiarê Balbi</b>! I’m a proud Software Engineer based in Dublin, Ireland. Working with
          software development since 2006 I’ve been challenging my self on trying to understand what’s next.
        </p>
        <p>
          Focusing my career on better understand the challenges behind of complex infrastructure and
          different types of software architecture.
        </p>
        <h2>Experiences.</h2>
        <div style={{ marginLeft: '50px' }}>
          <Tag color={theme.secondary}>Java</Tag>
          <Tag color={theme.secondary}>Kotlin</Tag>
          <Tag color={theme.secondary}>Scala</Tag>
          <Tag color={theme.secondary}>Haskell</Tag>
          <Tag color={theme.secondary}>Javascript</Tag>
          <Tag color={theme.text.dark}>React.JS</Tag>
          <Tag color={theme.text.dark}>AngularJS</Tag>
          <Tag color={theme.text.dark}>Spring Framework</Tag>
        </div>
      </ContentContainer>
      <PatternPage />
    </Layout>
  );
};

export default Home;
