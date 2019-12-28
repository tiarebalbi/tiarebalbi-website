import styled from 'styled-components';
import { DARK_COLOR, SECONDARY_COLOR } from '../../Theme';
import Dots from '../../../resources/components/Dots';
import Rectangle from '../../../resources/components/Rectangle';
import Square from '../../../resources/components/Square';
import { media } from '../../Common/media';

export const Wrapper = styled.div`
  min-height: 200px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;

  & > h1 {
    text-align: center;
    font-size: 60px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 80px;
    margin-bottom: 120px;

    @media only screen and (max-width: ${media.desktopXS}) {
      margin-bottom: 60px;
    }
  }

  & > div.card {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 18px;
    color: #6d7783;
    background: #ffffff;
    min-height: 300px;
    width: 65%;
    text-align: center;
    padding: 80px 50px;
    margin: auto auto 60px;

    @media only screen and (max-width: ${media.desktopXS}) {
      width: 80%;
      padding: 40px 25px;
      margin: auto auto 30px;
    }

    & > p {
      color: #222a41;
      margin-bottom: 50px;
      font-size: 18px;
    }

    form {
      width: 100%;
      label,
      input,
      textarea {
        width: 100%;
        display: block;
        border: none;
        margin-bottom: 30px;

        &&::placeholder {
          color: #6d7783 !important;
          font-family: 'Oxygen', sans-serif !important;
        }
      }

      input,
      textarea {
        border-bottom: #aeb7c1 1px solid;
      }

      input {
        line-height: 35px;
      }

      textarea {
        height: 100px;
      }

      button[type='submit'] {
        background: ${DARK_COLOR};
        width: 150px;
        line-height: 29px;
        padding: 10px 10px;
        border-radius: 45px;
        text-align: center;
        margin: auto;
        color: #fff;

        &:disabled {
          cursor: wait;
          background: ${SECONDARY_COLOR};
        }
      }
    }
  }
`;

export const DotWrapper = styled(Dots)`
  position: absolute;
  top: 15px;
  left: 155px;
  width: auto;
  z-index: -1;
  animation: flip-in-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;

  @media only screen and (max-width: ${media.tablet}) {
    left: 0;
  }
  @media only screen and (max-width: ${media.desktopXS}) {
    left: 15px;
  }
`;

export const RectangleWrapper = styled(Rectangle)`
  position: absolute;
  top: 320px;
  left: 0;
  animation: rotate-scale-up 0.65s linear 1.8s both;
`;

export const SquareWrapper = styled(Square)`
  animation: slide-in-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
  position: absolute;
  top: -110px;
  left: -580px;
  width: auto;
  z-index: -90;

  @media only screen and (max-width: ${media.desktopXS}) {
    left: -685px;
  }
  @media only screen and (max-width: ${media.tablet}) {
    left: -785px;
  }
`;
