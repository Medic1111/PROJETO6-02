import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 4;
`;

export const Content = styled.div`
  width: 60vw;
  max-width: 350px;
  padding: 10px 0px;
  border-radius: 10px;
  top: 10px;
  background-color: #ffffff;
  border-top: solid 2px ${({ borderColor }) => borderColor};
  box-shadow: 28px 28px 56px #bababa, -28px -28px 56px #ffffff;
  position: relative;
  transition: transform 0.5s linear;
  ${({ visible }) =>
    visible ? "transform: translateX(10px)" : "transform: translateX(-120%)"};
  & div {
    & svg,
    path {
      size: 40px;
      min-width: 40px;
      min-height: 40px;
    }
    & span {
      font-size: 16px;
      font-weight: bold;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 80%;
  }
`;
