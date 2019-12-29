import styled from 'styled-components';
import Dots from '../../../resources/components/Dots';
import Square from '../../../resources/components/Square';
import { DARK_COLOR, LIGHT_COLOR, SECONDARY_COLOR } from '../../Theme';
import CircleOne from '../../../resources/components/CircleOne';
import CircleTwo from '../../../resources/components/CircleTwo';
import Rectangle from '../../../resources/components/Rectangle';
import Oval from '../../../resources/components/Oval';
import { media } from '../../Common/media';
import { Row } from 'react-flexbox-grid';

export const NavWrapper = styled.ul`
  margin: 0;
  padding: 0;
  text-align: right;
  z-index: 999;
  position: relative;

  li a.selected,
  li button.selected {
    color: ${props => (props.mode === 'dark' ? DARK_COLOR : LIGHT_COLOR)};
    background: ${props => (props.mode === 'light' ? SECONDARY_COLOR : LIGHT_COLOR)};
  }

  li:hover {
    a,
    button {
      color: ${props => (props.mode === 'dark' ? DARK_COLOR : LIGHT_COLOR)};
      background: ${props => (props.mode === 'light' ? SECONDARY_COLOR : LIGHT_COLOR)};
      opacity: 0.8;
    }
  }
`;
export const NavItem = styled.li`
  display: inline-block;

  a,
  button {
    background: rgba(0, 0, 0, 0.3);
    font-family: 'Oxygen', sans-serif !important;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    line-height: 44px;
    margin: 0 0 0 20px;
    padding: 0 10px;
    color: #fff;
    text-decoration: none;
    display: block;
  }
`;

export const TopDotWrapper = styled(Dots)`
  position: absolute;
  top: 10px;
  right: 170px;
  width: auto;
  z-index: 100;
  animation: flip-in-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;

  @media only screen and (max-width: ${media.mobile}) {
    top: 75px;
    left: 280px;
  }
`;
export const BottomDotWrapper = styled(Dots)`
  position: absolute;
  top: 478px;
  right: -55px;
  width: auto;
  z-index: 100;
  animation: flip-in-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s both;

  @media only screen and (max-width: ${media.desktopXS}) {
    right: -100px;
  }
`;

export const SquareWrapper = styled(Square)`
  animation: slide-in-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
  position: absolute;
  top: -452px;
  right: -936px;
  width: auto;
  z-index: -90;

  @media only screen and (max-width: ${media.tablet}) {
    top: -452px;
    right: -1105px;
  }
  @media only screen and (max-width: ${media.mobile}) {
    top: -40%;
    left: -1080px;
    z-index: -10000000;
  }
`;

export const RootWrapper = styled.div`
  padding-top: 17px !important;
  z-index: 110;
`;

export const ProfileImage = styled.div`
  @media only screen and (max-width: ${media.desktopXS}) {
    --size: 280px;
    right: -30px;
  }

  --size: 320px;
  animation: roll-in-blurred-right 0.65s cubic-bezier(0.23, 1, 0.32, 1) 1.3s both;
  box-shadow: 40px 2px 80px 0 rgba(0, 0, 0, 0.5);
  position: absolute;
  background: url('/images/profile-1.jpg') no-repeat top center;
  background-size: contain;
  width: var(--size);
  height: var(--size);
  border-radius: 100%;
  z-index: 110;
  top: 230px;
  right: 60px;
`;

export const CircleOneWrapper = styled(CircleOne)`
  position: absolute;
  top: 370px;
  right: 20px;
  animation: rotate-scale-up 0.65s linear 1s both;
`;

export const CircleTwoWrapper = styled(CircleTwo)`
  position: absolute;
  top: 190px;
  right: 220px;
  animation: rotate-scale-up 0.65s linear 1.4s both;
`;

export const RectangleWrapper = styled(Rectangle)`
  position: absolute;
  top: 190px;
  right: 0;
  animation: rotate-scale-up 0.65s linear 1.8s both;
`;

export const OvalWrapper = styled(Oval)`
  position: absolute;
  top: 90px;
  right: 10px;
  animation: rotate-scale-up 0.65s linear 2.2s both;
`;

export const MobileRowWrapper = styled(Row)`
  background: #001220;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  width: 100vw;
  margin-left: -17px !important;
  margin-top: -17px;
  padding: 7px 20px 5px;

  & > div.col-xs-8 {
    text-align: right;
    padding-top: 11px;

    a {
      text-align: right;
      color: #ffffff;
      background: rgba(255, 255, 255, 0.2);
      padding: 10px 20px;
      border-radius: 30px;

      &:active,
      &:focus {
        text-decoration: none;
      }
    }
  }
`;
