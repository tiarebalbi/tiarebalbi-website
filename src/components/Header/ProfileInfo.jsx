import * as React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { location2 } from 'react-icons-kit/icomoon/location2';
import { buildingO } from 'react-icons-kit/fa/buildingO';
import { warning } from 'react-icons-kit/fa/warning';
import { Col, Row } from 'react-flexbox-grid';

const ColWrapper = styled(Col)`
  margin-top: 190px;
`;

const Slogan = styled.h2`
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 27px;
  margin-bottom: 8px;
  animation: slit-in-vertical 0.45s ease-out both;
`;
const Title = styled.h1`
  font-size: 60px;
  color: #ffffff;
  letter-spacing: -1.76px;
  line-height: 80px;
  margin: 0 0 15px;
  font-weight: normal;
  animation: slit-in-vertical 0.55s ease-out 0.5s both;
`;
const Paragraph = styled.p`
  font-size: 13px;
  letter-spacing: 0;
  line-height: 16px;
  margin-bottom: 25px;
  text-align: justify;
  animation: slit-in-vertical 0.65s ease-out 1s both;
`;

const ExtraDetails = styled.ul`
  margin: 0;
  padding: 0;

  li {
    animation: slit-in-vertical 0.85s ease-out 1.5s both;
    list-style: none;
    padding: 0;
    line-height: 23px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 15px;

    i {
      margin-right: 10px;
    }

    &.disclaimer {
      font-size: 12px;
    }
  }
`;

const ProfileInfo = () => (
  <Row middle="xs">
    <ColWrapper xs={6}>
      <Slogan>Hello</Slogan>
      <Title>I'm Tiarê</Title>
      <Paragraph>
        Software Engineer that can be described as a series enthusiast of technology, fortuned to work with
        one of my biggest passion, software development. Finding different ways to solve different problems.{' '}
      </Paragraph>
      <ExtraDetails>
        <li>
          <Icon size={23} icon={location2} />
          Dublin, Ireland
        </li>
        <li>
          <Icon size={21} icon={buildingO} />
          Software Engineer @ Workday
        </li>
        <li className="disclaimer">
          <Icon size={12} icon={warning} />
          Any idea or content shared on this website is on my own.
        </li>
      </ExtraDetails>
    </ColWrapper>
  </Row>
);

export default ProfileInfo;
