import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: calc(100vw-35px);
  height: 50px;
  padding: 35px;
  margin-bottom: 25px;
`;

export const StyledMenu = styled.div`
  flex: 1;
  text-align: right;

  ul {
    margin-right: 35px;

    li {
      display: inline-block;
      margin-right: 25px;
      height: 50px;

      & > a {
        font-size: 16px;
        line-height: 50px;
        transition: background-color 200ms linear;

        &:hover {
          color: #013884;
        }
      }

      &.selected {
        a {
          font-weight: bold;
        }
      }
    }
  }
`;

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const BackgroundMask = styled.div`
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 50vw;
  background: #013884;
  height: 50vh;
`;
