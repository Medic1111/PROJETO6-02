import styled from "styled-components";

export const Container = styled.header``;
export const Desk = styled.div`
  @media (max-width: 970px) {
    display: none;
  }
`;

export const Mobol = styled.div`
  @media (min-width: 970px) {
    display: none;
  }
`;
