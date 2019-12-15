import React from 'react';
import Logo from './Logo';
import {
  BottomDotWrapper,
  NavItem,
  NavWrapper,
  ProfileImage,
  RootWrapper,
  SquareWrapper,
  TopDotWrapper,
} from './__styles__/MenuStyle';
import { Col, Row } from 'react-flexbox-grid';

const Menu = ({ theme }) => {
  return (
    <RootWrapper>
      <Row>
        <Col xs={4}>
          <Logo theme={theme} />
        </Col>
        <Col xs={8}>
          <NavWrapper mode={theme}>
            <NavItem className="selected">Home</NavItem>
            <NavItem>Articles</NavItem>
            <NavItem>Contact</NavItem>
          </NavWrapper>
          <TopDotWrapper theme={theme} opacity={0.3} />
          <SquareWrapper theme={theme} />
          <ProfileImage />
          <BottomDotWrapper theme={theme} opacity={0.7} />
        </Col>
      </Row>
    </RootWrapper>
  );
};

export default Menu;
