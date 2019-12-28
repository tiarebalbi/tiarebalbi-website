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
  MobileRowWrapper,
} from './__styles__/MenuStyle';
import { Col, Row } from 'react-flexbox-grid';
import { NavLink, useLocation } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import { mediaNumber } from '../Common/media';

const Menu = ({ theme, photo }) => {
  const location = useLocation();
  const size = useWindowSize();
  const isNotMobile = size.width > mediaNumber.mobile;
  return (
    <RootWrapper>
      {isNotMobile && (
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
          </Col>
        </Row>
      )}
      {!isNotMobile && (
        <MobileRowWrapper>
          <Col xs={12}>
            <Logo width={40} height={38} theme={theme} />
          </Col>
        </MobileRowWrapper>
      )}
      <Row>
        <Col md={12}>
          <TopDotWrapper theme={theme} opacity={0.3} />
          <SquareWrapper theme={theme} />
          {photo && isNotMobile && <ProfileImage />}
          {isNotMobile && <BottomDotWrapper theme={theme} opacity={0.7} />}
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
