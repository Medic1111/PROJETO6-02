import styled from "styled-components";

//GL CODOU POR AQUI AQUI HAHA :)

export const Container = styled.div``;
export const Content = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 5%;
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 50%;
  animation: Pooin 1s forwards ease-in-out;
  background-color: ${({ theme: { colors } }) => colors.primary};
  & svg,
  path {
    color: ${({ theme: { colors } }) => colors.text};
  }
  & div {
    position: relative;
  }
  @keyframes Pooin {
    0% {
      right: -100px;
    }
    50% {
      right: 35px;
    }
    100% {
      right: 20px;
    }
  }
`;
export const Quantity = styled.span`
  padding: 2px;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  height: 20px;
  width: 20px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text};
  border-radius: 50%;
  top: -15px;
  left: 10px;
  background-color: ${({ theme: { colors } }) => colors.textSecondary};
`;
