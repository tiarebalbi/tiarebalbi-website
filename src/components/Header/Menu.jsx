import React from 'react';
import Logo from './Logo';
import {
  BottomDotWrapper,
  CircleOneWrapper,
  CircleTwoWrapper,
  NavItem,
  NavWrapper,
  OvalWrapper,
  ProfileImage,
  RectangleWrapper,
  RootWrapper,
  SquareWrapper,
  TopDotWrapper,
} from './__styles__/MenuStyle';
import { Col, Row } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';

const Menu = ({ theme, parallax }) => (
  <RootWrapper>
    <Row>
      <Col xs={4}>
        <Logo theme={theme} />
      </Col>
      <Col xs={8}>
        <NavWrapper mode={theme}>
          <NavItem>
            <NavLink activeClassName="selected" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="selected" to="/articles">
              Articles
            </NavLink>
          </NavItem>
          <NavItem>
            <button onClick={() => parallax.scrollTo(2)}>Contact</button>
          </NavItem>
        </NavWrapper>
        <TopDotWrapper theme={theme} opacity={0.3} />
        <SquareWrapper theme={theme} />
        <ProfileImage />
        <BottomDotWrapper theme={theme} opacity={0.7} />
        <CircleOneWrapper />
        <CircleTwoWrapper />
        <RectangleWrapper />
        <OvalWrapper />
      </Col>
    </Row>
  </RootWrapper>
);

export default Menu;
