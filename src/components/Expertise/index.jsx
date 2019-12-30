import * as React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import Icon03 from '../../resources/components/Icon03';
import Icon02 from '../../resources/components/Icon02';
import Icon01 from '../../resources/components/Icon01';
import { media } from '../Common/media';

const Wrapper = styled.div`
  min-height: 200px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: ${media.mobile}) {
    width: 100vw;
    min-height: 100vh;
    margin-left: -26px;
  }

  & > h1 {
    text-align: center;
    font-size: 60px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 80px;
  }

  & > p {
    text-align: center;
    width: 30%;
    margin-bottom: 50px;
    @media only screen and (max-width: ${media.mobile}) {
      width: 80%;
      margin-bottom: 40px;
    }
  }
`;

const RowWrapper = styled(Row)`
  width: 100%;
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  color: #6d7783;
  height: 265px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  padding: 20px;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: ${media.desktopXS}) {
    height: 350px;
  }
  @media only screen and (max-width: ${media.tablet}) {
    height: 350px;
  }

  @media only screen and (max-width: ${media.mobile}) {
    height: 300px;
    margin-bottom: 20px;

    &.space {
      margin-top: 0 !important;
    }
  }

  &.space {
    margin-top: 40px;
  }

  & > svg {
    margin-bottom: 20px;
  }

  & > h1 {
    font-size: 24px;
    color: #222a41 !important;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 0;
  }

  & > p {
    text-align: center;
    width: 90%;
    color: #6d7783;
  }
`;

const Expertise = () => (
  <Wrapper>
    <h1>Expertise</h1>
    <p>
      Software Engine with UI/UX Designer experience passionate in creating solutions that can change people's
      life.{' '}
    </p>
    <RowWrapper>
      <Col xs={12} md={4}>
        <Card className="space">
          <Icon01 />
          <h1>Software Development</h1>
          <p>
            Experience with a broad range of language and frameworks, at the moment, enjoying functional
            programming with Scala.
          </p>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card>
          <Icon02 />
          <h1>Design Experience</h1>
          <p>
            A good friend of mine once told me, “Your customers won't care about how good and powerful your
            software is if the final product is not useful”, usability matter.
          </p>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="space">
          <Icon03 />
          <h1>Mobile</h1>
          <p>Simplifying the way users interact with our product in the day-to-day.</p>
        </Card>
      </Col>
    </RowWrapper>
  </Wrapper>
);

export default Expertise;
