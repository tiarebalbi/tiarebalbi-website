import styled from 'styled-components';
import Dots from '../../../resources/components/Dots';
import Square from '../../../resources/components/Square';
import { DARK_COLOR, LIGHT_COLOR, SECONDARY_COLOR } from '../../Theme';
import CircleOne from '../../../resources/components/CircleOne';
import CircleTwo from '../../../resources/components/CircleTwo';
import Rectangle from '../../../resources/components/Rectangle';
import Oval from '../../../resources/components/Oval';

export const NavWrapper = styled.ul`
  margin: 0;
  padding: 0;
  text-align: right;

  li.selected {
    color: ${props => (props.mode === 'dark' ? DARK_COLOR : LIGHT_COLOR)};
    background: ${props => (props.mode === 'light' ? SECONDARY_COLOR : LIGHT_COLOR)};
  }
`;
export const NavItem = styled.li`
  padding: 0;
  display: inline-block;
  line-height: 44px;
  margin: 0 0 0 20px;
  font-size: 16px;
  color: #fff;

  &.selected {
    font-weight: bold;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
  }
`;

export const TopDotWrapper = styled(Dots)`
  position: absolute;
  top: 10px;
  right: 170px;
  width: auto;
  z-index: 100;
  animation: flip-in-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
`;
export const BottomDotWrapper = styled(Dots)`
  position: absolute;
  top: 478px;
  right: -55px;
  width: auto;
  z-index: 100;
  animation: flip-in-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s both;
`;

export const SquareWrapper = styled(Square)`
  animation: slide-in-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
  position: absolute;
  top: -452px;
  right: -936px;
  width: auto;
  z-index: -90;
`;

export const RootWrapper = styled.div`
  padding-top: 17px !important;
  z-index: 1000;
`;

export const ProfileImage = styled.div`
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