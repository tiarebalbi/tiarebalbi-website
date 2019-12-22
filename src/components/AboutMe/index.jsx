import * as React from 'react';
import {
  Wrapper,
  SquareWrapper,
  TopDotWrapper,
  CircleOneWrapper,
  CircleTwoWrapper,
  RectangleWrapper,
  OvalWrapper,
} from './__styles__';
import { SECONDARY_COLOR } from '../Theme';

const AboutMe = props => {
  const fill = props.theme === 'light' ? SECONDARY_COLOR : '#fff';
  const opacity = props.theme === 'light' ? 0.8 : 1;

  return (
    <Wrapper>
      <div className="profile">
        <div className="image" />
      </div>
      <div className="root-content">
        <h1>About Me</h1>
        <div className="content-text">
          <p>
            Proud Software Engineer based in Dublin, Ireland. Working with software development since 2006 had
            the chance to work with an extensive range of solutions for small and large companies from
            designing the software until getting it out the door.
          </p>
          <p className="space">
            Have you heard about the continues learning, I see myself as one of those, if you ask what I am
            doing in my free time, I will probably answer that I'm studying something new or I'm in the gym.
            Currently, focusing my time in research/study new technologies always thinking about the next
            disruption and how to get there.
          </p>
        </div>
      </div>
      <TopDotWrapper theme={props.theme} />
      <SquareWrapper theme={props.theme} />
      <CircleOneWrapper color={fill} opacity={opacity} />
      <CircleTwoWrapper color={fill} opacity={opacity} />
      <RectangleWrapper />
      <OvalWrapper />
    </Wrapper>
  );
};

export default AboutMe;
