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

export const Logo = styled.div`
display: flex;
align-items: center;
  color: white;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: bold;
  gap: 5px;
  & span {
    font-weight: bold;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & span {
    color: ${({ theme: { colors } }) => colors.background};
    cursor: pointer;
    text-transform: capitalize;
    font-size: 12px;
  }
`;
export const Search = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  border-radius: 8px;
  width: 300px;
  background-color: #f2f2f2;
  padding: 5px 10px;
  font-weight: bold;
`;
