import styled from "styled-components";

export const Container = styled.header``;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding: 0px 20px;
  margin-bottom: 20px;
  & svg,
  path {
    color: ${({ theme: { colors } }) => colors.background};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme: { colors } }) => colors.background};
  & span {
    cursor: pointer;
    text-transform: capitalize;
    font-size: 12px;
    font-weight: bold;
  }
`;
