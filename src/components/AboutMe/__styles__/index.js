import styled from 'styled-components';
import Square from '../../../resources/Square';
import Dots from '../../../resources/Dots';
import CircleOne from '../../../resources/CircleOne';
import CircleTwo from '../../../resources/CircleTwo';
import Rectangle from '../../../resources/Rectangle';
import Oval from '../../../resources/Oval';

export const Wrapper = styled.div`
  min-height: 200px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;

  b {
    font-weight: bold;
  }

  .profile {
    flex: 1;
    margin-right: 80px;

    .image {
      box-shadow: -10px 2px 30px 0 rgba(0, 0, 0, 0.5);
      border-radius: 18px;
      width: 380px;
      height: 380px;
      background: url('/images/about-me.jpg') top center no-repeat;
      background-size: cover;
    }
  }

  .root-content {
    flex: 2;
    text-align: justify;

    h1 {
      margin-bottom: 30px;
      font-size: 40px;
    }
  }

  .content-text {
    width: 60%;
    .space {
      margin-bottom: 30px;
    }
  }
`;

export const SquareWrapper = styled(Square)`
  animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
  position: absolute;
  top: -110px;
  left: -915px;
  width: auto;
  z-index: -90;
`;

export const TopDotWrapper = styled(Dots)`
  position: absolute;
  bottom: -162px;
  left: -157px;
  width: auto;
  z-index: -1;
  animation: flip-in-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
`;

export const CircleOneWrapper = styled(CircleOne)`
  position: absolute;
  top: -60px;
  left: 30px;
  animation: rotate-scale-up 0.65s linear 1s both;
`;

export const CircleTwoWrapper = styled(CircleTwo)`
  position: absolute;
  top: 10px;
  left: -60px;
  animation: rotate-scale-up 0.65s linear 1.4s both;
`;

export const RectangleWrapper = styled(Rectangle)`
  position: absolute;
  top: 190px;
  left: 0;
  animation: rotate-scale-up 0.65s linear 1.8s both;
`;

export const OvalWrapper = styled(Oval)`
  position: absolute;
  bottom: -120px;
  left: 290px;
  animation: rotate-scale-up 0.65s linear 2.2s both;
`;
