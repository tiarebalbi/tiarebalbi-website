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
import { NavLink, useLocation } from 'react-router-dom';

const Menu = ({ theme, photo }) => {
  const location = useLocation();
  return (
    <RootWrapper>
      <Row>
        <Col xs={4}>
          <Logo theme={theme} />
        </Col>
        <Col xs={8}>
          <NavWrapper mode={theme}>
            <NavItem>
              <NavLink className={location.pathname === '/' ? 'selected' : ''} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location.pathname.indexOf('/article') >= 0 ? 'selected' : ''}
                to="/articles">
                Articles
              </NavLink>
            </NavItem>
          </NavWrapper>
          <TopDotWrapper theme={theme} opacity={0.3} />
          <SquareWrapper theme={theme} />
          {photo && <ProfileImage />}
          <BottomDotWrapper theme={theme} opacity={0.7} />
          <CircleOneWrapper />
          <CircleTwoWrapper />
          <RectangleWrapper />
          <OvalWrapper />
        </Col>
      </Row>
    </RootWrapper>
  );
};

export default Menu;
